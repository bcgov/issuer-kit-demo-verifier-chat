import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

import { AuthGuard } from '@app/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'disclaimer', pathMatch: 'full' },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'oidc-callback', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
    canLoad: [AuthGuard]
  },
  { path: '**', redirectTo: 'disclaimer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
