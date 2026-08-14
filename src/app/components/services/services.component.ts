import { Component } from '@angular/core';

interface ProductItem {
  icon: string;
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
      icon: '01',
      title: 'Lamparas colgantes',
      description: 'Piezas mock pensadas para comedores, livings y espacios con iluminacion protagonista.'
    },
    {
      icon: '02',
      title: 'Lamparas de muro',
      description: 'Modelos decorativos para pasillos, dormitorios y ambientes que requieren luz ambiental.'
    },
    {
      icon: '03',
      title: 'Lamparas de mesa',
      description: 'Opciones versatiles para veladores, escritorios y rincones de lectura.'
    }
  ];
}
