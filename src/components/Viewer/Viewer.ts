import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ImageListComponent',
    props: {
        image: {
            required: true,
            type: String
        }
    }
})