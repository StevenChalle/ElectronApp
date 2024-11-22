import { defineComponent, ref } from 'vue'

import ImageList from '@/components/ImageList/ImageList.vue'
import Viewer from '@/components/Viewer/Viewer.vue'

export default defineComponent({
    name: 'HomePage',
    components: {
        ImageList,
        Viewer
    },
    setup () {
        return {
            image: ref('')
        }
    },
    methods: {
        handleSelectedImage (image: string) {
            this.image = image
        }
    }
})