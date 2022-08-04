<template>
<div class="black-bg" @click="closeAddPost">
    <div class="content">
        <p class="add-title">새 게시물 만들기</p>
        <div class="divider"></div>
        <div class="add">
            <i class="fa-solid fa-photo-film"></i>
            <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
            <button>컴퓨터에서 선택</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
emits:['closeAddPost'],
setup( props, { emit } ){
    const closeAddPost = () => emit('closeAddPost')
    return{
      closeAddPost
    }
}
}
</script>

<style lang="scss" scoped>
.black-bg{
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
    display: flex;
    align-items:center ;
    justify-content: center;
    .content{
        width: 660px;
        height: 700px;
        text-align: center;
        background: #fff;
        border-radius: 8px;
        
        .add-title{
            width: 100%;
            color:#262626;
            font-weight: 600;
        }
        .divider{
            width: 100%;
            height: 1px;
            background: #bdbdbd;
        }
        .add{
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            i{
                width: 96px;
                height: 77px;
                font-size: 77px;
            }
            p{
                color:#262626;
                font-size:24px;
            }
            button{
                font-size: 16px;
                color: white;
                background-color: #0095F6;
                border: transparent;
                border-radius: 5px;
                padding: 5px;
            }
        }
    }

}
</style>
