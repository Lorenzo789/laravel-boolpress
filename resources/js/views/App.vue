<template>
  <div>

    <HeaderContent />

    <!-- qui inserisco i contenuti che voglio visualizzare con le rotte vue router -->
    <router-view> 

    </router-view>
    <!-- qui inserisco i contenuti che voglio visualizzare con le rotte vue router -->

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