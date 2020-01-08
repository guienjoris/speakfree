import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-post-valide',
  templateUrl: './admin-post-valide.component.html',
  styleUrls: ['../admin-posts/admin-posts.component.scss']
})
export class AdminPostValideComponent implements OnInit {

  posts : any = [];
  constructor(private api: ApiService, private router: Router) { }

  
  delete(id: string){
    this.api.delete(id).subscribe(data=>{
      console.log(data)
      location.reload();
    })
  }
  ngOnInit() {
    this.api.getPostsValidate()
    .subscribe(data =>{
      for(const d of (data as any)){
        this.posts.push({
          post: d.post,
          titlepost: d.titlepost,
          username: d.username,
          date: d.date,
          _id: d._id
        })
      }
    })
  }

}
