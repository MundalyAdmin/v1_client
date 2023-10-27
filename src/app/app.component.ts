import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { JsLoaderService } from './js-loader.service';
import { initFlowbite } from 'flowbite';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    public jsLoaderService: JsLoaderService,
    public router: Router
  ) {}

  ngOnInit() {
    initFlowbite();
    this.jsLoaderService.loadJsScript(
      this.renderer,
      'assets/js/plugins.init.js'
    );

    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
