/**
 * Created by sam on 2017/2/23.
 */
import { Line } from 'vue-chartjs'

export default Line.extend({
  props: ["data", "options"],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
