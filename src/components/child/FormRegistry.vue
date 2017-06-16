<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 registrationForm">
      <div class="inner" v-if="deleteProp">
        <!--顶部设置按钮-->
        <div class="settingTitle">
          <h2>Form Registry</h2>
          <span>Click to validate</span>
          <ul>
            <li><i class="fa" :class="[show? 'fa-chevron-up' : 'fa-chevron-down']" @click="toggleShow"></i></li>
            <li><i class="fa fa-wrench"></i></li>
            <li><i class="fa fa-close" @click="deleteAll"></i></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <!--顶部设置按钮 end-->

        <transition name="fade">
          <div v-show="show" class="registrationContent">
            <div class="row">
              <form class="form-group">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <label for="fullName">Full Name*</label>
                  <input type="text" class="form-control" id="fullName" placeholder="Full Name" required="required">
                  <div class="divider-dashed"></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <label for="fullName">Email*</label>
                  <input type="text" class="form-control" id="Email" placeholder="Email" required="required">
                  <div class="divider-dashed"></div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <label>Gender *:</label><br>
                  <label for="genderM">M*:</label>
                  <div class="gender_choose" :class="{green:checkM}" @click="toggleGreenM">
                    <input type="radio" value="M" name="gender" id="genderM" class="gender_checked">
                  </div>
                  <label for="genderF">F*:</label>
                  <div class="gender_choose" :class="{green:checkF}" @click="toggleGreenF">
                    <input type="radio" value="F" name="gender" id="genderF" class="gender_checked">
                  </div>
                  <div class="divider-dashed"></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3>Hobbies(2 minimum):</h3>
                  <div v-for="hobby in hobbies">
                    <div class="choose_hobby">
                      <div class="choose_hobby_item" :class="{like:hobby.isLike}" @click="toggleLike(hobby)">
                        <input type="checkbox" :id="hobby.name">
                      </div>
                      <span><label :for="hobby.name">{{hobby.name}}:</label></span>
                    </div>
                  </div>
                  <div class="divider-dashed"></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <label for="heard">Heard us by *:</label>
                  <select id="heard" class="form-control" required="">
                    <option value="">Choose..</option>
                    <option value="press">Press</option>
                    <option value="net">Internet</option>
                    <option value="mouth">Word of mouth</option>
                  </select>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <label for="Message">Message (20 chars min, 100 max) :</label>
                  <textarea id="message" required="required" class="form-control" name="message"
                            data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100"
                            data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                            data-parsley-validation-threshold="10"></textarea>
                </div>
                <button class="btn btn-success validate" type="submit">Validate form</button>
                <div class="clearfix"></div>
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
        checkM: true,
        checkF: false,
        hobbies: [
          {isLike: false, name: "Skiing",},
          {isLike: false, name: "Running",},
          {isLike: false, name: "Eating",},
          {isLike: false, name: "Sleeping",}
        ],
        hobby: {isLike: false, name: ""}
      }
    },
    methods: {
      toggleShow(){
        return this.show = !this.show;
      },
      deleteAll(){
        return this.deleteProp = !this.deleteProp;
      },
      toggleLike(hobby){
        hobby.isLike = !hobby.isLike;
      },
      toggleGreenM(){
        this.checkF = false;
        this.checkM = true;
      },
      toggleGreenF(){
        this.checkF = true;
        this.checkM = false;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .page-title {
    font-size 24px
    padding-top: 15px;
  }

  .registrationForm {
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
      .registrationContent {
        margin-top: 20px;
        padding: 0 20px;
        .form-group {
          margin-bottom: 25px;
          label {
            font-size: 14px;
            color: #a6a6a6;
          }
          .divider-dashed {
            border-bottom: 1px dashed #b9b9b9;
            background-color: #fff;
            height: 1px;
            margin: 10px 0;
            margin-bottom: 10px;
          }
          .gender_choose {
            display: inline-block;
            vertical-align: bottom;
            width: 20px;
            height: 20px;
            background: url("../../assets/img/green.png") no-repeat -88px 0;
            .gender_checked {
              opacity 0
            }
          }
          .green {
            width: 20px;
            height: 20px;
            background: url("../../assets/img/green.png") no-repeat -110px 0;
          }
          h3 {
            font-size: 16px;
          }
          .choose_hobby {
            margin-top: 10px;
            .choose_hobby_item {
              margin: 0;
              padding: 0;
              margin-top: 8px;
              width: 21px;
              height: 21px;
              background: url("../../assets/img/green.png") no-repeat 0 0;
              cursor: pointer;
              border: none;
              float: left;
              &.like {
                background: url("../../assets/img/green.png") no-repeat -21px 0;
              }
              input[type=checkbox] {
                opacity: 0;
                width: 21px;
                height: 21px;
                cursor: pointer;
                float: left;
                margin-top: -1px;
              }
            }
            span {
              padding-left: 5px;
              line-height: 30px;
              label {
                cursor: pointer;
              }
            }
          }
          .validate{
            margin-top:15px;
            margin-left:15px;
            color:#fff;
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
