<template>
  <div class="home-header">
    <div class="logo">
      <img src="https://s1.ax1x.com/2022/04/03/qHEwOe.png" alt="" />
    </div>
    <div class="menu">
      <ul class="menu-cont">
        <li class="menu-cont-item" v-for="item in menuArr" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homeheader",

  data() {
    return {
      menuArr: [
        {
          id: 1,
          title: "首页",
          path: "/home",
        },
        {
          id: 2,
          title: "分类",
          path: "/home",
        },
        {
          id: 3,
          title: "文章",
          path: "/home",
        },
        {
          id: 4,
          title: "关于我",
          path: "/home",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home-header {
  box-sizing: border-box;
  display: flex;
  padding: 0 20px;
  align-items: center;
  width: 100%;
  height: 60px;
  color: #f4f4f4;
  background-color: #44474b;
  .logo {
    img {
      margin-right: 50px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .menu {
    .menu-cont {
      display: flex;
      &-item {
        padding: 0 20px;
      }
    }
  }
}
</style>