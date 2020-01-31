import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { MarketRoutingModule } from './market.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule, SharedModule } from 'src/app/shared/index';
import { AppRbacAllowDirective } from 'src/app/core/authentication/directives/rbac-allow.directive';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MarketRoutingModule,
    ReactiveFormsModule,
    SharedModule.forRoot()
  ],
  declarations: [
    MarketComponent
  ],
  exports: [
    MarketComponent
  ],
  providers: []
})
export class MarketModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MarketModule
    };
  }
}
