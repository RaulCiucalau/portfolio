import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageDeComponent } from './main-page-de/main-page-de.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'de', component: MainPageDeComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
