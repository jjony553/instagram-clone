<template>
  <div class="post">
    <div class="top">
      <div class="user">
        <img src="https://img.sportsworldi.com/content/image/2021/09/18/20210918505684.PNG" alt="user">
        <span>dlwlrma</span>
      </div>
      <i class="fa-solid fa-ellipsis"></i>
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/IU_at_Golden_Disk_Awards_on_January_10%2C_2018_%282%29.jpg/640px-IU_at_Golden_Disk_Awards_on_January_10%2C_2018_%282%29.jpg" alt="img">
    <div class="option">
      <ul class="main">
        <li><i class="fa-regular fa-heart"></i></li>
        <li><i class="fa-regular fa-comment"></i></li>
        <li><i class="fa-regular fa-paper-plane"></i></li>
      </ul>
      <i class="fa-regular fa-bookmark"></i>
    </div>
    <div class="contents">
      <span class="like-count">좋아요 56.650개</span>
      <div class="user-comment">
        <span class="name">dlwlrma</span>
        <span class="comment">굿 밤이에용</span>
        <span class="more">더 보기</span>
      </div>
      <span class="comment-more">댓글 313개 모두 보기</span>
      <span class="createAt">18시간 전</span>
    </div>
    <div class="reply">
      <i class="fa-regular fa-face-smile"></i>
      <textarea  type="text" placeholder="댓글 달기..."/>
      <span>게시</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.post{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border:1px solid #bdbdbd;
  margin-bottom: 10px;
  .top{
    width: 100%;
    height: 56px;
    position: relative;
    align-items: center;
    justify-content: center;
    .user{
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: row;
      left: 0;
      align-items: center;
      justify-content: center;
      img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 6px;
      }
      span{
        font-size: 16px;
        color: #262626;
      }
    }
    i{
      height: 100%;
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      width: 45px;
      font-size: 18px;
      right: 0;
    }
  }

  img{
    width: 470px;
    height: 580px;
  }

  .option{
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;
    .main{
      display: flex;
      list-style: none;
      position: absolute;
      left: 0;
      flex-direction: row;
      margin: 0;
      padding: 0;
      li{
          text-align: center;
        }
      i{
        width: 35px;
        height: 35px;
        color: #262626;
        font-size: 25px;
        margin-left: 5px;
      }
    }
    .fa-regular.fa-bookmark{
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      position: absolute;
      right: 0;
    }
  }

  .contents{ 
    width: 100%;
    height: 100%;
    text-align: left;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    .like-count{
      margin-bottom: 8px;
    }
    .user-comment{
      margin-bottom: 8px;
      .name{
        margin-right: 5px;
        color:#262626;
        font-size: 14px;
        font-weight: 700;
      }
      .comment{
        margin-right: 5px;
        color:#262626;
        font-size: 14px;
      }
      .more{
        color:#8e8e8e;
        font-size: 14px;
      }
    }
    .comment-more{
      margin-bottom: 8px;
      color:#8e8e8e;
      font-size: 14px;
    }
    .createAt{
      margin-bottom: 8px;
      color:#8e8e8e;
      font-size: 12px;
    }
  }

  .reply{
    width: 100%;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #bdbdbd;
    padding: 15px 0 15px 0;
    align-items: center;
    justify-content: center;
    i{
      font-size: 25px;
      margin-right: 5px;
      margin-left: 5px;
    }
    textarea{
      height: 20px;
      width: 390px;
      border:none;
      outline: none;
      resize: none;
      background: none;
      max-height: 80px;
      overflow: hidden;
    }
    span{
      color:#0095f6;
      font-size:14px;
      display: flex;      
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
