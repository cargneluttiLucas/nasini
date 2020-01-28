import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RootStoreModule } from './root-store/root-store.module';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './shared/components/header';
import { ButtonModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    CoreModule,
    RootStoreModule,
    HttpClientModule
  ],
  entryComponents: [
    UnauthorizedComponent,
    CallbackComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
