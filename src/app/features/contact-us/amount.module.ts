import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { ContactUsComponent } from './container/contact-us.component';
import { ContactUsService } from './services/contact-us.service';
import { ContactUsEffects } from './store/contact-us.effects';
import * as fromContactUsReducer from './store/contact-us.reducer';
import { ContactUsConfig } from './services/config';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('contactUs', fromContactUsReducer.reducer),
    EffectsModule.forFeature([ContactUsEffects]),
    RouterModule.forChild([
      {
        path: 'contactUs',
        component: ContactUsComponent,
      },
    ]),
    SharedModule,
  ],
  declarations: [ContactUsComponent],
  entryComponents: [ContactUsComponent],
  exports: [ContactUsComponent],
  providers: [ContactUsService],
})
export class ContactUsModule {
  static forRoot(config: ContactUsConfig): ModuleWithProviders {
    return {
      ngModule: ContactUsModule,
      providers: [
        {
          provide: 'configContactUs',
          useValue: config,
        },
      ],
    };
  }
}
