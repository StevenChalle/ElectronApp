import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import { 
    VBtn,
    VSlider
} from 'vuetify/components'
import 'vuetify/styles'

const vuetify = createVuetify({
    components: {
        VBtn,
        VSlider
    }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')