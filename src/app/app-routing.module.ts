import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationGuard } from './core/authentication/guards/authentication.guard';
import { AuthenticationInterceptor } from './core/authentication/interceptors/authentication.interceptor';

const routes: Routes = [
  {
    path: 'brand',
    loadChildren: './pages/brand/brand.module#BrandModule',
    data: {
      title: 'Empresa',
    },
  },
  {
    path: 'service',
    loadChildren: './pages/service/service.module#ServiceModule',
    canActivate: [AuthenticationGuard],
    data: {
      title: 'Servicios',
    },
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    data: {
      title: 'Nasini',
    },
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'not-found',
    loadChildren: './pages/not-found/not-found.module#NotFoundModule',
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
