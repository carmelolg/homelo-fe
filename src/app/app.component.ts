import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
  OnInit
} from '@angular/core';
import { MenuItems } from './shared/menu-items/menu-items';

/** @title Responsive sidenav */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('snav') snav: any;

  isAuth: Boolean = false;
  mobileQuery: MediaQueryList;
  authSubscription: Subscription;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private router: Router,
    private authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit() {

    if(localStorage.getItem('jwt') !== null ){
      this.isAuth = localStorage.getItem('jwt').length > 0;
    }

    this.authSubscription = this.authService.isAuth$.subscribe(_isAuth => {
      this.isAuth = _isAuth;
  });
}

logout(): void {
  this.authService.logout();
}

goToHome() {
  this.router.navigate(['dashboard']);
}

toggleNavbar(event): void {
  if(!this.mobileQuery.matches) {
  // Close sidebar on mobile devices
  this.snav.toggle();
}
  }

ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
  this.authSubscription.unsubscribe();
}

}
