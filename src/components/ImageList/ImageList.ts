import { defineComponent } from 'vue'

import { IImage } from '@/lib/Types'

export default defineComponent({
    name: 'ImageListComponent',
    emits: [
        'selected-image'
    ],
    setup () {
        return {
            images: [{
                name: 'verticalImage',
                frameCount: 1
            }, {
                name: 'horizontalImage',
                frameCount: 1
            }, {
                name: 'verticalVideo',
                frameCount: 87
            }, {
                name: 'horizontalVideo',
                frameCount: 138
            }]
        }
    },
    methods: {
        selectImage (image: IImage) {
            this.$emit('selected-image', image)
        }
    }
})