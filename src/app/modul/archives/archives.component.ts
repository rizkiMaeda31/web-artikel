import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../class/Post';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  currentPost: Post = null;

  constructor(posts: PostService,
              route: ActivatedRoute) {
    let t_ca;
    let t_id;
    route.params.subscribe(p => {
        t_ca = p['date'];
        t_id = Number(p['id']);
        // this.currentPost = posts.posts.find(d => d.created_at == t_ca && d.id == t_id);
    });
    // console.log(posts.getPost());
    this.currentPost = posts.getPost().find(d => d.created_at == t_ca && d.id == t_id);
    console.log(this.currentPost);
  }

  ngOnInit() {
  }

}