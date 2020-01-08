import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posttalk',
  templateUrl: './posttalk.component.html',
  styleUrls: ['./posttalk.component.scss']
})
export class PosttalkComponent implements OnInit {
  private routeSub : Subscription
  constructor(private api: ApiService, private route: ActivatedRoute) { }
  id: string;
  titlepost:string;
  post: string;
  username: string;
  date: string;
  userId: string;
  avatar: string;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.api.getPost(this.id).subscribe((data : any)  => { 
      console.log(data)
      this.titlepost= data.titlepost;
      this.post= data.post;
      this.username = data.username;
      this.date= data.date;
      this.userId = data.userId;
      console.log(this.userId)
      this.api.getAvatar(this.userId).subscribe((data : any)=>{
        this.avatar = "http://localhost:3000/" + data[0].avatar
        console.log(this.avatar)
      })
    })
    

  }

}
