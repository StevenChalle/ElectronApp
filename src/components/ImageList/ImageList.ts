import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ImageListComponent',
    emits: [
        'selected-image'
    ],
    setup () {
        return {
            images: [
                'VerticalImage',
                'HorizontalImage',
                'VerticalVideo',
                'HorizontalVideo',
                '3D']
        }
    },
    methods: {
        selectImage (image: string) {
            this.$emit('selected-image', image)
        }
    }
})