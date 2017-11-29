import { Injectable } from '@angular/core';
import {Post} from '../class/Post';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    posts: Post[] = null;
    private apiUrl = 'https://falsesilver.me/fiesto/public/api/post-all' ;
    constructor(private http: Http) { }

    getPost(): Array<Post>  {
        if (this.posts)
        {
            console.log('ada');
            return this.posts;
        }
        const result = new Array<Post>();
        this.http.get('assets/dummy-post.json')
            .map((res: Response) => res.json())
            .subscribe(data => {
                data.sort((n1, n2) => (Date.parse(n1.created_at) > Date.parse(n2.created_at)) ? -1 : 1);
                this.posts = data;
                // console.log('gak ada');
                data.forEach(post => {
                    result.push(new Post(post.id, post.title, post.content, post.created_at));
                });
            });
        return result;
    }
    getAPost(id: number): Post {
        return (this.posts) ? this.posts.find(p => p.id === id) : null;
    }
}
