import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LANDING_NAVIGATION } from '../../shared/navigation';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly navigationItems = LANDING_NAVIGATION;
  protected readonly currentYear = new Date().getFullYear();
}
