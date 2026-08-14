import { DOCUMENT } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LANDING_NAVIGATION } from '../../shared/navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly navigationItems = LANDING_NAVIGATION;
  protected readonly isMenuOpen = signal(false);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
    this.document.body.classList.toggle('menu-open', this.isMenuOpen());
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.document.body.classList.remove('menu-open');
  }
}
