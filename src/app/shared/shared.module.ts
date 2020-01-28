import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LazysizesDirective } from './directives/lazysizes/lazysizes.directive';
import { ServicesModule } from './services';
import { ComponentsModule } from './components';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule.forRoot(),
    TranslateModule.forChild(),
    ComponentsModule.forRoot()
  ],
  exports: [
    TranslateModule,
    LazysizesDirective,
    ServicesModule,
    ComponentsModule
  ],
  declarations: [
    LazysizesDirective
  ],
  providers: [
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
