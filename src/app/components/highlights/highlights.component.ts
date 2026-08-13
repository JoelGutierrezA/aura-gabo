import { Component } from '@angular/core';

interface HighlightItem {
  value: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-highlights',
  standalone: true,
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss'
})
export class HighlightsComponent {
  protected readonly highlights: HighlightItem[] = [
    {
      value: '01',
      label: 'Escucha inicial',
      description: 'Primer bloque mock para explicar beneficios, proceso o testimonio destacado.'
    },
    {
      value: '02',
      label: 'Plan a medida',
      description: 'Contenido ficticio preparado para comunicar diferenciadores de forma breve.'
    },
    {
      value: '03',
      label: 'Seguimiento',
      description: 'Punto placeholder para detallar continuidad, acompanamiento o resultados.'
    }
  ];
}
