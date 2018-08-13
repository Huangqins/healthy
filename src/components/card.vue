<template>
    <div class="card">
      <div class="card-detail">
        <div class="card-detail-title">
          <h5>{{item.title}}</h5>
          <span>{{time}}</span>
        </div>
        <div class="card-detail-des">
          {{item.tabloid}}
        </div>
        <div class="card-detail-status">
          <!-- <img src="" class="author-avatar"> -->
          <span class="authorName">{{item.author}}</span>
          <span class="sikm-num">{{item.times}}</span> 
          <span class="comment-num">{{item.comments}}</span>
          <span class="praise-num">{{item.likeTimes}}</span>
        </div>
      </div>
      <div class="card-img"><img :src="item.thumbnailPath"></div>
    </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  created() {
    console.log(this.item)
  }
}
</script>

<style lang='scss'>
$color: rgb(180,180,180);
.card {
 display: flex;
 align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  padding:5px 10px;
  margin: 10px;
  box-shadow: 0px -1px 2px 0 #ccc;
 .card-detail {
   margin-right: 10px;
   div{
     width: 100%;
   }
   flex: 1;
   .card-detail-title {
     h5 {
       display: inline-block;
       font-size: 16px;
       font-weight: 600;
       overflow: hidden;
     }
     span {
       float: right;
       color: $color;
       font-size: 12px;
     }
   }
   .card-detail-des {
      color: $color;
      font-size: 12px;
      overflow: hidden;
      text-overflow:ellipsis;
   }
   .card-detail-status {
     span {
       display: inline-block;
       font-size: 12px;
       padding-left:18px;
     }
     span:not(:first-of-type) {
       margin-left: 20px;
       background-position: left center;
       background-repeat: no-repeat;
       background-size: 15px 15px;
     }
     .authorName {
       font-size: 14px;
       color: $color;
     }
     .sikm-num {
       background-image: url("../../static/png/card/ic_see.png");
     }
     .comment-num {
       background-image: url("../../static/png/card/ic_comment.png");
     }
     .praise-num {
       background-image: url("../../static/png/card/ic_like.png");
     }
   }
 }
 .card-img {
   width: 180rpx;
   height: 122rpx;
   background-color: $color;
   img {
     width: 100%;
     height: 100%;
   }
 }
}

</style>
