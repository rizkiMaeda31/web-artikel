import { Component, OnInit } from '@angular/core';
import {Post} from "../../class/Post";
import {PostService} from "../../service/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css']
})
export class PostFilterComponent implements OnInit {

  postList: Post[];
  constructor(posts: PostService,
              route: ActivatedRoute,
              router: Router) {

    route.params.subscribe(p => {
      let type;
      let id;
      let currentPost: Post = null;
      type = p['type'];
      id = Number(p['data']);
      console.log('change');
      // this.currentPost = posts.posts.find(d => d.created_at == t_ca && d.id == t_id);
      currentPost = posts.getAPost(id); // .find(d => d.created_at == t_ca && d.id == t_id);
      console.log(currentPost);
      if (currentPost == null) {
        router.navigate(['home']);
      }
      else {
        switch (type){
          case 'category':
            console.log('category');
            console.log((!currentPost.category.name ? currentPost.category : currentPost.category.name));
            this.postList = posts.getPostsByCategory((!currentPost.category.name ? currentPost.category : currentPost.category.name));
            break;
          case 'month':
            let date = new Date(currentPost.published_at);
            this.postList = posts.getPostByMonth(date.getMonth());
            break;
        }
        console.log(this.postList);
      }
    });

  }

  ngOnInit() {
    console.log('init');
  }


}
