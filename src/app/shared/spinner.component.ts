import { Subscription } from 'rxjs';
import { LoadingService } from './../loading.service';
import {
  Component,
  Input,
  OnDestroy,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-spinner',
  template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;
  loadingSubs: Subscription;

  @Input()
  public backgroundColor = 'rgba(0, 115, 170, 0.69)';
  constructor(
    private loadingService: LoadingService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isSpinnerVisible = false;
        }
      },
      () => {
        this.isSpinnerVisible = false;
      }
    );

    this.loadingSubs = this.loadingService.isLoading$.subscribe(isLoading => {
      this.isSpinnerVisible = isLoading;
    });
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
    this.loadingSubs.unsubscribe();
  }
}
