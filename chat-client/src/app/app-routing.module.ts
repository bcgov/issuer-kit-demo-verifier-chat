import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';


const routes: Routes = [
  { path: '', redirectTo: 'disclaimer', pathMatch: 'full' },
  { path: 'disclaimer', component: DisclaimerComponent },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  { path: '**', redirectTo: 'disclaimer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
