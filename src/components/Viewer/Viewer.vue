<template>
    <v-row>
        <v-col
            v-if="image"
            cols="12"
            align="center"
        >
            <v-img
                :src="`http://localhost:8100/image?name=${image.name}&frame=${frameIndex - 1}`"
                height="85vh"
            />
            <v-slider
                v-if="image.frameCount !== 1"
                v-model="frameIndex"
                width="700"
                thumb-label="always"
                :min="1"
                :max="image.frameCount"
                step="1"
            />
        </v-col>
    </v-row>
</template>

<script lang="ts" src="./Viewer.ts" />