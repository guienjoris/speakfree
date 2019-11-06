import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  checked:boolean;
  adminCheck : boolean 
  users: any = [];
  delete(id: string){
    this.api.deleteUser(id).subscribe(data=>{
      console.log(data)
    })
  }
  ngOnInit() {
    console.log(this.checked)
    this.api.getAllUsers()
    .subscribe(data =>{
      for(const d of (data as any)){
        this.users.push({
          username: d.username,
          usermail: d.usermail,
          _id: d._id,
          isAdmin: d.isAdmin
        
        })
      }
    })
    
  }

}
