import { Injectable } from '@angular/core';

const PREDEFINED_COLOR = [
  '#0095FF',
  '#A6EBE3',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#282668',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
];
@Injectable({
  providedIn: 'root',
})
export class HelperColor {
  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getPredictableColor(num: number) {
    return PREDEFINED_COLOR[num] || this.getRandomColor();
  }

  getAllPredictableColor() {
    return PREDEFINED_COLOR;
  }

  getPrimaryColor() {
    return '#282668';
  }

  getSecondaryColor() {
    return '#A6EBE3';
  }
}
