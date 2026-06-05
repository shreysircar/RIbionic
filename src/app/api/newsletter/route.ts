import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (!existing) {
      await prisma.newsletterSubscriber.create({
        data: { email },
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to Marketing Team
    await transporter.sendMail({
      from: `"Ribionic Website" <${process.env.EMAIL_USER}>`,
      to: "marketing@ribionic.com",
      subject: "New Newsletter Subscriber",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    // Auto Reply to Subscriber
    await transporter.sendMail({
      from: `"Ribionic Solutions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Newsletter Subscription Confirmation",
      html: `
        <p>Dear Subscriber,</p>

        <p>
          Thank you for subscribing to our newsletter.
          We will mail the same once it is ready.
        </p>

        <p>
          Meanwhile, if you have any other query, please feel free to request
          and we will be glad to respond.
        </p>

        <br />

        <p>
          Best Regards,<br />
          Ribionic Solutions
        </p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}