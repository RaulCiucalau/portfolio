import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
];
