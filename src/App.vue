<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { useRoute } from 'vue-router'
import { markRaw } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout.vue'

export default class App extends Vue {
    layouts = {
        DefaultLayout: markRaw(DefaultLayout),
        EmptyLayout: markRaw(EmptyLayout)
    }
    route = useRoute()

    get layout() {
        const layoutName = this.route.meta.layout || 'DefaultLayout'

        let layout
        for (const objectEntry of Object.entries(this.layouts))
            if (objectEntry[0] === layoutName) layout = objectEntry[1]

        return layout
    }
}
</script>