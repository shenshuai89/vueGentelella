<template>
  <Lineself :data="data" :options="options"></Lineself>
</template>


<script>
  import Lineself from '../chart/Lineself.js';
  export default {
    data(){
      return {
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            data: [65, 0, 80, 81, 56, 85, 40],
            fill: false
          }]
        },
        options: {
          legend: {
            display: true
          }
        }
      }
    },
   components: { Lineself },
  }
</script>
