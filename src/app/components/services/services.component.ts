import { Component } from '@angular/core';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  protected readonly services: ServiceItem[] = [
    {
      icon: '01',
      title: 'Consultoria integral',
      description: 'Servicio ficticio para presentar acompanamiento, orientacion y diagnostico inicial.'
    },
    {
      icon: '02',
      title: 'Sesiones personalizadas',
      description: 'Card mock preparada para describir planes, paquetes o atenciones individuales.'
    },
    {
      icon: '03',
      title: 'Talleres y recursos',
      description: 'Espacio flexible para futuras actividades, materiales descargables o programas.'
    }
  ];
}
