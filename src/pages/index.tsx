import { Question } from "@/components/question";
import QuestionModel from "@/model/question";
import AnswerModel from "@/model/answer";
import { useState } from "react";

const mockQuestion = new QuestionModel(1, "Qual é a melhor cor?", [
  AnswerModel.wrong("Verde"),
  AnswerModel.wrong("Vermelha"),
  AnswerModel.wrong("Azul"),
  AnswerModel.correct("Preta"),
]);

export default function Home() {
  const [question, setQuestion] = useState(mockQuestion);
  const onResponse = (index: number) => {
    setQuestion(question.replyWith(index));
  };
  const timeOut = () => {
    if (question.notAnswered) setQuestion(question.replyWith(-1));
  };
  return (
    <div className="flex h-full items-center justify-center">
      <Question value={question} onResponse={onResponse} timeOut={timeOut} />
    </div>
  );
}
