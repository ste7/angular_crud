import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError } from 'rxjs/operators'﻿
import { throwError } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('http://127.0.0.1:8000/api/posts')
  }

  getPost(id) {
    return this.http.get('http://127.0.0.1:8000/api/posts/' + id);
  }

  destroy(id) {
    return this.http.delete('http://127.0.0.1:8000/api/posts/' + id)
  }

  create(data) {
    return this.http.post('http://127.0.0.1:8000/api/posts', data)
        .pipe(catchError(this.errorHandler));
  }

  update(id, data) {
    return this.http.put('http://127.0.0.1:8000/api/posts/' + id, data);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
