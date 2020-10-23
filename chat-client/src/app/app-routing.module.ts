import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CallbackComponent } from './components/callback/callback.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';


const routes: Routes = [
  { path: '', redirectTo: 'disclaimer', pathMatch: 'full' },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'oidc-callback', component: CallbackComponent },
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
