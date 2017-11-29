import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../service/post.service';
import {Post} from '../../class/Post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  current_post: Post = null;

  constructor(posts: PostService,
              route: ActivatedRoute) {
      let t_id;
      route.params.subscribe(p => {
          t_id = Number(p['id']);
          // this.currentPost = posts.posts.find(d => d.created_at == t_ca && d.id == t_id);
      });
      this.current_post = posts.getAPost(t_id);
  }

  ngOnInit() {
  }

}
