import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transporter } from "@/lib/mail";

export async function POST(request: Request) {
  try {
   const body: {
  firstName: string;
  lastName: string;
  designation?: string;
  organization?: string;
  email: string;
  message: string;
} = await request.json();

    const {
      firstName,
      lastName,
      designation,
      organization,
      email,
      message,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    await prisma.contactSubmission.create({
      data: {
        firstName,
        lastName,
        designation,
        organization,
        email,
        message,
      },
    });

    // Internal Email

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      cc: process.env.CC_EMAIL,

      subject: "New Contact Form Submission",

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong>
        ${firstName} ${lastName}</p>

        <p><strong>Designation:</strong>
        ${designation || "-"}</p>

        <p><strong>Organization:</strong>
        ${organization || "-"}</p>

        <p><strong>Email:</strong>
        ${email}</p>

        <p><strong>Message:</strong></p>

        <div style="padding:12px;background:#f5f5f5;border-radius:8px;">
  ${message}
</div>
      `,
    });

    // Auto Reply

    await transporter.sendMail({
      from: process.env.SMTP_USER,

      to: email,

      subject:
        "Thank you for contacting Ribionic Solutions",

      html: `
        <p>Dear ${firstName},</p>

        <p>
          Thanks for contacting
          Ribionic Solutions.
        </p>

        <p>
          This is to acknowledge your message. Someone will appropriately get back to you.
        </p>

        <p>
          Best Regards,<br/>
          Ribionic Solutions
        </p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}