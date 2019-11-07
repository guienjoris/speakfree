import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {
  contacts : any = [];
  constructor( private api:ApiService) { }
  delete(id:string){
    this.api.deleteContact(id).subscribe(data =>{
      console.log(data)
    })
  }
  ngOnInit() {
    this.api.getAllContact()
    .subscribe(data =>{
      for(const d of (data as any)){
        this.contacts.push({
          message: d.message,
          usermail: d.usermail,
          _id: d._id,
        
        })
      }
    })
  }

}
