<template>
<div>
      <div class="move">
      <button class="scroll-left" @click="scrollLeft">
        <i class="fa-solid fa-angle-left"></i>
        </button>
      <button class="scroll-right" @click="scrollRight">
        <i class="fa-solid fa-angle-right"></i>
        </button>
    </div>
  <div class="story">

    <ul>
      <li>
        <div class="profile-background">
          <div class="profile-border">
            <img src="https://post-phinf.pstatic.net/MjAyMDEyMTBfMjEz/MDAxNjA3NTcxMzUzMjYy.Gg1RdmcVL2A3ntitSzFfjl5j0V-AAWCr-3Rvrua8b6Eg.nVQcoBckOBi12eHDLL4FXQ5pgP0CRR_yr5MsCM78o6cg.PNG/image.png?type=w1200" alt="">
          </div>
        </div>
        <span>dlwlrma</span>
      </li>
      <li>
        <div class="profile-background">
          <div class="profile-border">
            <img src="https://post-phinf.pstatic.net/MjAyMDEyMTBfMjEz/MDAxNjA3NTcxMzUzMjYy.Gg1RdmcVL2A3ntitSzFfjl5j0V-AAWCr-3Rvrua8b6Eg.nVQcoBckOBi12eHDLL4FXQ5pgP0CRR_yr5MsCM78o6cg.PNG/image.png?type=w1200" alt="">
          </div>
        </div>
        <span>dlwlrma</span>
      </li>
      <li>
        <div class="profile-background">
          <div class="profile-border">
            <img src="https://post-phinf.pstatic.net/MjAyMDEyMTBfMjEz/MDAxNjA3NTcxMzUzMjYy.Gg1RdmcVL2A3ntitSzFfjl5j0V-AAWCr-3Rvrua8b6Eg.nVQcoBckOBi12eHDLL4FXQ5pgP0CRR_yr5MsCM78o6cg.PNG/image.png?type=w1200" alt="">
          </div>
        </div>
        <span>dlwlrma</span>
      </li>
      <li>
        <div class="profile-background">
          <div class="profile-border">
            <img src="https://post-phinf.pstatic.net/MjAyMDEyMTBfMjEz/MDAxNjA3NTcxMzUzMjYy.Gg1RdmcVL2A3ntitSzFfjl5j0V-AAWCr-3Rvrua8b6Eg.nVQcoBckOBi12eHDLL4FXQ5pgP0CRR_yr5MsCM78o6cg.PNG/image.png?type=w1200" alt="">
          </div>
        </div>
        <span>dlwlrma</span>
      </li><li>
        <div class="profile-background">
          <div class="profile-border">
            <img src="https://post-phinf.pstatic.net/MjAyMDEyMTBfMjEz/MDAxNjA3NTcxMzUzMjYy.Gg1RdmcVL2A3ntitSzFfjl5j0V-AAWCr-3Rvrua8b6Eg.nVQcoBckOBi12eHDLL4FXQ5pgP0CRR_yr5MsCM78o6cg.PNG/image.png?type=w1200" alt="">
          </div>
        </div>
        <span>dlwlrma</span>
      </li>
      <li>
        <div class="profile-background">
          <div class="profile-border">
            <img src="https://post-phinf.pstatic.net/MjAyMDEyMTBfMjEz/MDAxNjA3NTcxMzUzMjYy.Gg1RdmcVL2A3ntitSzFfjl5j0V-AAWCr-3Rvrua8b6Eg.nVQcoBckOBi12eHDLL4FXQ5pgP0CRR_yr5MsCM78o6cg.PNG/image.png?type=w1200" alt="">
          </div>
        </div>
        <span>dlwlrma</span>
      </li>
      <li>
        <div class="profile-background">
          <div class="profile-border">
            <img src="https://post-phinf.pstatic.net/MjAyMDEyMTBfMjEz/MDAxNjA3NTcxMzUzMjYy.Gg1RdmcVL2A3ntitSzFfjl5j0V-AAWCr-3Rvrua8b6Eg.nVQcoBckOBi12eHDLL4FXQ5pgP0CRR_yr5MsCM78o6cg.PNG/image.png?type=w1200" alt="">
          </div>
        </div>
        <span>dlwlrma</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
setup(){
  
  function scrollLeft () {
  let content = document.querySelector(".story")
  content.scrollLeft -= 110
}

function scrollRight() {
  let content = document.querySelector(".story")
  content.scrollLeft += 100
}

return {
  scrollLeft,
  scrollRight
}
}
}
</script>

<style lang="scss" scoped>
.story{
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 5px;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 16px;
      .profile-background{
        background: linear-gradient(to top right, #FFEE58, #F600CE);
        border-radius: 50%;
        padding: 2px;
        animation: rotate 5.5s infinite linear;
        .profile-border{
        width: 45px;
        height: 45px;
        background-color: white;
        border-radius: 50%;
        padding: 2px;
          img{
          width: 45px;
          height: 45px;
          border-radius: 50%;
          }
          span{
            font-size: 12px;
          }
        }
      }
    }
  }
}
  .move{
    width: 100%;
    position: relative;
    .scroll-left{
      width: 25px;
      height: 25px;
      position: absolute;
      left: 0;
      top:40px;
      margin-left: 16px;
      border-radius: 50%;
      border: #fff;
    }
    .scroll-right{
      width: 25px;
      height: 25px;
      position: absolute;
      right: 0;
      top:40px;
      margin-right: 16px;
      border-radius: 50%;
      border: #fff;
    }
  }
</style>