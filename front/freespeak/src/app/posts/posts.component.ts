import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private api: ApiService) { }
  posts: any = [];
  
  ngOnInit() {
    this.api.getPostsValidate()
    .subscribe(data =>{
      for(const d of (data as any)){
        let dateString= d.date;
        let newDate= new Date(dateString)
        this.posts.push({
          post: d.post,
          username: d.username,
          date: `Date : ${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`
        })
      }
    })
  }

}
