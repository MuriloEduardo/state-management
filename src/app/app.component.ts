import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public post$: Observable<Post>;
  public modalRef: BsModalRef;

  public text: string;

  constructor(
    private modalService: BsModalService,
    private store: Store<AppState>
  ) {
    this.post$ = this.store.select('post');
  }

  public editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  public upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  public downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  public resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  public spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  public frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
