<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 deviceUsage" v-if="deleteProp">
      <div class="inner">
        <!--顶部设置按钮-->
        <div class="deviceTitle">
          <h2>Device Usage</h2>
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
            <table>
              <tr>
                <th style="width:40%;">
                <td>
                  <h3>Top5</h3>
                </td>
                </th>
                <th style="width:60%;">
                <td style="width:30%;">
                  <h3>Device</h3>
                </td>
                <td style="width:30%;">
                  <h3>Progress</h3>
                </td>
                </th>
              </tr>
              <tr>
                <td>
                  <div class="chartWrapper">
                    <DoughnutChart></DoughnutChart>
                  </div>
                </td>
                <td>
                  <table>
                    <tr>
                      <td style="width:50%;">IOS</td>
                      <td style="width:50%;">30%</td>
                    </tr>
                    <tr>
                      <td style="width:50%;">Android</td>
                      <td style="width:50%;">10%</td>
                    </tr>
                    <tr>
                      <td style="width:50%;">Blackberry</td>
                      <td style="width:50%;">20%</td>
                    </tr>
                    <tr>
                      <td style="width:50%;">Symbian</td>
                      <td style="width:50%;">10%</td>
                    </tr>
                    <tr>
                      <td style="width:50%;">Others</td>
                      <td style="width:50%;">30%</td>
                    </tr>
                  </table>
                </td>
              </tr>


            </table>

          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import VueChart from 'vue-chart-js';
  import DoughnutChart from '../child/DoughnutChart.vue';
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
      DoughnutChart
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .deviceUsage {
    background: #f5f5f5;
    padding-right: 0px;
    padding-left: 10px;
    margin-bottom: 20px;
    .inner {
      height: auto;
      background: #fff;
      font-size: 28px;
      border: 1px solid #E6E9ED;
      .deviceTitle {
        margin: 0 20px;
        border-bottom: 2px solid #d0d0d0;
        margin-bottom: 15px;
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
        h3 {
          margin-bottom: 10px;
          font-size 16px
          color: #868686;
          text-align: center;
        }
        .partWrapper {
          position: relative
          .version {
            float: left;
            font-size 16px
            margin-right: 10px;
          }
          .progress-container {
            width: 60%;
            .progress {
              border-radius: 0 !important;
            }
          }
          .mb {
            position: absolute
            right: 0;
            top: 0;
            font-weight: 700
            color: #707070;
          }
        }

        .chartWrapper {
          display: inline-block;
          width: 30%;
          height: 30%;
          min-width: 150px;
          min-height: 150px;
          margin: 8px;
        }
        table {
          font-size: 14px;
          tr {
            th {
              border: none;
              padding: 0px;
              td {
                padding-bottom: 0px;
                h3 {
                  text-align left
                  font-weight: 700
                  line-height: 32px;
                  color: #73879b;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
            }
            td {
              text-align: left;
              border: none;
              padding: 5px 0px 12px 0px;
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
