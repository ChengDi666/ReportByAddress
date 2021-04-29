<template>
    <div>
        <heading class="mb-6">考核标准</heading>
<!--        <card-->
<!--            class="bg-90 flex flex-col items-center justify-center"-->
<!--            style="min-height: 300px"-->
<!--        >-->
<!--            <svg-->
<!--                class="spin fill-80 mb-6"-->
<!--                width="69"-->
<!--                height="72"-->
<!--                viewBox="0 0 23 24"-->
<!--                xmlns="http://www.w3.org/2000/svg"-->
<!--            >-->
<!--                <path-->
<!--                    d="M20.12 20.455A12.184 12.184 0 0 1 11.5 24a12.18 12.18 0 0 1-9.333-4.319c4.772 3.933 11.88 3.687 16.36-.738a7.571 7.571 0 0 0 0-10.8c-3.018-2.982-7.912-2.982-10.931 0a3.245 3.245 0 0 0 0 4.628 3.342 3.342 0 0 0 4.685 0 1.114 1.114 0 0 1 1.561 0 1.082 1.082 0 0 1 0 1.543 5.57 5.57 0 0 1-7.808 0 5.408 5.408 0 0 1 0-7.714c3.881-3.834 10.174-3.834 14.055 0a9.734 9.734 0 0 1 .03 13.855zM4.472 5.057a7.571 7.571 0 0 0 0 10.8c3.018 2.982 7.912 2.982 10.931 0a3.245 3.245 0 0 0 0-4.628 3.342 3.342 0 0 0-4.685 0 1.114 1.114 0 0 1-1.561 0 1.082 1.082 0 0 1 0-1.543 5.57 5.57 0 0 1 7.808 0 5.408 5.408 0 0 1 0 7.714c-3.881 3.834-10.174 3.834-14.055 0a9.734 9.734 0 0 1-.015-13.87C5.096 1.35 8.138 0 11.5 0c3.75 0 7.105 1.68 9.333 4.319C16.06.386 8.953.632 4.473 5.057z"-->
<!--                    fill-rule="evenodd"-->
<!--                />-->
<!--            </svg>-->

<!--            <h1 class="text-white text-4xl text-90 font-light mb-6">-->
<!--                We're in a black hole.-->
<!--            </h1>-->
<!--        </card>-->
<!--      <tree :label="'这是树形结构'" :treeList="data1"></tree>-->


      <div class="card flex flex-col justify-center" style="text-align: center;">
        <div v-if="data1.length" class="flex tree-table-title">
<!--          <div class="myItem tou flex-1">-->
<!--            <span> 地址 </span>-->
<!--          </div>-->
<!--          <div class="myItem" style="flex-shrink: 1;" v-for="item in data1[0].data">-->
<!--            <span> {{item.type}} </span>-->
<!--          </div>-->

          <div class="myItem tou flex-1">
            <span> 考核标准 </span>
          </div>

          <div class="myItem" style="flex-shrink: 1;">
            <span> 扣分机制 </span>
          </div>

          <div class="myItem" style="flex-shrink: 1;">
            <span> 建议分值 </span>
          </div>

          <div class="myItem" style="flex-shrink: 1;">
            <span> 建议罚款 </span>
          </div>

          <div class="myItem" style="flex-shrink: 1;">
            <span></span>
          </div>

<!--          <div class="myItem" style="flex-shrink: 1;">-->
<!--            <span> 可回收 </span>-->
<!--          </div>-->
<!--          <div class="myItem" style="flex-shrink: 1;">-->
<!--            <span> 厨余 </span>-->
<!--          </div>-->
<!--          <div class="myItem" style="flex-shrink: 1;">-->
<!--            <span> 有害 </span>-->
<!--          </div>-->
<!--          <div class="myItem" style="flex-shrink: 1;">-->
<!--            <span> 其他 </span>-->
<!--          </div>-->
<!--          <div class="myItem" style="flex-shrink: 1;">-->
<!--            <span> 总数 </span>-->
<!--          </div>-->
        </div>
        <ul v-if="data1.length">
          <tree v-for="item in data1" :data="item" :ceng="0"></tree>
        </ul>
        <div class="card text-center flex justify-center items-center px-6 py-8" v-else>
          <h3 class="text-base text-80 font-normal">数据不符合给定的标准。</h3>
        </div>
      </div>
<!--      <table>-->
<!--        <div class="card">-->
<!--&lt;!&ndash;          <tr v-for="item in data1">&ndash;&gt;-->
<!--          <div v-for="item in data1">-->
<!--            <tree :data="item" :ceng="1"></tree>-->
<!--          </div>-->
<!--&lt;!&ndash;          </tr>&ndash;&gt;-->
<!--        </div>-->
<!--      </table>-->
    </div>
</template>

<script>
import tree from './tree'

export default {
  components: { tree },
  data() {
    return {
      data1: []
    };
  },
  methods: {
    getMessage() {
      // this.getData('/api/addresses/statistics/1').then(res => {
      //   // console.log('res: ', res);
      //   if (res.status === 200) {
      //     this.data1 = [res.data.data]
      //   }
      //   // console.log(this.data1);
      //   // console.log(res.data.data);
      // })
      this.getData('/api/examinelibs?id=1').then(res => {
        // console.log('res: ', res);
        if (res.status === 200) {
          this.data1 = [res.data.data]
        }
        // console.log(this.data1);
        // console.log(res.data.data);
      })
    },
    getData(url) { // get 请求数据
      return axios.get(url).then(response => { return response }).catch(err => { return err });
    }
  },
  computed: {
    data1() {
      return this.data1 && this.data1.length
    }
  },
    metaInfo() {
        return {
          title: 'ReportByAddress',
        }
    },
    mounted() {
        //
      this.getMessage();

      // console.log('query', this.$route.query)
      // console.log(this.$route.query.type)
    },
}
</script>

<style>
/* Scoped Styles */
.myItem{
  width: 12%;
  margin-right: 5px;
  min-width: 50px;
}
ul {
  list-style: none;
  padding: 0;
}
.liItem {
  padding-top: 5px;
}
ul .liItem span {
  cursor: pointer;
  font-size: 14px;
  /*line-height: 2rem;*/
  line-height: 3.8125rem;
}
liItem .tou {
  width: auto;
  min-width: 100px;
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
.liItem .myItem{
  font-weight: 300;
  color: var(--90);
  padding-left: .75rem;
  padding-right: .75rem;
  min-width: 56px;
  /*height: 3.8125rem;*/
  height: auto;
  min-height: 3.8125rem;
  line-height: 3.8125rem;
  font-size: 22px;
}
</style>
