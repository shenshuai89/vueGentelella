/**
 * Created by sam on 2017/2/23.
 */
import { Radar } from 'vue-chartjs'

export default Radar.extend({
  props: ["data", "options"],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
