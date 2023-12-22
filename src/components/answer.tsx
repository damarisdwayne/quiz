import AnswerModel from "@/model/answer";
import React from "react";

interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  bgColorLetter: string;
  onResponse: (index: number) => void;
}

const Answer = (props: AnswerProps) => {
  const answer = props.value;
  const answerShowed = answer.isShowed ? "rotate-180" : "";
  return (
    <div
      onClick={() => props.onResponse(props.index)}
      className="flex h-[100px] m-3 w-4/5 min-w-[500px] perspective-1000 cursor-pointer"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: answerShowed ? "rotateY(180deg)" : "none",
        }}
        className="relative flex-1 transform transition-transform duration-700"
      >
        <div className="frente absolute flex items-center rounded-xl p-4 gap-5 h-full w-full bg-white">
          <div
            className={`flex items-center justify-center h-[40px] w-[40px] rounded-full text-xl font-bold ${props.bgColorLetter}`}
          >
            {props.letter}
          </div>
          <div className="text-xl font-bold text-slate-950">{answer.value}</div>
        </div>
        <div
          style={{ transform: "rotateY(180deg" }}
          className="absolute flex h-full w-full backface-hidden transform rotate-180"
        >
          {answer.isCorrect ? (
            <div className="flex flex-col flex-1 items-center justify-center rounded-xl bg-green-500">
              <div>A resposa certa é...</div>
              <div className="text-2xl font-bold ">{answer.value}</div>
            </div>
          ) : (
            <div className="flex flex-col flex-1 items-center justify-center rounded-xl bg-red-500">
              <div>A resposa informada está errada...</div>
              <div className="text-2xl font-bold ">{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Answer;
