import { Component, OnInit } from '@angular/core';
import {PostService} from "./post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(
        (data) => this.posts = data
    );
  }

  destroy (id) {
    return this.postService.destroy(id).subscribe(
      () => this.getPosts(),
      err => console.log('error: ' + err)
    );
  }

}
