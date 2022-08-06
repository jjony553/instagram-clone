<template>
  <div class="header">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="">
        </router-link>
      </div>
          <form class="search" @click="openSearchOpen">
            <label>
                <i class="fa-solid fa-search">
                </i>
                <input type="text" placeholder="검색" >
                <button class="cancel">x</button>
            </label>
            <SearchList v-if="isSearchOpen"/>
        </form>
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
            <i class="fa-regular fa-square-plus" @click="openAddPost" >
            </i>
          </li>
          <li><i class="fa-regular fa-compass"></i></li>
          <li>
            <div class="heart">
              <i class="fa-regular fa-heart" @click="openHeartOpen">
              </i>
              <HeartAlarm v-if="isHeartOpen"/>
            </div>

          </li>
          <li>
            <div class="profile">
              <img src="https://img.sportsworldi.com/content/image/2021/09/18/20210918505684.PNG" alt="" @click="openProfileMenu">
              <ProfileMenu v-if="isOpen" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue'
import ProfileMenu from './ProfileMenu.vue'
import SearchList from './SearchList.vue'
import HeartAlarm from './HeartAlarm.vue'
export default {
  emits:['openAddPost'],
  setup(props, { emit }){
    const openAddPost = () => emit('openAddPost')

    let isOpen = ref(false)
    let isSearchOpen = ref(false)
    let isHeartOpen = ref(false)
    
    function openProfileMenu(){
        isOpen.value = !isOpen.value
    }

    function openSearchOpen(){
        isSearchOpen.value = !isSearchOpen.value
    }
    function openHeartOpen(){
      isHeartOpen.value = !isHeartOpen.value
    }


    return{
      openAddPost,
      isOpen,
      openProfileMenu,
      isSearchOpen,
      openSearchOpen,
      isHeartOpen,
      openHeartOpen
    }
  },
  components:{
    ProfileMenu,
    SearchList,
    HeartAlarm
  }
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
        height: 45px;
      }
    }
    .search{
        width: 270px;
        position: relative;
        label{
            display: flex;
            align-items: center;
            background: #efefef;
            padding: 8px 12px;
            border-radius: 8px;
            overflow: hidden;
            i{
                flex: 0 0 auto;
                color: #c8c8c8;
                width: 20px;
                height: 20px;
                margin-right: 8px;
            }
            input{
                flex: 1 0 auto;
                background: #efefef;
                color: #c8c8c8;
                padding: 0px;
                border: 0px;
                outline: none;
                margin: 0px;
                appearance: none;
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 20px;
            }
            .cancel{
                flex: 0 0 auto;
                color: black;
                width: 20px;
                height: 20px;
                margin-left: 8px;
                cursor: pointer;
                border-radius: 50%;
                font-size: 12px;
                padding: 2px;
                background: #c8c8c8;
                border: 1px solid transparent;
            }
        }

    }

    .heart{
      position: relative;
      
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
          cursor: pointer;
        }
        i{
          width: 24px;
          height: 24px;
          color: #262626;
          font-size: 20px;
        }
        .profile{
          display: flex;
          flex-direction: column;
          position: relative;
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
