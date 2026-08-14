import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { HighlightsComponent } from '../../components/highlights/highlights.component';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    HighlightsComponent,
    ContactComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {}
