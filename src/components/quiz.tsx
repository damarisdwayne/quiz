import QuestionModel from "@/model/question";
import React from "react";
import { Question } from "./question";
import Button from "./button";

interface QuizProps {
  question: QuestionModel;
  isLastQuestion: boolean;
  onResponse: (question: QuestionModel) => void;
  goToNextStep: () => void;
}

const Quiz = (props: QuizProps) => {
  const onResponse = (index: number) => {
    if (props.question.notAnswered) {
      props.onResponse(props.question.replyWith(index));
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {props.question ? (
        <Question
          value={props.question}
          timeToAnswer={6}
          onResponse={onResponse}
          timeOut={props.goToNextStep}
        />
      ) : (
        false
      )}
      <Button
        onClick={props.goToNextStep}
        label={props.isLastQuestion ? "Finalizar" : "Próximo"}
      />
    </div>
  );
};

export default Quiz;
