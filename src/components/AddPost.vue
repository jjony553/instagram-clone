<template>
<div class="background">
    <div class="content">
        <span class="add-title">새 게시물 만들기</span>
        <div class="add">
            <i class="fa-solid fa-photo-film"></i>
            <span>사진과 동영상을 여기에 끌어다 놓으세요</span>
            <button>컴퓨터에서 선택</button>
        </div>
    </div>
  <h1>App Post</h1>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.background{

    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    .content{
        width: 660px;
        height: 700px;
        text-align: center;
        background: #fff;
        border-radius: 8px;
        
        .add-title{
            width: 100%;
            border-radius: 5px 0 0 5px;
            border: 1px #bdbdbd;
            color:#262626;
            padding: 10px;
            align-items: center;
        }
        .add{
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            i{
                width: 96px;
                height: 77px;
            }
            span{
                color:#262626;
                font-size:24px;
            }
            button{
                font-size: 16px;
                color: white;
                background-color: #0095F6;
            }
        }
    }

}
</style>
