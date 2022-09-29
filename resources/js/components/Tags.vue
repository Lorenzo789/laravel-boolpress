<template>
  <div class="container text-center my-3">
    <router-link :to="'/tags/' + tag.id">
      <h2>{{ tag.id }} - {{ tag.name }}</h2>
    </router-link>
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