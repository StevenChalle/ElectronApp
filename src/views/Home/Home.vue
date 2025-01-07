<template>
    <v-row no-gutters>

        <v-col cols="2">
            <ImageList
                style="height: 93vh;"
                class="bg-teal-darken-1"
                @selected-image="handleSelectedImage"
            />
        </v-col>

        <v-col cols="10" class="bg-teal-lighten-2">
            <Viewer v-if="selectedImage" :image="selectedImage" />
        </v-col>

    </v-row>
</template>


<script lang="ts" src="./Home.ts" />