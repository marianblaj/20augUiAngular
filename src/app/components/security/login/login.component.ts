import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;
  message: any

  constructor(private service: LoginService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.service.login(this.username, this.password);
    console.log(this.username, this.password)
    resp.subscribe(data => {
      this.message = data;
      this.router.navigate(["/products"])
    });
  }
}
