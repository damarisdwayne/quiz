import { shuffle } from "@/utils/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #isCorrect: boolean;

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[],
    isCorrect = false,
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#isCorrect = isCorrect;
  }

  get id() {
    return this.#id;
  }
  get statement() {
    return this.#statement;
  }
  get answers() {
    return this.#answers;
  }
  get isCorrect() {
    return this.#isCorrect;
  }

  get answered() {
    for (const answer of this.#answers) {
      if (answer.isShowed) return true;
    }
    return false;
  }

  get notAnswered() {
    return !this.answered;
  }

  replyWith(index: number): QuestionModel {
    const isCorrect = this.#answers[index]?.isCorrect;
    const answers = this.#answers.map((answer, i) => {
      const answerSelected = index === i;
      const mustShow = answerSelected || answer.isCorrect;
      return mustShow ? answer.show() : answer;
    });
    return new QuestionModel(this.id, this.statement, answers, isCorrect);
  }

  shuffleAnswers(): QuestionModel {
    const scrambledAnswers = shuffle(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#statement,
      scrambledAnswers,
      this.#isCorrect,
    );
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answered: this.answered,
      isCorrect: this.#isCorrect,
      answers: this.#answers.map((resp) => resp.toObject()),
    };
  }
}
