import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  baseUrl = 'https://reqres.in/api/'

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.token) {
          console.log('token stored -', user.token);
          localStorage.setItem('token', user.token);
        }
      })
    )
  }


  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.token) {
          console.log('token stored -', user.token);
          localStorage.setItem('token', user.token);
        }
      })
    )
  }
}
