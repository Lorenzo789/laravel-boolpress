<template>
    <div>
      <div class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model.trim="needle">
          <button class="btn btn-outline-success" type="submit" @click="SearchInPostsByTitle(needle)">Search</button>
        </div>
        <h1 class="text-center my-4">Recent Posts:</h1>
        <div v-if="isLoading">
            <LoaderComponent />
        </div>

        <div v-else>
            <div class="container">
                <PostsCard v-for="post in posts" :key="post.id" 
                    :post="post" 
                />
            </div>
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
            this.getPosts(needle);
        },
    },
    components: { LoaderComponent, PostsCard }
}
  </script>
  
  <style>
  
  </style>