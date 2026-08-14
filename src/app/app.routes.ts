import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'politicas-privacidad', component: PrivacyPolicyPageComponent },
  { path: '**', redirectTo: '' }
];
