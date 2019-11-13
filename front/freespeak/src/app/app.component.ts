import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Speak Free';
  status = false;
  statusAccueil : boolean = false;
  statusRegister: boolean = false;
  statusLogin: boolean = false;
  statusProfile: boolean = false;
  statusCreate: boolean = false;
  statusContact: boolean = false;
  statusLogout: boolean = false;

  test(loc){
    this.status+loc = !this.status+loc;
    console.log(this.statusAccueil)
  }




  constructor(public auth: AuthenticationService) {}
  
  

}
