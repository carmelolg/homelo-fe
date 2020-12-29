import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private router: Router, private loadingService: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loadingService.enableLoading();

    const jwt = localStorage.getItem('jwt');
    const modifiedReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${jwt}`),
    });
    return next.handle(modifiedReq).pipe(tap(() => {
      this.loadingService.disableLoading();
    },
      (err: any) => {
        this.loadingService.disableLoading();
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          localStorage.removeItem('jwt');
          localStorage.removeItem('roles');
          this.router.navigate(['login'], {queryParams: {expired: true}});
        }
      }));
  }
}
