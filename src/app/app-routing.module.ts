import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/auth/login/login.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { AuthGuard } from '../config/auth.guard';
import { RecuperarContrasenaComponent } from './auth/recuperar-contrasena/recuperar-contrasena.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: RecuperarContrasenaComponent },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canLoad: [AuthGuard]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({

  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
