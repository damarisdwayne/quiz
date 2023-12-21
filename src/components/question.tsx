import QuestionModel from "@/model/question";
import Statement from "./statement";
import Answer from "./answer";
import Timer from "./timer";

interface QuestionProps {
  value: QuestionModel;
  onResponse: (index: number) => void;
  timeOut: () => void;
}

const letters = [
  { value: "A", color: "bg-amber-400" },
  { value: "B", color: "bg-pink-500" },
  { value: "C", color: "bg-blue-400" },
  { value: "D", color: "bg-lime-400" },
];

export const Question = (props: QuestionProps) => {
  const question = props.value;

  const renderAnswer = () => {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={i}
          value={answer}
          index={i}
          letter={letters[i].value}
          bgColorLetter={letters[i].color}
          onResponse={props.onResponse}
        />
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Statement label={question.statement} />
      <Timer duration={10} timeOut={props.timeOut} />
      {renderAnswer()}
    </div>
  );
};
