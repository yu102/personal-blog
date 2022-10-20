<template>
  <div class="home">
    <home-header />
    <banner />
    <!-- 内容 -->
    <div class="content">
      <!-- 文章列表 -->
      <div class="article">
        
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
export default {
  components: { Banner },
  name: "Home",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.home {
  min-height: 100vh;
  .article-list {
    margin-top: 100px;
  }
  .content {
    width: 100%;
    background-color: #3a3541;
    .article {
      margin: 0 auto;
      width: 1200px;
      height: 1500px;
    }
  }
}
</style>
