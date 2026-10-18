export interface NavigationItem {
  label: string;
  fragment: string;
}

export const LANDING_NAVIGATION: NavigationItem[] = [
  { label: 'Inicio', fragment: 'inicio' },
  { label: 'Quienes Somos', fragment: 'sobre' },
  { label: 'Productos', fragment: 'productos' },
  { label: 'Contacto', fragment: 'contacto' }
];
