// import { siteConfig } from "@/config/site";
// import { transporter } from "@/lib/transporter";
// import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";
import ClientEmail from "@/emails/ClientEmail";
import MyTemplate from "@/emails/MyTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// const hostEmail = process.env.HOST_EMAIL;

// export async function POST(req) {
//   const body = await req.json();
//   // send email to client
//   const template = {
//     // this is always going to be the host email
//     from: `${siteConfig.name} <${hostEmail}>`,
//     to: body?.clientEmail,
//     //subject: `You've successfully hired ${siteConfig.name} 🎉!`,
//     subject: body?.subject,
//     text: body?.plainText,
//     //html: `<b>Keep in touch and reply to this email to know the progress so far!</b>`,
//     html: body?.html,
//     replyTo: body?.replyTo,
//   };
//   transporter.sendMail(template, (err, info) => {
//     if (err) {
//       return NextResponse.json({
//         error: `Connection refused at ${err.address}`,
//       }).status(404);
//     } else {
//       return NextResponse.json({
//         message: `Email sent to ${info.accepted}`,
//       }).status(200);
//     }
//   });
// }

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  try {
    const data = await resend.emails.send({
      from: `${siteConfig.name} <${body?.from}>`,
      to: body?.to,
      subject: body?.subject,
      reply_to: body?.replyTo,
      react:
        body?.templateType === "client" ? (
          <ClientEmail data={body?.data} />
        ) : (
          <MyTemplate data={body?.data} />
        ),
    });
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Something went wrong while sending an email.",
    });
  }
}
