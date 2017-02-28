<template>
  <transition name="fade">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 todoList" v-if="deleteProp">
      <div class="inner">
        <!--顶部设置按钮-->
        <div class="settingTitle">
          <h2>To Do List</h2>
          <ul>
            <li><i class="fa" :class="[show? 'fa-chevron-up' : 'fa-chevron-down']" @click="toggleShow"></i></li>
            <li><i class="fa fa-wrench"></i></li>
            <li><i class="fa fa-close" @click="deleteAll"></i></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <!--顶部设置按钮 end-->

        <transition name="fade">
          <form v-show="show" class="content" @submit.prevent="addTodo(list)" autocomplete="on">
            <div class="addWrapper">
              <input type="text" v-model="list.content">
              <button type="submit" class="addbtn">添加</button>
            </div>
            <ul class="lists">
              <li v-for="(list,index) in lists">
                <div class="icheckbox_flat" :class="{green:list.done}" @click="toggle(list)">
                  <input type="checkbox" class="flat" id="checkbox" >
                </div>
                <!--<button @click="toggle(list)">{{ list.done ? "完成" : "未完成"}}</button>-->
                <span class="listContent" :class="{selected:list.done}" @click="toggle(list)">{{ list.content }}</span>
                <span class="delete" @click="deletelist(index)"></span>
              </li>
            </ul>
            <div class="clearfix"></div>
          </form>
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
        lists: [
          {content: 'Schedule meeting with new client', done: false},
          {content: 'Create email address for new intern', done: false},
          {content: 'Have IT fix the network printer', done: false},
          {content: 'Copy backups to offsite location', done: false},
          {content: 'Food truck fixie locavors mcsweeney', done: false},
          {content: 'Food truck fixie locavors mcsweeney', done: false},
          {content: 'Create email address for new intern', done: false},
          {content: 'Have IT fix the network printer', done: false},
          {content: 'Copy backups to offsite location', done: false},
        ],
        list: {
          content: '', done: false
        }
      }
    },
    methods: {
      toggleShow(){
        return this.show = !this.show;
      },
      deleteAll(){
        return this.deleteProp = !this.deleteProp;
      },
      addTodo(list){
        this.lists.push(list);
        this.list = {list: '', done: false}
      },
      toggle(list){
        list.done = !list.done;
      },
      deletelist(index){
        this.lists.splice(index, 1);
      }
    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .todoList {
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
        .addWrapper {
          margin-bottom: 10px;
          input {
            width 70%
            border: 2px solid #bdc4cb;
            border-radius: 5px;
            padding: 5px 12px;
            font-size: 16px;
            margin-bottom: 6px;
            &:focus {
              outline none;
            }
          }
          .addbtn {
            width 28%
            min-width 70px
            padding: 7px 18px;
            font-size 16px
            background: #00aeef;
            border: none;
            border-radius 5px;
            color: #fff;
            &:hover {
              background: #0084ba;
            }
          }
        }
        .lists {
          width 100%
          margin: 0;
          padding: 0;
          float: left;
          li {
            list-style: none;
            margin-bottom: 8px;
            font-size: 14px;
            padding: 4px
            padding-left: 6px;
            background #f1f1f1
            position: relative
            .icheckbox_flat {
              display: inline-block;
              vertical-align: top;
              margin: 0;
              padding: 0;
              width: 20px;
              height: 20px;
              background: url(../../assets/img/green.png) no-repeat;
              border: none;
              cursor: pointer;
              &.green{
                background: url(../../assets/img/green.png) no-repeat -22px 0;
              }
              #checkbox {
                position: absolute;
                opacity: 0;
              }
            }
            .listContent {
              display inline-block
              width 80%
              line-height: 20px
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .delete {
              float: right;
            }
            .selected {
              text-decoration: line-through
            }
          }
          &:first-child {
            margin-top: 12px;
          }
        }
        .chartWrapper {
          width: 64%;
          max-width: 230px;
          max-height: 230px;
          margin-top: 4px;
          float: right;
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
