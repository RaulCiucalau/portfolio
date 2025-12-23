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
      'contact.privacy': 'I\'ve read the <a href="/privacy-policy">privacy policy</a> and agree to the processing of my data as outlined.',
      'contact.send': 'Send',
      
      // Header
      'header.whyme': 'Why me',
      'header.skills': 'Skills',
      'header.projects': 'Projects',
      'header.contact': 'Contact',
      
      // Footer
      'footer.legal': 'Legal Notice',
      'footer.privacy': 'Privacy Policy',
      
      // Legal Notice
      'legal.title': 'Legal Notice',
      'legal.imprint.title': 'Imprint',
      'legal.imprint.name': 'Raul Ciucalau',
      'legal.imprint.address1': 'Im Vorholz 7',
      'legal.imprint.address2': '79235 Vogtsburg im Kaiserstuhl',
      'legal.exploring.title': 'Exploring the Board',
      'legal.exploring.email': 'ciucalauraul@gmail.com',
      'legal.acceptance.title': 'Acceptance of terms',
      'legal.acceptance.text': 'By accessing and using <a (click)="navigateToSection($event, \'main\')">Portfolio</a> (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.',
      'legal.scope.title': 'Scope and ownership of the product',
      'legal.scope.text1': '<a (click)="navigateToSection($event, \'main\')">Portfolio</a> has been developed as part of a student group project in a web development bootcamp at the <a href="https://www.developer-akademie.com/" target="_blank">Developer Akademie GmbH</a>. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.',
      'legal.scope.text2': 'The design of <a (click)="navigateToSection($event, \'main\')">Portfolio</a> is owned by the <a href="https://www.developer-akademie.com/" target="_blank">Developer Akademie GmbH</a>. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.',
      'legal.proprietary.title': 'Proprietary rights',
      'legal.proprietary.text': 'Aside from the design owned by <a href="https://www.developer-akademie.com/" target="_blank">Developer Akademie GmbH</a>, we, the listed students, retain all proprietary rights in <a (click)="navigateToSection($event, \'main\')">Portfolio</a>, including any associated copyrighted material, trademarks, and other proprietary information.',
      'legal.use.title': 'Use of the product',
      'legal.use.text': '<a (click)="navigateToSection($event, \'main\')">Portfolio</a> is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of <a (click)="navigateToSection($event, \'main\')">Portfolio</a> for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of <a (click)="navigateToSection($event, \'main\')">Portfolio</a>.',
      'legal.disclaimer.title': 'Disclaimer of warranties and limitation of liability',
      'legal.disclaimer.text': '<a (click)="navigateToSection($event, \'main\')">Portfolio</a> is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the <a href="https://www.developer-akademie.com/" target="_blank">Developer Akademie GmbH</a>, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of <a (click)="navigateToSection($event, \'main\')">Portfolio</a>.',
      'legal.indemnity.title': 'Indemnity',
      'legal.indemnity.text1': 'You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of <a (click)="navigateToSection($event, \'main\')">Portfolio</a> and/or your breach of this Legal Notice.',
      'legal.indemnity.text2': 'For any questions or notices, please contact us at ciucalauraul@gmail.com.',
      'legal.date': 'Date: December 2, 2025',
      
      // Privacy Policy
      'privacy.title': 'Privacy Policy',
      'privacy.about.title': 'About This Website',
      'privacy.about.text': 'This portfolio belongs to Raul Ciucalau. For inquiries, contact me at ciucalauraul@gmail.com.',
      'privacy.collected.title': 'Information Collected Through Contact Form',
      'privacy.collected.name': 'Your full name',
      'privacy.collected.email': 'Your email contact',
      'privacy.collected.message': 'Content of your message',
      'privacy.purpose.title': 'Purpose of Data Collection',
      'privacy.purpose.text': 'The information you submit is used exclusively to address your questions and communicate with you.',
      'privacy.storage.title': 'Data Storage Location',
      'privacy.storage.text': 'Your messages are delivered to my personal email and handled by my web hosting and email service providers.',
      'privacy.retention.title': 'Data Retention Period',
      'privacy.retention.text': 'Your correspondence is retained for the duration necessary to reply and maintained for a maximum of 2 years for future reference, or until you request its removal.',
      'privacy.rights.title': 'Your Privacy Rights',
      'privacy.rights.text': 'You have the right to view, modify, or erase your personal information at any moment by reaching out to me.',
      'privacy.protection.title': 'Data Protection',
      'privacy.protection.text': 'While I implement appropriate safeguards to secure your information, please note that no online transmission method offers absolute security.',
      'privacy.inquiries.title': 'Privacy Inquiries',
      'privacy.inquiries.text': 'For any privacy-related concerns, reach out via email: ciucalauraul@gmail.com',
      'privacy.date': 'Date: December 2, 2025'
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
      'contact.privacy': 'Ich habe die <a class="checkbox-link" href="/privacy-policy">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      'contact.send': 'Senden',
      
      // Header
      'header.whyme': 'Warum ich',
      'header.skills': 'Fähigkeiten',
      'header.projects': 'Projekte',
      'header.contact': 'Kontakt',
      
      // Footer
      'footer.legal': 'Impressum',
      'footer.privacy': 'Datenschutzerklärung',
      
      // Legal Notice
      'legal.title': 'Impressum',
      'legal.imprint.title': 'Impressum',
      'legal.imprint.name': 'Raul Ciucalau',
      'legal.imprint.address1': 'Im Vorholz 7',
      'legal.imprint.address2': '79235 Vogtsburg im Kaiserstuhl',
      'legal.exploring.title': 'Kontaktaufnahme',
      'legal.exploring.email': 'ciucalauraul@gmail.com',
      'legal.acceptance.title': 'Annahme der Bedingungen',
      'legal.acceptance.text': 'Durch den Zugriff und die Nutzung von <a (click)="navigateToSection($event, \'main\')">Portfolio</a> (Produkt) erkennen Sie die folgenden Geschäftsbedingungen sowie alle Richtlinien, Leitlinien oder Änderungen an, die Ihnen von Zeit zu Zeit vorgelegt werden können. Wir, die aufgeführten Studenten, können die Geschäftsbedingungen von Zeit zu Zeit ohne Vorankündigung aktualisieren oder ändern.',
      'legal.scope.title': 'Umfang und Eigentum am Produkt',
      'legal.scope.text1': '<a (click)="navigateToSection($event, \'main\')">Portfolio</a> wurde als Teil eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp bei der <a href="https://www.developer-akademie.com/" target="_blank">Developer Akademie GmbH</a> entwickelt. Es hat einen Bildungszweck und ist nicht für eine umfangreiche persönliche und geschäftliche Nutzung vorgesehen. Daher können wir keine konsistente Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder andere Qualitätsaspekte dieses Produkts garantieren.',
      'legal.scope.text2': 'Das Design von <a (click)="navigateToSection($event, \'main\')">Portfolio</a> ist Eigentum der <a href="https://www.developer-akademie.com/" target="_blank">Developer Akademie GmbH</a>. Unbefugte Verwendung, Vervielfältigung, Änderung, Verteilung oder Vervielfältigung des Designs ist strengstens untersagt.',
      'legal.proprietary.title': 'Eigentumsrechte',
      'legal.proprietary.text': 'Abgesehen vom Design, das der <a href="https://www.developer-akademie.com/" target="_blank">Developer Akademie GmbH</a> gehört, behalten wir, die aufgeführten Studenten, alle Eigentumsrechte an <a (click)="navigateToSection($event, \'main\')">Portfolio</a>, einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Marken und anderer geschützter Informationen.',
      'legal.use.title': 'Verwendung des Produkts',
      'legal.use.text': '<a (click)="navigateToSection($event, \'main\')">Portfolio</a> ist nur für rechtmäßige Zwecke in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften zu verwenden. Jede Verwendung von <a (click)="navigateToSection($event, \'main\')">Portfolio</a> für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung einer anderen Person ist strengstens untersagt. Sie sind allein verantwortlich für Ihre Interaktionen mit anderen Benutzern von <a (click)="navigateToSection($event, \'main\')">Portfolio</a>.',
      'legal.disclaimer.title': 'Gewährleistungsausschluss und Haftungsbeschränkung',
      'legal.disclaimer.text': '<a (click)="navigateToSection($event, \'main\')">Portfolio</a> wird "wie besehen" ohne Gewährleistung jeglicher Art bereitgestellt, weder ausdrücklich noch stillschweigend, einschließlich, aber nicht beschränkt auf die stillschweigenden Gewährleistungen der Marktgängigkeit, Eignung für einen bestimmten Zweck und Nichtverletzung. In keinem Fall haften wir, die aufgeführten Studenten, oder die <a href="https://www.developer-akademie.com/" target="_blank">Developer Akademie GmbH</a> für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, einschließlich, aber nicht beschränkt auf Schäden für Gewinnverluste, Geschäftswert, Nutzung, Daten oder andere immaterielle Verluste, selbst wenn wir über die Möglichkeit solcher Schäden informiert wurden, die sich aus oder in Verbindung mit der Nutzung oder Leistung von <a (click)="navigateToSection($event, \'main\')">Portfolio</a> ergeben.',
      'legal.indemnity.title': 'Schadloshaltung',
      'legal.indemnity.text1': 'Sie verpflichten sich, uns, die aufgeführten Studenten, die Developer Akademie und unsere Partner, Führungskräfte, Direktoren, Vertreter und Mitarbeiter von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Verbindlichkeiten (einschließlich angemessener Anwaltskosten) freizustellen, zu verteidigen und schadlos zu halten, die sich aus oder in Verbindung mit Ihrer Nutzung von <a (click)="navigateToSection($event, \'main\')">Portfolio</a> und/oder Ihrem Verstoß gegen dieses Impressum ergeben.',
      'legal.indemnity.text2': 'Für Fragen oder Mitteilungen kontaktieren Sie uns bitte unter ciucalauraul@gmail.com.',
      'legal.date': 'Datum: 2. Dezember 2025',
      
      // Privacy Policy
      'privacy.title': 'Datenschutzerklärung',
      'privacy.about.title': 'Über diese Website',
      'privacy.about.text': 'Dieses Portfolio gehört Raul Ciucalau. Bei Anfragen kontaktieren Sie mich unter ciucalauraul@gmail.com.',
      'privacy.collected.title': 'Über das Kontaktformular erfasste Informationen',
      'privacy.collected.name': 'Ihr vollständiger Name',
      'privacy.collected.email': 'Ihre E-Mail-Adresse',
      'privacy.collected.message': 'Inhalt Ihrer Nachricht',
      'privacy.purpose.title': 'Zweck der Datenerfassung',
      'privacy.purpose.text': 'Die von Ihnen übermittelten Informationen werden ausschließlich verwendet, um Ihre Fragen zu beantworten und mit Ihnen zu kommunizieren.',
      'privacy.storage.title': 'Speicherort der Daten',
      'privacy.storage.text': 'Ihre Nachrichten werden an meine persönliche E-Mail zugestellt und von meinen Webhosting- und E-Mail-Dienstanbietern verarbeitet.',
      'privacy.retention.title': 'Aufbewahrungsdauer der Daten',
      'privacy.retention.text': 'Ihre Korrespondenz wird für die zur Beantwortung erforderliche Dauer aufbewahrt und für maximal 2 Jahre zur zukünftigen Referenz gespeichert, oder bis Sie deren Löschung beantragen.',
      'privacy.rights.title': 'Ihre Datenschutzrechte',
      'privacy.rights.text': 'Sie haben das Recht, Ihre persönlichen Informationen jederzeit einzusehen, zu ändern oder zu löschen, indem Sie mich kontaktieren.',
      'privacy.protection.title': 'Datenschutz',
      'privacy.protection.text': 'Obwohl ich angemessene Schutzmaßnahmen zum Schutz Ihrer Informationen ergreife, beachten Sie bitte, dass keine Online-Übertragungsmethode absolut sicher ist.',
      'privacy.inquiries.title': 'Datenschutzanfragen',
      'privacy.inquiries.text': 'Bei datenschutzbezogenen Anliegen wenden Sie sich bitte per E-Mail an: ciucalauraul@gmail.com',
      'privacy.date': 'Datum: 2. Dezember 2025'
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
