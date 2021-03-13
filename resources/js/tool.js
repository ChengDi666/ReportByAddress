
Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'report-by-address',
      path: '/report-by-address',
      component: require('./components/Tool'),
    },
  ])
})
