import QuestionModel from "@/model/question";
import { useEffect, useState } from "react";
import Quiz from "@/components/quiz";
import { useRouter } from "next/router";

const url = window.location.href;

const BASE_URL = `${url}/api`;

export default function Home() {
  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  const router = useRouter();

  const fetchIdQuestions = async () => {
    const response = await fetch(`${BASE_URL}/quiz`);
    const ids = await response.json();
    setQuestionIds(ids);
  };

  const fetchQuestion = async (questionId: number) => {
    const response = await fetch(`${BASE_URL}/questions/${questionId}`);
    const data = await response.json();
    const newQuestion = QuestionModel.createUsingObject(data);
    setQuestion(newQuestion);
  };

  const getIdNextQuestion = () => {
    if (question) {
      const nextId = questionIds.indexOf(question?.id) + 1;
      return questionIds[nextId];
    }
  };

  const goToNextQuestion = (nextId: number) => {
    fetchQuestion(nextId);
  };
  const finish = () => {
    router.push({
      pathname: "result",
      query: {
        total: questionIds.length,
        rightAnswers: rightAnswers,
      },
    });
  };

  const goToNextStep = () => {
    const nextId = getIdNextQuestion();
    nextId ? goToNextQuestion(nextId) : finish();
  };

  const onResponse = (questionAnswered: QuestionModel) => {
    setQuestion(questionAnswered);
    const isCorrect = questionAnswered.isCorrect;
    setRightAnswers(rightAnswers + (isCorrect ? 1 : 0));
  };

  useEffect(() => {
    fetchIdQuestions();
  }, []);

  useEffect(() => {
    questionIds.length && fetchQuestion(questionIds[0]);
  }, [questionIds]);

  return question ? (
    <Quiz
      question={question!}
      isLastQuestion={getIdNextQuestion() === undefined}
      onResponse={onResponse}
      goToNextStep={goToNextStep}
    />
  ) : (
    false
  );
}
