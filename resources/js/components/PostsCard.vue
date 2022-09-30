<template>
    <div class="card my-4 p-3 mx-auto">
        <div class="card-title my-2">
            <router-link class="nav-link" :to="{ name: 'posts-show', params: {'id' : post.id} }">
                <h3>{{ post.id }} - {{ post.title }}</h3>
            </router-link>
        </div>
        <div class="card-image text-center my-3">
            <img :src="post.post_image" class="w-50" alt="">
        </div>
        <div class="card-subtitle my-2">
            <span>{{ post.user.name }} - {{ post.post_date }}</span>
            <span v-for="tag in post.tags" :key="tag.id">
                <router-link :to="'/tags/' + tag.id">
                    - {{ tag.name }}
                </router-link>
            </span>
        </div>
        <div class="card-text my-2">
            <p>{{ post.post_content }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        post: Object,
    },
}
</script>

<style>

</style>