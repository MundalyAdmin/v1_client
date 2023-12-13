import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'read-more',
  template: `
    <div [innerHTML]="currentText" [class]="customClass"></div>
    <button
      *ngIf="!hideToggle"
      class=" text-slate-700 text-xs d-inline-block font-bold"
      (click)="toggleView()"
    >
      See more
    </button>
  `,
  styles: [
    `
      ::ng-deep p {
        margin-bottom: 0px !important;
      }
    `,
  ],
})
export class ReadMoreComponent implements OnChanges {
  @Input() text!: string;
  @Input() maxLength: number = 100;
  @Input() customClass: string = '';
  currentText!: string;
  hideToggle: boolean = true;

  public isCollapsed: boolean = true;

  constructor() {}
  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }
  determineView() {
    if (!this.text || this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
    }
    this.hideToggle = false;
    if (this.isCollapsed == true) {
      this.currentText = this.text.substring(0, this.maxLength) + '...';
    } else if (this.isCollapsed == false) {
      this.currentText = this.text;
    }
  }
  ngOnChanges() {
    this.determineView();
  }
}
