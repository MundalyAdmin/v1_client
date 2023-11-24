import { Component, Input } from '@angular/core';
import { ImpactStoryOrganization } from '../../../organization/impact-story-organization/impact-story-organization.model';
import { interval, Subject } from 'rxjs';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent {
  @Input() impactStories: ImpactStoryOrganization[] = [];
  currentSlide = 0;
  intervalId: any;
  pauseSlide$: Subject<boolean> = new Subject();

  // Add your carousel items here
  // items = [
  //   { content: 'Slide 1' },
  //   { content: 'Slide 2' },
  //   { content: 'Slide 3' },
  // ];

  constructor() {}

  ngOnInit(): void {
    // Start automatic sliding
    this.startSlideShow();
  }

  ngOnDestroy(): void {
    // Stop automatic sliding when the component is destroyed
    this.stopSlideShow();
  }

  startSlideShow() {
    // Set up an interval to change slides every 3 seconds (adjust as needed)
    this.intervalId = interval(3000).subscribe(() => {
      this.nextSlide();
    });
  }

  stopSlideShow() {
    // Stop the interval when the component is destroyed
    if (this.intervalId) {
      this.intervalId.unsubscribe();
    }
  }

  prevSlide() {
    if (this.currentSlide <= 0)
      this.currentSlide = this.impactStories.length - 1;
    else this.currentSlide--;
  }

  nextSlide() {
    if (this.currentSlide >= this.impactStories.length - 1)
      this.currentSlide = 0;
    else this.currentSlide++;
  }
}
