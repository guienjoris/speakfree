import { Component, OnInit } from '@angular/core';
import { ApiService , Comment } from '../service/api.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-posttalk',
  templateUrl: './posttalk.component.html',
  styleUrls: ['./posttalk.component.scss']
})
export class PosttalkComponent implements OnInit {
  credentials: Comment ={
    answerInput: '',
    username: this.user.getUserDetails().username ,
    userId: this.user.getUserDetails()._id,
    avatar: this.user.getUserDetails().avatar
  }


  private routeSub : Subscription
  constructor(private api: ApiService, private route: ActivatedRoute, private user: AuthenticationService, private router: Router) { 
    
  }
  id: string;
  titlepost:string;
  post: string;
  username: string;
  date: string;
  userId: string;
  avatar: string;
  inputStatus: boolean = false;
  comments: any = [];

  
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
      for( let d of ( data.comments as any)){
        this.comments.push({
        answerInput: d.answerInput,
        username: d.username,
        avatar: d.avatar,
        userId: d.userId
        })
      }
      this.comments.reverse();
      
      this.api.getAvatar(this.userId).subscribe((data : any)=>{
        this.avatar = "http://localhost:3000/" + data[0].avatar
        console.log(this.avatar)
      })
    })

  }
  answerFunction(){
    if(this.inputStatus=== true){
      this.inputStatus = false
    }else{
      this.inputStatus = true;
    }
  }
  createCommentForm(){
    console.log(this.credentials)
    this.api.createComment(this.id,this.credentials).subscribe(()=>{
      this.ngOnInit();
    })
  }
  
}
