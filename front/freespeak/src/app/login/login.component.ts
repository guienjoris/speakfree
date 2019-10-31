import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private api: ApiService) { 
  }
  username:string
  password: string
  checkUsers(){
    console.log(this.username)
    this.api.checkLogin()
    .subscribe(data=>{
      console.log(data)
    }
      )
  }
  ngOnInit() {

  }

}
