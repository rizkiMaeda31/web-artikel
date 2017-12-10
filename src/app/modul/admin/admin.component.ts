import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    email= '';
    pass= '';
    message = '';
  constructor(
      public router: Router,
      public users: LoginService
  ) {
      if (localStorage.user !== undefined) router.navigate(['post-management']);
  }

  ngOnInit() {
  }
  onClick () {
      this.users.attempt(this.email, this.pass).then(t => {
          localStorage.user = t._body;
          this.router.navigate(['post-management']);
      })
          .catch(response =>{
              console.log(response);
              this.message = 'username atau password salah!';
          });
  }
}
