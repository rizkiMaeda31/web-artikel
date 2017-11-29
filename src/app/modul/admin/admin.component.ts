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
    message = 'test';
  constructor(
      public router: Router,
      public users: LoginService
  ) { }

  ngOnInit() {
  }
  onClick () {
      // this.users.attempt(this.email, this.pass).then(t => {
      //     if (t._body === '[]') {
      //         this.message = 'username atau password salah!';
      //     }else {
      //         this.router.navigate(['post-management']);
      //     }
      // });
      this.router.navigate(['post-management']);
  }
}
