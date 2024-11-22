import { defineComponent, PropType, ref, watch } from 'vue'

import { IImage } from '@/lib/Types'

export default defineComponent({
    name: 'ImageListComponent',
    props: {
        image: {
            default: undefined,
            required: false,
            type: Object as PropType<IImage>
        }
    },
    setup (props) {
        const frameIndex = ref(1)

        watch(() => props.image, () => frameIndex.value = 1)

        return {
            frameIndex
        }
    }
})