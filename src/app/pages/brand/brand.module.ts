import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { BrandRoutingModule } from './brand.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/index';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    BrandRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    BrandComponent
  ],
  exports: [
    BrandComponent
  ]
})
export class BrandModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BrandModule
    };
  }
}
