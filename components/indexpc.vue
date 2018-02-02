<template>
   <div class="indexpc">
       <div class="navelist">
           <contain/>
           <div class="silder">
               <el-carousel :interval="5000" arrow="hover" height="346px">
                    <el-carousel-item v-for="item in 4" :key="item">
                    <img src="https://www.lgstatic.com/i/image/M00/70/3C/CgpFT1o2ZMmAAeg9AASptXll2VE075.JPG" width="840" height="346" alt="成都引流专场">
                    </el-carousel-item>
                </el-carousel>
           </div>
        </div>
        <div class="hot-person">
            <div class="title">热门技术人员</div>
            <div class="person">
                <ul>
                    <li class="person-wrapper">
                        <div class="person-avatar">
                          <img width="80" height="80" src="https://static.91chengzhong.cn/header.png!_small"><div class="nichen">MR.cheng</div>
                          <div class="recommend"></div>
                        </div>
                        <div class="score-wrapper">
                            <span class="service">服务态度</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>上海站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="person-wrapper">
                        <div class="person-avatar">
                          <img width="80" height="80" src="https://static.91chengzhong.cn/header.png!_small"><div class="nichen">MR.cheng</div>
                          <div class="recommend"></div>
                        </div>
                        <div class="score-wrapper">
                            <span class="service">服务态度</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>江苏站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="person-wrapper">
                        <div class="person-avatar">
                          <img width="80" height="80" src="https://static.91chengzhong.cn/header.png!_small"><div class="nichen">MR.cheng</div>
                          <div class="recommend"></div>
                        </div>
                        <div class="score-wrapper">
                            <span class="service">服务态度</span>
                            <star :size='36' :score='4.9'/>
                            <span class="sorce">4.9</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>北京站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="person-wrapper">
                        <div class="person-avatar">
                          <img width="80" height="80" src="https://static.91chengzhong.cn/header.png!_small"><div class="nichen">MR.cheng</div>
                          <div class="recommend"></div>
                        </div>
                        <div class="score-wrapper">
                            <span class="service">服务态度</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hot-machine">
            <div class="title">热门机器</div>
            <div class="machine">
                <ul>
                    <li class="machine-wrapper">
                        <div class="machine-avatar">
                          <img src="https://static.91chengzhong.cn/img/timg.452816a.jpg!_mid">
                          <div class="recommend"></div>
                        </div>
                        <div class="name"><span>名称：</span><span>集装箱房</span></div>
                        <div class="score-wrapper">
                            <span class="service">评分</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">性能稳定</span><span class="item">新设备</span>
                        </div>
                    </li>
                    <li class="machine-wrapper">
                        <div class="machine-avatar">
                          <img src="https://static.91chengzhong.cn/img/timg.452816a.jpg!_mid">
                          <div class="recommend"></div>
                        </div>
                        <div class="name"><span>名称：</span><span>集装箱房</span></div>
                        <div class="score-wrapper">
                            <span class="service">评分</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="machine-wrapper">
                        <div class="machine-avatar">
                          <img src="https://static.91chengzhong.cn/img/timg.452816a.jpg!_mid">
                          <div class="recommend"></div>
                        </div>
                        <div class="name"><span>名称：</span><span>集装箱房</span></div>
                        <div class="score-wrapper">
                            <span class="service">评分</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="machine-wrapper">
                        <div class="machine-avatar">
                          <img src="https://static.91chengzhong.cn/img/timg.452816a.jpg!_mid">
                          <div class="recommend"></div>
                        </div>
                        <div class="name"><span>名称：</span><span>集装箱房</span></div>
                        <div class="score-wrapper">
                            <span class="service">评分</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="machine-wrapper">
                        <div class="machine-avatar">
                          <img src="https://static.91chengzhong.cn/img/timg.452816a.jpg!_mid">
                          <div class="recommend"></div>
                        </div>
                        <div class="name"><span>名称：</span><span>集装箱房</span></div>
                        <div class="score-wrapper">
                            <span class="service">评分</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="machine-wrapper">
                        <div class="machine-avatar">
                          <img src="https://static.91chengzhong.cn/img/timg.452816a.jpg!_mid">
                          <div class="recommend"></div>
                        </div>
                        <div class="name"><span>名称：</span><span>集装箱房</span></div>
                        <div class="score-wrapper">
                            <span class="service">评分</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="machine-wrapper">
                        <div class="machine-avatar">
                          <img src="https://static.91chengzhong.cn/img/timg.452816a.jpg!_mid">
                          <div class="recommend"></div>
                        </div>
                        <div class="name"><span>名称：</span><span>集装箱房</span></div>
                        <div class="score-wrapper">
                            <span class="service">评分</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                    <li class="machine-wrapper">
                        <div class="machine-avatar">
                          <img src="https://static.91chengzhong.cn/img/timg.452816a.jpg!_mid">
                          <div class="recommend"></div>
                        </div>
                        <div class="name"><span>名称：</span><span>集装箱房</span></div>
                        <div class="score-wrapper">
                            <span class="service">评分</span>
                            <star :size='36' :score='4.8'/>
                            <span class="sorce">4.8</span>
                        </div>
                        <div class="position"><span class="icon-location"></span><span>合肥站</span></div>
                        <div class="commend">
                            <span class="icon-thumb_up"></span><span class="item">服务好</span><span class="item">技术一流</span><span class="item">做的好看</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import contain from "../components/contain";
