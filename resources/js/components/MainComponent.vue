<template>
    <main>
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
    
            <div class="container">
                <h2 class="text-center my-4">Tags:</h2>
    
                <TagsCard v-for="tag in tags" :key="tag.id" 
                    :tag="tag" 
                />
            </div>
        </div>

    </main>
</template>

<script>
import axios from 'axios';
import PostsCard from './PostsCard.vue';
import TagsCard from './TagsCard.vue';
import LoaderComponent from './LoaderComponent.vue';

export default {
    components: { TagsCard, PostsCard, LoaderComponent },
    data: function () {
        return {
            posts: [],
            currentPage: "",
            nextPage: "",
            lastPage: "",
            isLoading: true,
            tags: [],
        };
    },
    methods: {
        getPosts() {
            axios.get("/api/posts", {}).then((response) => {
                // console.log(response.data);
                this.posts = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page_url;
                this.nextPage = response.data.results.next_page_url;
                this.isLoading = false;
            }).catch((error) => {
                console.warn(error);
            });
        },
        getTags() {
            axios.get("/api/tags", {}).then((response) => {
                // console.log(response.data);
                this.tags = response.data.data;
            }).catch((error) => {
                console.warn(error);
            });
        }
    },
    created() {
        this.getPosts();
        this.getTags();
    },
}
</script>

<style>

</style>