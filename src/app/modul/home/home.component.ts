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
      // data.sort((n1,n2) => (Date.parse(n1.created_at) > Date.parse(n2.created_at)) ? -1 : 1);
      console.log(data);
    })
  }
  onclicktitle(): void{

  }
}
