<template>
    <v-row no-gutters>
        <v-col align="center" class="mx-auto">

            <v-btn @click="logHello()">
                Log Hello
            </v-btn>
    
            <h1>{{ msg }}</h1>
    
            <v-slider
                v-model="frame"
                step="1"
            />
            <p>{{ frame }}</p>

        </v-col>
    </v-row>
</template>

<script lang="ts" src="./HelloWorld.ts" />
<style scoped src="./HelloWorld.css" />