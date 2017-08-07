import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers  } from '@angular/http';
import { User } from './login.component';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
user : User;
constructor(private http: Http) { }
  callAPI(user : User): Observable<User> {
  		console.log(user);
  		let isValid = '';
  		 var headers = new Headers();
  		 headers.append('Content-Type', 'application/json');
  		  //headers.append('Access-Control-Allow-Headers', 'Content-Type');
  		  //headers.append('Access-Control-Allow-Origin', '*');
  		   headers.append( 'Accept', 'application/json;charset=UTF-8');
    	return this.http.post('http://localhost:8080/login', user, {
        headers: headers
      }).map((res:Response) => res.json())
     
  }
}
