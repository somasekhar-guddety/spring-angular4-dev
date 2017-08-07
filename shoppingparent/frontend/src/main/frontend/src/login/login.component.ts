import { LoginService } from './login.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component ({
  selector: 'app-login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent {
  title = 'Login Component';
  username : string;
  password : string;
  user : User = new User(this.username, this.password);
  retValue = 'nothing';
  constructor (private loginService: LoginService, private router: Router) {
  }
  submitLoginForm() {
  let user1 = new User(this.username, this.password);
  	console.log(user1);
    let observable = this.loginService.callAPI(user1);
    observable.subscribe(val => {
    	console.log(val);
    	if (val.username === 'Chetan') {
    		this.router.navigate(['./products']);
    	} else {
    		this.retValue = 'Invalid Login';
    	}
    	
    });
  }
  }
  
  export class User {
  	username : string;
  	password : string;
  	
  	constructor (name : string, pawd: string) {
  		this.username = name;
  		this.password = pawd;
  	}
  }
