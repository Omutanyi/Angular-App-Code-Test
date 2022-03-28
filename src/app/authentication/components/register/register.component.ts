import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from 'src/app/authentication/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const registerObserver = {
      next: (x: any) => console.log('successful registration '),
      error:( err: any) => console.error('Encountered registration error: ' + err),
    };
    this.authService.register(f.value).subscribe(registerObserver);
  }

}
