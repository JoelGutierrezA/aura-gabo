import { Component, signal } from '@angular/core';

interface ProductItem {
  id: string;
  title: string;
  imageOn: string;
  imageOff: string;
  imageSize: number;
  description: string[];
  dimensions: string;
  features: string[];
  price: string;
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
      description: [
        'Inspirada en la belleza y naturaleza de las hojas tropicales, Monstera es un diseño que transforma la luz en una experiencia cálida y envolvente.',
        'Sus múltiples hojas crean un juego de luces y sombras único, proyectando una atmósfera acogedora que convierte cualquier espacio en un rincón especial.',
        'Monstera no es solo una lámpara, es una pieza de diseño inspirada en la naturaleza.'
      ],
      dimensions: '40 cm de ancho × 26 cm de alto',
      features: ['Incluye ampolleta de luz cálida'],
      price: '$55.000'
    },
    {
      id: 'loto',
      title: 'Loto',
      imageOn: '/assets/Productos/loto/Encendida.jpg',
      imageOff: '/assets/Productos/loto/Apagada.jpg',
      imageSize: 1440,
      description: [
        'Combina forma, textura y luz para crear atmósferas cálidas y envolventes.',
        'Su estructura orgánica proyecta sombras sutiles, aportando profundidad y carácter a cualquier espacio.',
        'Diseñada para acompañar tus momentos de calma, trabajo o descanso.'
      ],
      dimensions: '30 cm de altura',
      features: ['Incluye ampolleta de luz cálida'],
      price: '$35.000'
    },
    {
      id: 'flor-de-noche',
      title: 'Flor de noche',
      imageOn: '/assets/Productos/flor%20de%20noche/Encendida.jpg',
      imageOff: '/assets/Productos/flor%20de%20noche/Apagada.jpg',
      imageSize: 1024,
      description: [
        'Una pieza de diseño lumínico inspirada en la belleza de las flores cuando cae la noche.',
        'Su estructura se abre entre la oscuridad y la luz, creando un juego de sombras y formas que transforma el espacio y le entrega una atmósfera cálida y envolvente.',
        'Diseñada para iluminar esos momentos de calma, cuando la noche se convierte en el escenario perfecto para dejar que la luz hable por sí sola.'
      ],
      dimensions: '32 cm de alto · 20 cm de ancho',
      features: ['Incluye ampolleta de luz cálida'],
      price: '$30.000'
    },
    {
      id: 'savia',
      title: 'Savia',
      imageOn: '/assets/Productos/savia/Encendida.jpg',
      imageOff: '/assets/Productos/savia/Apagada.jpg',
      imageSize: 1440,
      description: [
        'Una pieza de diseño inspirada en las formas orgánicas de la naturaleza.',
        'Su estructura en capas filtra la luz y crea un juego de sombras sutiles que aporta profundidad y carácter al espacio.',
        'Diseñada para iluminar desde la calma, generando una atmósfera envolvente y equilibrada.'
      ],
      dimensions: '36 cm de alto · 30 cm de ancho',
      features: ['Incluye ampolleta de luz cálida'],
      price: '$45.000'
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
