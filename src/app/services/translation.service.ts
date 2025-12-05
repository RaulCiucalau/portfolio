import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLangSubject.asObservable();

  private translations: { [lang: string]: Translations } = {
    en: {
      // Hero Section
      'hero.button': 'CONTACT ME',
      'hero.title': 'FRONTEND DEVELOPER',
      'hero.name': 'Raul Ciucalau',
      
      // Why Me Section
      'whyme.title': 'Why Me?',
      'whyme.iam': 'I am',
      'whyme.location': 'located in Freiburg',
      'whyme.relocate': 'open to relocate',
      'whyme.remote': 'open to work remote',
      'whyme.button': "Let's talk",
      
      // My Skills Section
      'myskills.title': 'My Skills',
      'myskills.challenge': 'I am always happy to learn new technologies,\njust tell me what you need.',
      
      // Projects Section
      'projects.title': 'My Projects',
      'projects.join.description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'projects.sharky.description': '2D game featuring a shark character navigating through obstacles. Collect coins and defeat enemies to achieve the highest score.',
      
      // References Section
      'references.title': 'References',
      'references.heading': 'Need a teamplayer? Here what my colleagues said about me',
      
      // Contact Section
      'contact.title': 'Contact me',
      'contact.description': 'Encourage people to contact you and describe what role you are interested in. Express interest in contributing to a new project.',
      'contact.email': 'E-mail',
      'contact.phone': 'Tel',
      'contact.form.name': 'Your Name',
      'contact.form.email': 'Your Email',
      'contact.form.message': 'Your Message',
      'contact.privacy': 'I\'ve read the <a href="/legal-notice">privacy policy</a> and agree to the processing of my data as outlined.',
      'contact.send': 'Send',
      
      // Header
      'header.whyme': 'Why me',
      'header.skills': 'Skills',
      'header.projects': 'Projects',
      'header.contact': 'Contact',
      
      // Footer
      'footer.legal': 'Legal Notice',
      'footer.privacy': 'Privacy Policy'
    },
    de: {
      // Hero Section
      'hero.button': 'KONTAKTIERE MICH',
      'hero.title': 'FRONTEND ENTWICKLER',
      'hero.name': 'Raul Ciucalau',
      
      // Why Me Section
      'whyme.title': 'Warum ich?',
      'whyme.iam': 'Ich<br>bin',
      'whyme.location': 'in Freiburg ansässig',
      'whyme.relocate': 'bereit umzuziehen',
      'whyme.remote': 'offen für Remote-Arbeit',
      'whyme.button': 'Lass uns reden',
      
      // My Skills Section
      'myskills.title': 'Meine Fähigkeiten',
      'myskills.challenge': 'Ich bin immer bereit, neue Technologien zu lernen,\nsag mir einfach, was du brauchst.',
      
      // Projects Section
      'projects.title': 'Meine Projekte',
      'projects.join.description': 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      'projects.sharky.description': '2D-Spiel mit einer Hai-Figur, die durch Hindernisse navigiert. Sammle Münzen und besiege Feinde, um die höchste Punktzahl zu erreichen.',
      
      // References Section
      'references.title': 'Referenzen',
      'references.heading': 'Brauchst du einen Teamplayer? Hier ist, was meine Kollegen über mich gesagt haben',
      
      // Contact Section
      'contact.title': 'Kontaktiere mich',
      'contact.description': 'Ermutige Menschen, dich zu kontaktieren und beschreibe, an welcher Rolle du interessiert bist. Zeige Interesse, zu einem neuen Projekt beizutragen.',
      'contact.email': 'E-Mail',
      'contact.phone': 'Tel',
      'contact.form.name': 'Dein Name',
      'contact.form.email': 'Deine E-Mail',
      'contact.form.message': 'Deine Nachricht',
      'contact.privacy': 'Ich habe die <a class="checkbox-link" href="/legal-notice">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      'contact.send': 'Senden',
      
      // Header
      'header.whyme': 'Warum ich',
      'header.skills': 'Fähigkeiten',
      'header.projects': 'Projekte',
      'header.contact': 'Kontakt',
      
      // Footer
      'footer.legal': 'Impressum',
      'footer.privacy': 'Datenschutzerklärung'
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        this.currentLangSubject.next(savedLang);
      }
    }
  }

  setLanguage(lang: string) {
    this.currentLangSubject.next(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }
  }

  getCurrentLanguage(): string {
    return this.currentLangSubject.value;
  }

  translate(key: string): string {
    const lang = this.currentLangSubject.value;
    return this.translations[lang]?.[key] || key;
  }

  get(key: string): string {
    return this.translate(key);
  }
}
