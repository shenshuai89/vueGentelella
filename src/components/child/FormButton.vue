<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formButton">
      <div class="inner" v-if="deleteProp">
        <!--顶部设置按钮-->
        <div class="settingTitle">
          <h2>Form Button</h2>
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
          <div v-show="show" class="buttonContent">
            <div class="row">
              <form>
                <div class="form-group">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                    <label class="control-label" for="addonsLeft">
                      Button addons</label>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-primary">GO!</button>
                    </span>
                      <input class="form-control" type="text" id="addonsLeft" placeholder="addons left">
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label class=" control-label" for="addonsRight">
                    </label>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="input-group">
                      <input class="form-control" type="text" id="addonsRight" placeholder="addons right">
                      <span class="input-group-btn">
                      <button type="button" class="btn btn-primary">GO!</button>
                    </span>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="divider-dashed"></div>
                <div class="form-group">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label class=" control-label">
                      Button addons</label>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="input-group">
                      <input class="form-control" type="text" placeholder="dropdown">
                      <div class="input-group-btn">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                                aria-expanded="false">Action <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                          <li><a href="#">Action</a>
                          </li>
                          <li><a href="#">Another action</a>
                          </li>
                          <li><a href="#">Something else here</a>
                          </li>
                          <li class="divider"></li>
                          <li><a href="#">Separated link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                    <label class="control-label">
                    </label>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="input-group">
                      <input class="form-control" type="text" placeholder="addons right">
                      <span class="input-group-btn">
                      <button type="button" class="btn btn-primary">GO!</button>
                    </span>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </form>
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
      .buttonContent {
        margin-top: 20px;
        padding: 0 20px;
        .divider-dashed {
          border-top: 1px dashed #e7eaec;
          background-color: #fff;
          height: 1px;
          margin: 10px 0;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 25px;
          .control-label {
            font-size 14px
            color #a6a6a6
            text-align: left;
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
