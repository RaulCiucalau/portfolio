import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    public translationService: TranslationService,
    private router: Router
  ) {}

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    if (lang === 'de') {
      this.router.navigate(['/de']);
    } else {
      this.router.navigate(['/']);
    }
  }

  navigateToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
