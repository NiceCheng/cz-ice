<template>
<div>
  <div class="header">
      <div class="head-line">
          <div class="head-left">
             <span>您所在地：{{mposition}}</span>  | <span>骏成网</span>
          </div>
          <div class="head-right">
              <div v-show="login">
                <a href="http://sso.91chengzhong.cn/page/login" class="login">登录</a> | <a href="http://sso.91chengzhong.cn/page/register" class="register">注册</a>
              </div>
          </div>
      </div>
  </div>
  <div class="tab border-1px">
        <div class="tab-content">
            <div class="tab-img"><img width="97" height="34" src='https://static.91chengzhong.cn/logo.png!_small'><span class='position'>{{city}}</span><div class="change-city" @click="cityflag=true">[切换城市]</div></div>
            <div class="tab-item">
                <router-link :to="{ path: '/' }">首页</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{ path: '/about' }">公司</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{ path: '/seller' }">职业</router-link>
            </div>
            <div class="user" @mouseover="usershow=true" @mouseout="usershow=false" :class="{'current':usershow}">
                <div class="userInfo">
                    <img class="avater" src="https://static.91chengzhong.cn/header.png!_small" width="45" height="45">
                    <span class="name">MR.cheng</span>
                    <i class="vip">v1</i>
                    <div v-show="usershow" class="userContent">
                        <ul>
                            <li class="item"><a>我的信息</a></li>
                            <li class="item"><a>我的机械</a></li>
                            <li class="item"><a>我的交易</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="position-selected" v-show="cityflag">
        <div class="position-content">
            <div class="position-head">
                <p>切换城市</p>
                <div @click="cityflag=false" class="close"><i class="icon-close"></i></div>
            </div>
            <div class="title border-1px">
                <h3>亲爱的用户您好：</h3>
                <p>切换城市分站，让我们为您提供更准确的职位信息。</p>
            </div>
            <ul class="content">
                <li @click='changeCity("全国站")'class="item">全国</li>
                <li @click='changeCity("上海站")' class="item">上海市</li>
                <li @click='changeCity("北京站")' class="item">北京市</li>
                <li @click='changeCity("合肥站")' class="item">合肥市</li>
                <li @click='changeCity("杭州站")' class="item">杭州市</li>
                <li @click='changeCity("滁州站")' class="item">滁州市</li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
      return {
          login : true,
          cityflag: false,
          usershow : false,
          mposition : "中国",
          city:"全国"
      }
  },
  mounted() {
        let options={
            enableHighAccuracy:true, //boolean 是否要求高精度的地理信息，默认为false
            maximumAge:1000 //应用程序的缓存时间
        }
       
        if(navigator.geolocation){
            //浏览器支持geolocation
            navigator.geolocation.getCurrentPosition(this.showPosition,this.onError,options);
        }else{
            //浏览器不支持geolocation
            console.log("浏览器不支持!");
        }
  },
  methods: {
    showPosition(position){
        var latlon = position.coords.latitude+','+position.coords.longitude;
        this.$nextTick(function () {
              this.$http.jsonp("https://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0").then(function(json) {
                let result= json.body;
                if(result.status==0){ 
                 this.mposition=result.result.addressComponent.city+"-"+result.result.addressComponent.district;
                 this.city = result.result.addressComponent.city+"站"
                } else{
                    this.mposition= "中国";
                    this.city = '全国站'
                }
              })
            }) 
        },
     onError(error){
             switch(error.code){
                 case error.PERMISSION_DENIED:
                    alert("用户拒绝对获取地理位置的请求");
                    this.position="中国";
                    break;

                 case error.POSITION_UNAVAILABLE:
                    alert("位置信息是不可用的");
                    this.position="中国";
                    break;

                 case error.TIMEOUT:
                    alert("请求用户地理位置超时");
                    this.position="中国";
                    break;

                 case error.UNKNOWN_ERROR:
                    alert("未知错误");
                    this.position="中国";
                 break;
             }

     },
     changeCity(data) {
        this.city = data;
        this.cityflag = false;
     }
  }
}
</script>
<style lang="stylus">
@import '../assets/common/stylus/mixin.styl';
.header
  height 30px
  width 100%
  background #333
  .head-line
    position relative
    width 1308px;
    margin 0 auto
    font-size 0
    color #c4c3c3
    .head-left
      position absolute
      padding-top 10px
      line-height 15px
      font-size 12px
      left 0
      top 0
    .head-right
      position absolute
      right 0
      top 0
      padding-top 10px
      line-height 15px
      font-size 12px
      & < a
       color #c4c3c3
.tab
  width 100%
  margin 10px auto 0
  line-height 56px
  border-1px(rgba(7, 17, 27, 0.1));
  .tab-content
    position relative
    width 1380px
    margin 0 auto
    .tab-img
      display inline-block
      margin-right 20px
      img 
        display inline-block
        vertical-align top
        margin-right  10px
        margin-top: 5px;
      .position
        display inline-block
        margin-right 8px
        font-size 18px
        font-weight 400
      .change-city
        display inline-block
        color: #999
        font-size: 12px
        cursor: pointer
    .tab-item
      display inline-block
      margin 0 16px
      font-size: 18px
      color: #999
      line-height: 53px
      padding: 0 5px
      & > a
        line-height 53px
      .router-link-exact-active
        color: #3385ff;
        font-weight 600
    .user
      position absolute
      top 0
      right 0
      &.current
        height 300px
        z-index 23
      .userInfo
        position relative
        .avater
          vertical-align top
          border-radius 50%
        .name
          line-height 56px
          height 56px
          color #7e8c8d
        .vip
          color #3385ff
        .userContent
          position absolute
          top 56px
          left 0
          background #fff
          width 150px
          height 168px
          box-shadow:0 0 4px 2px rgba(0,0,0,.09);
          text-align center
          a
            cursor pointer
            color #555

.position-selected
  position fixed
  z-index 100
  top 0
  left 0
  width 100%
  height 100%
  background: rgba(7, 17, 27, 0.3)
  .position-content
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background #fff
    height: 508px
    width: 528px
    .position-head
      width 100%
      position relative
      color #fff
      font-size 18px
      height 44px
      line-height 44px
      background #3385ff
      p
        margin-left 10px
      .close
          position absolute
          float right 
          top 0
          right 0
          font-size 22px
          height 44px
          line-height 44px
          color #fff
          margin-right 10px
    .title
      padding 20px 10px
      border-1px(rgba(7, 17, 27, 0.1));
      h3
        font-size 20px
        font-weight 400
        color #333
        margin-bottom 10px
        padding-left 10px
      p
        font-size 16px
        line-height 42px
        padding-left 10px
        color #555
    .content
      list-style: none
      padding: 50px auto
      margin: 0
      .item
        display:inline-block  
        width: 102px
        margin: 11px 12px
        border 1px solid #dce4e6
        text-align center
        line-height 60px
        font-size 18px
</style>


