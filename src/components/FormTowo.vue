<template>
    <div class="FormTowo">
        <div class="item-1">
            <input v-model="QTbiaoti" placeholder="标题,4-25个字" id="Qbt"/>
        </div>
        <div class="item-2">
            <textarea placeholder="内容,不超过700字" class="text"></textarea>
        </div>
        <div class="item-1">
            <input v-model="QTxingming" placeholder="姓名,(仅管理员可看)"/>
        </div>
        <div class="item-1">
            <input v-model="QTphone" placeholder="联系方式,(仅管理员可看)" id="moble"/>
        </div>

        <div class="button">
            <button @click="postsend2()">发表</button>
        </div>
        <!--//上传-->
        <div class="am-form-group QlabelPosition">
            <ul class="headerImgUpload">
                <li v-for="(item,index) in coverPhoto" class="cont">
                    <i class="iconfont icon-shibai shanchu"></i>
                    <img :src="item" @click="QdelImage(index,0)" alt=""/>
                </li>
                <li class="upClick"  @change="QonFileImageChange($event,0)">
                    <input id="file_input" type="file"/><i class="iconfont icon-tianjia"></i>
                </li>
            </ul>
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
    import {MessageBox,Toast} from 'mint-ui';
    export default {
        name: 'FormTowo',
        data () {
            return {
                QTbiaoti: '',
                QTneirong:'',
                QTxingming: '',
                QTphone: '',
                coverPhoto:[],
                detailPhoto:[],
                photos:[],
                image64:[],
                pti:288,
                mid:288,
                un:'[weixin]owQ3dvtTpoSi1LQOZVjuwRmbIYGE'
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
            //this.un = this.$route.query.un;
            //this.pti = this.$route.query.id;
            this.mid = this.$route.query.id;
            let that = this;
            //标题
            $("#Qbt").blur(function (){
                var bt=that.QTbiaoti;
                if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(bt) || bt.length < 4){
                    Toast('少于4个字符，请继续输入！');
                }else if(!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(bt) || bt.length > 25){
                    Toast('最多只能输入25个字符！');
                }
            });
            //
            $(".text").blur(function (){
                that.QTneirong = $(".text").val();
                var miao=that.QTneirong;
                if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(miao) || miao.length < 20){
                    Toast('少于20个字符，请继续输入！');
                }else if(!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(miao) || miao.length > 700){
                    Toast('最多只能输入700个字符！');
                }
            })
            //
            //手机
            $("#moble").blur(function () {
                that.QTphone = $("#moble").val();
                var iphone = that.QTphone;
                console.log(iphone)
                if (!(/^1(3|4|5|7|8)\d{9}$/.test(iphone))) {
                    Toast('手机号码有误，请重填');
                }
            })
        },
        methods: {
            //上传图片
            //监听上传图片事件
            QonFileImageChange(e, type) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                if (files[0].type.indexOf('image') < 0) {
                    alert('上传了非图片')
                    return
                }
                this.createImage(files, type);
            },
            //创建图片
            createImage(file, type) {
                if(this.image64.length > 2){
                    //console.log(this.image64.length)
                    Toast('图片上传失败，不能超过三张！');
                    return false
                }
                let t = this;
                if (typeof FileReader === 'undefined') {
                    Toast('您的浏览器不支持图片上传，请升级您的浏览器。推荐下载谷歌浏览器');
                    return false
                }
                let image = new Image();
                let length = file.length;
                for (var i = 0; i < length; i++) {
                    let reader = new FileReader();
                    reader.readAsDataURL(file[i]);
                    reader.onload = (e) => {
                        type == 0 ?
                            this.coverPhoto.push(e.target.result) :
                            this.detailPhoto.push(e.target.result);
                        this.image64.push(e.target.result.split(',')[1]);
                        //shangchaun
                        let Kparams = {
                            content:[{
                                type: 'image',
                                value: e.target.result.split(',')[1],
                                name:'jpg'
                            }],
                            attributes:{
                                un: t.un,//用户名
                                pti: t.pti,//帖子id
                                phc: e.target.result.split(',')[1],//图片内容
                                phe:"jpg || png"// 图片扩展名
                            }
                        };
                        //上传服务器64位图片返回图片地址
                        requestHandle.requestimg(Kparams, function (result) {
                            console.log(result)
                            if(result.errcode == '100000'){
                                Toast('上传成功！');
                                t.photos.push(result.result[0].post_photo)
                            }
                        });
                    }
                }
            },
            //删除图片
            QdelImage(index, type) {
                type == 0 ?
                    this.coverPhoto.shift(index) :
                    this.detailPhoto.shift(index);
                    this.image64.shift(index);
                Toast('删除成功！')
            },
            //发表
            postsend2(){
                let pnr = this.QTneirong;
                let mid = this.mid;
                let ppt = this.QTbiaoti;
                let pct = this.QTneirong;
                let name = this.QTxingming;
                let phone = this.QTphone;
                let params = {content:[{
                    type:'text',
                    value:pnr
                },{
                    type:'image',
                    value:this.photos
                }],attributes:{
                    mid:mid,//社区ID
                    ptt:ppt,//帖子标题
                    pct:pct,//帖子内容
                    name:name,//姓名
                    phone:phone//联系方式
                }};
                requestHandle.request(params,function (result) {
                    //console.log(result.msg)
                    if(result.errcode == "100000"){
                        Toast('发表成功！');
                    }else{
                        Toast('发表失败！');
                    }
                })
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
        .item-1{
            width: 100%;
            height:60px;
            border-bottom: solid 1px #ccc;
            input{
                font-size: 18px;
                display:block;
                width: 92%;
                height: 58px;
                margin: 0 auto;
                border: none;
            }
        }
        .item-2 {
            width: 100%;
            height:160px;
            border-bottom: solid 1px #ccc;
            .text {
                display: inline-block;
                width: 93%;
                height: 160px;
                border: none;
                margin: 0 auto;
                font-size: 18px;
            }
        }
        .button {
            width: 100%;
            height: 60px;
            margin-top: 15px;
            button {
                font-size: 18px;
                width: 90px;
                height: 40px;
                color: #fff;
                background: #35acfc;
                border: none;
                border-radius: 5px;
                margin-left: 230px;
            }
        }
        .youqing {
            color: #959595;
            width: 100%;
            height: auto;
            padding: 50px 0;
            font-size: 16px;
            text-align: left;
            background: #f5f5f5;
            line-height: 24px;
            padding-left: 10px;
        }
        /*上传图片*/
        .QlabelPosition {
            background: #f5f5f5;
            overflow: hidden;
            width: 100%;
            height: auto;
            .headerImgUpload .upClick{
                border:dashed 1px #ccc;
            }
            .headerImgUpload li{
                margin-top: 8px;
                margin-left: 5px;
                float: left;
                border-radius:3px;
                width: 64px;
                height: 64px;

                position: relative;
                line-height: 64px;

                #file_input{
                    width: 60px;
                    height: 60px;
                    border: none;
                    background: #fff;
                    position: absolute;
                    font-size: 100px;
                    right: 0;
                    top: 0;
                    opacity: 0;
                }
                img{
                    border-radius:3px;
                    width: 63px;
                    height: 63px;
                }
                .shanchu{
                    position: absolute;
                    top: -27px;
                    right: -5px;
                }
            }
        }
    }

</style>
