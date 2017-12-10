import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../class/Post';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-post-management',
    templateUrl: './post-management.component.html',
    styleUrls: ['./post-management.component.css']
    // template
})
export class PostManagementComponent implements OnInit {
    posts: Post[];

    constructor(public postservice: PostService,
                public router: Router,
                public snackbar: MatSnackBar
    ) {
        if (localStorage.user === undefined) router.navigate(['login']);
        this.posts = postservice.getPost();
    }

    ngOnInit(): void {
    }

    deleteArticle(id): void {
        if (this.postservice.deletePost(id)) {
            this.snackbar.open('Artikel berhasil dihapus', 'X', {duration: 1000})
                         .afterDismissed()
                         .subscribe(() => {
                             this.router.navigate(['post-management']);
                         });
        }
    }
}
