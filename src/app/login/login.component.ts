import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { AuthService }        from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.setMessage();
  }

  ngOnInit() {
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Todo: capture where the user was going and nav there.
        // Meanwhile redirect the user to the crisis admin
        this.router.navigate(['/admin']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
