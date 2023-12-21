// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import questions from '../questionBank'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const idSelected = Number(req.query?.id)
  const uniqueQuestionOrNull = questions.filter((question) => question.id === idSelected)
  
  if(uniqueQuestionOrNull.length === 1) {
    const questionSelected =  uniqueQuestionOrNull[0].shuffleAnswers()
    res.status(200).json(questionSelected.toObject())
  } else {
    res.status(204)
  }
}
