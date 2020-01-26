import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared.module';
import { By } from '@angular/platform-browser';
import { LazysizesDirective } from './lazysizes.directive';
import { NavigatorService } from '../../../core/utils/services/navigator.service';

@Component({
  template: `<img appDatasrc style="width: 100px;">`,
})
class TestLazySizesComponent {
}

const navigatorServiceGoogleBot = {
  isCrawler: () => true,
};

let component: TestLazySizesComponent;
let fixture: ComponentFixture<TestLazySizesComponent>;
let element: DebugElement[];

describe('LazysizesDirective without googlebot', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NavigatorService, useValue: navigatorServiceGoogleBot }],
      imports: [SharedModule],
      declarations: [TestLazySizesComponent],
    });

    fixture = TestBed.createComponent(TestLazySizesComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.queryAll(By.directive(LazysizesDirective));
  }));

  xit('should add data-src attribute if is googlebot', () => {
    const dir = element[0].injector.get(LazysizesDirective) as LazysizesDirective;
    const div = element[0].nativeElement as HTMLImageElement;
    dir.ngOnInit();
    expect(div.src).toBeTruthy();
  });
});

const navigatorService = {
  isCrawler: () => false,
};

describe('LazysizesDirective without googlebot', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NavigatorService, useValue: navigatorService }],
      imports: [SharedModule],
      declarations: [TestLazySizesComponent],
    });

    fixture = TestBed.createComponent(TestLazySizesComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.queryAll(By.directive(LazysizesDirective));
  }));

  it('should add data-src attribute if is not googlebot', () => {
    const dir = element[0].injector.get(LazysizesDirective) as LazysizesDirective;
    const div = element[0].nativeElement as HTMLImageElement;
    dir.ngOnInit();
    expect(div.src).toBeFalsy();
  });
});
