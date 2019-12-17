import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {
  credentials: TokenPayload = {
    usermail: '',
    password: ''
  };
  message: string;
  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      if(this.credentials.usermail != "guienjoris@gmail.com"){
        this.router.navigateByUrl('/profile');
      }else{
        this.router.navigateByUrl('/admin')
      }
    }, (err) => {
      this.message = err.error.message
      console.error(err);
    });
  }
}
