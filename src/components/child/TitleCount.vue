<template>
  <div class="title_count">
    <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count" v-for="list in lists">
      <p class="count_top"><i class="fa" :class="[ list.user ? 'fa-user' : 'fa-clock-o']"></i>{{list.txt}}</p>
      <div class="count"><span :class="[list.mode === 'up' && list.percent>30 ? 'up_color':'']">{{ list.count }}</span>
      </div>
      <p class="count_bottom"><i class="fa" :class="[list.mode ==='up' ? 'fa-sort-asc' :'fa-sort-desc',
      list.mode === 'up' ? 'up_color':'down_color']"></i>
        <span :class="[list.mode === 'up' ? 'up_color':'down_color']">{{list.percent}}%</span> From last Week</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        lists: [
          {txt: 'Total Users', user: true, count: 2500, percent: 4, mode: 'up'},
          {txt: 'Average Time', user: false, count: 123.50, percent: 3, mode: 'up'},
          {txt: 'Total Males', user: true, count: 2500, percent: 34, mode: 'up'},
          {txt: 'Total Females', user: true, count: 4568, percent: 12, mode: 'down'},
          {txt: 'Total Connections', user: true, count: 1236, percent: 25, mode: 'up'},
          {txt: 'Total Connections', user: true, count: 7853, percent: 15, mode: 'up'},
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title_count {
    overflow: auto;
    margin-bottom: 20px;
    .tile_stats_count {
      margin-top: 10px;
      &:before {
        content: "";
        position: absolute;
        right: 0;
        height: 65px;
        border-right: 2px solid #ADB2B5;
        margin-top: 10px;
      }
      &:last-child {
        &:before {
          border-right: 0px;
        }
      }
      .count_top {
        font-size: 12px;
        color: #73879C;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        i {
          margin-right: 5px;
        }
      }
      .count {
        margin: 10px 0;
        font-size: 40px;
        font-weight: 700;
        color: #73879C;
        .up_color {
          color: #1ABB9C;
        }
        .down_color {
          color: #d00b04;
        }
      }
      .count_bottom {
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .up_color {
          color: #1ABB9C;
        }
        .down_color {
          color: #d00b04;
        }
      }
    }
  }


</style>
