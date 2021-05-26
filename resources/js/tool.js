
import 'xe-utils'
const VXETable = require('vxe-table');
import 'vxe-table/lib/style.css'

Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'report-by-address',
      path: '/report-by-address/examineLib',
      component: require('./components/treeTable'),
    },
    {
      name: 'report-by-address',
      path: '/report-by-address/addresses',
      component: require('./components/treeTableAddress.vue'),
    },
  ])

  Vue.use(VXETable)
  Vue.prototype.$XModal = VXETable.modal
})
