import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const jwt = localStorage.getItem('jwt');
    if (jwt == null || jwt.length === 0) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
{

}
