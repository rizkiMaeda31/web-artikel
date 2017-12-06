import { Injectable } from '@angular/core';
import {Post} from '../class/Post';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    posts: Post[] = null;
    private apiUrl = 'https://falsesilver.me/fiesto/public/api/post-all' ;
    private apiUrlUpdate = 'https://falsesilver.me/fiesto/public/api/post/' ;
    constructor(private http: Http) { }
    updatePost(post: Post): any {
        let result = this.http.put(this.apiUrlUpdate + post.id,{
            title: post.title,
            content: post.content
        }).toPromise()
        return Promise.resolve(result);
    }
    getPost(): Array<Post>  {
        if (this.posts)
        {
            return this.posts;
        }
        const result = new Array<Post>();
        this.http.get(this.apiUrl)
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
