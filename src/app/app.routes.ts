import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ReactComponent } from './react';
import { ContentComponent } from './content';
//import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: ContentComponent },
  { path: 'emoji-data-visualizer', component: ContentComponent },
  { path: 'posts', loadChildren: './posts#PostsModule' },
  { path: 'content', component: ContentComponent },
  //{ path: 'react', component: ReactComponent },
  { path: '**',    component: NoContentComponent },
];
