import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';
import { UserService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: UserService, private router: Router) { }

  canActivate() {
    const token = localStorage.getItem('id_token');
      if (token) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }

}
