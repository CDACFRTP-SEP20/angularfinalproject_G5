/*import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  registerUser(user):Observable<any>{
    return this.http.post('http://localhost:8082/users', user)
  }
}
*/