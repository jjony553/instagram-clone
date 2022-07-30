<template>
  <Header/>
  <AddPost v-if="isAddPost"/>
  <router-view/>
</template>
<script>
import Header from './components/Header.vue'
import AddPost from './components/AddPost.vue'
export default {
  setup() {

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

</style>
