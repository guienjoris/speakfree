import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService , Post } from '../service/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  credentials: Post = {
    post: ''
  };
  status:boolean = false;
  constructor(private api: ApiService, private router: Router) { }
  
  

  createPostForm(){
    if(this.credentials.post.length < 10){
      this.status = true;
      console.log(this.status)
    }else{
      this.status=false;
    }
    this.api.createPost(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/create-post')
      
    }, (err) => {
      console.error(err);
    });
  }
  }
  


