import { Component } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http) {
  }

  loginGithub() {
    console.log("here")
    this.http.get('localhost:5000/auth/github').subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
