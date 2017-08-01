<template>
    <div class="PollutionTypes">
        <!--案件类型-->
        <v-header title="选择污染类型" :queding=true :genduo=false @chenge="getvaluechenge()"></v-header>
        <div class="content">
            <!--sousuo-->
            <mt-search v-model="value" placeholder="搜索名称/拼音">
                <mt-cell>

                </mt-cell>
            </mt-search>
            <!--xuanxiang-->
            <mt-radio
                    v-model="valuekey"
                    :options="option">
            </mt-radio>
        </div>

    </div>
</template>

<script>
    //import api from '../api/index'
    import {MessageBox} from 'mint-ui';
    export default {
        name: 'PollutionTypes',
        data () {
            return {
                option: [
                    '工地扬尘',
                    '汽车黑烟',
                    '裸土堆放',
                    '散煤及生物质燃烧',
                    '秸秆燃烧',
                    '道路拥堵',
                    '渣土车带泥上路',
                    '渣土运输未苫盖',
                    '祭祀品贩卖焚烧',
                    '爆竹贩卖燃烧'
                ],
                value: '',
                valuekey: ''
            }
        },
        beforeCreate(){

        },
        mounted(){
            let that = this;
            let valuek = that.valuekey;
            return that.option.filter(function (valuek) {
                return valuek.toLowerCase().indexOf(that.value.toLowerCase()) !== -1;
            })

        },
        methods: {
            getvaluechenge(){
                console.log('我被点击了')
                let typepss = this.valuekey;

                if (!typepss) {
                    MessageBox('警告框！', '请选择一个选项！');
                } else {

                    window.localStorage.setItem("potypes", typepss);
                    this.$router.push('/');
                }
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

    .PollutionTypes {
        .content {
            margin-top: 50px;
        }
    }
</style>
