export interface NavigationItem {
  label: string;
  href: string;
}

export const LANDING_NAVIGATION: NavigationItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' }
];
