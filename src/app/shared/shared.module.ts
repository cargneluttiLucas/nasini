import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LazysizesDirective } from './directives/lazysizes/lazysizes.directive';
import { ServicesModule } from './services';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule.forRoot(),
    TranslateModule.forChild(),
  ],
  exports: [
    TranslateModule,
    LazysizesDirective,
    ServicesModule
  ],
  declarations: [
    LazysizesDirective,
  ],
  providers: [
  ],
})
export class SharedModule { }
