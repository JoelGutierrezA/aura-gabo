import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface FormSubmitResponse {
  success?: boolean | string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly formSubmitUrl = 'https://formsubmit.co/ajax/auraluminico@gmail.com';
  protected submitted = false;
  protected submitSucceeded = false;
  protected isSubmitting = false;
  protected submitError = '';

  protected readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    acceptedPolicies: [false, [Validators.requiredTrue]]
  });

  protected async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;

    this.submitted = true;
    this.submitSucceeded = false;
    this.submitError = '';

    const values = this.contactForm.getRawValue();
    const contact = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      message: values.message.trim()
    };
    this.contactForm.patchValue(contact);

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(this.formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        signal: controller.signal,
        body: JSON.stringify({
          ...contact,
          'Aceptación de políticas de privacidad': 'Sí',
          _replyto: contact.email,
          _subject: 'Nuevo mensaje desde Auraluminico',
          _template: 'table'
        })
      });
      const result: FormSubmitResponse | null = await response.json();

      if (!response.ok || (result?.success !== true && result?.success !== 'true')) {
        throw new Error('FormSubmit no aceptó el envío');
      }

      this.contactForm.reset();
      this.submitted = false;
      this.submitSucceeded = true;
    } catch {
      this.submitError = 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a auraluminico@gmail.com.';
    } finally {
      clearTimeout(timeout);
      this.isSubmitting = false;
    }
  }

  protected hasError(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }
}
