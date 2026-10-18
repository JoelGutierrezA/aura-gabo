import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) document: Document,
    viewportScroller: ViewportScroller
  ) {
    viewportScroller.setOffset(() => [
      0,
      document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0
    ]);
  }
}
