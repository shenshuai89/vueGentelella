import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Tables from 'components/Tables'
import Dashboard1 from 'components/home/Dashboard1'
import Dashboard2 from 'components/home/Dashboard2'
import Dashboard3 from 'components/home/Dashboard3'
import Forms from 'components/Forms'
import GeneralForm from 'components/forms/General form.vue'
import FormValidation from 'components/forms/Form Validation'
import FormWizard from 'components/forms/Form Wizard'
import FormUpload from 'components/forms/Form Upload'
import FormButtons from 'components/forms/Form Buttons'
import UiElements from 'components/UiElements'
import GeneralElements from 'components/uiElements/GeneralElements'
import MediaGallery from 'components/uiElements/MediaGallery'
import Typography from 'components/uiElements/Typography'
import Icons from 'components/uiElements/Icons'
import Glyphicons from 'components/uiElements/Glyphicons'
import Widgets from 'components/uiElements/Widgets'
import Invoice from 'components/uiElements/Invoice'
import Inbox from 'components/uiElements/Inbox'
import Calendar from 'components/uiElements/Calendar'
import Table from 'components/tables/Table'
import TablesDynamic from 'components/tables/TablesDynamic'
import Data from 'components/Data'
import ChartJs from 'components/data/ChartJs'
import MorisJs from 'components/data/MorisJs'
import ECharts from 'components/data/ECharts'
import OtherCharts from 'components/data/OtherCharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: Home,
      children: [
        {path: '/', name: 'Home', component: Dashboard1},
        {path: 'dashboard1', name: 'Dashboard1', component: Dashboard1},
        {path: 'dashboard2', name: 'Dashboard2', component: Dashboard2},
        {path: 'dashboard3', name: 'Dashboard3', component: Dashboard3},
      ]
    },
    {
      path: '/', component: Forms,
      children: [
        {path: '/', name: 'Forms', component: Forms},
        {path: 'generalForm', name: 'GeneralForm', component: GeneralForm},
        {path: 'formValidation', name: 'FormValidation', component: FormValidation},
        {path: 'formWizard', name: 'FormWizard', component: FormWizard},
        {path: 'formUpload', name: 'FormUpload', component: FormUpload},
        {path: 'formButtons', name: 'FormButtons', component: FormButtons},
      ]
    },
    {
      path: '/', component: UiElements,
      children: [
        {path: 'generalElements', name: 'GeneralElements', component: GeneralElements},
        {path: 'mediaGallery', name: 'MediaGallery', component: MediaGallery},
        {path: 'typography', name: 'typography', component: Typography},
        {path: 'icons', name: 'Icons', component: Icons},
        {path: 'glyphicons', name: 'Glyphicons', component: Glyphicons},
        {path: 'widgets', name: 'widgets', component: Widgets},
        {path: 'invoice', name: 'invoice', component: Invoice},
        {path: 'inbox', name: 'inbox', component: Inbox},
        {path: 'calendar', name: 'calendar', component: Calendar},
      ]
    },
    {
      path: '/', component: Tables,
      children: [
        {path: '/tables', name: 'Tables', component: Table},
        {path: '/tablesDynamic', name: 'TablesDynamic', component: TablesDynamic},
      ]
    },
    {
      path: '/', component: Data,
      children: [
        {path: '/chartJs', name: 'chartJs', component: ChartJs},
        {path: '/morisJs', name: 'MorisJs', component: MorisJs},
        {path: '/eCharts', name: 'ECharts', component: ECharts},
        {path: '/otherCharts', name: 'OtherCharts', component: OtherCharts},
      ]
    }
  ]
})
