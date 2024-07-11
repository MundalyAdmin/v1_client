import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';

interface Question {
  title: string
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

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {

  questions: Question[] = [{
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

  newQuestion() {
    this.questions.push({
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
    })
  }

  changeQuestion(event: any, index: number) {
    this.questions[index].title = event.target.value
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1)
  }

  duplicateQuestion(index: number) {
    this.questions = [...this.questions.slice(0, index + 1), Object.assign({}, this.questions[index]), ...this.questions.slice(index + 1)];
  }

  moveUpward(index: number) {
    if (index <= 0) return;
    [this.questions[index], this.questions[index - 1]] = [this.questions[index - 1], this.questions[index]];
  }

  moveDownward(index: number) {
    if (index >= this.questions.length - 1) return;
    [this.questions[index], this.questions[index + 1]] = [this.questions[index + 1], this.questions[index]];
  }

  selectOptionSelection(index: number, val: boolean) {
    this.questions[index].chooseMany = val;
  }

  selectOptionManyLimit(event: any, index: number) {
    this.questions[index].manyOptionLimited = (event.target.value === "true");
  }

  updateOptionCount(index: number, count: number) {
    if ((this.questions[index].optionLimitCount + count) < 0 || (this.questions[index].optionLimitCount + count) > 20) return;

    this.questions[index].optionLimitCount += count;
  }

  switchRandomizeOption(index: number) {
    this.questions[index].randomizeOptions = !this.questions[index].randomizeOptions;
  }

  changeOptionText(event: any, index: number, optionIndex: number) {
    const value = event.target.value;

    this.questions[index].options[optionIndex] = value;

    if (!value && optionIndex < this.questions[index].options.length - 1) {
      this.questions[index].options = [...this.questions[index].options.slice(0, optionIndex), ...this.questions[index].options.slice(optionIndex + 1)]
      return;
    }

    if (optionIndex === this.questions[index].options.length - 1 && value) {
      this.questions[index].options = [...this.questions[index].options, ""];
    }

  }

  selectNormalOptions(nOpt: "other" | "notSure" | "preferNotSay" | "nonOfAbove", index: number) {
    this.questions[index][nOpt] = !this.questions[index][nOpt];
    if (nOpt === "other" && !this.questions[index][nOpt]){
      this.questions[index].preview.otherSelected = false
    }
  }

  selectPreviewOther(index: number) {
    this.questions[index].preview.otherSelected = !this.questions[index].preview.otherSelected
  }

  trackByFn(index: number, item: string) {
    return index;
  }

  nextPreviewQuestion(){
    if ((this.activeQuestionIndex + 1) > (this.questions.length - 1)) return ;
    this.activeQuestionIndex += 1;
    document.getElementById(`question_box_${this.activeQuestionIndex}`)?.scrollIntoView({behavior: "smooth"});
  }
}
