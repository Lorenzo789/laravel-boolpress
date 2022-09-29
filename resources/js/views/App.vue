<template>
  <div class="container">

    <HeaderContent />


    <MainComponent />

  </div>
</template>

<script>
import MainComponent from '../components/MainComponent.vue';
import HeaderContent from '../components/HeaderContent.vue';

export default {
  name: "App",
  components: { MainComponent, HeaderContent },

}
</script>

<style>

</style>