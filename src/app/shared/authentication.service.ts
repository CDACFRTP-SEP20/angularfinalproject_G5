import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userrole } from '../models/userrole';
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private userSrv:UserService) { }

  loginStatus = new BehaviorSubject<boolean>(this.isUserLoggedIn())
  username = new BehaviorSubject<String>(sessionStorage.getItem('username') || '')
  userrole = new BehaviorSubject<String>(sessionStorage.getItem('userrole') || '')

  authenticate(username:any, password:any) {
    console.log(username);

    return this.http.post<any>('http://localhost:8008/auth/authenticate',
      { username, password })
      .pipe(
        map((userData => {
          sessionStorage.setItem('username', userData.username)
          sessionStorage.setItem('userrole', userData.roles)



          sessionStorage.setItem('token', 'Bearer ' + userData.token)
          ///we need to extract username and userrole from token with additional tools

          //emit values so that subscriber will get updated value
          this.loginStatus.next(true)
          this.username.next(sessionStorage.getItem('username')  || '')
          this.userrole.next(sessionStorage.getItem('userrole')  || '')


          console.log('inside auth', userData)
          return userData
        })
        )
      )
  }

  loginWithAuthentication(email:string){
    return this.http.post<any>("http://localhost:8008/auth/otpauthenticate",email).
    pipe(map(userData=>{
      sessionStorage.setItem('email', userData.username)

        sessionStorage.setItem('token', 'Bearer ' + userData.token)
        ///we need to extract username and userrole from token with additional tools

        //emit values so that subscriber will get updated value
        this.loginStatus.next(true)
        this.userrole.next(sessionStorage.getItem('userrole')  || '')
        this.username.next(sessionStorage.getItem('email')  || '')
        console.log('inside auth', userData)
        return userData

    }))
  }



  //authentication logic
  //will decide whether user is logged or not
  //will get to know role and can be used to return in getROle()

  isUserLoggedIn() {
    let username = sessionStorage.getItem('username')
    return !(username === null)
  }
  getRole() {
    return sessionStorage.getItem('userrole')
  }
  logout() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('userrole')

    //emit values
    this.loginStatus.next(false)
    this.username.next('')
    this.userrole.next('')
  }
}
