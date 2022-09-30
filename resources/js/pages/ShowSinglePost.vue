<template>
    <div class="container">
        <div v-if="isLoading">
            <LoaderComponent />
        </div>

        <div v-else>
            <PostsCard :key="post.id" 
                :post="post"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PostsCard from '../components/PostsCard.vue';
import LoaderComponent from '../components/LoaderComponent.vue';

export default {
    components: { PostsCard, LoaderComponent },
    data: function () {
        return {
            post: {},
            isLoading: true,
        };
    },
    methods: {
        getPost() {
            const id = this.$route.params.id;

            axios.get(`/api/posts/${id}`).then((response) => {
                // console.log(response.data);
                this.post = response.data.results;
                this.isLoading = false,
                console.log(this.post);
            }).catch((error) => {
                console.warn(error);
            });
        },
    },
    created() {
        this.getPost();
    },
}
</script>

<style>

</style>