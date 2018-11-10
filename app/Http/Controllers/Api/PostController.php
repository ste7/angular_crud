<?php

namespace App\Http\Controllers\Api;

use App\Post;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;

class PostController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function index() {
        return response([
            'posts' => Post::all()
        ], 200);
    }

    /**
     * @param Post $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Post $post) {
        return response()->json([
            'post' => $post->load('user')
        ], 200);
    }

    /**
     * @param CreatePostRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreatePostRequest $request) {
        $post = Post::create($request->all());

        return response()->json([
            'post' => $post
        ], 200);
    }

    /**
     * @param Post $post
     */
    public function destroy(Post $post) {
        $post->delete();
    }

    /**
     * @param CreatePostRequest $request
     * @param Post $post
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function update(CreatePostRequest $request, Post $post) {
        return response([
            'post' => tap($post)->update($request->all())
        ], 200);
    }
}
