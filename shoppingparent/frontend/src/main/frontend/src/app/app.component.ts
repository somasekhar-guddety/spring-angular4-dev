import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coding Starts !!';
  debugger;
  constructor(private router: Router) { }
  	loginClick= function () {
  		this.title = 'Login Starts';
        this.router.navigate(['./login']);
	};
}
