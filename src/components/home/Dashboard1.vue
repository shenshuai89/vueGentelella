<template>
  <div id="dashboard1" class="row">
    <Title-Count></Title-Count>
    <Net-Work></Net-Work>
    <App-Version></App-Version>
    <Device-Usage></Device-Usage>
    <Quick-Settings></Quick-Settings>
    <Recent-Activities></Recent-Activities>
    <Todo-List></Todo-List>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import TitleCount from '../child/TitleCount.vue';
  import NetWork from '../child/NetWork.vue';
  import AppVersion from '../child/AppVersion.vue';
  import DeviceUsage from '../child/DeviceUsage.vue';
  import QuickSettings from '../child/QuickSettings.vue';
  import RecentActivities from '../child/RecentActivities.vue';
  import TodoList from '../child/TodoList.vue';

  export default{
    name: 'Dashboard1',
    components: {
      TitleCount, NetWork, AppVersion, DeviceUsage, QuickSettings, RecentActivities, TodoList
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>
