<template>
    <v-app>
        <div app>
            <v-toolbar dense>
                <v-toolbar-title>ORMAE</v-toolbar-title>
            </v-toolbar>

            <v-content>
                <PostCard :post-meta="postInfo"></PostCard>
            </v-content>
        </div>
    </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import PostCard from "./components/PostCard";

export default {
    name: "App",
    components: {
        // HelloWorld
        PostCard
    },
    data: () => ({
        postInfo: {}
    }),
    mounted() {
      let handle = this;
      this.$http.get('/getpost').then(response => {
        handle.postInfo = response.data;
      });
    }
};
</script>
