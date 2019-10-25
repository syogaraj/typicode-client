<template>
    <v-row dense>
        <v-col cols="3" class="pa-5" v-for="postData in postMeta" :key="postData.postId">
            <v-hover v-slot:default="{ hover }">
                <v-card max-width="300" :elevation="hover ? 12 : 2">
                    <v-card-text>
                        <div>
                            <v-icon class="pr-2">dvr</v-icon>
                            Post Name: {{ postData.POST_ID }}
                        </div>
                        <div class="text--primary">
                            <v-icon class="pr-2">message</v-icon>
                            Comments: {{ postData.COUNT }}
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            text
                            color="primary accent-4"
                            @click="$emit('show-post-info', postData.POST_ID)"
                        >Show more</v-btn>
                    </v-card-actions>
                </v-card>
            </v-hover>
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