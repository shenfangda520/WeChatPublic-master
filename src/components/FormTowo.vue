<template>
    <div class="FormTowo">
        <mt-field label="标题" state="" v-model="QTbiaoti" placeholder="4-25个字"></mt-field>
        <div class="neirong"><textarea  placeholder="内容,不超过700字" class="text"></textarea></div>
        <mt-field label="姓名" state="" v-model="QTxingming" placeholder="(仅管理员可看)"></mt-field>
        <mt-field label="联系方式" state="" v-model="QTphone" placeholder="(仅管理员可看)"></mt-field>
        <div class="xiantiao"></div>
        <!--//上传-->
        <el-upload
                class="shangchuan"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">

            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div class="button">
            <button @click="postsend2()">发表</button>
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
    import { MessageBox } from 'mint-ui';
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
        methods: {
            //上传图片
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            //发表
            postsend2(){
                MessageBox('警告框', '其他案件举报正在开发中！');
            }
        }
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
        .shangchuan{
            overflow: hidden;
            width: 100%;
            height:auto;
            padding: 20px 0;
        }
    }

</style>
