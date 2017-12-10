import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../service/post.service';
import {Post} from '../../class/Post';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

// override p with div tag
// import Quill from 'quill';
// const Parchment = Quill.import('parchment');
// let Block = Parchment.query('block');

// Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
// Quill.register(Block /* or NewBlock */, true);

// import Counter from './counter';
// Quill.register('modules/counter', Counter)

// Add fonts to whitelist
// var Font = Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
// Font.whitelist = ['mirza', 'aref'];
// Quill.register(Font, true);

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  current_post: Post = null;
  form: FormGroup;
  temp = '';

  constructor(public posts: PostService,
              route: ActivatedRoute,
              fb: FormBuilder,
              public router: Router,
              public snackBar: MatSnackBar) {
      if (localStorage.user === undefined) router.navigate(['login']);
      let t_id;
      route.params.subscribe(p => {
          t_id = Number(p['id']);
          // this.currentPost = posts.posts.find(d => d.created_at == t_ca && d.id == t_id);
      });
      this.current_post = posts.getAPost(t_id);
      if (this.current_post == null) router.navigate(['post-management']);
      this.form = fb.group({editor: [this.current_post.content]});
      this.temp = this.current_post.content;
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
