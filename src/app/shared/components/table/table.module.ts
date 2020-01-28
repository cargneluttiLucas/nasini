import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TableModule
    };
  }
}
