import { defineComponent, ref, Ref } from 'vue'

import { IImage } from '@/lib/Types'
import ImageList from '@/components/ImageList/ImageList.vue'
import Viewer from '@/components/Viewer/Viewer.vue'

export default defineComponent({
    name: 'HomePage',
    components: {
        ImageList,
        Viewer
    },
    setup () {
        const frameIndex = ref(1)
        const selectedImage: Ref<IImage | undefined> = ref(undefined)

        return {
            frameIndex,
            selectedImage
        }
    },
    methods: {
        handleSelectedImage (image: IImage) {
            this.selectedImage = image
        }
    }
})