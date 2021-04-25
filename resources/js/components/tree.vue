<template>
  <li class="liItem" @click.stop="dianji($event)">
    <div class="flex" style="align-items: center;border-bottom: 1px solid var(--50);">
      <div class="myItem tou flex-1" style="text-align: left;">
          <span :style="{paddingLeft: (ceng*20)+'px'}" style="display: block;">
            <em v-if="data.hasChildren" class="icon">{{open ? '-' : '+'}}</em>
<!--            <em v-if="!data.hasChildren" class="icon file-text"></em>-->
            {{ data.name }}
        </span>
      </div>
      <div class="myItem" style="flex-shrink: 1;">
        <span>{{ data.kfjz ? data.kfjz.name : '—'}}</span>
      </div>
      <div class="myItem" style="flex-shrink: 1;">
        <span>{{ data.score ? data.score : '—' }}</span>
      </div>
      <div class="myItem" style="flex-shrink: 1;">
        <span>{{ data.fine ? data.fine : '—' }}</span>
      </div>



<!--      <div class="myItem" style="flex-shrink: 1;" v-for="item in data.data">-->
<!--        <span> {{item.amount}} </span>-->
<!--      </div>-->


<!--      <div class="myItem" style="flex-shrink: 1;">-->
<!--        <span>{{ data.recyclable }}</span>-->
<!--      </div>-->
<!--      <div class="myItem" style="flex-shrink: 1;">-->
<!--        <span>{{ data.kitchen }}</span>-->
<!--      </div>-->
<!--      <div class="myItem" style="flex-shrink: 1;">-->
<!--        <span>{{ data.harmful }}</span>-->
<!--      </div>-->
<!--      <div class="myItem" style="flex-shrink: 1;">-->
<!--        <span>{{ data.other }}</span>-->
<!--      </div>-->
<!--      <div class="myItem" style="flex-shrink: 1;">-->
<!--        <span>{{ data.total }}</span>-->
<!--      </div>-->

    </div>

    <ul v-show="open" v-if="xinData">
      <tree v-for="(item, index) in xinData" :data="item" :ceng="ceng + 1" :key="index"></tree>
    </ul>
  </li>


<!--  <div>-->
<!--    <tr>-->
<!--      <td class="myItem tou">-->
<!--          <span @click="toggle" :style="{paddingLeft: (ceng*20)+'px'}">-->
<!--            <em v-if="hasChild" class="icon">{{open ? '-' : '+'}}</em>-->
<!--            <em v-if="!hasChild" class="icon file-text"></em>-->
<!--            {{ data.label }}-->
<!--           </span>-->
<!--      </td>-->
<!--      <td class="myItem">-->
<!--            <span>-->
<!--                {{ data.amount }}-->
<!--            </span>-->
<!--      </td>-->
<!--      <td class="myItem">-->
<!--            <span>-->
<!--                {{ ceng }}-->
<!--            </span>-->
<!--      </td>-->
<!--            <div style="clear: both"></div>-->
<!--      <div v-show="open" v-if="hasChild">-->
<!--        <tree v-for="(item, index) in data.children" :data="item" :ceng="ceng + 1" :key="index"></tree>-->
<!--      </div>-->
<!--    </tr>-->
<!--  </div>-->

</template>

<script>
export default {
  name: 'tree',
  props: {
    data: {
      type: [Object, Array],
      required: true
    },
    ceng: { type: Number }
  },
  data() {
    return {
      open: false,
      xinData: []
    }
  },
  computed: {
    hasChild() {
      return this.data.children && this.data.children.length
    },
    xinData() {
      return this.xinData && this.xinData.length
    }
  },
  mounted() {
    //
    // console.log('层：',this.ceng)
    // console.log('数据： ', this.data)
  },
  methods: {
    dianji(e) {
      // console.log('当前数据： ', this.data)
      // console.log('新数据： ', this.xinData)
      // console.log('新数据长： ', this.xinData.length)
      if(this.xinData.length) {
        this.open = !this.open
      } else {
        this.getId(this.data.id);
      }

    },
    getId(id) {
      // console.log('ID 是： ', id);
      // console.log(this.data.hasChildren);
      if(this.data.hasChildren) {
        // this.getData(`https://yantai.ljfl.ltd/api/addresses/statistics/${id}/children`).then(res => {
        //   // console.log(res);
        //   // console.log(res.data.data);
        //   this.xinData = res.data.data;
        //   this.open = !this.open
        // })
        this.getData(`/api/examamielib/${id}/children`).then(res => {
          // console.log(res);
          // console.log(res.data.data);
          this.xinData = res.data.data;
          this.open = !this.open
        })
      }
    },
    getData(url) { // get 请求数据
      return axios.get(url).then(response => { return response }).catch(err => { return err });
    },
  }
}
</script>

<style>
em.icon {
  display: inline-block;
  width: 20px;
  /*height: 2rem;*/
  height: 3.8125rem;
  margin-right: 5px;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.tree-menu li {
  line-height: 1.5;
}
</style>
