<template>
    <div class="FormTowo">
        <mt-field label="标题" state="" v-model="QTbiaoti" placeholder="4-25个字"></mt-field>
        <div class="neirong"><textarea  placeholder="内容,不超过700字" class="text"></textarea></div>
        <mt-field label="姓名" state="" v-model="QTxingming" placeholder="(仅管理员可看)"></mt-field>
        <mt-field label="联系方式" state="" v-model="QTphone" placeholder="(仅管理员可看)"></mt-field>
        <div class="xiantiao"></div>
        <div class="imagesQ">
            <div class="shangchuan">
                <i class="iconfont icon-tianjia"></i>
            </div>
        </div>
        <div class="button">
            <button>发表</button>
        </div>
        <div class="youqing">
            <p>友情提示：</p>
            <p>与主题有关优质讨论会被加精</p>
            <p>无关内容会被删除</p>
            <p>发广告或羞羞的内容都会被禁言的</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormTowo',
        data () {
            return {
                QTbiaoti: '',
//                QTneirong:'',
                QTxingming:'',
                QTphone:''
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
        .neirong{
            overflow: hidden;
            width: 100%;
            border:solid 1px #ccc;
            .text{
                display: inline-block;
                width: 92%;
                height:200px;
                border: none;
                margin: 0 auto;
                font-size: 18px;
            }
        }
        .xiantiao{
            width: 100%;
            height: 0;
            border-bottom: 1px solid #ccc;
            margin-bottom: 5px;
        }
        .button{
            width: 100%;
            height:60px;
            button{
                font-size: 18px;
                width: 90px;
                height:40px;
                color: #fff;
                background:#35acfc;
                border:none;
                border-radius: 5px;
                margin-left:230px;
            }
        }
        .youqing{
            width: 100%;
            height:auto;
            padding: 50px 0;
            font-size: 16px;
            text-align: left;
            background:#f5f5f5;
            line-height: 24px;
            padding-left: 10px;
        }
        /*上传图片*/
        .imagesQ{

            .shangchuan{
                margin:10px 20px;
                border-radius: 5px;
                width: 100px;
                height:100px;
                border:dashed 1px #ccc;
                line-height:100px ;
                i{
                    font-size: 40px;
                }
            }
        }
    }

</style>
