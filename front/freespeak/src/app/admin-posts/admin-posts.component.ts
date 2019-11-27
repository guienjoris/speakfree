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
  calculLength : boolean = false;
  constructor(private api: ApiService, private router: Router) { }

  validation(id : string){
    console.log(id)
    this.api.update(id,this.validate).subscribe(data=>{
      console.log(data)
    })
  }
  delete(id: string){
    this.api.delete(id).subscribe(data=>{
      console.log(data)
    })
  }
  ngOnInit() {
    this.api.getPostsToValidate()
    .subscribe(data =>{
      for(const d of (data as any)){
        this.posts.push({
          post: d.post,
          username: d.username,
          date: d.date,
          _id: d._id
        })
        if(d.post.length > 300){
          this.calculLength = true;
        }
      }
      
    })
  }
  

}
