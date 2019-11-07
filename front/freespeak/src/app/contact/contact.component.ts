import { Component } from '@angular/core';
import { ApiService , Contact } from '../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  credentials: Contact = {
    usermail: '',
    message: ''
  }
  constructor(private api: ApiService , private router:Router) { }
  contact(){
    console.log(this.credentials)
    this.api.createContact(this.credentials).subscribe(data=>{
      console.log(data)
    })
  }
}
