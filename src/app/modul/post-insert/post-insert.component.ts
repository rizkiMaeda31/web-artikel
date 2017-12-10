import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../service/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Post} from '../../class/Post';

@Component({
  selector: 'app-post-insert',
  templateUrl: './post-insert.component.html',
  styleUrls: ['./post-insert.component.css']
})
export class PostInsertComponent implements OnInit {
  current_post: Post = null;
  form: FormGroup;
  title = '';
  content_text = '';
  content_html = '';
  category = '';

  constructor(public posts: PostService,
              // route: ActivatedRoute,
              fb: FormBuilder,
              public router: Router,
              public snackBar: MatSnackBar) {
      if (localStorage.user === undefined) router.navigate(['login']);
      this.form = fb.group({editor: [this.content_text]});
  }

  ngOnInit() {
  }

  @ViewChild('editor') editor: QuillEditorComponent;

  setFocus($event: any) {
      $event.focus();
  }

  contentChanged($event: any) {
      this.content_text = $event.text;
      this.content_html = this.form.controls['editor'].value;
      // console.log($event.text);
      // console.log(this.form.controls['editor'].value);
  }
  cancel() {
      this.router.navigate(['post-management']);
  }
  click() {
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
