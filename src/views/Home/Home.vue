<template>
    <v-row no-gutters>

        <v-col cols="2">
            <ImageList
                style="height: 93vh;"
                @selected-image="handleSelectedImage"
            />
        </v-col>

        <v-col cols="10" class="bg-teal-lighten-2">
            <Viewer :image="image" />
        </v-col>

    </v-row>
</template>


<script lang="ts" src="./Home.ts" />