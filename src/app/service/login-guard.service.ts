import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private router: Router) { }
  canActive(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLogin: boolean;
      const token = sessionStorage.getItem('token');
      if (!token) {
        isLogin = false;
        this.router.navigateByUrl('/login');
      } else {
        isLogin =true;
      }
      return isLogin;
    }
}

