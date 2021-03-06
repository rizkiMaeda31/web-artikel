import { Component} from '@angular/core';
import {Post} from '../../class/Post';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts : Post[];
  constructor(private postservice: PostService) {
    this.postservice.getPost().then(data => {
      this.posts = data;
      console.log(data);
    })
  }

}
