import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    try {
      await resend.emails.send({
        from: process.env.DOMAIN,
        to: process.env.EMAIL,
        subject: `${name}様からの新しいお問い合わせ`,
        html: `
          <h2>お問い合わせが届きました</h2>
          <p><strong>名前:</strong> ${name}</p>
          <p><strong>メール:</strong> ${email}</p>
          <p><strong>内容:</strong><br/>${message}</p>
        `,
      });

      return res.status(200).json({ message: "メール送信成功" });
    } catch (error) {
      return res.status(500).json({ message: "メール送信失敗" });
    }

    // const newMessage = {
    //   email,
    //   name,
    //   message,
    // };

    // const { client, db } = await connectToDatabase();

    // try {
    //   const result = await db
    //     .collection(process.env.MONGODB_DB_MESSAGES)
    //     .insertOne(newMessage);

    //   newMessage.id = result.insertedId;
    // } catch (error) {
    //   client.close();
    //   res.status(500).json({ message: "Storing message failed!" });
    //   return;
    // }

    // client.close();

    // res
    //   .status(201)
    //   .json({ message: "Successfully stored message!", message: newMessage });
  }
  if (req.method !== "POST") {
    return res.status(405).end();
  }
}

export default handler;
