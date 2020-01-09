import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Speak Free';
  statusAccueil = false;
  statusLogin = false;
  statusProfile = false;
  statusRegister = false;
  statusCreate = false;
  statusAdmin = false;
  statusContact = false;
  statusLogout = false;
  
  constructor(public auth: AuthenticationService , private router : Router,private route: ActivatedRoute) {

  }
  private routeSub : Subscription

  ngOnInit(){

  }
  change(index){
    if(index=== 'accueil'){
      this.statusAccueil = true;
      this.statusLogin = false;
      this.statusProfile = false;
      this.statusRegister = false;
      this.statusCreate = false;
      this.statusAdmin = false;
      this.statusContact = false;
      this.statusLogout = false;
    }
    if(index === 'register'){
      this.statusAccueil = false;
      this.statusLogin = false;
      this.statusProfile = false;
      this.statusRegister = true;
      this.statusCreate = false;
      this.statusAdmin = false;
      this.statusContact = false;
      this.statusLogout = false;
    }
    if(index === 'login'){
      this.statusAccueil = false;
      this.statusLogin = true;
      this.statusProfile = false;
      this.statusRegister = false;
      this.statusCreate = false;
      this.statusAdmin = false;
      this.statusContact = false;
      this.statusLogout = false;
    }
    if(index === 'profile'){
      this.statusAccueil = false;
      this.statusLogin = false;
      this.statusProfile = true;
      this.statusRegister = false;
      this.statusCreate = false;
      this.statusAdmin = false;
      this.statusContact = false;
      this.statusLogout = false;
    }
    if(index === 'create'){
      this.statusAccueil = false;
      this.statusLogin = false;
      this.statusProfile = false;
      this.statusRegister = false;
      this.statusCreate = true;
      this.statusAdmin = false;
      this.statusContact = false;
      this.statusLogout = false;
    }
    if(index === 'admin'){
      this.statusAccueil = false;
      this.statusLogin = false;
      this.statusProfile = false;
      this.statusRegister = false;
      this.statusCreate = false;
      this.statusAdmin = true;
      this.statusContact = false;
      this.statusLogout = false;
    }
    if(index === 'register'){
      this.statusAccueil = false;
      this.statusLogin = false;
      this.statusProfile = false;
      this.statusRegister = true;
      this.statusCreate = false;
      this.statusAdmin = false;
      this.statusContact = false;
      this.statusLogout = false;
    }
    if(index === 'logout'){
      this.statusAccueil = false;
      this.statusLogin = false;
      this.statusProfile = false;
      this.statusRegister = false;
      this.statusCreate = false;
      this.statusAdmin = false;
      this.statusContact = false;
      this.statusLogout = true;
    }
    if(index === 'contact'){
      this.statusAccueil = false;
      this.statusLogin = false;
      this.statusProfile = false;
      this.statusRegister = false;
      this.statusCreate = false;
      this.statusAdmin = false;
      this.statusContact = true;
      this.statusLogout = false;
    }
  }
  

}
