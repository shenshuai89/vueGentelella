<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 quickSettings" v-if="deleteProp">
      <div class="inner">
        <!--顶部设置按钮-->
        <div class="settingTitle">
          <h2>Quick Settings</h2>
          <ul>
            <li><i class="fa " :class="[show? 'fa-chevron-up' : 'fa-chevron-down']" @click="toggleShow"></i></li>
            <li><i class="fa fa-wrench"></i></li>
            <li><i class="fa fa-close" @click="deleteAll"></i></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <!--顶部设置按钮 end-->

        <transition name="fade">
          <div v-show="show" class="content">
            <ul class="quickList">
              <li><i class="fa fa-calendar-o"></i><span>setting</span></li>
              <li><i class="fa fa-bars"></i><span>Subscription</span></li>
              <li><i class="fa fa-bar-chart"></i><span>Auto Renewal</span></li>
              <li><i class="fa fa-line-chart"></i><span>Achievements</span></li>
              <li><i class="fa fa-bar-chart"></i><span>Auto Renewal</span></li>
              <li><i class="fa fa-line-chart"></i><span>Achievements</span></li>
              <li><i class="fa fa-bar-chart"></i><span>Auto Renewal</span></li>
              <li><i class="fa fa-area-chart"></i><span>Logout</span></li>
            </ul>
            <div class="chartWrapper">
              <Radar-Chart></Radar-Chart>
            </div>
            <div class="clearfix"></div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import VueChart from 'vue-chart-js';
  import RadarChart from '../child/RadarChart.vue';
  export default{
    data(){
      return {
        show: true,
        deleteProp: true,
      }
    },
    methods: {
      toggleShow(){
        return this.show = !this.show;
      },
      deleteAll(){
        return this.deleteProp = !this.deleteProp;
      }
    },
    components: {
      RadarChart
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .quickSettings {
    background: #f5f5f5;
    padding-right: 0px;
    padding-left: 10px;
    margin-bottom: 20px;
    .inner {
      height: auto;
      background: #fff;
      font-size: 28px;
      border: 1px solid #E6E9ED;
      .settingTitle {
        margin: 0 20px;
        border-bottom: 2px solid #d0d0d0;
        h2 {
          margin: 8px 0 6px;
          float: left;
          font-size: 24px;
          color: rgb(115, 135, 155);
        }
        ul {
          float: right;
          margin-top: 18px;
          line-height: 16px;
          li {
            color #ccc;
            float left;
            margin-left: 10px;
            i {
              display: inline-block
              font-size: 14px
              font-weight: 100
            }
          }
        }
      }
      .content {
        width: 100%;
        max-height: 228px;
        padding: 0 20px;
        margin: 10px 20px 10px 0px;
        font-size 18px
        overflow: hidden;
        .quickList{
          width:35%;
          margin:0;
          padding:0;
          float: left;
          li{
            list-style:none;
            margin-bottom:12px;
            font-size:16px;
            padding-left: 6px;
            overflow: hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            i{
              padding-right: 5px;
            }
            span{
              font-size: 12px;

            }
          }
          &:first-child{
            margin-top:12px;
          }
        }
        .chartWrapper{
          width:64%;
          max-width: 230px;
          max-height: 230px;
          margin-top: 4px;
          float: right;
        }
      }
    }
  }

  &.fade-enter-active, &.fade-leave-active
    opacity 1
    transition all 0.5s

  &.fade-enter, &.fade-leave-active
    opacity 0
</style>
