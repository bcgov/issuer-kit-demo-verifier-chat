import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'disclaimer', pathMatch: 'full' },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'disclaimer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
