import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from "./post.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id: Number;

  public post = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPost();
    });
  }

  getPost() {
    this.postService.getPost(this.id).subscribe(
      (data) => this.post = data
    );
  }

  update(postForm: NgForm) : void {
    this.postService.update(this.id, postForm.value).subscribe();
  }

}
