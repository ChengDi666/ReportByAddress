
import 'xe-utils'
const VXETable = require('vxe-table');
import 'vxe-table/lib/style.css'

Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'report-by-address',
      path: '/report-by-address/:type',
      component: require('./components/treeTable'),
    }
  ])

  Vue.use(VXETable)
})
