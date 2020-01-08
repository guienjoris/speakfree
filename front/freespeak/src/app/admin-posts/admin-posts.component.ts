import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {
  posts : any = [];
  validate : boolean = true;
  constructor(private api: ApiService, private router: Router) { }

  validation(id : string){
    this.api.update(id,this.validate).subscribe(data=>{ 
      console.log(data)
      location.reload(); 
    })
    
  }
  delete(id: string){
    this.api.delete(id).subscribe(data=>{
      console.log(data)
      location.reload();
    })
  }
  ngOnInit() {
    this.api.getPostsToValidate()
    .subscribe(data =>{
      for(const d of (data as any)){
        this.posts.push({
          titlepost: d.titlepost,
          post: d.post,
          username: d.username,
          date: d.date,
          _id: d._id
        })
      }
      console.log(this.posts.length)
      
    })
  }
  

}
