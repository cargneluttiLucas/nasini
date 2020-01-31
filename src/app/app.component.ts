import { Component, OnInit, ComponentFactoryResolver, ApplicationRef, Injector, PLATFORM_ID, Inject, EmbeddedViewRef } from '@angular/core';
import { AuthenticationService } from './core/authentication/services/authentication.service';
import { Router } from '@angular/router';
import { NavigatorService } from './shared/services';
import { Subscription } from 'rxjs';
import { CallbackComponent } from './pages/callback/callback.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoggedIn$ = this._authService.isLoggedIn$;
  public isBrowser = this._navigatorService.isBrowser;
  componentFactory;
  loginSubscription: Subscription;

  constructor(
    private router: Router,
    private appRef: ApplicationRef,
    private injector: Injector,
    private _authService: AuthenticationService,
    private _navigatorService: NavigatorService,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(ComponentFactoryResolver) private componentFactoryResolver: ComponentFactoryResolver,) { }

  ngOnInit() {
    this._authService.getUser$().subscribe((data) => {
    });

    this.showSpinner();
  }

  private showSpinner() {
    this.loginSubscription = this._authService.loginInProgress$.subscribe((inProgress) => {
      if (inProgress) {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(CallbackComponent).create(this.injector);
        this.appRef.attachView(this.componentFactory.hostView);
        const domElem = (this.componentFactory.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
      } else if (this.componentFactory) {
        this.appRef.detachView(this.componentFactory.hostView);
        this.componentFactory.destroy();
      }
    });
  }

  login() {
    if (this.isBrowser) {
      this._authService.login();
    }
  }

  logout() {
    if (this.isBrowser) {
      this._authService.logout();
    }
  }

  navigateToService() {
    this.router.navigateByUrl('/service');
  }

  navigateToBrand() {
    this.router.navigateByUrl('/brand');
  }

  navigateToMarket() {
    this.router.navigateByUrl('/market');
  }
}
