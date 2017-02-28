/**
 * Created by sam on 2017/2/23.
 */
import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  props: ["data", "options"],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
