import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService , Post } from '../service/api.service';
import { AuthenticationService, UserDetails } from '../authentication.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  credentials: Post = {
    post: '',
    username:this.user.getUserDetails().username
  };
  status:boolean = false;
  constructor(private api: ApiService, private router: Router , private user:AuthenticationService) { }
  
  

  createPostForm(){
    if(this.credentials.post.length < 10){
      this.status = true;
      console.log(this.status)
    }else{
      this.status=false;
    }
    this.api.createPost(this.credentials).subscribe(() => {
      alert("post crée avec succès,envoyé en validation")
      this.router.navigateByUrl('/')
      
    }, (err) => {
      console.error(err);
    });
  }
  }
  


