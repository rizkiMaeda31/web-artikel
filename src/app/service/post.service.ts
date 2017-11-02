import { Injectable } from '@angular/core';
import {Post} from '../class/Post';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class PostService {
    posts: Post[] = null;
    private apiUrl = 'https://falsesilver.me/fiesto/public/api/post-all' ;
    constructor(private http: Http) { }

    async getPost(): Promise< Array<Post> >  {
        const result = new Array<Post>();
        await this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .subscribe(data => {
                console.log(data);
                data.forEach(post => {
                    result.push(new Post(post.title, post.content, post.created_at));
                });
            });
        return Promise.resolve(result);
    }
}
