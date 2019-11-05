import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService , Post } from '../service/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent  {
  credentials: Post = {
    post: ''
  };
  constructor(private api: ApiService, private router: Router) { }

  createPostForm(){

    this.api.createPost(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/create-post')
    }, (err) => {
      console.error(err);
    });
  }
  }
  


