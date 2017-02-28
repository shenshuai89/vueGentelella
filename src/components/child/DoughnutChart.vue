<template>
  <Doughnutself :data="data" :options="options"></Doughnutself>
</template>


<script>
  import Doughnutself from '../chart/Doughnutself.js';
  export default {
    data(){
      return {
        data: {
          labels: ["IOS","Android","Blackberry","Symbian","Others"],
          datasets: [
            {
              data: [30, 10, 20, 10, 30],
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#1ABB9C",
                "#E74C3C",
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#1ABB9C",
                "#E74C3C",
              ]
            },
          ]
        },
        options: {
          legend: {
            display: false
          }
        }
      }
    },
    components: { Doughnutself },
  }
</script>
