import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { MarketRoutingModule } from './market.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/index';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MarketRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MarketComponent
  ],
  exports: [
    MarketComponent
  ]
})
export class MarketModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MarketModule
    };
  }
}
