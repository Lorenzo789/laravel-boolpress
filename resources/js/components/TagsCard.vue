<template>
  <div class="container text-center my-3">

    <router-link :to="{ name: 'tag-show', params: {'id' : tag.id} }">
      <h2>{{ tag.id }} - {{ tag.name }}</h2>
    </router-link>

    <div class="card my-4 p-3 mx-auto" v-for="post in tag.posts" :key="post.id">
      <div class="card-title my-2">
        <router-link class="nav-link" :to="{ name: 'posts-show', params: {'id' : post.id} }">
          <h3>{{ post.id }} - {{ post.title }}</h3>
        </router-link>
      </div>
      <div class="card-image text-center my-3">
        <img :src="post.post_image" class="w-50" alt="">
      </div>
      <div class="card-subtitle my-2">
        <span>{{ post.post_date }} - {{ tag.name }}</span>
      </div>
      <div class="card-text my-2">
        <p>{{ post.post_content }}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
    props: {
        tag: Object,
    },
}
</script>

<style>

</style>