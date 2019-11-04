import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    usermail: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      if(this.credentials.usermail != "guienjoris@gmail.com"){
        this.router.navigateByUrl('/profile');
      }else{
        this.router.navigateByUrl('/admin')
      }
    }, (err) => {
      console.error(err);
    });
  }
}
