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
  menuOpen = false;

  constructor(
    public translationService: TranslationService,
    private router: Router
  ) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.closeMenu();
  }

  navigateToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.closeMenu();
    
    const currentRoute = this.router.url;
    const isMainPage = currentRoute === '/' || currentRoute === '/de';
    
    if (isMainPage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const targetRoute = this.translationService.getCurrentLanguage() === 'de' ? '/de' : '/';
      this.router.navigate([targetRoute]).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    }
  }
}
