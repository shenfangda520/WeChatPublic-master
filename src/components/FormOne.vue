<template>
    <div class="FormOne">
        <mt-field label="标题" state="" v-model="biaoti" placeholder="4-25个字"></mt-field>
        <!--<mt-field label="描述" state="" v-model="miaoshu" placeholder="4-700个字"></mt-field>-->
        <div class="miaoshu"><textarea state="" placeholder="描述，不超过700字" class="text"></textarea></div>
        <mt-field label="姓名" state="" v-model="xingming" placeholder="(仅管理员可看)"></mt-field>
        <mt-field label="联系方式" state="" v-model="phone" placeholder="(仅管理员可看)"></mt-field>
        <div class="pagelocation">
            <i class="iconfont icon-31dingwei"></i>
            <span id="address">{{addresstext}}</span>
            <router-link to="SelectLocation">
            <i class="iconfont icon-fanhui2"></i>
            </router-link>
        </div>
        <div class="wurantypes">
            <strong>污染类别</strong>
            <span id="typespo">{{types}}</span>
            <router-link to="PollutionTypes">
            <i class="iconfont icon-fanhui2"></i>
            </router-link>
        </div>
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
        name: 'FormOne',
        data () {
            return {
                biaoti: '',
                miaoshu:'',
                xingming:'',
                phone:'',
                addresstext:{
                    type: String,
                    default: '请选择污染源地址'
                },
                types:{
                    type: String,
                    default:'请选择污染类型'
                }
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

            this.addresstext = localStorage.getItem("locallocation") || '';
            this.types = localStorage.getItem("potypes");
            //console.log(localStorage.getItem("locallocation").splice(","))
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    html, body {
        width: 100%;
        height: 100%;
        a{text-decoration: none}
    }

    .FormOne {
        .miaoshu{
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
        #address{
            display: inline-block;
            font-size: 14px;
            width: 68%;

        }
        .icon-fanhui2{
            float: right;
            margin-right: 30px;
        }
        .icon-31dingwei{
            font-size: 24px;
            float:left;
            margin-left: 18px;
            color: #35acfc;
        }
        /*地址选取位置*/
       .pagelocation{
           font-size: 18px;
            width: 100%;
           height: 60px;
           line-height: 60px;
           border-top:solid 1px #ccc;
           border-bottom:solid 1px #ccc;
           overflow: hidden;
       }
        /*污染类别位置*/
        .wurantypes{
            font-size: 18px;
            width: 100%;
            height: 60px;
            line-height: 60px;
            border-bottom:solid 1px #ccc;
            strong{
                text-align: left;
                margin-left: 18px;
            }
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
