import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhymeSectionComponent } from './whyme-section/whyme-section.component';
import { MyskillsSectionComponent } from './myskills-section/myskills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ReferencesSectionComponent } from './references-section/references-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portofolio';

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }
}
