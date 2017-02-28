<template>
  <div class="container-flow">
    <div class="row bg">
      <div class="router-link">
        <div class="nav-title clearfix">
          <a href="index.html">
            <i class="fa fa-paw"></i>
            <span>Gentelella Alela!</span>
          </a>
        </div>
        <div class="profile clearfix">
          <div class="profile-avatar">
            <img src="./assets/img/img.jpg" alt="avatar">
          </div>
          <div class="profile-info">
            <span>welcome,</span>
            <h2>john</h2>
          </div>
        </div>
        <ul class="router-list">
          <li>
            <div @click.stop.prevent.capture="toggleShow(0)">
              <router-link to=""><i class="fa fa-home"></i> Home <span class="fa fa-chevron-down"></span>
              </router-link>
            </div>
            <ol class="home" v-show="lists[0].show">
              <li>
                <router-link to="./dashboard1"> Dashboard1</router-link>
              </li>
              <li>
                <router-link to="./dashboard2"> Dashboard2</router-link>
              </li>
              <li>
                <router-link to="./dashboard3"> Dashboard3</router-link>
              </li>
            </ol>
          </li>

          <li>
            <div @click.prevent="toggleShow(1)">
              <router-link to=""><i class="fa fa-edit"></i>Forms<span class="fa fa-chevron-down"></span>
              </router-link>
            </div>
            <ul class="forms" v-show="lists[1].show">
              <li>
                <router-link to="./generalForm">GeneralForm</router-link>
              </li>
              <li>
                <router-link to="./formValidation"> FormValidation</router-link>
              </li>
              <li>
                <router-link to="./formWizard"> FormWizard</router-link>
              </li>
              <li>
                <router-link to="./formUpload"> FormUpload</router-link>
              </li>
              <li>
                <router-link to="./formButtons"> FormButtons</router-link>
              </li>
            </ul>
          </li>

          <li>
            <div @click.prevent="toggleShow(2)">
              <router-link to=""><i class="fa fa-desktop"></i>UI Elements<span
                class="fa fa-chevron-down"></span>
              </router-link>
            </div>
            <ul class="uiElements" v-show="lists[2].show">
              <li>
                <router-link to="./generalElements">GeneralElements</router-link>
              </li>
              <li>
                <router-link to="./mediaGallery"> MediaGallery</router-link>
              </li>
              <li>
                <router-link to="./typography"> Typography</router-link>
              </li>
              <li>
                <router-link to="./icons"> Icons</router-link>
              </li>
              <li>
                <router-link to="./glyphicons"> Glyphicons</router-link>
              </li>
              <li>
                <router-link to="./widgets"> Widgets</router-link>
              </li>
              <li>
                <router-link to="./invoice"> Invoice</router-link>
              </li>
              <li>
                <router-link to="./inbox"> Inbox</router-link>
              </li>
              <li>
                <router-link to="./calendar"> Calendar</router-link>
              </li>
            </ul>
          </li>

          <li>
            <div @click.prevent="toggleShow(3)">
              <router-link to=""><i class="fa fa-table"></i>Tables<span class="fa fa-chevron-down"></span>
              </router-link>
            </div>
            <ul class="tables" v-show="lists[3].show">
              <li>
                <router-link to="./tables"> Tables</router-link>
              </li>
              <li>
                <router-link to="./tablesDynamic"> Tables Dynamic</router-link>
              </li>
            </ul>
          </li>

          <li>
            <div @click.prevent="toggleShow(4)">
              <router-link to=""><i class="fa fa-bar-chart-o"></i>Data Presentation<span
                class="fa fa-chevron-down"></span>
              </router-link>
            </div>
            <ul class="data" v-show="lists[4].show">
              <li>
                <router-link to="./chartJs"> ChartJs</router-link>
              </li>
              <li>
                <router-link to="./morisJs"> MorisJs</router-link>
              </li>
              <li>
                <router-link to="./echarts"> ECharts</router-link>
              </li>
              <li>
                <router-link to="./otherCharts"> Other Charts</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="rtView">
        <router-view></router-view>
      </div>
      <div class="sidebar-footer">
        <a class="setting"><i class="glyphicon glyphicon-cog"></i></a>
        <a class="setting"><i class="glyphicon glyphicon-fullscreen"></i></a>
        <a class="setting"><i class="glyphicon glyphicon-eye-close"></i></a>
        <a class="setting"><i class="glyphicon glyphicon-off"></i></a>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    data(){
      return {
        lists: [{show: false}, {show: false}, {show: true}, {show: false}, {show: false}]
      }
    },
    methods: {
      toggleShow(n){
        var vm = this;
        if (vm.lists[n].show == true) {
          vm.lists[n].show = !vm.lists[n].show;
        } else {
          for (var i = 0; i < 5; i++) { // close all boxes
            vm.lists[i].show = false;
          }
          vm.lists[n].show = true;
        }
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container-flow {
    background: #f5f5f5;
    .bg {
      background: #2a3f54;
      .router-link {
        width: 230px;
        float: left;
        background-color: #2a3f54;

        a {
          color: #eee;
        }
        .nav-title {
          float: left;
          width: 230px;
          height: 57px;
          line-height: 57px;
          background: #24374a;
          border-radius: 0;
          a {
            padding: 21px 67px 20px 15px;
          }
          i {
            border: 1px solid #EAEAEA;
            padding: 5px 6px;
            border-radius: 50%;
          }
          span {
            font-size: 16px;
          }
          .fa-paw {
            margin-top: 10px;
          }
        }
        .profile {
          width: 230px;
          height: 80px;
          .profile-avatar {
            width: 30%;
            float: left;
            margin-right: 8px;
            img {
              width: 70%;
              background: #fff;
              margin-left: 15%;
              z-index: 1000;
              position: inherit;
              margin-top: 15px;
              border: 1px solid rgba(52, 73, 94, .44);
              padding: 4px;
              border-radius: 50%;
            }
          }
          .profile-info {
            width: 70%;
            color: #fff;
            margin-top: 16px;
            span {
              font-size: 18px;
            }
            h2 {
              margin: 0;
              padding: 0;
              margin-top: 10px;
              font-size: 12px;
              color: #eeeeee;
            }
          }
        }
        .router-list {
          margin-top: 5px;
          position: relative;
          a {
            display: block;
            padding: 15px 0 15px 20px;
            border-bottom: 1px solid #21364b;
            font-size: 14px;
            font-weight: 700;
            i {
              margin-right: 8px;
            }
            span {
              position: absolute;
              right: 20px;
              color: #848d96;
            }
          }
          .home, .forms, .tables, .uiElements, .data {
            margin-left: 10px;
            position: relative;
            li {
              padding-left: 10px;
              &:after {
                content: "";
                border-left: 1px solid #425668;
                position: absolute;
                left: 27px;
                bottom: 0;
                top: 0;
              }
              &:before {
                background: #425668;
                bottom: auto;
                content: "";
                height: 8px;
                left: 23px;
                margin-top: 16px;
                position: absolute;
                right: auto;
                width: 8px;
                z-index: 1;
                border-radius: 50%;
              }
              a {
                display: block;
                padding-left: 40px;
                font-size: 12px;
                font-weight: 300;
                border-bottom: 1px solid #21364b;
              }
            }

          }
        }

      }

      .rtView {
        margin-left: 230px;
        padding-left: 10px;
        background: #f5f5f5;
        padding-right: 20px;
        min-height: 1000px;
      }
      .sidebar-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: #25364b;
        width: 230px;
        height: 40px;
        a {
          display: inline-block;
          color: #5a738e;
          width: 25%;
          float: left;
          font-size: 17px;
          padding: 12px 0 3px;
          text-align: center;
        }
      }

    }
  }

</style>
