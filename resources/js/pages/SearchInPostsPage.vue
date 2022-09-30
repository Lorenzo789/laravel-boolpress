<template>
    <div class="container">
        <div class="d-flex my-4" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model.trim="needle">
            <button class="btn btn-outline-success" type="submit" 
                @click="SearchInPostsByTitle(needle)" v-on:keyup.enter="SearchInPostsByTitle(needle)"
            >
                Search
            </button>
        </div>

        <h1 class="text-center my-4">Here the results of your research:</h1>

        <div class="container">
            <PostsCard v-for="post in posts" :key="post.id" 
                :post="post" 
            />
        </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import LoaderComponent from '../components/LoaderComponent.vue';
import PostsCard from '../components/PostsCard.vue';
  export default {
    data: function () {
        return {
            needle: "",
            posts: [],
            isLoading: true,
        };
    },
    methods: {
        getPosts(needle) {
            axios.get("/api/posts/search/" + needle).then((response) => {
                console.log(this.posts);
                this.posts = response.data.results;
                this.isLoading = false;
            }).catch((error) => {
                console.warn(error);
            });
        },
        SearchInPostsByTitle(needle) {
            if (needle !== '') { 
                this.getPosts(needle);
            }
        },
    },
    components: { LoaderComponent, PostsCard }
}
  </script>
  
  <style>
  
  </style>