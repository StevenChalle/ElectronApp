import { defineComponent, onMounted, PropType, ref, watch } from 'vue'
import { debounce } from 'lodash'

import { IImage } from '@/lib/Types'

export default defineComponent({
    name: 'ImageListComponent',
    props: {
        image: {
            required: true,
            type: Object as PropType<IImage>
        }
    },
    setup (props) {
        const compressionLevel = ref(50)
        const editorMode = ref(false)
        const frameIndex = ref(1)
        const viewportDimensions = ref('1100x700')

        function fetchFrameHigherResolution(frame: number) {
            if (!props.image) return

            const imageElement = document.getElementById('image') as HTMLImageElement
            if (!imageElement) return

            const timestamp = Date.now()
            // let fullResolutionFetched = false

            // const imageMediumResolution = new Image()
            // imageMediumResolution.src = `http://home.damae-medical.com:8100/image?name=${props.image.name}&frame=${frame - 1}&compression_level=40&viewport_dimensions=${viewportDimensions.value}&timestamp=${timestamp}`
            // imageMediumResolution.onload = () => {
            //     if (!props.image || frame != frameIndex.value || fullResolutionFetched) return
            //     imageElement.src = imageMediumResolution.src;
            // }
            
            const imageFullResolution = new Image()
            imageFullResolution.src = `http://home.damae-medical.com:8100/image?name=${props.image.name}&frame=${frame - 1}&compression_level=100&viewport_dimensions=${viewportDimensions.value}&timestamp=${timestamp}`
            imageFullResolution.onload = () => {
                // fullResolutionFetched = true
                if (!props.image || frame != frameIndex.value) return
                imageElement.src = imageFullResolution.src;
            }
        }

        onMounted(() => fetchFrameHigherResolution(1))

        watch(() => props.image, () => {
            frameIndex.value = 1
            fetchFrameHigherResolution(1)
        })
        watch(() => frameIndex.value, (newVal: number) => {
            if (!editorMode.value) debounce(() => {
                if (newVal != frameIndex.value) return
                fetchFrameHigherResolution(newVal)
            }, 200)()
        })

        return {
            compressionLevel,
            editorMode,
            frameIndex,
            viewportDimensions
        }
    }
})