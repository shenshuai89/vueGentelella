<template>
  <div class="netWork">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 netWorkTitle">
      <div class="text col-md-6 col-sm-12">
        <h1>Network Activities</h1>
        <p>Graph title sub-title</p>
      </div>
      <div class="dateWrapper col-md-6 col-sm-12">
        <Date-Picker :value="dateD" :format="format" :wrapper-class="wClass" :input-class="iClass"></Date-Picker>
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12 border3px"></div>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 table">
      <div class="chartWrapper col-lg-8 col-md-9 col-sm-12 col-xs-12">
        <vue-chart type="line" :data="data"></vue-chart>
      </div>
      <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 progress">
        <progress-bar :type="'success'" :size="'large'" :value="dynamicSuccessValue" :max="100"
                      :show-label="true"></progress-bar>
        <progress-bar :type="'primary'" :size="'large'" :value="dynamicPrimaryValue" :max="100"
                      :show-label="true"></progress-bar>
        <progress-bar :type="'info'" :size="'large'" :value="dynamicInfoValue" :max="100"
                      :show-label="true"></progress-bar>
        <progress-bar :type="'warning'" :size="'large'" :value="dynamicWarningValue" :max="100"
                      :show-label="true"></progress-bar>
        <progress-bar :type="'danger'" :size="'large'" :value="dynamicDangerValue" :max="100"
                      :show-label="true"></progress-bar>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import DatePicker from 'vuejs-datepicker';
  import VueChart from 'vue-chart-js';
  import ProgressBar from 'vue-bulma-progress-bar';

  export default{
    data(){
      return {
        dateD: '2017-2-5',
        wClass: 'wClass',
        iClass: 'iClass',
        format: 'yyyy-MM-dd',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: 'Component 1',
              data: [65, 59, 90, 81, 56, 55, 40],
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'bevel',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
            },
            {
              label: 'Component 2',
              data: [28, 48, 40, 19, 96, 27, 100],
              backgroundColor: [
                'rgba(66,175,217,0.5)'
              ],
              pointHoverBackgroundColor: "rgba(66,175,217,1)",
            }
          ]
        },
        options: {
//          responsive: true
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        },
        dynamicSuccessValue: 90,
        dynamicPrimaryValue: 45,
        dynamicInfoValue: 70,
        dynamicWarningValue: 36,
        dynamicDangerValue: 20,
      }
    },
    methods: {
      plus () {
        if (this.dynamicValue === 100) return
        this.dynamicValue += 10
      },

      minus () {
        if (this.dynamicValue === 0) return
        this.dynamicValue -= 10
      }
    },
    components: {
      DatePicker, VueChart, ProgressBar
    }
  }

</script>


<style lang="stylus" rel="stylesheet/stylus">
  .netWork {
    margin: 0 0 0 10px;
    .netWorkTitle {
      color: #333;
      padding: 0;
      background: #ffffff;
      .text {
        h1 {
          display: inline-block;
          margin-right: 10px;
          font-size: 26px;
          line-height: 50px;
          font-weight: 500;
          color: #73879c;
        }
        p {
          display: inline-block;
          font-size:16px;
          color: #ababab;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .dateWrapper {
        float: left;
        .datepicker {
          min-width: 100px;
          position: relative;
          float: right;
          margin-top: 13px;
          border-radius: 3px;
          z-index: 999;
        }
        @media only screen and (max-width: 992px) {
          .datepicker {
            float: left;
            margin-top: 10px;
            margin-bottom: 10px;
          }
        }
        .wClass {
          .iClass {
            border-radius: 4px;
            border: 1px solid #ccc;
            padding: 2px 5px;
          }
          .calendar {
            position: absolute;
            right: 0 !important;
          }
        }
      }

      .border3px {
        background: #ccc;
        height: 3px;
      }
    }
    .table {
      padding: 10px 0;
      background: #ffffff;
      margin-bottom: 20px;
      .progress {
        height: auto;
        margin-top:10px;
        padding: 0px;
        background-color: #fff;
        box-shadow:inset 0 1px 2px rgba(0,0,0,0);
        .progress-container{
          padding:8px;
          progress{
            height:16px;
          }
          span{
            padding-top:8px;
          }
        }
      }
    }
    .three {
      border: 1px solid #1b6d85;
      background: #ffffff;
    }
  }
</style>
