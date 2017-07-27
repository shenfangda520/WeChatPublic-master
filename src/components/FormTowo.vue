<template>
    <div class="FormTowo">
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'FormTowo',
        data () {
            return {
                msg: 'App'
            }
        },
        props: {
            active: {
                type: Number,
                default: 0
            },
            title: {
                type: String,
                default: ''
            }
        },
        mounted(){

        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    html, body {
        width: 100%;
        height: 100%;
    }

    .FormTowo {
        
    }

</style>
