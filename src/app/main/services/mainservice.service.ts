import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  private baseUrl = 'https://reqres.in/api/'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl + 'users')
    .pipe(
      map((response: any) => {
        const users = response.data;
        if (users) {
          console.log('users', users);
        }
      })
    )

  }
}
