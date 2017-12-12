import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../service/post.service';
import {Post} from '../../class/Post';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {map} from "@angular/cdk/rxjs";
import {startWith} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/startWith";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  myControl: FormControl;
  current_post: Post = null;
  form: FormGroup;
  temp = '';
  options = [];
  filtered: Observable<any[]>;
  tempDate: Date;
  constructor(public posts: PostService,
              route: ActivatedRoute,
              fb: FormBuilder,
              public router: Router,
              public snackBar: MatSnackBar,
            private postService: PostService) {
      if (localStorage.user === undefined) {
          router.navigate(['login']);
      }

      let t_id;
      route.params.subscribe(p => {
          t_id = Number(p['id']);
          // this.currentPost = posts.posts.find(d => d.created_at == t_ca && d.id == t_id);
      });
      this.current_post = posts.getAPost(t_id);
      console.log(this.current_post);
      if (this.current_post == null){
          router.navigate(['post-management']);
      }
      this.form = fb.group({editor: [this.current_post.content]});
      this.temp = this.current_post.content;
      this.tempDate = this.current_post.published_at;
      this.options = postService.getCategory();
      this.options = this.options.map(data => data.name);
      this.options = this.options.filter(function(item, pos, arr){
          return pos == arr.indexOf(item);
      });
      this.myControl = new FormControl();
      this.filtered = this.myControl.valueChanges
          .startWith(null)
          .map(val => {
              return this.filter(val);
          });
  }

    filter(name: string) {
        return this.options.filter(state => {
            if (typeof(name) === 'object') {
                name = '';
            }
            else{
                name = name.toLowerCase();
            }
         return state ? (state.toLowerCase().indexOf(name) === 0) : false
        });
    }
  ngOnInit() {
  }

  @ViewChild('editor') editor: QuillEditorComponent;

  setFocus($event: any) {
      $event.focus();
  }

  contentChanged($event: any) {
      this.current_post.content = this.form.controls['editor'].value;
      const contentHTML = this.form.controls['editor'].value;
      const contentText = $event.text;
      // console.log($event.text);
  }
  cancel() {
      this.router.navigate(['post-management']);
  }
  click() {
      // if(this.current_post.title)
      this.current_post.published_at = this.tempDate;
      this.posts.updatePost(this.current_post)
          .then(response => {
              this.snackBar.open('Update sukses', 'x', {
                  duration: 2000,
              }).afterDismissed().subscribe(() => {
                  this.router.navigate(['post-management']);
              });
          })
      .catch (response => {
          this.current_post.content = this.temp;

          this.snackBar.open('Update Gagal', 'x', {
              duration: 2000,
          });
      });
  }
}
