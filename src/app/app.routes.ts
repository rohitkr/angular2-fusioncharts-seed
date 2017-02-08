import { Routes } from '@angular/router';

import { Ex1 } from './fusioncharts/ex1/ex1';
import { Ex2 } from './fusioncharts/ex2/ex2';
import { Ex3 } from './fusioncharts/ex3/ex3';
import { Ex4 } from './fusioncharts/ex4/ex4';
import { Ex5 } from './fusioncharts/ex5/ex5';
import { Ex5a } from './fusioncharts/ex5a/ex5a';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FusionChartsSample } from './fusioncharts/fusioncharts.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'ex1', pathMatch: 'full' },
  { path: 'ex1', component: Ex1 },
  { path: 'ex2', component: Ex2 },
  { path: 'ex3', component: Ex3 },
  { path: 'ex4', component: Ex4 },
  { path: 'ex5', component: Ex5 },
  { path: 'ex5a', component: Ex5a },

  { path: 'about', component: AboutComponent },
  { path: 'fusioncharts', component: FusionChartsSample },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent }
];

