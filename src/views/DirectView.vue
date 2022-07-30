<template>
  <div class="direct">
    <div class="list">
        <div class="account">
            <span>p2elord2</span>
            <i class="fa-regular fa-paper-plane"></i>
        </div>
        <div class="people">
            <ul>
                <div>
                    <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSicG_UfuAYyxZmcvJS4ypRQd-DApq8bS235yIGPT7tGJURV5-_vBIwHA9UL7-jcvu7" >
                    <div class="info">
                        <span class="user">dlwlrma</span>
                        <div>
                            <span class="content">팔로했어용</span>
                            <span class="time">30주</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/03/01/azyVfUqGbR7v637817355182992396.jpg" >
                    <div class="info">
                        <span class="user">noze</span>
                        <div>
                            <span class="content">뭐해용</span>
                            <span class="time">31주</span>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
    <div class="detail">
        <div class="new-message">
            <i class="fa-regular fa-paper-plane"></i>
            <span class="title">내 메시지</span>
            <span class="explain">친구나 그룹에 비공개 사진과 메시지를 보내보세요.</span>
            <button>메시지 보내기</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.direct{
    height: 700px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .list{
        width: 350px;
        height: 100%;
        border:1px solid #bdbdbd;
        .account{
            display: flex;
            flex-direction: row;
            justify-content: center;
            border: 1px solid #bdbdbd;
            position: relative;
            padding: 15px;
            
            span{
                font-weight: 700;
            }

            i{
                width: 45px;
                height: 45px;
                position: absolute;
                right: 0;
            }
        }

        .people{
            display: flex;
            text-align: left;
            ul{
                padding: 0;
                div{
                    display: flex;
                    flex-direction: row;
                    img{
                        width: 65px;
                        height: 60px;
                        border-radius: 50%;
                        margin-left: 16px;
                        margin-right: 16px;
                        margin-bottom: 16px;

                    }
                    .info{
                        justify-content: center;
                        display: flex;
                        flex-direction: column;
                    margin-bottom: 16px;
                        .user{
                            color: #262626;
                        }
                        span{
                            color: #8e8e8e;
                        }
                        .content::after{
                            content: '\00B7';
                            margin-left: 3px;
                            margin-right: 3px;
                        }
                    }
                }
            }
        }
    }
    .detail{
    width: 550px;
    height: 100%;
    border:1px solid #bdbdbd;
    display: flex;
    
    .new-message{
        display: flex;
        flex-direction: column;
        margin: auto;
        justify-content: center;
        align-items: center;
        
        i{
            font-size: 45px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }
        .title{
            font-size: 24px;
            color: #262626;
            margin-bottom: 10px;
        }
        .explain{
            color:#868686;
            margin-bottom: 30px;
        }
        button{
            width: 110px;
            height: 35px;
            color: #fff;
            background-color: #0095f6;
            border-radius: 5px;
            font-size: 15px;
            font-weight: 600;
            border: none;
        }
    }
}
}
</style>
