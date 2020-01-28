import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextfieldComponent } from './textfield.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form';
import { CheckboxsModule } from '../checkboxs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule.forRoot(),
    CheckboxsModule.forRoot()
  ],
  declarations: [
    TextfieldComponent
  ],
  exports: [
    TextfieldComponent
  ]
})
export class TextfieldModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TextfieldModule
    };
  }
}