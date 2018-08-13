<template>
    <!-- tab头 -->
  <div class="commeny">
    <div class="tab">
      <div :class="['tab-item', {'tab-active': index === tabActiveIndex}]" 
      v-for="(item, index) in tabList" :key="item.title" @click="select(index, item)">
      {{ item.title }}
      </div>
    </div>
    <!-- 滚动列表 -->
    <div class="pullList">
      <div v-if="tabType === 'knowledge'">
        <card v-for="(item, index) in knowledgeList" :key="index" :item="item" v-if="knowledgeList.length > 0"></card>
        </div>
      <div v-else>
        你好啊
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/card'
import Api from '@/utils/request'

export default {
  components: {
    Card
  },
  data() {
    return {
      knowledgeList:[],
      tabType: 'knowledge',
      tabActiveIndex: 0,
      tabList: [
        {
          title: '康复知识',
          type: 'knowledge',
        },
        {
          title: '康复心得',
          type: 'review'
        }
      ]
    }
  },
  methods: {
    select(index, item) {
      this.tabActiveIndex = index
      this.tabType = item.type
    },
    //康复知识列表
   async getList() {
     let params = {model: 3 }
     let res = await Api.getForumKnowledgeList(params);
     if (res.data.success) {
       this.knowledgeList = res.data.biz.rows
     }
    }
  },
  created() {
    this.getList();
  },
  onPullDownRefresh() {
    wx.showLoading({
      title: '数据加载中...'
    })
    console.log('开始了')
    wx.stopPullDownRefresh()
    wx.hideLoading()
  }
}
</script>
<style lang="scss" scoped>
  .tab {
    background-color: #41BEEC;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    position: fixed;
    top:0;
    width: 100%;
    .tab-item {
      width: 50%;
      float: left;
      text-align: center;
      color: rgb(195,195,195);
    }
    .tab-active {
      color: #fff;
      position: relative;
      &:after {
        position: absolute;
        content: ' ';
        display: inline-block;
        background-color: #fff;
        bottom: 0;
        width: 60px;
        height: 4px;
        left:50%;
        transform: translateX(-50%);
      }
    }
  }
  .pullList {
    margin-top: 40px;
  }


</style>
