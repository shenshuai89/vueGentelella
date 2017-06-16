<template>
  <transition name="fade">
    <div>
      <div class="page-title">
        <div class="title-left">
          <h1 class="col-xs-12 col-sm-12 col-md-6 col-lg-6">GeneralForm</h1>
        </div>
        <div class="title-right">
          <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 formDesign">
        <div class="inner" v-if="deleteProp">
          <!--顶部设置按钮-->
          <div class="settingTitle">
            <h2>Form Design</h2>
            <span>different form elements</span>
            <ul>
              <li><i class="fa" :class="[show? 'fa-chevron-up' : 'fa-chevron-down']" @click="toggleShow"></i></li>
              <li><i class="fa fa-wrench"></i></li>
              <li><i class="fa fa-close" @click="deleteAll"></i></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <!--顶部设置按钮 end-->

          <transition name="fade">
            <div v-show="show" class="content1">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12">Email address <span
                    class="required">*</span></label>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 mb20">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"
                           required="required">
                  </div>

                  <label for="exampleInputPassword1" class="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12">Password<span
                    class="required"> *</span></label>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 mb20">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                           required="required">
                  </div>

                  <label for="middleName" class="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12">Middle Name / Initial<span
                    class="required"> *</span></label>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 mb20">
                    <input type="text" id="middleName" class="form-control" placeholder="middle name"
                           required="required">
                  </div>

                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Gender<span
                    class="required"> *</span></label>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb20">
                    <div id="gender" class="btn-group" data-toggle="buttons">
                      <label class="btn btn-default" data-toggle-class="btn-primary"
                             data-toggle-passive-class="btn-default">
                        <input type="radio" name="gender" value="male" data-parsley-multiple="gender"
                               data-parsley-id="12"> &nbsp; Male &nbsp;
                      </label>
                      <label class="btn btn-primary active" data-toggle-class="btn-primary"
                             data-toggle-passive-class="btn-default">
                        <input type="radio" name="gender" value="female" data-parsley-multiple="gender"> Female
                      </label>
                    </div>
                  </div>

                  <label for="exampleInputFile" class="control-label col-md-3 col-sm-3 col-xs-12">File input<span
                    class="required"> *</span></label>
                  <div class="col-md-8 col-sm-8 col-xs-12">
                    <input type="file" id="exampleInputFile">
                    <p class="help-block">Example block-level help text here.</p>
                  </div>


                  <div class="btn-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button type="reset" class="btn btn-info">Cancel</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                    <button type="submit" class="btn btn-success">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </transition>
        </div>
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

  .formDesign {
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
      .content1 {
        margin-top: 20px;
        .form-group {
          margin-bottom: 25px;

          .control-label {
            font-size 14px
            color #a6a6a6
          }
          #exampleInputFile {
            font-size 14px
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

  .mb20 {
    margin-bottom: 20px;
  }

  &.fade-enter-active, &.fade-leave-active
    opacity: 1
    transition: all 0.5s

  &.fade-enter, &.fade-leave-active
    opacity: 0
</style>
