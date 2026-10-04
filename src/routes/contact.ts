import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";

const router = Router();

const contactValidation = [
  body("name").trim().isLength({ min: 2 }).escape(),
  body("email").isEmail().normalizeEmail(),
  body("type").isIn(["join", "collab", "general"]),
  body("message").trim().isLength({ min: 10, max: 5000 }).escape(),
];

function mailer() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER ?? "",
      pass: process.env.SMTP_PASS ?? "",
    },
  });
}

router.post("/", contactValidation, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ status: 400, error: "Invalid payload", details: errors.array() });
    return;
  }

  const id = uuid();
  const { name, email, type, message } = req.body;

  // Without SMTP credentials configured, accept + log instead of failing.
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log(`[CONTACT ${id}] ${type} from ${name} <${email}>: ${message.slice(0, 200)}`);
    res.status(202).json({ status: 202, data: { id, queued: false, logged: true } });
    return;
  }

  try {
    await mailer().sendMail({
      from: process.env.MAIL_FROM ?? process.env.SMTP_USER,
      to: process.env.MAIL_TO ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `[ILRL ${type}] message from ${name}`,
      text: `ID: ${id}\nFrom: ${name} <${email}>\nType: ${type}\n\n${message}`,
    });
    res.status(201).json({ status: 201, data: { id, queued: true } });
  } catch (err) {
    console.error("[CONTACT MAIL ERROR]", (err as Error).message);
    res.status(502).json({ status: 502, error: "Could not deliver message — try email directly." });
  }
});

export default router;
