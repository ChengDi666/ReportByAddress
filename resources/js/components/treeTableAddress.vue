<template>
  <div v-if="tableData.length" style="width: 100%">
    <heading class="mb-6">
      <span>{{ myTitle }}</span>
    </heading>
<!--    <h1 class="mb-3 text-90 font-normal text-2xl">{{ myTitle }}</h1>-->

    <vxe-table
        resizable
        ref="xTree"
        row-id="id"
        header-row-class-name="tree-table-title"
        :tree-config="{lazy: true, children: 'children', hasChild: 'hasChildren', loadMethod: loadChildrenMethod}"
        :data="tableData"
        @cell-click="cellClickEvent">
      <!-- <vxe-table-column field="id" title="id" width="100" ></vxe-table-column> -->
      <vxe-table-column field="name" title="地址" width="400" tree-node></vxe-table-column>
      <vxe-table-column field="type" title="类型"></vxe-table-column>
      <vxe-table-column field="checkin" title="入住"></vxe-table-column>
      <vxe-table-column field="ccp" title="党员"></vxe-table-column>
      <vxe-table-column field="updated_at" title="更新时间" :formatter="formatTime"></vxe-table-column>
      <vxe-table-column title="操作" width="140">
        <template #default="{ row }">
         <vxe-button type="text" style="color: var(--70);" @click="linkTo(row, 'lock')">
           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 16" aria-labelledby="view" role="presentation" class="fill-current"><path d="M16.56 13.66a8 8 0 0 1-11.32 0L.3 8.7a1 1 0 0 1 0-1.42l4.95-4.95a8 8 0 0 1 11.32 0l4.95 4.95a1 1 0 0 1 0 1.42l-4.95 4.95-.01.01zm-9.9-1.42a6 6 0 0 0 8.48 0L19.38 8l-4.24-4.24a6 6 0 0 0-8.48 0L2.4 8l4.25 4.24h.01zM10.9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
         </vxe-button>
          <vxe-button type="text" style="margin-left: 0;color: var(--70);" @click="linkTo(row, 'change')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="edit" role="presentation" class="fill-current"><path d="M4.3 10.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM6 14h2.59l9-9L15 2.41l-9 9V14zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a1 1 0 1 1 0 2H2v14h14v-6z"></path></svg>
          </vxe-button>
          <vxe-button type="text" style="margin-left: 0;color: var(--70);" @click="removeRowEvent(row)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="delete" role="presentation" class="fill-current"><path fill-rule="nonzero" d="M6 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5zM4 6v12h12V6H4zm8-2V2H8v2h4zM8 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"></path></svg>
          </vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
  </div>

