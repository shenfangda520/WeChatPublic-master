<template>
    <div class="CaseReport">
        <!--案件举报-->
        <v-header title="案件举报"></v-header>
        <div class="content">
            <!--tab切换-->
            <div class="list-box">
                <strong>案件类型:</strong>
                <mt-radio v-model="value" :options="['环保案件', '其他案件']" ></mt-radio>
            </div>
            <!--内容1-->
            <v-formo v-if="this.value=='环保案件'"></v-formo>
            <!--内容2-->
            <v-formt v-if="this.value=='其他案件'"></v-formt>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CaseReport',
        data () {
            return {
                formooff:false,
                formtoff:true,
                value:"环保案件"
            }
        },
        props(){
            return{

            }
        },
        methods: {

        },
        mounted(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    html, body {
        width: 100%;
        height: 100%;
        visibility: hidden;
    }

    .CaseReport {
        width: 100%;
        height: auto;
        .content{
            margin-top: 50px;
            height: auto;
            .list-box{
                overflow: hidden;
                width: 100%;
                height: 4.2rem;
                border-bottom: solid 1px #ccc;
                strong{
                    text-align: left;
                    width: 10rem;
                    font-size: 18px;
                    display: block;
                    line-height: 4.2rem;
                    float: left;
                    margin-left: 18px;
                }
                .mint-radiolist{
                    position: absolute;
                    left:80px;
                    width: 300px;
                    float: left;
                    display: flex;

                }
            }

        }
    }
</style>
