<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $posts = Post::with('user', 'tags')->paginate(10);
        
        return response()->json([
            "response" => true,
            "count" => count($posts),
            "results" => $posts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $post = Post::with('user', 'tags')->find($id);

        if ($post) {
            return response()->json([
                "response" => true,
                "results" => $post,
            ]);  
        } else return response('', 404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * search post by title
     * 
     * @param string $title
     */
    public function searchedPostByTitle($title)
    {
        $title = strtolower($title);
        $posts = Post::with('user')->where('title', 'LIKE', '%'.$title.'%')->get();

        if ( count($posts) > 0 ) {
            return response()->json([
                "response" => true,
                "count" => count($posts),
                "results" => $posts,
            ]); 
        } else return response('', 404);
    }
}
