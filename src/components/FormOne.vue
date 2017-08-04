<template>
    <div class="FormOne">
        <div class="item-1">
            <input v-model="biaoti" placeholder="标题,4-25个字" id="bt"/>
        </div>
        <div class="item-2">
            <textarea placeholder="描述,不超过700字" class="text"></textarea>
        </div>
        <div class="item-1">
            <input v-model="xingming" placeholder="姓名,(仅管理员可看)" id="user"/>
        </div>
        <div class="item-1">
            <input v-model="phone" placeholder="联系方式,(仅管理员可看)" id="moble"/>
        </div>
        <div class="pagelocation">
            <i class="iconfont icon-31dingwei"></i>
            <router-link to="SelectLocation">
            <span id="address" v-text="addresstext"></span>
                <i class="iconfont icon-fanhui2"></i>
            </router-link>
        </div>
        <div class="wurantypes">
            <strong>污染类别:</strong>
            <router-link to="PollutionTypes">
            <span id="typespo" v-text="types"></span>
                <i class="iconfont icon-fanhui2"></i>
            </router-link>
        </div>
        <!--//发表-->
        <div class="button">
            <button @click="postsend()">发表</button>
        </div>
        <!--//上传-->
        <div class="am-form-group labelPosition">
            <ul class="headerImgUpload">
                <li v-for="(item,index) in coverPhoto" class="cont">
                    <i class="iconfont icon-shibai shanchu"></i>
                    <img :src="item" @click="delImage(index,0)" alt=""/>
                </li>
                <li class="upClick"  @change="onFileImageChange($event,0)">
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
    import {MessageBox, Toast} from 'mint-ui';
    export default {
        name: 'FormOne',
        data () {
            return {
                biaoti: '',
                miaoshu: '',
                xingming: '',
                phone: '',
                addresstext:'',
                types:'',
                photos:[],
                coverPhoto:[],
                detailPhoto:[],
                image64:[],
                un:'',
                pti:'',
                mid:'',
                typeid:''
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
            },
            //imgseas
            imgArr: {
                type: Array,
                twoWay: true,
                default: Array
            },
            imgNumLimit: {//一次最多可以上传多少张照片
                type: Number,
                default: 4
            }
        },
        beforeCreate(){
            console.log('设置参数')
            window.localStorage.setItem("unxxx", this.$route.query.un);
            window.localStorage.setItem("idxxx", this.$route.query.id || '320');
        },
        mounted(){
            //设置位置信息
            this.addresstext = localStorage.getItem("locallocation") || '请选择污染源地址';
            this.types = localStorage.getItem("potypes") || '请选择污染类型';
            this.biaoti = localStorage.getItem("biaotis");
            this.xingming = localStorage.getItem("username");
            this.phone = localStorage.getItem("phones");
            this.typeid=  localStorage.getItem("typeid");
            this.un = localStorage.getItem("unxxx");
            this.mid = localStorage.getItem("idxxx");
            console.log('用户名：'+this.$route.query.un)
            console.log('用户ID：'+this.$route.query.id)
            let that = this;
            //标题
            $("#bt").blur(function () {
                var bt = that.biaoti;
                window.localStorage.setItem("biaotis", bt);
                if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(bt) || bt.length < 4) {
                    Toast('少于4个字符，请继续输入！');
                } else if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(bt) || bt.length > 25) {
                    Toast('最多只能输入25个字符！');
                }
            });
            //内容
            $(".text").blur(function () {
                that.miaoshu = $(".text").val();
                var miao = that.miaoshu;
                window.localStorage.setItem("miaosus", miao);
                //console.log(miao)
                if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(miao) || miao.length < 20) {
                    Toast('少于20个字符，请继续输入！');
                } else if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(miao) || miao.length > 700) {
                    Toast('最多只能输入700个字符！');
                }
            })
            //手机
            $("#moble").blur(function () {
                that.phone = $("#moble").val();
                var iphone = that.phone;
                window.localStorage.setItem("phones", iphone);
                //console.log(iphone)
                if (!(/^1(3|4|5|7|8)\d{9}$/.test(iphone))) {
                    Toast('手机号码有误，请重填');
                }
            })
            //
            $("#user").blur(function () {
                let user = $("#user").val();
                window.localStorage.setItem("username", user);
            })
        },
        methods: {
            //上传图片
            //监听上传图片事件
            onFileImageChange(e, type) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                if (files[0].type.indexOf('image') < 0) {
                    Toast('上传了非图片')
                    return
                }
                this.createImage(files, type);
            },
            //创建图片
            createImage(file, type) {
               // console.log(this.image64.length)
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
            delImage(index, type) {
                type == 0 ?
                    this.coverPhoto.shift(index) :
                    this.detailPhoto.shift(index);
                    this.image64.shift(index);
                Toast('删除成功！')
            },
            //发表
            postsend(){
                let un = this.un;
                let mid = this.mid;
                let pnr = this.miaoshu;
                let ppt = this.biaoti;
                let name = this.xingming;
                let phone = this.phone;

                //本地效果
                let postData = {
                    CategoryID: this.typeid,//类别ID
                    Address: this.addresstext,//地址
                    Title: ppt,//标题
                    Content: pnr,//描述
                    Submitter: name,//提交人
                    ContactInformation: phone,//联系方式
                    Imgs: this.image64//图片64位编码数组[,]
                };
                requestHandle.requestBendi(postData,function (result) {
                    if(result.Code == 1) {
                        //成功
                        console.log('本地发表成功！');
                    } else {
                        //失败
                        console.log('本地发表失败！');
                    }
                })
                //远端效果
                let params = {content:[{
                    type:'text',
                    value:pnr
                },{
                    type:'image',
                    value:this.photos
                }],attributes:{
                    un:this.un,
                    mid:mid,//社区ID
                    ptt:ppt,//帖子标题
                    pct:pnr,//帖子内容
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
        a {
            text-decoration: none
        }
    }

    .FormOne {
        .item-1 {
            width: 100%;
            height: 60px;
            border-bottom: solid 1px #ccc;
            input {
                font-size: 18px;
                display: block;
                width: 92%;
                height: 58px;
                margin: 0 auto;
                border: none;
            }
        }
        .item-2 {
            width: 100%;
            height: 160px;
            border-bottom: solid 1px #ccc;
            font-family: "Microsoft YaHei";
            font-weight: bold;
            .text {
                display: inline-block;
                width: 93%;
                height: 160px;
                border: none;
                margin: 0 auto;
                font-size: 18px;
            }
        }
        #address {
            display: inline-block;
            font-size: 14px;
            width: 68%;

        }
        .icon-fanhui2 {
            float: right;
            margin-right: 30px;
        }
        .icon-31dingwei {
            font-size: 24px;
            float: left;
            margin-left: 18px;
            color: #35acfc;
        }
        /*地址选取位置*/
        .pagelocation {
            overflow: hidden;
            font-size: 18px;
            width: 100%;
            height: 60px;
            line-height: 60px;
            border-bottom: solid 1px #ccc;
            overflow: hidden;
            span {
                color: #959595;
            }
        }
        /*污染类别位置*/
        .wurantypes {
            overflow: hidden;
            font-size: 18px;
            width: 100%;
            height: 60px;
            line-height: 60px;
            border-bottom: solid 1px #ccc;
            strong {
                text-align: left;
                font-size: 18px;
                margin-left: 18px;
            }
            span {
                color: #959595;
            }
        }
        .button {
            overflow: hidden;
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
            overflow: hidden;
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
        .labelPosition {
            background: #f5f5f5;
            overflow: hidden;
            width: 100%;
            height: auto;
            .headerImgUpload .upClick{
                border:dashed 1px #ccc;
            }
            .headerImgUpload li{
                margin-top: 8px;
                margin-left: 8px;
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
