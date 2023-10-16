import { Component, OnInit, Renderer2 } from '@angular/core';
import { JsLoaderService } from './js-loader.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(
    private renderer: Renderer2,
    public jsLoaderService: JsLoaderService
  ) {}

  ngOnInit() {
    initFlowbite();
    this.jsLoaderService.loadJsScript(
      this.renderer,
      'assets/js/plugins.init.js'
    );
  }
}
