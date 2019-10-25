<template>
    <v-row dense>
        <v-col cols="3" class="pa-5" v-for="postData in postMeta" :key="postData.postId">
            <v-card max-width="400">
                <v-card-text>
                    <div>Post Name: {{ postData.POST_ID }}</div>
                    <div class="text--primary">Comments: {{ postData.COUNT }}</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        text
                        color="primary accent-4"
                        @click="$emit('show-post-info', postData.POST_ID)"
                    >Show more</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        postMeta: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style>
</style>