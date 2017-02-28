<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 appVersion" v-if="deleteProp">
      <div class="inner">
        <div class="appTitle">
          <h2>App Version</h2>
          <ul>
            <li><i class="fa " :class="[show? 'fa-chevron-up' : 'fa-chevron-down']" @click="toggleShow"></i></li>
            <li><i class="fa fa-wrench"></i></li>
            <li><i class="fa fa-close" @click="deleteAll"></i></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <transition name="fade">
          <div v-show="show" class="content">
            <h3>
              App Usage across versions
            </h3>
            <div class="partWrapper">
              <span class="version">0.1.5.1</span>
              <progress-bar :type="'primary'" :size="'middle'" :value="dynamicPrimaryValue1" :max="100"
                            :show-label="false"></progress-bar>
              <span class="mb">123Kb</span>
              <div class="clearfix"></div>
            </div>
            <div class="partWrapper">
              <span class="version">0.1.5.2</span>
              <progress-bar :type="'primary'" :size="'middle'" :value="dynamicPrimaryValue2" :max="100"
                            :show-label="false"></progress-bar>
              <span class="mb">63Kb</span>
              <div class="clearfix"></div>
            </div>
            <div class="partWrapper">
              <span class="version">0.1.5.3</span>
              <progress-bar :type="'primary'" :size="'middle'" :value="dynamicPrimaryValue3" :max="100"
                            :show-label="false"></progress-bar>
              <span class="mb">58Kb</span>
              <div class="clearfix"></div>
            </div>
            <div class="partWrapper">
              <span class="version">0.1.5.4</span>
              <progress-bar :type="'primary'" :size="'middle'" :value="dynamicPrimaryValue4" :max="100"
                            :show-label="false"></progress-bar>
              <span class="mb">23Kb</span>
              <div class="clearfix"></div>
            </div>
            <div class="partWrapper">
              <span class="version">0.1.5.5</span>
              <progress-bar :type="'primary'" :size="'middle'" :value="dynamicPrimaryValue5" :max="100"
                            :show-label="false"></progress-bar>
              <span class="mb">3Kb</span>
              <div class="clearfix"></div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import ProgressBar from 'vue-bulma-progress-bar';
  export default{
    data(){
      return {
        show: true,
        deleteProp: true,
        dynamicPrimaryValue1: 80,
        dynamicPrimaryValue2: 50,
        dynamicPrimaryValue3: 35,
        dynamicPrimaryValue4: 20,
        dynamicPrimaryValue5: 10,
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
      ProgressBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../node_modules/bulma/css/bulma.css"
  .appVersion {
    background: #f5f5f5;
    padding-right: 0px!important;
    padding-left: 10px!important;
    margin-bottom: 20px;
    .inner {
      height: auto;
      background: #fff;
      font-size: 28px;
      border: 1px solid #E6E9ED;
      .appTitle {
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
        margin: 10px 20px;
        margin-bottom 10px;
        font-size 18px
        h3 {
          font-size 16px
          color: #868686;
          margin-bottom: 10px;
        }
        .partWrapper {
          position: relative
          .version {
            float: left;
            font-size 14px
            margin-right: 10px;
          }
          .progress-container {
            width: 60%;
            .progress {
              border-radius: 0px !important;
            }
          }
          .mb {
            position: absolute
            right: 0;
            top: 0;
            font-size 16px
            font-weight: 700
            color: #bfbfbf;
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
