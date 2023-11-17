import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const endpoint= 'https://jsoplaceholder.typicofe.com/posts'
@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor( private http:HttpClient ) { }
    getAllPosts(): Observable<any>{
return this.http.get(endpoint);
    }
  
}
