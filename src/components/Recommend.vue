<template>
  <div class="recommend">
    <div class="profile">
        <img src="http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/01/05/0vU4v7vCfjju637769738893922804.jpg" alt="">
        <div class="info">
            <span class="id">p2elord2</span>
            <span class="name">p2elord2</span>
        </div>
        <span class="shift">전환</span>
    </div>
    <div class="text">
        <span class="recommend">회원님을 위한 추천</span>
        <span class="all">모두 보기</span>
    </div>
    <div class="list">
        <img src="http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/01/05/0vU4v7vCfjju637769738893922804.jpg" alt="">
        <div class="info">
            <span class="id">le_dahye</span>
            <span class="content">uu_0._.0님이 팔로우합니다.</span>
        </div>
        <span class="follow">팔로우</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.recommend{
    display: flex;
    flex-direction: column;
.profile{
    display: flex;
    flex-direction: row;
    position: relative;
    margin-bottom: 10px;
    img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
    .info{
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        justify-content: center;

        .id{
            color: #262626;
            font-size: 14px;
            font-weight: 700;
        }
        .name{
            color: #8e8e8e;
            font-size: 14px;
            font-weight: 500;
        }
    }
    .shift{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: #0095f6;
        font-size: 12px;
        font-weight: 600;
    }
}

.text{
    height: 20px;
   position: relative;
   margin-bottom: 10px;
   .recommend{
    position: absolute;
    left: 0;
    color:#8e8e8e;
    font-size: 14px;
    font-weight: 600;
   }
   .all{
    position: absolute;
    right: 0;
     color:#262626;
    font-size: 12px;
    font-weight: 700;
   }
}

.list{
    display: flex;
    flex-direction: row;
    position: relative;

    img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
    .info{
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        justify-content: center;
        text-align: left;

        .id{
            color: #262626;
            font-size: 14px;

        }
        .content{
            color: #8e8e8e;
            font-size: 12px;
        }
    }
    .follow{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: #0095f6;
        font-size: 12px;
        font-weight: 500;
    }
}
}
</style>
