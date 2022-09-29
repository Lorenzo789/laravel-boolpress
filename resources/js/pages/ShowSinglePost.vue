<template>
    <div class="container">
        <Posts :key="post.id" 
            :post="post"
        />
    </div>
</template>

<script>
import axios from 'axios';
import Posts from '../components/Posts.vue';

export default {
    components: { Posts },
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