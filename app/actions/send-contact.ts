"use server"

import { Resend } from "resend"

export type ContactState = {
  ok?: boolean
  message: string
  issues?: string[]
}

export async function sendContact(prevState: ContactState | undefined, formData: FormData): Promise<ContactState> {
  // Honeypot for bots
  if (formData.get("company")) {
    return { ok: true, message: "Thank you! We will get back to you shortly." }
  }

  const firstName = (formData.get("firstName") || "").toString().trim()
  const lastName = (formData.get("lastName") || "").toString().trim()
  const email = (formData.get("email") || "").toString().trim()
  const phone = (formData.get("phone") || "").toString().trim()
  const message = (formData.get("message") || "").toString().trim()

  const issues: string[] = []
  if (!firstName) issues.push("First name is required.")
  if (!lastName) issues.push("Last name is required.")
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) issues.push("A valid email is required.")
  if (!message) issues.push("Please include a message.")

  if (issues.length) return { ok: false, message: "Please fix the errors and try again.", issues }

  const to = process.env.CONTACT_TO_EMAIL || "safepassdriving@gmail.com"
  const from = process.env.CONTACT_FROM_EMAIL || "SafePass Website <onboarding@resend.dev>"

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap;">${message}</p>
  `
  const text = `New Contact Form Submission
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
`

  try {
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from,
        to,
        reply_to: email,
        subject: "New message from SafePass website",
        html,
        text,
      })
    } else {
      // Fallback for when email isn’t configured yet
      console.log("Contact submission (no email provider configured):", {
        firstName,
        lastName,
        email,
        phone,
        message,
      })
    }

    return { ok: true, message: "Thanks! Your message was sent. We will reply within 24 hours." }
  } catch (err: any) {
    return {
      ok: false,
      message: "Something went wrong sending your message. Please try again or call 416-271-1295.",
      issues: [String(err?.message || err)],
    }
  }
}
