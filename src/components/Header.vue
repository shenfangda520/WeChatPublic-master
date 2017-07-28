<template>
    <div class="header">
        <mt-header :title="title">

                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                    <!--<mt-button @click="handleClose">关闭</mt-button>-->
                </router-link>
                <mt-button v-if="genduo" icon="more" slot="right"></mt-button>
                <mt-button  v-if="queding" slot="right">确定</mt-button>
        </mt-header>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                msg: 'App'
            }
        },
        props: {
            genduo:{
                type:Boolean,
                default:true
            },
            queding:{
                type:Boolean,
                default:false
            },
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

    .header {
        width: 100%;
        height: auto;
        position: absolute;
        top:0;
        left:0;
        z-index:1;
        .mint-header{
            height: 50px;
            font-size: 1.8rem;
        }
    }

</style>
