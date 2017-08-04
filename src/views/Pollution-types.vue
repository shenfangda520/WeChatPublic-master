<template>
    <div class="PollutionTypes">
        <!--案件类型-->
        <v-header title="选择污染类型" :queding=true :genduo=false @chenge="getvaluechenge()"></v-header>
        <div class="content">
            <!--sousuo-->
            <mt-search  placeholder="搜索名称/拼音">
                <mt-cell>
                    <!--[-->
                    <!--'工地扬尘',-->
                    <!--'裸土堆放',-->
                    <!--'汽车黑烟',-->
                    <!--'道路拥堵',-->
                    <!--'大车禁行',-->
                    <!--'祭祀品贩卖',-->
                    <!--'爆竹贩卖',-->
                    <!--'爆竹燃放',-->
                    <!--'渣土车带泥上路',-->
                    <!--'渣土车运输未苫盖',-->
                    <!--'露天烧烤',-->
                    <!--'餐饮油烟',-->
                    <!--'露天喷漆',-->
                    <!--'露天电气焊',-->
                    <!--'垃圾堆放',-->
                    <!--'企业废气排放',-->
                    <!--'锅炉黑烟',-->
                    <!--'秸秆焚烧',-->
                    <!--'散煤及生物质焚烧'-->
                    <!--]-->
                </mt-cell>
            </mt-search>
            <!--xuanxiang-->
            <mt-radio
                    :value.sync="value"
                    v-model="valuekey"
                    :options="options">
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
                options: [
                    {
                        label: '工地扬尘',
                        value: {
                            name : '工地扬尘',
                            id : '1'
                        }
                    },
                    {
                        label: '裸土堆放',
                        value: {
                            name:'裸土堆放',
                            id:'2'
                        }
                    },
                    {
                        label: '汽车黑烟',
                        value: {
                            name:'汽车黑烟',
                            id:'3'
                        }
                    },
                    {
                        label: '道路拥堵',
                        value: {
                            name:'道路拥堵',
                            id:'4'
                        }
                    },
                    {
                        label: '大车禁行',
                        value: {
                            name:'大车禁行',
                            id:'5'
                        }

                    },
                    {
                        label: '祭祀品贩卖',
                        value: {
                            name:'祭祀品贩卖',
                            id:'6'
                        }
                    },
                    {
                        label: '爆竹贩卖',
                        value: {
                            name:'爆竹贩卖',
                            id:'7'
                        }
                    },
                    {
                        label: '爆竹燃放',
                        value: {
                            name:'爆竹燃放',
                            id:'8'
                        }

                    },
                    {
                        label: '渣土车带泥上路',
                        value:{
                            name:'渣土车带泥上路',
                            id:'9'
                        }

                    },
                    {
                        label: '渣土车运输未苫盖',
                        value: {
                            name:'渣土车运输未苫盖',
                            id:'10'
                        }
                    },
                    {
                        label: '露天烧烤',
                        value: {
                            name:'露天烧烤',
                            id:'11'
                        }

                    },
                    {
                        label: '餐饮油烟',
                        value: {
                            name:'餐饮油烟',
                            id:'12'
                        }
                    },
                    {
                        label: '露天喷漆',
                        value:{
                            name:'露天喷漆',
                            id:'13'
                        }

                    },
                    {
                        label: '露天电气焊',
                        value: {
                            name:'露天电气焊',
                            id:'14'
                        }

                    },
                    {
                        label: '垃圾堆放',
                        value: {
                            name:'垃圾堆放',
                            id:'15'
                        }

                    },
                    {
                        label: '企业废气排放',
                        value: {
                            name:'企业废气排放',
                            id:'16'
                        }

                    },
                    {
                        label: '锅炉黑烟',
                        value:{
                            name:'锅炉黑烟',
                            id:'17'
                        }

                    },
                    {
                        label: '祭祀品焚烧',
                        value: {
                           name: '祭祀品焚烧',
                            id:'18'
                        }

                    },
                    {
                        label: '秸秆焚烧',
                        value: {
                            name:'秸秆焚烧',
                            id:'19'
                        }

                    },
                    {
                        label: '散煤及生物质焚烧',
                        value: {
                            name:'散煤及生物质焚烧',
                            id:'20'
                        }

                    }
                ],
                value: '',
                valuekey: ''
            }
        },
        beforeCreate(){

        },
        mounted(){

        },
        methods: {
            getvaluechenge(){
               console.log('已选择')
                let typepss = this.valuekey.name;
               let typeid = this.valuekey.id;
                if (!typepss) {
                    MessageBox('警告框！', '请选择一个选项！');
                } else {
                    this.$parent.ztypeid = typeid;
                    this.$parent.ztypes = typepss;
                    this.$router.go(-1)
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
