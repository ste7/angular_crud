import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {EditPostComponent} from "./posts/edit-post.component";
import {CreatePostComponent} from "./posts/create-post.component";

const routes: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'posts/edit/:id', component: EditPostComponent },
    { path: 'posts/create', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
