import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




const ValidePostsUrl = 'http://localhost:3000/postsvalide';
const CreatePostUrl = 'http://localhost:3000/posts';
const ToValidePostsUrl = 'http://localhost:3000/validationposts';

export interface Post {
  post: string
}
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  validation: boolean = true
  constructor( private http: HttpClient) {}
  getPostsValidate(){
    return this.http.get(ValidePostsUrl)
  }
  createPost(post: Post){
    const config = { headers: new HttpHeaders().set('Content-Type','application/json') };
    return this.http.post( CreatePostUrl,post, config );
  }
  getPostsToValidate(){
    return this.http.get(ToValidePostsUrl)
  }
  delete(id:string){
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
  update(id:string){
    const config = { headers: new HttpHeaders().set('Content-Type','application/json') };
    return this.http.post(`http://localhost:3000/postsupdate/${id}`, this.validation, config )
  }
}
