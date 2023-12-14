import { Component, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Storage } from '../../../../../shared/helpers/storage/storage';

@Component({
  selector: 'app-organization-new-style-stories',
  templateUrl: './organization-new-style-stories.component.html',
  styleUrls: ['./organization-new-style-stories.component.scss'],
})
export class OrganizationNewStyleStoriesComponent implements AfterViewInit {
  constructor(public scroller: ViewportScroller, public storage: Storage) {}

  ngAfterViewInit(): void {
    if (this.storage.get('review')) {
      setTimeout(() => {
        this.scroller.scrollToAnchor('rating');
      }, 100);
    }
  }
}
