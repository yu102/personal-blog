<template>
  <div class="banner">
    <!-- <video
      autoplay
      loop
      src="//f.video.weibocdn.com/o0/OYTZLKKxlx07YH6jyQEw010412010Vcb0E010.mp4?label=mp4_1080p&amp;template=1920x1080.25.0&amp;media_id=4806407544045655&amp;tp=8x8A3El:YTkl0eM8&amp;us=0&amp;ori=1&amp;bf=2&amp;ot=h&amp;lp=000029WJ5V&amp;ps=mZ6WB&amp;uid=80Y9Za&amp;ab=8224-g1,7397-g1,8143-g0,8013-g0,7598-g0&amp;Expires=1661424756&amp;ssig=0gKUTjM2ro&amp;KID=unistore,video"
    ></video> -->
    <!-- <video
      src="//f.video.weibocdn.com/o0/OYTZLKKxlx07YH6jyQEw010412010Vcb0E010.mp4?label=mp4_1080p&amp;template=1920x1080.25.0&amp;media_id=4806407544045655&amp;tp=8x8A3El:YTkl0eM8&amp;us=0&amp;ori=1&amp;bf=2&amp;ot=h&amp;lp=000029WJ5V&amp;ps=mZ6WB&amp;uid=80Y9Za&amp;ab=8224-g1,7397-g1,8143-g0,8013-g0,7598-g0&amp;Expires=1661424756&amp;ssig=0gKUTjM2ro&amp;KID=unistore,video"
    ></video> -->
    <!-- <img src="https://s1.ax1x.com/2022/09/13/vjd1v4.jpg" alt=""> -->
  </div>
</template>

<script>
export default {
  name: "PersonalBlogBanner",

  data() {
    return {};
  },

  mounted() {
    window.onwheel = (e) => {
      this.videoScroll();
    };
  },

  methods: {
    videoScroll() {
      // 页面滚动的位置
      var scrollTop = window.scrollY;
      console.log(scrollTop);
      // 视窗高度
      var height = window.innerHeight;
      // 滚动方向
      var TD =  window.event.wheelDelta;
      if (scrollTop < height && TD < 0) {
        window.scrollTo(0, 763);
        console.log(scrollTop,TD);
      } else if (scrollTop < height && TD > 0) {
        // document.documentElement.scrollTop = 0;
        console.log(scrollTop);

      }
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  z-index: -100;
  margin-top: -60px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url(https://s1.ax1x.com/2022/09/13/vjd1v4.jpg) center 0 / 100%
    100%;
  video {
    display: block;
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>