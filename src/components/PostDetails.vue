<template>
    <div>
        <v-dialog v-model="dialog" max-width="600px" @input="restore()">
            <v-list>
                <v-subheader>User's view on this post</v-subheader>
                <v-list-item-group
                    v-for="(detail, index) in postDetails"
                    :key="index"
                    class="pl-5 pb-5"
                >
                    <!-- <v-list-item-content> -->
                    <v-list-item-title>
                        <span>
                            <v-subheader class="pa-1">
                                <v-icon color="indigo" class="pr-2">person_pin</v-icon>
                                {{ detail.NAME }}:
                            </v-subheader>
                        </span>
                    </v-list-item-title>
                    <v-list-item-subtitle
                        v-html="detail.BODY"
                        style="background: #dad9d9; border-radius: 1vw; padding: 1vw;"
                    ></v-list-item-subtitle>
                    <!-- </v-list-item-content> -->
                </v-list-item-group>
            </v-list>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        postID: {
            type: Number,
            default: () => 0
        },
        postDetails: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            dialog: true
        };
    },
    methods: {
        restore() {
            this.$emit("restore");
        }
    }
};
</script>

<style>
</style>