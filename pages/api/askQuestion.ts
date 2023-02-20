// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";
import admin from "firebase-admin";
import { adminDB } from "../../firebaseadmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatID, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!chatID) {
    res.status(400).json({ answer: "Please provide chat ID!" });
    return;
  }
  // ChatGPT Query
  const response = await query(prompt, model);

  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "/ChatGPT_clone_icon.png",
    },
  };

  await adminDB
    .collection("users")
    .doc(session.user.email)
    .collection("chats")
    .doc(chatID)
    .collection("messages")
    .add(message);
  res.status(200).json({ answer: message.text });
}
