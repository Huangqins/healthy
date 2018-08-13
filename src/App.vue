<script>
import Api from '@/utils/request'
export default {
  // created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // console.log('app created and cache logs by setStorageSync')

  // },
  created() {
    wx.login({
      success: (res) => {
         if(res.code) {
           console.log(res.code)
           //登陆
           let params = {code:res.code}
           Api.login(params).then(res => {
             console.log(res)
           })
          // wx.request({
          //   url: 'http://nf53na.natappfree.cc/prms/associator/login.json',
          //   method: 'POST',
          //   data: {
          //     loginCode: res.code
          //   }
          // })
         }
      }
    })
  }
}
</script>

<style>
/* page {
  height: 100%;
  background-color: #f1f1f1;
} */
ul{
  margin: 0;
  padding: 0;
}
.fr {
  float: right;
}
.container-common {
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0px 3px 3px #999 inset;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
