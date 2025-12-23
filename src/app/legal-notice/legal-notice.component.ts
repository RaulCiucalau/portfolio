import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private router: Router) {}

  navigateToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }
}
