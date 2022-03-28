import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/authentication/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthserviceService, private router: Router,) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const loginObserver = {
      next: (x: any) => console.log('successful login '),
      error:( err: any) => console.error('Encountered rror: ' + err),
    };
    this.authservice.login(f.value).subscribe(loginObserver);
    this.router.navigate(['/']);
  }

}
