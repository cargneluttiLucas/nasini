import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule } from './service.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/index';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ServiceRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ServiceComponent
  ],
  exports: [
    ServiceComponent
  ]
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule
    };
  }
}
