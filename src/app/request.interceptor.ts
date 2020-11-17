import { LoadingService } from './loading.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
          this.router.navigate(['login']);
        }
      }));
  }
}
