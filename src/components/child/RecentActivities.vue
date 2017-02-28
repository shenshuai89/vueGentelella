<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 recentActivities" v-if="deleteProp">
      <div class="inner">
        <!--顶部设置按钮-->
        <div class="settingTitle">
          <h2>Recent Activities</h2>
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
            <ul class="list-unstyled activitiesList">
              <li>
                <div class="block_wrapper">
                  <div class="block_content">
                    <h2 class="title">
                      <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                    </h2>
                    <div class="byline">
                      <span>13 hours ago</span> by <a>Jane Smith</a>
                    </div>
                    <p class="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you
                      met the producers that could fund your project, and if the buyers liked your flick, they’d pay to
                      Fast-forward and… <a>Read&nbsp;More</a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="block_wrapper">
                  <div class="block_content">
                    <h2 class="title">
                      <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                    </h2>
                    <div class="byline">
                      <span>13 hours ago</span> by <a>Jane Smith</a>
                    </div>
                    <p class="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you
                      met the producers that could fund your project, and if the buyers liked your flick, they’d pay to
                      Fast-forward and… <a>Read&nbsp;More</a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="block_wrapper">
                  <div class="block_content">
                    <h2 class="title">
                      <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                    </h2>
                    <div class="byline">
                      <span>13 hours ago</span> by <a>Jane Smith</a>
                    </div>
                    <p class="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you
                      met the producers that could fund your project, and if the buyers liked your flick, they’d pay to
                      Fast-forward and… <a>Read&nbsp;More</a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="block_wrapper">
                  <div class="block_content">
                    <h2 class="title">
                      <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                    </h2>
                    <div class="byline">
                      <span>13 hours ago</span> by <a>Jane Smith</a>
                    </div>
                    <p class="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you
                      met the producers that could fund your project, and if the buyers liked your flick, they’d pay to
                      Fast-forward and… <a>Read&nbsp;More</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>

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
  .recentActivities {
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
        white-space: nowrap;
        text-overflow: ellipsis;
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
        padding: 0 20px;
        margin: 10px 20px 10px 0px;
        font-size 18px
        overflow: hidden;
        .activitiesList {
          padding: 0;
          margin: 0;
          li {
            margin-bottom: -5px;
            .block_wrapper{
              padding:15px 0 15px 25px;
              border-left:3px solid #bdc6d3;
              .block_content {
                .title {
                  font-size: 16px;
                  font-weight: 600;
                  position relative
                  &:before{
                    content: "";
                    position: absolute;
                    left: -34px;
                    top: 3px;
                    display: block;
                    width: 14px;
                    height: 14px;
                    border: 3px solid #cccfd4;
                    border-radius: 14px;
                    background: #f9f9f9;
                  }
                  a{
                    color: #5A738E;
                  }
                  &.title:not(:last-child) {
                    margin-bottom: 0.5rem;
                  }
                }
                .byline{
                  font-style italic;
                  font-size 0.9rem
                  margin-bottom: 0.4rem;
                  color: #5A738E;
                  span{
                    color: #aab6aa;
                  }
                  a{
                    color: #5A738E;
                  }
                }
                .excerpt{
                  font-size 0.9rem
                  line-height: 1.2rem
                  color: #73879C;
                }
              }
            }
          }
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
