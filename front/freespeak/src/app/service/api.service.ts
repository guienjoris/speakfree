import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




const ValidePostsUrl = 'http://localhost:3000/postsvalide';
const CreatePostUrl = 'http://localhost:3000/posts';
const ToValidePostsUrl = 'http://localhost:3000/validationposts';
const getAllUsersUrl = 'http://localhost:3000/adminusers'

export interface Post {
  post: string
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
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
  deleteUser(id:string){
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }
  update(id:string,validate:boolean){
    const config = { headers: new HttpHeaders().set('Content-Type','application/json') };
    return this.http.post(`http://localhost:3000/postsupdate/${id}`,{validate},config)
  }
  getAllUsers(){
    return this.http.get(getAllUsersUrl)
  }
}
