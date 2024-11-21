<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about" style="margin-left: 5px;">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class App extends Vue {}
</script>