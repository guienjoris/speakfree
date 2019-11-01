import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const ValidePostsUrl = 'http://localhost:3000/postsvalide'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) {}
  getPostsValidate(){
    return this.http.get(ValidePostsUrl)
  }
  
}
