<template>
    <v-list
        activatable
        class="bg-teal-darken-1"
    >
        <p class="my-2 ml-3 font-weight-bold text-h5">Images</p>
        <v-list-item
            v-for="image in images"
            :key="image"
            :title="image"
            class="mx-2"
            @click="selectImage(image)"
        />
    </v-list>
</template>

<script lang="ts" src="./ImageList.ts" />