import { Component } from '@angular/core';

interface ProductItem {
  image: string;
  title: string;
  description: string;
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
      image: '/assets/IMG_5404.jpg',
      title: 'Lampara Aura',
      description: 'Pieza luminica de mesa con estructura organica y luz calida envolvente.'
    },
    {
      image: '/assets/IMG_5413.jpg',
      title: 'Lampara Botanica',
      description: 'Diseno inspirado en hojas superpuestas para ambientes decorativos y acogedores.'
    }
  ];
}
