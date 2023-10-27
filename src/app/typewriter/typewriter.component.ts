import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss'],
})
export class TypewriterComponent implements OnInit, AfterViewInit {
  @Input() textList: string[] = [];
  @ViewChild('output', { static: true }) outputElement!: ElementRef;

  private currentText = '';
  private currentIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100; // Speed in milliseconds
  private pauseDuration = 1500; // Pause duration in milliseconds

  ngOnInit() {
    this.type();
  }

  ngAfterViewInit() {
    // this.outputElement.nativeElement.style.borderRight = '0.08em solid #fff';
  }

  type() {
    const text = this.textList[this.currentIndex];
    if (this.isDeleting) {
      this.currentText = text.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = text.substring(0, this.currentText.length + 1);
    }
    this.outputElement.nativeElement.textContent = this.currentText;
    if (!this.isDeleting && this.currentText === text) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.pauseDuration); // Pause before deleting
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.textList.length;
      setTimeout(() => this.type(), this.pauseDuration); // Pause before typing the next text
    } else {
      const timeout = this.isDeleting ? 50 : this.typingSpeed;
      setTimeout(() => this.type(), timeout);
    }
  }
}
