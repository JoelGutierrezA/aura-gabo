export interface NavigationItem {
  label: string;
  fragment: string;
}

export const LANDING_NAVIGATION: NavigationItem[] = [
  { label: 'Inicio', fragment: 'inicio' },
  { label: 'Sobre', fragment: 'sobre' },
  { label: 'Productos', fragment: 'productos' },
  { label: 'Beneficios', fragment: 'beneficios' },
  { label: 'Contacto', fragment: 'contacto' }
];
