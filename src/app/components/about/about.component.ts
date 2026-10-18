import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly slides = [
    {
      src: '/assets/Quienes%20Somos/1.jpg',
      alt: 'Diseño: formas pensadas para ser parte del espacio.'
    },
    {
      src: '/assets/Quienes%20Somos/2.jpg',
      alt: 'Luz: iluminación cálida que transforma la atmósfera.'
    },
    {
      src: '/assets/Quienes%20Somos/3.jpg',
      alt: 'Naturaleza: inspiración en formas orgánicas y elementos naturales.'
    },
    {
      src: '/assets/Quienes%20Somos/4.jpg',
      alt: 'Hecho en Chile: diseñadas e impresas en Chile.'
    }
  ];
  protected readonly activeIndex = signal(0);
  private swipeStart: { x: number; y: number } | null = null;

  protected previous(): void {
    this.activeIndex.update((index) => (index - 1 + this.slides.length) % this.slides.length);
  }

  protected next(): void {
    this.activeIndex.update((index) => (index + 1) % this.slides.length);
  }

  protected startSwipe(event: PointerEvent): void {
    this.swipeStart = event.isPrimary && event.pointerType !== 'mouse'
      ? { x: event.clientX, y: event.clientY }
      : null;
  }

  protected endSwipe(event: PointerEvent): void {
    const start = this.swipeStart;
    this.cancelSwipe();
    if (!start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    if (deltaX < 0) this.next();
    else this.previous();
  }

  protected cancelSwipe(): void {
    this.swipeStart = null;
  }
}
