<template>
    <v-app>

        <v-app-bar color="teal-darken-4">
            <v-app-bar-title class="text-h4 font-weight-bold">
                DeepLive
            </v-app-bar-title>
        </v-app-bar>

        <v-main>
            <slot />
        </v-main>

    </v-app>
</template>

<script lang="ts" src="./DefaultLayout.ts" />
<style lang="css" src="./DefaultLayout.css" />