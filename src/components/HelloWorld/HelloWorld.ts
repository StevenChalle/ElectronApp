import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'HelloWorldComponent',
    props: {
        msg: {
            required: true,
            type: String
        }
    },
    setup () {
        console.log('Hello World Component setting up')

        return {
            frame: ref(0)
        }
    },
    methods: {
        logHello () {
            console.log('Hello World set up !')
        }
    }
})