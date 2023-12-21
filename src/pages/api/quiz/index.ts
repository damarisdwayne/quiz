// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionBank";
import { shuffle } from "@/utils/arrays";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ids = questions.map((question) => question.id);
  res.status(200).json(shuffle(ids));
}
