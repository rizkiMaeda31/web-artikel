import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../service/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuillEditorComponent} from 'ngx-quill/src/quill-editor.component';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Post} from '../../class/Post';
import {Observable} from "rxjs/Observable";


@Component({
    selector: 'app-post-insert',
    templateUrl: './post-insert.component.html',
    styleUrls: ['./post-insert.component.css']
})
export class PostInsertComponent implements OnInit {
    current_post: Post = null;
    form: FormGroup;
    myControl: FormControl = new FormControl();
    newPost: Post = new Post(0, '', '', '', 0);
    options = [];
    picker: any;
    message:string = '';
    filtered: Observable<any[]>;

    constructor(public posts: PostService,
                // route: ActivatedRoute,
                fb: FormBuilder,
                public router: Router,
                public snackBar: MatSnackBar) {
        if (localStorage.user === undefined) router.navigate(['login']);
        this.form = fb.group({editor: [this.newPost.content]});
        this.options = posts.getCategory();
        console.log(posts.getCategory());
        this.options = this.options.map(data => data.name);
        this.options = this.options.filter(function (item, pos, arr) {
            return pos == arr.indexOf(item);
        });
        this.filtered = this.myControl.valueChanges
            .startWith(null)
            .map(val => {
                return this.filter(val);
            });

    }

    getDate(): string {
        return new Date().toJSON().split('T')[0];
    }

    ngOnInit() {
    }

    @ViewChild('editor') editor: QuillEditorComponent;

    setFocus($event: any) {
        $event.focus();
    }
    filter(name: string) {
        return this.options.filter(state => {
            if (typeof(name) === 'object') {
                name = '';
            }
            else{
                name = name.toLowerCase();
            }
            return state ? (state.toLowerCase().indexOf(name) === 0) : false;
        }).slice(0,10);
    }
    contentChanged($event: any) {
        this.newPost.content = this.form.controls['editor'].value;
        // console.log($event.text);
        // console.log(this.form.controls['editor'].value);
    }

    cancel() {
        this.router.navigate(['post-management']);
    }

    leaveAutocomplete(): void{
        console.log(this.options);
        console.log(this.newPost.category);
        let item = this.options.find(item => item == this.newPost.category);
        console.log(item);
        if (!item) {
            this.message = 'new Category';
        }else{
            this.message ='';
        }
    }
    submit() {
        if (this.newPost.content == '' || this.newPost.title == '' || this.newPost.published_at == null || !this.newPost.category) {
            this.snackBar.open('Tidak boleh ada yang kosong', 'x', {
                duration: 2000,
            });
            return;
        }
        this.posts.addPost(this.newPost)
            .then(response => {
                console.log(response);
                this.newPost.title = '';
                this.newPost.category = '';
                this.newPost.content = '';
                this.newPost.published_at = null;
                this.snackBar.open('Berhasil input artikel baru', 'x', {
                    duration: 1000,
                }).afterDismissed().subscribe(() => {
                    this.router.navigate(['post-management']);
                });
            })
            .catch(response => {
                console.log(response);
                this.snackBar.open('Gagal input artikel', 'x', {
                    duration: 2000,
                });
            });
        // if(this.current_post.title)
        // this.posts.updatePost(this.current_post)
        //     .then(response => {
        //         this.snackBar.open('Update sukses', 'x', {
        //             duration: 2000,
        //         }).afterDismissed().subscribe(() => {
        //             this.router.navigate(['post-management']);
        //         });
        //     })
        //     .catch (response => {
        //         this.current_post.content = this.temp;
        //
        //         this.snackBar.open('Update Gagal', 'x', {
        //             duration: 2000,
        //         });
        //     });
    }
}
