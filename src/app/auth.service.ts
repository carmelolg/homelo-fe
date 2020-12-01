import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: Subject<Boolean> = new Subject();
  public isAuth$ = this.isAuth.asObservable();

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  enableAuth(): void {
    this.isAuth.next(true);

  }

  disableAuth(): void {
    this.isAuth.next(false);
  }

  logout(): void {

    const currentUser = localStorage.getItem('user');
    this.http.get(this.baseUrl + 'auth', { params: { username: currentUser } })
      .subscribe(() => {
        this.disableAuth();
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        localStorage.removeItem('roles');
        window.location.reload();
      });
  }
}
