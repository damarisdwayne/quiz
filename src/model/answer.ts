export default class AnswerModel {
  #value: string;
  #isCorrect: boolean;
  #isShowed: boolean;

  constructor(value: string, isCorrect: boolean, isShowed = false) {
    this.#value = value;
    this.#isCorrect = isCorrect;
    this.#isShowed = isShowed;
  }

  static correct(value: string) {
    return new AnswerModel(value, true);
  }

  static wrong(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get isCorrect() {
    return this.#isCorrect;
  }

  get isShowed() {
    return this.#isShowed;
  }

  show() {
    return new AnswerModel(this.#value, this.#isCorrect, true);
  }

  static createUsingObject(obj: AnswerModel): AnswerModel {
    return new AnswerModel(obj.value, obj.isCorrect, obj.isShowed);
  }

  toObject() {
    return {
      value: this.#value,
      isCorrect: this.#isCorrect,
      isShowed: this.#isShowed,
    };
  }
}
