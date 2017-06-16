<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 formGrid">
      <div class="inner" v-if="deleteProp">
        <!--顶部设置按钮-->
        <div class="settingTitle">
          <h2>Form Grid</h2>
          <span>Form Input Grid </span>
          <ul>
            <li><i class="fa" :class="[show? 'fa-chevron-up' : 'fa-chevron-down']" @click="toggleShow"></i></li>
            <li><i class="fa fa-wrench"></i></li>
            <li><i class="fa fa-close" @click="deleteAll"></i></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <!--顶部设置按钮 end-->

        <transition name="fade">
          <div v-show="show" class="gridContent">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                <input type="text" placeholder=".col-md-12" class="form-control">
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6 form-group">
                <input type="text" placeholder=".col-md-6" class="form-control">
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6 form-group">
                <input type="text" placeholder=".col-md-6" class="form-control">
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4 form-group">
                <input type="text" placeholder=".col-md-4" class="form-control">
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4 form-group">
                <input type="text" placeholder=".col-md-4" class="form-control">
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4 form-group">
                <input type="text" placeholder=".col-md-4" class="form-control">
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3 form-group">
                <input type="text" placeholder=".col-md-3" class="form-control">
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3 form-group">
                <input type="text" placeholder=".col-md-3" class="form-control">
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3 form-group">
                <input type="text" placeholder=".col-md-3" class="form-control">
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3 form-group">
                <input type="text" placeholder=".col-md-3" class="form-control">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 form-group">
                <input type="text" placeholder=".col-md-2" class="form-control">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 form-group">
                <input type="text" placeholder=".col-md-2" class="form-control">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 form-group">
                <input type="text" placeholder=".col-md-2" class="form-control">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 form-group">
                <input type="text" placeholder=".col-md-2" class="form-control">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 form-group">
                <input type="text" placeholder=".col-md-2" class="form-control">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 form-group">
                <input type="text" placeholder=".col-md-2" class="form-control">
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

  </transition>
</template>
<script type="text/ecmascript-6">
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
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .page-title {
    font-size 24px
    padding-top: 15px;
  }

  .formGrid {
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
        margin-bottom: 15px;
        h2 {
          margin: 8px 0 6px;
          float: left;
          font-size: 24px;
          color: rgb(115, 135, 155);
        }
        span {
          display: inline-block
          vertical-align bottom
          padding-left 10px
          font-size 14px
          color: #a9a9a9;
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

      .gridContent {
        padding: 0 5px;
      }
    }
  }

  &.fade-enter-active, &.fade-leave-active
    opacity: 1
    transition: all 0.5s

  &.fade-enter, &.fade-leave-active
    opacity: 0
</style>
