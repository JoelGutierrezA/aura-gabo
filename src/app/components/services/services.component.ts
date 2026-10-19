import { Component, signal } from '@angular/core';

interface ProductItem {
  id: string;
  title: string;
  imageOn: string;
  imageOff: string;
  imageSize: number;
  features: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  protected readonly products: ProductItem[] = [
    {
      id: 'monstera',
      title: 'Monstera',
      imageOn: '/assets/Productos/monstera/Encendida.jpg',
      imageOff: '/assets/Productos/monstera/Apagada.jpg',
      imageSize: 4096,
      features: []
    },
    {
      id: 'loto',
      title: 'Loto',
      imageOn: '/assets/Productos/loto/Encendida.jpg',
      imageOff: '/assets/Productos/loto/Apagada.jpg',
      imageSize: 1440,
      features: []
    },
    {
      id: 'flor-de-noche',
      title: 'Flor de noche',
      imageOn: '/assets/Productos/flor%20de%20noche/Encendida.jpg',
      imageOff: '/assets/Productos/flor%20de%20noche/Apagada.jpg',
      imageSize: 1024,
      features: []
    },
    {
      id: 'savia',
      title: 'Savia',
      imageOn: '/assets/Productos/savia/Encendida.jpg',
      imageOff: '/assets/Productos/savia/Apagada.jpg',
      imageSize: 1440,
      features: []
    }
  ];
  protected readonly flippedProducts = signal<ReadonlySet<string>>(new Set());

  protected flipProduct(id: string, focusTarget: HTMLButtonElement): void {
    this.flippedProducts.update((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
  }
}
