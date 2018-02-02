<template>
  <div class="psearch">
    <div class="psearch-content">
    <div class="search-wrapper">
    <input placeholder="请输入内容" v-model="searchs" @focus="ushow=true" @blur="ushow=false" class="input-select"></input><button class="el-icon-search">搜索</button>
    <div v-show="ushow" class="searchInfo">
        <ul>
            <li v-for="res in restaurants" @mousedown="selectInfo(res.value)">{{res.value}}</li>
        </ul>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
 data() {
      return {
        restaurants: [],
        ushow: false,
        searchs:""
      };
    },
    methods: {
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 1||restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      selectInfo(data) {
        this.$nextTick(function () {
            this.ushow = false;
            this.searchs=data;
        })
      },
      loadAll() {
        return [
          { "value": "建筑" },
          { "value": "机电" },
          { "value": "弱电智能"},
          { "value": "装修"},
          { "value": "家政"},
          { "value": "机械"},
          { "value": "普通机械"},
          { "value": "住宿设施" },
          { "value": "木工"},
          { "value": "泥工" },
          { "value": "架子工"},
          { "value": "电工" },
          { "value": "焊工" },
          { "value": "管道工"},
          { "value": "IT"},
          { "value": "消防设备"},
          { "value": "安防" },
          { "value": "瓷砖" },
          { "value": "油漆"},
          { "value": "木柜"},
          { "value": "清洁"},
          { "value": "保姆"},
          { "value": "厨师"},
          { "value": "吊车" },
          { "value": "挖掘机" },
          { "value": "翻斗车" },
          { "value": "脚手架" },
          { "value": "电镐" },
          { "value": "切割机" },
          { "value": "集装箱房" },
          { "value": "空调" },
          { "value": "配电箱" }
        ];
      },
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    watch: {
        // 计算属性的 searchs
        searchs: function () {
            let queryString=this.searchs;
            if(queryString===''){
                this.restaurants = this.loadAll();
            }else{
                let restaurants = this.restaurants;
                let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                this.restaurants = results;
            }
        },
    }
}
</script>
<style lang="stylus">
.psearch
  background #f2f5f4
  .psearch-content
    width 1380px
    padding 30px 0 28px
    font-size 0
    margin 0 auto
    text-align center
    .search-wrapper
      position relative
      .input-select
          width 938px
          padding-left 15px
          margin-left -30px
          font-size 18px
          border: 1px solid #dcdfe6
          color: #606266
          height: 40px
          line-height 40px
      button
          background #3385ff
          color: #fff
          font-size: 18px
          width 142px
          height 42px 
          line-height 42px 
          cursor: pointer
          vertical-align top
          border-bottom: 1px solid #2d78f4
      .searchInfo
          position absolute
          top 46px
          left 132px
          border : 1px solid #dcdfe6
          max-height 400px
          width 938px
          z-index 23
          overflow hidden
          overflow-y:scroll
          box-sizing: content-box
          background #fff
          li
            margin 10px
            text-align left 
            color #606266
            height 20px
            line-height 20px
            font-size 15px
            cursor: pointer
            &:hover
              color #fff
              background #3385ff
        
</style>
