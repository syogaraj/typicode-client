<template>
    <v-app>
        <div app>
            <v-toolbar dense :dark="dark">
                <v-toolbar-title>ORMAE</v-toolbar-title>
            </v-toolbar>

            <v-content>
                <PostCard :post-meta="postInfo" @show-post-info="fetchPostDetails(...arguments)"></PostCard>
                <PostDetails
                    :post-id="postID"
                    :post-details="postDetails"
                    v-if="postID > 0"
                    @restore="restore()"
                ></PostDetails>
            </v-content>
        </div>
    </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import PostCard from "./components/PostCard";
import PostDetails from "./components/PostDetails";

export default {
    name: "App",
    components: {
        // HelloWorld
        PostCard,
        PostDetails
    },
    data: () => ({
        postInfo: [],
        postID: 0,
        postDetails: [],
        dark: true
    }),
    methods: {
        fetchPostDetails(postID) {
            let handle = this;
            //eslint-disable-next-line
            console.log(postID);
            this.postID = postID;
            this.$http.get("/getPostDetails?ID=" + postID).then(response => {
                handle.postDetails = response.data;
            });
        },
        restore() {
            this.postID = 0;
        }
    },
    mounted() {
        let handle = this;
        this.$http.get("/getpost").then(response => {
            handle.postInfo = response.data;
        });
    }
};
</script>
