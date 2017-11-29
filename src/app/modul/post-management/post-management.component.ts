import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../class/Post';

@Component({
    selector: 'app-post-management',
    templateUrl: './post-management.component.html',
    styleUrls: ['./post-management.component.css']
    // template
})
export class PostManagementComponent implements OnInit {
    posts: Post[];

    constructor(private postservice: PostService) {
        this.posts = postservice.getPost();
    }

    ngOnInit(): void {
    }
}
