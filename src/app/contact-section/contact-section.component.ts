import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [TranslatePipe, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  privacyAccepted = false;

  mailTest = false;

  emailSent = false;

  post = {
    endPoint: 'https://raul-ciucalau.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.emailSent = true;
            ngForm.resetForm();
            setTimeout(() => {
              this.emailSent = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.emailSent = true;
      ngForm.resetForm();
      setTimeout(() => {
        this.emailSent = false;
      }, 5000);
    }
  }

}
