<template>
  <Header @openAddPost = "manageAddPost"/>
  <AddPost  @closeAddPost = "manageAddPost" v-if="isAddPost"  />
  <router-view/>
</template>
<script>
import { ref } from 'vue'
import Header from './components/Header.vue'
import AddPost from './components/AddPost.vue'
export default {
  setup() {
    let isAddPost = ref(false)

    const manageAddPost = ()=>{
      isAddPost.value = !isAddPost.value
    }
    return{
      isAddPost,
      manageAddPost
    }
  },
  components:{
    Header,
    AddPost
  }
}
</script>
<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #FAFAFA;
}
div{
  box-sizing: border-box;
}

</style>
