import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  protected submitted = false;
  protected submitSucceeded = false;

  protected readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    acceptedPolicies: [false, [Validators.requiredTrue]]
  });

  protected onSubmit(): void {
    this.submitted = true;
    this.submitSucceeded = false;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.contactForm.reset();
    this.submitted = false;
    this.submitSucceeded = true;
  }

  protected hasError(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }
}
