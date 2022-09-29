<template>
    <main>
        <h1 class="text-center my-4">Recent Posts:</h1>

        <div class="container">
            <Posts v-for="post in posts" :key="post.id" 
                :post="post" 
            />
        </div>

        <div>
            <h2 class="text-center my-4">Tags:</h2>

            <Tags v-for="tag in tags" :key="tag.id" 
                :tag="tag" 
            />
        </div>

    </main>
</template>

<script>
import axios from 'axios';
import Posts from './Posts.vue';
import Tags from './Tags.vue';

export default {
    components: { Tags, Posts },
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
                console.log(this.posts);
            }).catch((error) => {
                console.warn(error);
            });
        },
        getTags() {
            axios.get("/api/tags", {}).then((response) => {
                // console.log(response.data);
                this.tags = response.data.data;
                console.log(this.tags);
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