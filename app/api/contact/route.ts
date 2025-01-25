import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mzone7325@gmail.com", // Replace with your Gmail address
      pass: "witkwcivjztfuvic", // Replace with your Gmail app password
    },
  })

  const mailOptions = {
    from: '"Femack Security Contact Form" <mzone7325@gmail.com>', // Replace with your Gmail address
    to: "mzone7325@gmail.com",
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

