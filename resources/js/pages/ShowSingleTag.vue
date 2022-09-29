<template>
    <div class="container">
        <TagsCard :key="tag.id" 
            :tag="tag" 
        />
    </div>
</template>

<script>
import axios from 'axios';
import TagsCard from '../components/TagsCard.vue';


export default {
    components: { TagsCard },
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
                console.log(response.data.results);
                this.tag = response.data.results;
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