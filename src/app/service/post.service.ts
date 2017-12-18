import { Injectable } from '@angular/core';
import {Post} from '../class/Post';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    posts: Post[] = null;
    private apiUrl = 'https://falsesilver.me/fiesto/public/api/post-all' ;
    private apiUrlUpdate = 'https://falsesilver.me/fiesto/public/api/post/' ;
    private apiUrlAdd = 'https://falsesilver.me/fiesto/public/api/post/add' ;
    isTren = false;

    constructor(private http: Http) { }
    updatePost(post: Post): any {
        const result = this.http.post(this.apiUrlUpdate + post.id + '/view', {}).toPromise();
        return Promise.resolve(result);
    }

    addPost(post: Post): any {
        return Promise.resolve(this.http.post(this.apiUrlAdd, post).toPromise());
    }
    getCategory(): Array<string> {
        return this.posts ? this.posts.map((data) => {
            return data.category;
        }) : [];
    }
    getPost(): Array<Post> {
        if (this.posts && !this.isTren) {
            return this.posts;
        }
        this.isTren = false;
        const result = new Array<Post>();
        this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .subscribe(data => {
                data.sort((n1, n2) => (Date.parse(n1.created_at) > Date.parse(n2.created_at)) ? -1 : 1);
                this.posts = data;
                // console.log('gak ada');
                data.forEach(post => {
                    result.push(new Post(post.id, post.title,
                        post.content, post.category.name,
                        post.view, post.created_at, post.published_at));
                });
            });
        return result;
    }
    getAPost(id: number): Post {
        return (this.posts) ? this.posts.find(p => p.id === id) : null;
    }
    getPostsByCategory(category: string): Post[]{
        return (this.posts) ? this.posts.filter(p => (!p.category.name ? p.category : p.category.name) == category) : [];
    }
    getPostByMonth(month: number): Post[]{
        return (this.posts) ? this.posts.filter(p => (new Date(p.published_at)).getMonth() === month) : [];
    }
    deletePost(id: number): any {
        return Promise.resolve(this.http.delete(this.apiUrlUpdate + id).toPromise());
    }
    sortPostByViewDesc(): Array<Post> {
        if (this.posts && this.isTren) {
            return this.posts;
        }
        this.isTren = true;
        const result = new Array<Post>();
        this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .subscribe(data => {
                data.sort((n1, n2) => (Number.parseInt(n1.view) > Number.parseInt(n2.view)) ? -1 : 1);
                this.posts = data;
                // console.log('gak ada');
                data.forEach(post => {
                    result.push(new Post(post.id, post.title,
                        post.content, post.category.name,
                        post.view, post.created_at, post.published_at));
                });
            });
        return result;
    }
}
