<template>
    <div class="container">
        <div v-if="isLoading">
            <LoaderComponent />
        </div>

        <div v-else>
            <TagsCard :key="tag.id" 
                :tag="tag" 
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TagsCard from '../components/TagsCard.vue';
import LoaderComponent from '../components/LoaderComponent.vue';


export default {
    components: { TagsCard, LoaderComponent },
    data: function () {
        return {
            tag: {},
            isLoading: true,
        };
    },
    methods: {
        getTag() {
            const id = this.$route.params.id;
            // console.log(id);
            axios.get('/api/tags/' + id).then((response) => {
                console.log(response.data.results.posts);
                this.tag = response.data.results;
                this.isLoading = false;
            }).catch((error) => {
                console.warn(error);
            });
        },
    },
    created() {
        this.getTag();
    },
}
</script>

<style>

</style>