import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




const ValidePostsUrl = 'http://localhost:3000/postsvalide';
const CreatePostUrl = 'http://localhost:3000/posts';
const ToValidePostsUrl = 'http://localhost:3000/validationposts';
const getAllUsersUrl = 'http://localhost:3000/adminusers'
const contactUrl = 'http://localhost:3000/contact'

export interface Post {
  titlepost: string
  post: string
  username: string
  userId: string
}
export interface Comment{
  answerInput: string
  username: string
  userId: string
  avatar: string
}
export interface Contact {
  usermail: string,
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private http: HttpClient) {}
  getPost(id:string){
    return this.http.get(`http://localhost:3000/posts/${id}`)
  }
  getPostsValidate(){
    return this.http.get(ValidePostsUrl)
  }
  createPost(post: Post){
    const config = { headers: new HttpHeaders().set('Content-Type','application/json') };
    return this.http.post( CreatePostUrl,post, config );
  }
  createComment (id:string, comment: Comment){
    const config = { headers: new HttpHeaders().set('Content-Type','application/json')};
    return this.http.post(`http://localhost:3000/comments/${id}`,comment, config)
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
  updateAdmin(id:string,validate:boolean){
    const config = { headers: new HttpHeaders().set('Content-Type','application/json') };
    return this.http.post(`http://localhost:3000/users/${id}`,{validate},config)
  }
  getAllUsers(){
    return this.http.get(getAllUsersUrl)
  }
  getAvatar(id:string){
    return this.http.get(`http://localhost:3000/useravatar/${id}`)
  }
  createContact(contact:Contact){
    const config = { headers: new HttpHeaders().set('Content-Type','application/json') };
    return this.http.post(contactUrl, contact,config)
  }
  getAllContact(){
    return this.http.get(contactUrl)
  }
  deleteContact(id){
    return this.http.delete(`${contactUrl}/${id}`)
  }
}
