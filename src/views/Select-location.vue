<template>
  <div class="SelectLocation">
    <!--手动位置-->
    <v-header title="手动选取位置信息" :genduo=false></v-header>
    <div id="map" class="contentmap">
    </div>
  </div>
</template>

<script>
  import BMap from 'BMap'

  export default {
    name: 'SelectLocation',
    data () {
      return {
        marker: undefined,
        geoCoder: undefined,
        locationPoint: undefined
      }
    },
    mounted(){
      this.ready()
    },
    methods: {
      ready () {
        let t = this;
        let map = new BMap.Map('map');//定义地图对象
        map.centerAndZoom('廊坊', 10);//初始化范围及缩放比例
        map.enableScrollWheelZoom();//启动滚轮事件
        let top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL});
        map.addControl(top_right_navigation);//添加放大缩小控件
        t.geoCoder = new BMap.Geocoder();

        let pt = new BMap.Point(116.70, 39.53);//初始化
        t.marker = new BMap.Marker(pt);//设置Marker
        map.addOverlay(t.marker);
        t.getLocation(map);//获取当前位置坐标信息
        map.addEventListener('click', t.mapClick)
      },
      getLocation(map){
        //获取当前位置坐标信息
        let geolocation = new BMap.Geolocation();
        let t = this;
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() === BMAP_STATUS_SUCCESS) {
            map.panTo(r.point);
            t.marker.setPosition(r.point);
          }
          else {
            alert('failed' + this.getStatus());
          }
        }, {enableHighAccuracy: true})
      },
      mapClick(e){
          let t = this;
        //地图点击事件
        this.marker.setPosition(e.point);
        this.geoCoder.getLocation(e.point, function (result) {
          let addComp = result.addressComponents;
          let ttlocation = addComp.province +  addComp.city +  addComp.district + addComp.street + addComp.streetNumber;
          window.localStorage.setItem("locallocation", ttlocation);
          t.$router.push('/');
        });
      }
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
    height: 100%;
  }

  #map {
    height: 100%;
  }

</style>
