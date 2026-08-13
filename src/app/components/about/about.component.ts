import { Component } from '@angular/core';

interface AboutPoint {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly points: AboutPoint[] = [
    {
      title: 'Mirada cercana',
      description: 'Contenido mock para explicar un enfoque humano, profesional y adaptable.'
    },
    {
      title: 'Proceso claro',
      description: 'Espacio reservado para describir metodologia, etapas o estilo de trabajo.'
    },
    {
      title: 'Base escalable',
      description: 'La seccion puede crecer con biografia, certificaciones, imagenes o datos reales.'
    }
  ];
}
