<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formButton">
      <div class="inner" v-if="deleteProp">
        <!--顶部设置按钮-->
        <div class="settingTitle">
          <h2>Form Icon</h2>
          <span>Sessions</span>
          <ul>
            <li><i class="fa" :class="[show? 'fa-chevron-up' : 'fa-chevron-down']" @click="toggleShow"></i></li>
            <li><i class="fa fa-wrench"></i></li>
            <li><i class="fa fa-close" @click="deleteAll"></i></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <!--顶部设置按钮 end-->

        <transition name="fade">
          <div v-show="show" class="iconContent">
            <form class="form-horizontal">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-group mvleft">
                <input type="text" class="form-control" placeholder="First name" required="required">
                <span class="fa fa-user form-control-feedback" aria-hidden="true"></span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-group mvright">
                <input type="text" class="form-control" placeholder="Last name" required="required">
                <span class="fa fa-user form-control-feedback" aria-hidden="true"></span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-group mvleft">
                <input type="text" class="form-control" placeholder="Email" required="required">
                <span class="fa fa-envelope form-control-feedback" aria-hidden="true"></span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-group mvright">
                <input type="text" class="form-control" placeholder="Phone" required="required">
                <span class="fa fa-phone form-control-feedback" aria-hidden="true"></span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-group mvleft">
                <input type="text" class="form-control" placeholder="Love book" required="required">
                <span class="fa fa-book form-control-feedback" aria-hidden="true"></span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-group mvright">
                <input type="text" class="form-control" placeholder="Address" required="required">
                <span class="fa fa-map-marker form-control-feedback" aria-hidden="true"></span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group mvleft">
                <input type="text" class="form-control" placeholder="some comments" required="required">
                <span class="fa fa-comments form-control-feedback" aria-hidden="true"></span>
              </div>

              <div class="clearfix"></div>
            </form>
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

  .formButton {
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
      .iconContent {
        margin-top: 20px;
        padding: 0 20px;
        .form-horizontal {
          .form-group {
            margin-left: 0;
            margin-right: 0;
          }
          .mvleft {
            position: relative;
            left: 0;
            .form-control-feedback {
              margin-top: 5px;
              height: 23px;
              color: #bbb;
              line-height: 24px;
              font-size: 16px;
              position: absolute;
              left: 15px;
            }
            &:after {
              content: '';
              height: 21px;
              width: 1px;
              background-color: #ccc;
              position: absolute;
              top: 7px;
              left: 45px;
            }
            .form-control {
              padding-left: 35px;
            }
          }
          .mvright {
            position: relative;
            right: 0;
            .form-control-feedback {
              margin-top: 5px;
              height: 23px;
              color: #bbb;
              line-height: 24px;
              font-size: 16px;
              position: absolute;
              right: 15px;
            }
            &:before {
              content: '';
              height: 21px;
              width: 1px;
              background-color: #ccc;
              position: absolute;
              top: 7px;
              right: 45px;
            }
          }

          /* &:after {
             content: '';
             height: 21px;
             width: 1px;
             background-color: #ccc;
             position: absolute;
             top: 7px;
             left: 45px;
           }*/

        }
        .divider-dashed {
          border-top: 1px dashed #e7eaec;
          background-color: #fff;
          height: 1px;
          margin: 10px 0;
        }
        .form-group {
          margin-bottom: 25px;
          .control-label {
            font-size 14px
            color #a6a6a6
          }
          .help-block {
            font-size 14px
          }
          &:after {
            content: " ";
            display: block;
            clear: both;
          }
          .btn-wrapper {
            text-align center
            margin: 0 auto;
          }
        }
      }
    }

  }

  &.fade-enter-active, &.fade-leave-active
    opacity: 1
    transition: all 0.5s

  &.fade-enter, &.fade-leave-active
    opacity: 0
</style>
