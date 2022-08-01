<template>
  <div class="home">
    <div class="main">
      <div class="stories">
        <Story />
      </div>
      <div class="posts">
        <Post />
      </div>
    </div>
    <div class="recommend">
      <Recommend/>
      <Footer />
    </div>
  </div>
</template>

<script>
import Recommend from '../components/Recommend.vue'
import Story from '../components/Story.vue'
import Post from '../components/Post.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Recommend,
    Story,
    Post,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.main{
  width: 470px;
  height: 100%;
  margin-right: 16px;
}
.stories{
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
}
.posts{
  width: 100%;
  height: 100%;
}
.recommend{
  width: 320px;
  height: 150px;
}

@media screen and (max-width: 800px) {
.recommend{
  display: none;
}
}
</style>