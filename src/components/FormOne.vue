<template>
    <div class="FormOne">
        <mt-field label="标题" state="success" v-model="biaoti"></mt-field>
        <mt-field label="描述" state="error" v-model="biaoti"></mt-field>
        <mt-field label="姓名" state="warning" v-model="xingming"></mt-field>
        <mt-field label="联系方式" state="success" v-model="phone"></mt-field>
        <div class="pagelocation">
            <i class="icon iconfont"></i>
            <span id="address"></span>
            <i class="icon iconfont"></i>
        </div>
        <div class="wurantypes">
            <span id="wwwwwww"></span>
            <i class="icon iconfont"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormOne',
        data () {
            return {
                biaoti: '',
                biaoti:'',
                xingming:'',
                phone:''
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

    .FormOne {

    }

</style>
