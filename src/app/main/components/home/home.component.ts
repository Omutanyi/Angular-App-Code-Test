import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MainserviceService } from '../../services/mainservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private baseUrl = 'https://reqres.in/api/'
  users: any;
  userList:any[] = [];
  page = 1;

  constructor(private mainService: MainserviceService, private http: HttpClient) { 
    http.get(this.baseUrl + 'users?page=2')
      .subscribe(response=>{
        console.log('ts res...', response);
        this.users=response;
        this.userList = this.users.data;
      })
  }

  ngOnInit(): void {
    // const params = this.getRequestParams(this.page)
  }

  // getRequestParams( page: number): any {
  //   let params: any = {};
  //   if (page) {
  //     params[`page`] = page - 1;
  //   }
  //   return params;
  // }

}
