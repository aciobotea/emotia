declare module "nodemailer" {
  type TransportOptions = {
    service?: string;
    auth?: {
      user: string;
      pass: string;
    };
  };

  type MailOptions = {
    from: string;
    to: string;
    replyTo?: string;
    subject: string;
    text: string;
    html: string;
  };

  const nodemailer: {
    createTransport(options: TransportOptions): {
      sendMail(options: MailOptions): Promise<unknown>;
    };
  };

  export default nodemailer;
}
