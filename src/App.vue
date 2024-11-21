<template>
    <div id="app">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

@Options({
    components: {
        HelloWorld,
    }
})
export default class App extends Vue {}
</script>

<style>
nav {
    margin-bottom: 1rem;
}
nav a {
    margin: 0 0.5rem;
    text-decoration: none;
}
</style>