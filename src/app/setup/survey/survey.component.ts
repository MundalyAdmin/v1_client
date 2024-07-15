import { Component } from '@angular/core';


type BaseQuestion = {
  title: string
  type: "optionBased" | "textBased"
}

type OptionBasedQuestion =  BaseQuestion & {
  chooseMany: boolean
  manyOptionLimited: boolean
  optionLimitCount: number
  randomizeOptions: boolean
  options: string[]
  other: boolean
  notSure: boolean
  preferNotSay: boolean
  nonOfAbove: boolean
  preview: {
    otherSelected: boolean
  }
}

type TextBasedQuestion = BaseQuestion & {
  
}

type Question = OptionBasedQuestion | TextBasedQuestion


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {

  questions: Question[] = [{
    type: "optionBased",
    title: "",
    chooseMany: false,
    manyOptionLimited: false,
    optionLimitCount: 0,
    randomizeOptions: false,
    options: [""],
    other: false,
    notSure: false,
    preferNotSay: false,
    nonOfAbove: false,
    preview: {
      otherSelected: false
    }
  }];

  activeQuestionIndex: number = 0;
  dragging: number = 0;

  questionEnd(index: number): string {
    return index + 1 >= this.questions.length ? 'END' : `Q${index + 2}`
  }

  selectQuestion(index: number): void {
    this.activeQuestionIndex = index
    document.getElementById(`question_box_${index}`)?.scrollIntoView({behavior: "smooth"});
  }

  dragStart(index: number) {
    this.dragging = index;
  }

  dragEnd() {

  }

  drop(index: number) {
    if (index === this.dragging) return;
    if (index > this.dragging) {
      this.questions = [
        ...this.questions.slice(0, this.dragging),
        ...this.questions.slice(this.dragging + 1, index + 1),
        this.questions[this.dragging],
        ...this.questions.slice(index + 1)
      ]
      return;
    }

    this.questions = [
      ...this.questions.slice(0, index),
      this.questions[this.dragging],
      ...this.questions.slice(index, this.dragging),
      ...this.questions.slice(this.dragging + 1)
    ]
  }

  newQuestion(type: "optionBased" | "textBased") : Question{
    if (type === "optionBased") return (
      {
        type: "optionBased",
        title: "",
        chooseMany: false,
        manyOptionLimited: false,
        optionLimitCount: 0,
        randomizeOptions: false,
        options: [""],
        other: false,
        notSure: false,
        preferNotSay: false,
        nonOfAbove: false,
        preview: {
          otherSelected: false
        }
      }
    )
    return ({
      type: "textBased",
      title: ""
    })
  }

  addNewQuestion() {
    this.questions.push(
      this.newQuestion('optionBased')
    )
  }


  changeQuestion(event: any, index: number) {
    this.questions[index].title = event.target.value
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1)
  }

  duplicateQuestion(index: number) {
    const clonedObject = JSON.parse(JSON.stringify(this.questions[index]))
    this.questions = [...this.questions.slice(0, index + 1), clonedObject, ...this.questions.slice(index + 1)];
  }

  moveUpward(index: number) {
    if (index <= 0) return;
    [this.questions[index], this.questions[index - 1]] = [this.questions[index - 1], this.questions[index]];
  }

  moveDownward(index: number) {
    if (index >= this.questions.length - 1) return;
    [this.questions[index], this.questions[index + 1]] = [this.questions[index + 1], this.questions[index]];
  }

  chooseQuestionType(event: any, index: number) {
    const value = event.target.value;
    if (this.questions[index].type === value) return;

    this.questions[index] = this.newQuestion(value);
  }


  // activeQuestion() {
  //   const question = this.questions[this.activeQuestionIndex];
  //   return this.convertQuestionToType(question)
  // }


  // convertQuestionToType(question: Question){
  //   switch(question.type) {
  //     case 'optionBased':
  //       return (question as OptionBasedQuestion);
  //     case 'textBased':
  //       return (question as TextBasedQuestion)
  //   }
  // }


  /**
   * 
   *  Option Based Question Helpers
   * 
   */

  
  asOptionBasedQuestion(question: Question): OptionBasedQuestion{
    return (question as OptionBasedQuestion)
  }

  selectOptionSelection(index: number, val: boolean) {
    (this.questions[index] as OptionBasedQuestion).chooseMany = val;
  }

  selectOptionManyLimit(event: any, index: number) {
    const question =  (this.questions[index] as OptionBasedQuestion)
    question.manyOptionLimited = (event.target.value === "true");
  }

  updateOptionCount(index: number, count: number) {
    const question =  (this.questions[index] as OptionBasedQuestion)
    if ((question.optionLimitCount + count) < 0 || (question.optionLimitCount + count) > 20) return;

    question.optionLimitCount += count;
  }

  switchRandomizeOption(index: number) {
    const question =  (this.questions[index] as OptionBasedQuestion)
    question.randomizeOptions = !question.randomizeOptions;
  }

  changeOptionText(event: any, index: number, optionIndex: number) {
    const value = event.target.value;
    const question =  (this.questions[index] as OptionBasedQuestion)

    question.options[optionIndex] = value;

    if (!value && optionIndex < question.options.length - 1) {
      question.options = [...question.options.slice(0, optionIndex), ...question.options.slice(optionIndex + 1)]
      return;
    }

    if (optionIndex === question.options.length - 1 && value) {
      question.options = [...question.options, ""];
    }

  }

  selectNormalOptions(nOpt: "other" | "notSure" | "preferNotSay" | "nonOfAbove", index: number) {
    const question =  (this.questions[index] as OptionBasedQuestion)
    question[nOpt] = !question[nOpt];
    if (nOpt === "other" && !question[nOpt]){
      question.preview.otherSelected = false
    }
  }

  selectPreviewOther(index: number) {
    const question =  (this.questions[index] as OptionBasedQuestion)
    question.preview.otherSelected = !question.preview.otherSelected
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  nextPreviewQuestion(){
    if ((this.activeQuestionIndex + 1) > (this.questions.length - 1)) return ;
    this.activeQuestionIndex += 1;
    document.getElementById(`question_box_${this.activeQuestionIndex}`)?.scrollIntoView({behavior: "smooth"});
  }
}