import star from '../components/star/star';

export default {
  components: {
    contain,star
  }
}
</script>
<style lang="stylus">
@import "../assets/common/stylus/mixin.styl"
.indexpc
  min-width 1200px
  max-width 1380px
  margin  26px auto 0
  .navelist
    position relative
    .silder
      position absolute
      top 0
      right 100px
      width 840px
      margin-top 20px
      height 346px
      margin-left 360px
      .el-carousel__item:nth-child(n) 
        background-color: #fff;
  .hot-person,.hot-machine
    max-width 1380px
    min-width 1200px
    .title
      color #333
      padding 14px 0
      font-size 16px
      font-weight 500
      border-bottom  1px solid #dcdfe6
  .hot-person
    margin 100px auto 0
    .person
      margin 20px
      .person-wrapper
        display inline-block
        margin 20px
        width 389px
        height 200px
        border 1px solid #dcdfe6
        border-radius 5px
        .person-avatar
          position relative
          height 80px
          line-height 80px
          padding 10px 10px 
          img 
            display inline-block
            border-radius 50%
            vertical-align top
          .nichen
            display inline-block
            height 40px
            line-height 40px
            padding 20px
            font-size 16px
            color #555
          .recommend
            position absolute
            top 0
            right 0
            background-image: url(../assets/img/recommend.gif)
            width 120px
            height 90px
            line-height 30px
        .score-wrapper
          padding 0 10px
          .service
            display inline-block
            margin-right 10px
          .star
            display inline-block
            margin-right 10px
          .sorce
            display inline-block
        .position
          padding 10px
          line-height 20px
          height 20px
          font-size 14px
          color #555
        .commend
          margin 10px
          .icon-thumb_up
            color #3385ff
            margin-right 5px
          .item
            margin-right 10px
            font-size 12px
            height 20px
            line-height 20px
            padding 2px 5px
            color #3385ff
            border 2px solid #dcdfe6
        
  .hot-machine
    margin 20px auto 0
    .machine
      margin 20px
      .machine-wrapper
        display inline-block
        margin 20px
        width 389px
        height 320px
        border 1px solid #dcdfe6
        border-radius 5px
        .machine-avatar
          position relative
          width 100%
          height 0
          padding-top 50%
          img 
            position absolute
            top 0
            left 0
            width 100%
            height 100%
          .recommend
            position absolute
            top 0
            right 0
            background-image: url(../assets/img/recommend.gif)
            width 120px
            height 90px
            line-height 30px
        .name
          padding 10px 10px 0
        .score-wrapper
          padding 10px 10px 0
          .service
            display inline-block
            margin-right 10px
          .star
            display inline-block
            margin-right 10px
          .sorce
            display inline-block
        .position
          padding 10px 10px 0
          line-height 20px
          height 20px
          font-size 14px
          color #555
        .commend
          margin 10px 10px 0
          .icon-thumb_up
            color #3385ff
            margin-right 5px
          .item
            margin-right 10px
            font-size 12px
            height 20px
            line-height 20px
            padding 2px 5px
            color #3385ff
            border 2px solid #dcdfe6
</style>
