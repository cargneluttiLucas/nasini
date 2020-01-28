import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextfieldModule } from './textfield/textfield.module';
import { TextfieldPredictiveModule } from './textfield-predictive/textfield-predictive.module';
import { ButtonModule } from './button/button.module';
import { LoadingModule } from './loading/loading.module';
import { SelectModule } from './select/select.module';
import { ListModule } from './list/list.module';
import { HeaderModule } from './header/header.module';
import { CheckboxsModule } from './checkboxs/checkboxs.module';
import { TabsModule } from './tabs/tabs.module';
import { TableModule } from './table/table.module';
import { ModalsModule } from '../services/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    TextfieldModule.forRoot(),
    ButtonModule.forRoot(),
    LoadingModule.forRoot(),
    SelectModule.forRoot(),
    ListModule.forRoot(),
    ModalsModule.forRoot(),
    TextfieldPredictiveModule.forRoot(),
    HeaderModule.forRoot(),
    CheckboxsModule.forRoot(),
    TabsModule.forRoot(),
    TableModule.forRoot()
  ],
  declarations: [],
  exports: [
    TextfieldModule,
    ButtonModule,
    LoadingModule,
    SelectModule,
    ListModule,
    ModalsModule,
    HeaderModule,
    TextfieldPredictiveModule,
    CheckboxsModule,
    TabsModule,
    TableModule
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule
    };
  }
}
