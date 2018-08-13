<template>
  <div class="mine container-common">
    <div class="mine-user">
      <div class="mine-user-avatar">
        <img :src="userInfo.openId ? userInfo.avatarUrl : noUserInfo.avatarUrl" alt="">
        <div class="mine-user-info">
          <!-- <h2 v-if="user.openId">{{userInfo.nickName}}</h2> -->
          <!-- <button></button> -->
          <h2>{{userInfo.openId ? userInfo.nickName: '尚未登录'}}</h2>
          <p>普通用户哦</p>
        </div>
      </div>
    </div>
    <!-- 用户菜单模块 -->
      <!-- navigator -->
      <div class="mine-fun">
        <ul>
          <li v-for="(item,index) in navList" :key="index"  :class="{'liver': index === 2}">
            <img :src="item.iconUrl">
            {{ item.navTitle }}
            <img :src="arrowIcon" class="fr" style="margin-right:10px;">
          </li>
        </ul>
      </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      userInfo: {},
      arrowIcon:'../../../static/png/ic_gray_arrow_right.png',
      noUserInfo: {
        avatarUrl: '../../../static/png/mine/mess_head.png'
      },
      navList: [
        {
          iconUrl: '../../../static/png/mine/mess_doc.png',
          navUrl: '',
          navTitle: '我的预约'
        },
        {
          iconUrl: '../../../static/png/mine/mess_collect.png',
          navUrl: '',
          navTitle: '收藏记录'
        },
        {
          iconUrl: '../../../static/png/mine/mess_history.png',
          navUrl: '',
          navTitle: '浏览记录'
        },
        {
          iconUrl: '../../../static/png/mine/mess_pay.png',
          navUrl: '',
          navTitle: '我的支付'
        },
        {
          iconUrl: '../../../static/png/mine/mess_feedback.png',
          navUrl: '',
          navTitle: '系统反馈'
        }
      ]
    };
  },
  created() {
    this.userInfo = wx.getStorageSync("userInfo");
    console.log(this.userInfo)
  }
};
</script>
<style lang="scss" scoped>

.mine-user {
  display: flex;
  align-items: center;
  background-image: url("../../../static/png/mine/bg_mess_mine.png");
  background-position: center center;
  background-size: 100% 100%;
  height: 300rpx;
  .mine-user-avatar {
    display: flex;
    color: #fff;
    img {
      width: 100rpx;
      height: 100rpx;
      margin: 0 20rpx 0 50rpx;
      border-radius: 100%;
    }
    h2 {
      margin: 4rpx 0 4rpx 0;
      font-size: 42rpx;
    }
    p {
      font-size: 24rpx;
    }
    .mine-user-info {
      flex: 1;
    }
  }
}
.mine-fun {
  ul {
    background-color: #fff;
  
      li {
        display: inline-block;
        width: 100%;
        font-size: 16px;
        overflow: hidden;
        padding:8px 0 8px 5px;
        
        img {
          height: 18px;
          vertical-align: middle;
        }
        img:first-of-type {
          width: 18px;
        }
        img:last-of-type {
          width: 14px;
        }
      }
      li:not(:last-child) {
        border-bottom: 1rpx solid #f1f1f1;
      }
    }
}
</style>