</template>
<script>
import XEUtils from 'xe-utils'
export default {
  data() {
    return {
      tableData: [],
      myTitle: '树形展示'
    }
  },
  computed: {
  },
  mounted() {
    this.getMessage()
    // console.log('tableData', this.tableData.length)
    // console.log('query', this.$route.query)
    // console.log(this.$route.query.type)
    // console.log('params', this.$route.params)
    // console.log(this.$route.params.type)
    this.myTitle = this.$route.query.title ? this.$route.query.title : this.myTitle
  },
  methods: {
    cellClickEvent({row, column}) {
      // console.log(column.property)
      if(column.property == 'name') { // 点击首位，展开或折叠行
        // console.log(row)
        this.$refs.xTree.toggleTreeExpand(row)
      }
    },
    loadChildrenMethod ({ row }) {
      // 异步加载子节点
      // console.log(row)
        return this.getData(`/api/addresses/${row.id}/children`).then(res => {
        // console.log(res.data.data);
        const childs = this.formatTableData(res.data.data);
        return childs
      })
    },
    linkTo(row, type) { // 操作跳转链接
      if(type == 'lock') {
        this.$router.push('/resources/addresses/' + row.id)
      }
      if(type == 'change') {
        this.$router.push(`/resources/addresses/${row.id}/edit?viaResource&viaResourceId&viaRelationship`)
      }
      if(type == 'del') {
        this.$XModal.confirm('您确定要删除该数据?').then(type => {
          console.log(type);
          // const $table = this.$refs.xTable
          // if (type === 'confirm') {
          //   // $table.remove(row)
          // }
        })
        // this.delData(`/nova-api/addresses?search=&filters=W3siY2xhc3MiOiJBcHBcXE5vdmFcXEZpbHRlcnNcXEFkZHJlc3NGaWx0ZXIiLCJ2YWx1ZSI6IiJ9LHsiY2xhc3MiOiJBcHBcXE5vdmFcXEZpbHRlcnNcXEFkZHJlc3NUeXBlRmlsdGVyIiwidmFsdWUiOltdfV0%3D&trashed=&resources[]=56297`)
      }
      // /nova-api/addresses?search=&filters=W3siY2xhc3MiOiJBcHBcXE5vdmFcXEZpbHRlcnNcXEFkZHJlc3NGaWx0ZXIiLCJ2YWx1ZSI6IiJ9LHsiY2xhc3MiOiJBcHBcXE5vdmFcXEZpbHRlcnNcXEFkZHJlc3NUeXBlRmlsdGVyIiwidmFsdWUiOltdfV0%3D&trashed=&resources[]=56297
    },
    removeRowEvent (row) {
      this.$XModal.confirm('您确定要删除此资源吗？', '删除资源', {status: null}).then(type => {
        // console.log(row)
        if (type === 'confirm') {
          this.delData(`/nova-api/addresses?search=&filters=W3siY2xhc3MiOiJBcHBcXE5vdmFcXEZpbHRlcnNcXEFkZHJlc3NGaWx0ZXIiLCJ2YWx1ZSI6IiJ9LHsiY2xhc3MiOiJBcHBcXE5vdmFcXEZpbHRlcnNcXEFkZHJlc3NUeXBlRmlsdGVyIiwidmFsdWUiOltdfV0%3D&trashed=&resources[]=${row.id}`)
          .then(res => {
            // console.log(res);
            if(res.status == 200) {
              // this.getMessage();
              const matchObj = XEUtils.findTree(this.tableData, item => item === row, this.treeConfig)
              if (matchObj) {
                // 从树节点中移除
                matchObj.items.splice(matchObj.index, 1)
              }
              this.$toasted.show('地址删除成功', { type: 'success' })
            } else {
              this.$toasted.show('地址正在使用中，无法删除', { type: 'error' })
            }
          })
        }
      })
    },
    getMessage() {
      this.getData('/api/addresses?id=1').then(res => {
        // console.log('res: ', res);
        this.tableData = this.formatTableData(res.data.data);
      })
    },
    formatTableData(data) { // 格式化数据
      let initData = []
      for (let i=0; i<data.length; i++) {
        const item = data[i]
        initData.push({
          id: item.id,
          name: item.name,
          type: item.type ? item.type.name : '—',
          checkin: item.checkin ? '是' : '—',
          ccp: item.ccp ? '是' : '—',
          updated_at: item.updated_at,
          hasChildren: item.hasChildren
        })
      }
      return initData
    },
    delData(url) {
      return axios.delete(url).then(response => { return response }).catch(err => { return err });
    },
    getData(url) { // get 请求数据
      return axios.get(url).then(response => { return response }).catch(err => { return err });
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    },
  }
}
</script>

<style>
.tree-node-icon {
  width: 24px;
  text-align: center;
}
.vxe-button.type--text:not(.is--disabled):focus{
  box-shadow: none;
  outline-width: 0;
}
.tree-table-title{
  background-color: var(--30);
  font-weight: 800;
  font-size: .75rem;
  color: var(--80);
  text-transform: uppercase;
  border-bottom-width: 2px;
  border-color: var(--50);
  padding: .75rem;
  letter-spacing: .05em;
}
</style>
