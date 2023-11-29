import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const ENVIRONMENTS = {
    GMAIL_APP_USERNAME: process.env.GMAIL_APP_USERNAME || '',
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || '',
  };

  try {
    const { subject, message, donorEmail } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: ENVIRONMENTS.GMAIL_APP_USERNAME,
        pass: ENVIRONMENTS.GMAIL_APP_PASSWORD,
      },
    });

    const mailOption = {
      from: 'kindlylinking@gmail.com',
      to: donorEmail,
      subject: 'Send Email Tutorial',
      html: `
        <h2>Hello Kindly user,</h2>
        <h3>Name of item: ${subject}</h3>
        <p>${message}</p> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: 'Email Sent Successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 }
    );
  }
}
