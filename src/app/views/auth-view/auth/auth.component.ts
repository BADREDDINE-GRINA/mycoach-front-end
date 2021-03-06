import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm){
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode){
    }
    else{
      this.authService.signup(email, password).subscribe(
        resData => {
          console.log(resData);
        }, error => {
          console.log(error);
        }
      );
    }

    form.reset();
  }

}
