import { Injectable }           from '@angular/core';
import {  ActivatedRouteSnapshot,
          CanActivate,
          Router,
          RouterStateSnapshot } from '@angular/router';
import { AuthService }          from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log('AuthGuard#canActivate called');
    if( this.authService.isLoggedIn ) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
