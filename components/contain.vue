<template>
  <div>
      <div class="mainNavs">
           <div class="menu-box" @mouseover="jtop=true" @mouseout="jtop=false" :class="{'current':jtop}">
              <div class="menu-main-hop">
                  <div class="category-list">
                      <h1>建筑</h1>
                      <a>木工</a><a>泥工</a><a>架子工</a>
                      <i class="icon icon-keyboard_arrow_right"></i>
                  </div>
              </div>
              <div v-show="jtop" class="menu-sub">
                  <div class="categroy">建筑</div>
                  <div class="title"><a>木工</a></div>
                  <div class="title"><a>泥工</a></div>
                  <div class="title"><a>架子工</a></div>
                  <div class="title"><a>钢筋工</a></div>
              </div>
          </div>
          <div class="menu-box" @mouseover="dtop=true" @mouseout="dtop=false" :class="{'current':dtop}">
              <div class="menu-main-hop">
                  <div class="category-list">
                      <h1>机电</h1>
                      <a>电工</a><a>焊工</a><a>管道工</a>
                      <i class="icon icon-keyboard_arrow_right"></i>
                  </div>
              </div>
              <div v-show="dtop" class="menu-sub">
                  <div class="categroy">机电</div>
                  <div class="title"><a>电工</a></div>
                  <div class="title"><a>焊工</a></div>
                  <div class="title"><a>管道工</a></div>
                  <div class="title"><a>空调安装</a></div>
              </div>
          </div>
          <div class="menu-box" @mouseover="rtop=true" @mouseout="rtop=false" :class="{'current':rtop}">
              <div class="menu-main-hop">
                  <div class="category-list">
                      <h1>弱电智能</h1>
                      <a>IT</a><a>消防设备</a><a>安防</a>
                      <i class="icon icon-keyboard_arrow_right"></i>
                  </div>
              </div>
              <div v-show="rtop" class="menu-sub">
                  <div class="categroy">弱电智能</div>
                  <div class="title"><a>IT</a></div>
                  <div class="title"><a>消防设备</a></div>
                  <div class="title"><a>安防</a></div>
              </div>
          </div>
          <div class="menu-box" @mouseover="ztop=true" @mouseout="ztop=false" :class="{'current':ztop}">
              <div class="menu-main-hop">
                  <div class="category-list">
                      <h1>装修</h1>
                      <a>瓷砖</a><a>油漆</a><a>木柜</a>
                      <i class="icon icon-keyboard_arrow_right"></i>
                  </div>
              </div>
              <div v-show="ztop" class="menu-sub">
                  <div class="categroy">装修</div>
                  <div class="title"><a>瓷砖</a></div>
                  <div class="title"><a>油漆</a></div>
                  <div class="title"><a>木柜</a></div>
                  <div class="title"><a>拆墙</a></div>
              </div>
          </div>
          <div class="menu-box" @mouseover="jiatop=true" @mouseout="jiatop=false" :class="{'current':jiatop}">
              <div class="menu-main-hop">
                  <div class="category-list">
                      <h1>家政</h1>
                      <a>清洁</a><a>保姆</a><a>厨师</a>
                      <i class="icon icon-keyboard_arrow_right"></i>
                  </div>
              </div>
              <div v-show="jiatop" class="menu-sub">
                  <div class="categroy">家政</div>
                  <div class="title"><a>清洁</a></div>
                  <div class="title"><a>保姆</a></div>
                  <div class="title"><a>厨师</a></div>
                  <div class="title"><a>司机</a></div>
              </div>
          </div>
           <div class="menu-box" @mouseover="jztop=true" @mouseout="jztop=false" :class="{'current':jztop}">
              <div class="menu-main-hop">
                  <div class="category-list">
                      <h1>机械</h1>
                      <a>吊车</a><a>挖掘机</a><a>翻斗车</a>
                      <i class="icon icon-keyboard_arrow_right"></i>
                  </div>
              </div>
              <div v-show="jztop" class="menu-sub">
                  <div class="categroy">机械</div>
                  <div class="title"><a>吊车</a></div>
                  <div class="title"><a>挖掘机</a></div>
                  <div class="title"><a>翻斗车</a></div>
                  <div class="title"><a>司土方工程</a></div>
              </div>
          </div>
          <div class="menu-box" @mouseover="pztop=true" @mouseout="pztop=false" :class="{'current':pztop}">
              <div class="menu-main-hop">
                  <div class="category-list">
                      <h1>普通机械</h1>
                      <a>脚手架</a><a>电镐</a><a>切割机</a>
                      <i class="icon icon-keyboard_arrow_right"></i>
                  </div>
              </div>
              <div v-show="pztop" class="menu-sub">
                  <div class="categroy">普通机械</div>
                  <div class="title"><a>脚手架</a></div>
                  <div class="title"><a>电镐</a></div>
                  <div class="title"><a>切割机</a></div>
              </div>
          </div>
          <div class="menu-box" @mouseover="zstop=true" @mouseout="zstop=false" :class="{'current':zstop}">
              <div class="menu-main-hop">
                  <div class="category-list">
                      <h1>住宿设施</h1>
                      <a>集装箱房</a><a>空调</a><a>配电箱</a>
                      <i class="icon icon-keyboard_arrow_right"></i>
                  </div>
              </div>
              <div v-show="zstop" class="menu-sub">
                  <div class="categroy">住宿设施</div>
                  <div class="title"><a>集装箱房</a></div>
                  <div class="title"><a>空调</a></div>
                  <div class="title"><a>翻配电箱斗车</a></div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        jtop : false,
        rtop : false,
        dtop : false,
        ztop : false,
        jiatop : false,
        jztop : false,
        pztop : false,
        zstop : false
    }
  }
}
</script>
<style lang="stylus">
.mainNavs
  width 321px
  height 385px
  .menu-box
    position relative
    height 55px
    line-height 55px
    &.current
      box-shadow:0 0 4px 2px rgba(0,0,0,.09);
      border-top-left-radius:2px;
      border-bottom-left-radius:2px
      background:#fff
      :after 
        content:''
        position:absolute
        top:0
        bottom:0
        right:-1px
        width:7px
        background:#fff
        z-index:20
    .menu-main-hop
      padding 18px 0 17px
      .category-list
        position relative
        height 20px
        line-height 20px
        overflow hidden
        h1
          display inline-block
          padding-left 15px
          font-size 18px
          font-weight 500
        a 
          margin 0 5px 5px 0
          padding 0 8px
          white-space nowrap
          color #555
          &:hover
            color #2d78f4
            cursor pointer
            text-decoration underline
        .icon
            position absolute
            top 0
            right 0
            vertical-align top
            font-size 20px
            margin-right: 8px
            color #7e8c8d
    .menu-sub
      position absolute
      left 321px
      top 0
      width 600px
      padding 0 25px 12px
      z-index 10
      background #fff
      box-shadow 0 0 4px 2px rgba(0,0,0,0.1)
      border-radius 2px
      border-top-left-radius 0
      .categroy
        color #333
      .title
        display: inline-block
        position: relative
        margin-left: -1px
        padding: 0 11px
        font-size: 14px
        line-height: 28px
        color: #777
        white-space: nowrap
        a
          cursor pointer 

</style>
