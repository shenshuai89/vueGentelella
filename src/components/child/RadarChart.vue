<template>
  <Radarself :data="data" :options="options"></Radarself>
</template>


<script>
  import Radarself from '../chart/Radarself.js';
  export default {
    data(){
      return {
        data: {
          labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding",  "Running"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [65, 29, 90, 11, 76, 40]
            },
            {
              label: "My Second dataset",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [28, 68, 20, 69, 26, 100]
            }
          ]
        },
        options: {
          legend: {
            display: true
          }
        }
      }
    },
    components: {Radarself},
  }
</script>
