import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';


const appRouter: Routes = [
  {
    path: '', component: SearchComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

export const Router: ModuleWithProviders = RouterModule.forRoot(appRouter);
