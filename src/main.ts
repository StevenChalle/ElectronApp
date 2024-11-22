import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import {
    VApp,
    VAppBar,
    VAppBarTitle,
    VBtn,
    VCol,
    VContainer,
    VImg,
    VList,
    VListItem,
    VMain,
    VRow,
    VSlider
} from 'vuetify/components'
import 'vuetify/styles'

const vuetify = createVuetify({
    components: {
        VApp,
        VAppBar,
        VAppBarTitle,
        VBtn,
        VCol,
        VContainer,
        VImg,
        VList,
        VListItem,
        VMain,
        VRow,
        VSlider
    }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')