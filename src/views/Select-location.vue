<template>
    <div class="SelectLocation">
        <!--手动位置-->
        <v-header title="手动选取位置信息" :genduo=false></v-header>
        <div class="contentmap">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelectLocation',
        data () {
            return {}
        },
        methods: {
            getlocation(){
                //定义两个全局变量，用来保存经纬度
                let jd = 0,
                    wd = 0;
                document.documentElement.style.fontSize = innerWidth / 32 + 'px';
                window.onresize = function() {
                    document.documentElement.style.fontSize = innerWidth / 32 + 'px';
                };
                // 高德地图API功能
                var map = new AMap.Map('allmap', {
                    resizeEnable: true,
                    zoom: 13,
                    center: [116.70, 39.53]
                });
                AMap.plugin('AMap.Geocoder', function() {
                    var geocoder = new AMap.Geocoder({
                        city: "010" //城市，默认：“全国”
                    });
                    var marker = new AMap.Marker({
                        map: map,
                        bubble: true
                    })
                });
                //
                map.on('click', function(e) {
                    marker.setPosition(e.lnglat);
                    jd = e.lnglat.lng;
                    wd = e.lnglat.lat;
                    geocoder.getAddress(e.lnglat, function(status, result) {
                        if(status == 'complete') {
                            var dizhi = result.regeocode.addressComponent.district + result.regeocode.addressComponent.township + result.regeocode.addressComponent.street + result.regeocode.addressComponent.streetNumber;
                            $('#address').text(dizhi);
                            $('#allmap').hide();
                            $('#close').hide();
                            $('#shade').hide();
                        } else {
                            $('#address').text('无法获取地址');
                        }
                    })
                })
                //
                span.onchange = function(e) {
                    var address = span.innerHTML;
                    geocoder.getLocation(address, function(status, result) {
                        if(status == 'complete' && result.geocodes.length) {
                            marker.setPosition(result.geocodes[0].location);
                            map.setCenter(marker.getPosition())
                        } else {
                            $('#address').text('无法获取地址');
                        }
                    })
                }
            },
            //
        },
        mounted(){
            this.getlocation()
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

    .SelectLocation {

    }
</style>
