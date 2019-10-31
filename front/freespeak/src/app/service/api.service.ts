import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const ValidePostsUrl = 'http://localhost:3000/postsvalide'
const loginUrl = 'http://localhost:3000/login'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) {}
  getPostsValidate(){
    return this.http.get(ValidePostsUrl)
  }
  checkLogin(){
    return this.http.get(loginUrl)
  }
}
