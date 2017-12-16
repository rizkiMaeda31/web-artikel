import { Component, OnInit } from '@angular/core';
import {Post} from '../../class/Post';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-tren',
  templateUrl: './tren.component.html',
  styleUrls: ['./tren.component.css']
})
export class TrenComponent {
  posts: Post[];
  constructor(private postservice: PostService) {
      this.posts = this.postservice.sortPostByViewDesc();
  }

}
