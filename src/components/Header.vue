<template>
  <div class="header">
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="search">
        <input type="text" placeholder=" 검색">
      </div>
      <div class="link">
        <ul class="menu">
          <li>
            <router-link to="/">
              <i class="fa-solid fa-house"></i>
            </router-link>
          </li>
          <li>
              <router-link to="/direct">
                <i class="fa-regular fa-paper-plane"></i>
              </router-link>
            </li>
          <li>
            <i class="fa-regular fa-square-plus" @click="openAddPost">
            </i>
          </li>
          <li><i class="fa-regular fa-compass"></i></li>
          <li><i class="fa-regular fa-heart"></i></li>
          <li><div class="profile"><img src="https://img.sportsworldi.com/content/image/2021/09/18/20210918505684.PNG" alt=""></div></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup(){
    let isAddPost = false

    function openAddPost(){
      isAddPost = true
    }
    
    return{
      isAddPost,
      openAddPost
    }
  },
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid #bdbdbd;
  margin-bottom: 16px;
  .navbar{
    width: 100%;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    .logo{
      display: flex;
      align-items: center;
      padding-right: 200px;
      img{
        width: 100px;
        height: 30px;
      }
    }
    .search{
      padding-left: 60px;
      padding-right: 60px;
      input{
      width: 240px;
      outline : none;
      border: 1px transparent;
      background: #efefef;
      padding: 10px;
      border-radius: 5px;

      }
      
    }
    .link{
      .menu{
        display: flex;
        align-items: center;
        list-style: none;
        li{
          padding: 8px 12px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        i{
          width: 24px;
          height: 24px;
          color: #262626;
        }
        .profile{
          img{
            width: 22px;
            height: 22px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
.search{
  display: none;
}
}
</style>
