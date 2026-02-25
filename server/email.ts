import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
  port: parseInt(process.env.ZOHO_SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL || "kunal@nuovoconnect.com",
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function sendContactNotification(data: ContactFormData) {
  const mailOptions = {
    from: `"NuovoConnect Website" <${process.env.ZOHO_EMAIL || "kunal@nuovoconnect.com"}>`,
    to: "kunal@nuovoconnect.com",
    replyTo: data.email,
    subject: `New Contact Inquiry from ${data.name} - ${data.company}`,
    html: `
      <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #f97316, #f59e0b); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Inquiry</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">Received from nuovoconnect.com</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;"><a href="mailto:${data.email}" style="color: #f97316;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #111827; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </div>
        <div style="background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af;">
          <p style="margin: 0;">This email was sent automatically from the NuovoConnect website contact form.</p>
        </div>
      </div>
    `,
    text: `New Contact Inquiry\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nMessage: ${data.message}`,
  };

  await transporter.sendMail(mailOptions);
}
