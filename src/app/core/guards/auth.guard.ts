import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs';

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.authService.isAuthenticated().pipe(
      take(1),
      map((isAuth) => {
        if (isAuth) {
          return true;
        } else {
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
