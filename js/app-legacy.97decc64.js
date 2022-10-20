(function () {
  var t = {
      1794: function (t, n, e) {
        "use strict";
        e.r(n),
          e.d(n, {
            default: function () {
              return c;
            },
          });
        var o = function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e(
              "div",
              { staticClass: "article-list" },
              t._l(t.dataList, function (n, o) {
                return e(
                  "div",
                  {
                    key: o,
                    staticClass: "item",
                    on: {
                      click: function (e) {
                        return t.viewArticle(n);
                      },
                    },
                  },
                  [
                    e("img", {
                      attrs: {
                        src: "https://s1.ax1x.com/2022/10/17/xDnWff.jpg",
                        alt: "",
                      },
                    }),
                    e("div", { staticClass: "text" }, [t._v(t._s(n.title))]),
                  ]
                );
              }),
              0
            );
          },
          a = [],
          r = e(2320),
          i = {
            name: "ArticleList",
            data: function () {
              return { dataList: [] };
            },
            mounted: function () {
              this.dataList = r.Z;
            },
            methods: {
              viewArticle: function (t) {
                this.$router.push({ path: "/article", query: { id: t.title } });
              },
            },
          },
          u = i,
          l = e(3736),
          s = (0, l.Z)(u, o, a, !1, null, "1d6e83a4", null),
          c = s.exports;
      },
      2731: function (t, n, e) {
        "use strict";
        e.r(n),
          e.d(n, {
            default: function () {
              return s;
            },
          });
        var o = function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "footer" }, [
              e(
                "div",
                { staticClass: "cont" },
                t._l(t.iconArr, function (n) {
                  return e(
                    "div",
                    {
                      key: n.title,
                      staticClass: "box",
                      on: {
                        click: function (e) {
                          return t.navigateTo(n);
                        },
                      },
                    },
                    [
                      e("div", { staticClass: "icon" }, [
                        e("img", { attrs: { src: n.url, alt: "" } }),
                      ]),
                      e("div", { staticClass: "title" }, [t._v(t._s(n.title))]),
                    ]
                  );
                }),
                0
              ),
              e("div", { staticClass: "welcome" }, [
                t._v("welcome to my blog"),
              ]),
            ]);
          },
          a = [],
          r = {
            name: "Footer",
            data: function () {
              return {
                iconArr: [
                  {
                    title: "CSDN",
                    url: e(9586),
                    href: "https://blog.csdn.net/qq_53489791",
                  },
                  {
                    title: "GitHub",
                    url: e(5679),
                    href: "https://github.com/yu102",
                  },
                  {
                    title: "Gitee",
                    url: e(5475),
                    href: "https://gitee.com/a1826159644",
                  },
                ],
              };
            },
            mounted: function () {},
            methods: {
              navigateTo: function (t) {
                location.href = t.href;
              },
            },
          },
          i = r,
          u = e(3736),
          l = (0, u.Z)(i, o, a, !1, null, "901bce6c", null),
          s = l.exports;
      },
      1433: function (t, n, e) {
        "use strict";
        e.r(n),
          e.d(n, {
            default: function () {
              return c;
            },
          });
        var o = function () {
            var t = this,
              n = t.$createElement,
              o = t._self._c || n;
            return o(
              "div",
              {
                staticClass: "home-header",
                style: { backgroundColor: t.backgroundColor },
              },
              [
                o("div", { staticClass: "cont" }, [
                  o(
                    "div",
                    { staticClass: "logo", on: { click: t.logoCilck } },
                    [
                      o("img", { attrs: { src: e(8308), alt: "" } }),
                      o("span", { staticClass: "name" }, [
                        t._v(t._s(t.Author)),
                      ]),
                    ]
                  ),
                  o(
                    "div",
                    { staticClass: "nav" },
                    t._l(t.headerList, function (n) {
                      return o(
                        "div",
                        {
                          key: n.id,
                          staticClass: "col",
                          on: {
                            click: function (e) {
                              return t.navigateTo(n);
                            },
                          },
                        },
                        [t._v(" " + t._s(n.title) + " ")]
                      );
                    }),
                    0
                  ),
                ]),
              ]
            );
          },
          a = [],
          r = e(2580),
          i = {
            name: "HomeHeader",
            props: { backgroundColor: { type: String, default: "#e0e0e0" } },
            data: function () {
              return { Author: r.S, headerList: r.u.$ };
            },
            mounted: function () {},
            methods: {
              logoCilck: function () {
                this.$emit("toHome");
              },
              navigateTo: function (t) {
                "首页" === t.title &&
                  "/home" !== this.$route.path &&
                  (sessionStorage.setItem("headBg", "transparent"),
                  this.$router.push("/home"));
              },
            },
          },
          u = i,
          l = e(3736),
          s = (0, l.Z)(u, o, a, !1, null, "26ec992f", null),
          c = s.exports;
      },
      8487: function (t, n, e) {
        "use strict";
        e.r(n),
          e.d(n, {
            default: function () {
              return s;
            },
          });
        var o = function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", {
              ref: "markdown",
              staticClass: "markdown-body",
              domProps: { innerHTML: t._s(t.markdown) },
            });
          },
          a = [],
          r = {
            name: "Markdown",
            props: { markdown: { type: String, default: "" } },
            data: function () {
              return { info: null };
            },
            mounted: function () {
              var t = this;
              setTimeout(function () {
                t.$nextTick(t.getInfo());
              }, 1);
            },
            methods: {
              getInfo: function () {
                var t = "info" === this.$refs.markdown.children[0].id;
                if (t) {
                  var n = this.$refs.markdown.children[1].innerText;
                  this.info = JSON.parse(n);
                }
              },
            },
          },
          i = r,
          u = e(3736),
          l = (0, u.Z)(i, o, a, !1, null, "2382c0c1", null),
          s = l.exports;
      },
      1832: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;jQuery实现轮播图&quot;, &quot;createTime&quot;: &quot;2022-10-20 10:22:44&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <h1 id="jquery-轮播图">jQuery 轮播图</h1> <h3 id="预览图：">预览图：</h3> <p><img src="https://img-blog.csdnimg.cn/370aa4bbb5e1483bb993670fe4758def.gif" alt="在这里插入图片描述"></p> <p>使用jquery实现轮播图要比用原生js简单许多，代码也少很多。</p> <h3 id="思路">思路</h3> <p>1.外层盒子设置为一个图片的大小 2.内层盒子为所有图片的宽度，图片左浮动 3.外层盒子设置overflow:hidden; 4,让内层盒子移动。 <img src="https://img-blog.csdnimg.cn/85f3c778569c446d812dfd1bd5b3e745.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bGx5LiO5bCP5bKb,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"></p> <h2 id="代码：">代码：</h2> <pre><code class="language-html">&lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot;&gt;\n    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;./css/indxe.css&quot;&gt;\n    &lt;script src=&quot;./js/jquery-1.12.4.js&quot;&gt;&lt;/script&gt;\n    &lt;script src=&quot;./js/index.js&quot;&gt;&lt;/script&gt;\n    &lt;title&gt;Document&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;!-- 显示区域 box --&gt;\n    &lt;div class=&quot;box&quot;&gt;\n        &lt;!-- 所有图片的盒子 --&gt;\n        &lt;div class=&quot;main&quot;&gt;\n            &lt;!-- 为了无缝切换，在后面增加第一张图作为掩饰 --&gt;\n            &lt;img src=&quot;./img/p1.jpeg&quot; alt=&quot;&quot;&gt;\n            &lt;img src=&quot;./img/p2.jpeg&quot; alt=&quot;&quot;&gt;\n            &lt;img src=&quot;./img/p3.jpeg&quot; alt=&quot;&quot;&gt;\n            &lt;img src=&quot;./img/p4.jpeg&quot; alt=&quot;&quot;&gt;\n            &lt;img src=&quot;./img/p5.jpeg&quot; alt=&quot;&quot;&gt;\n            &lt;img src=&quot;./img/p1.jpeg&quot; alt=&quot;&quot;&gt;\n        &lt;/div&gt;\n        &lt;!-- 圆点按钮 --&gt;\n        &lt;div class=&quot;btns&quot;&gt;\n            &lt;span&gt;1&lt;/span&gt;\n            &lt;span&gt;2&lt;/span&gt;\n            &lt;span&gt;3&lt;/span&gt;\n            &lt;span&gt;4&lt;/span&gt;\n            &lt;span&gt;5&lt;/span&gt;\n        &lt;/div&gt;\n        &lt;!-- 上一张按钮 --&gt;\n        &lt;div class=&quot;last&quot;&gt;&lt;/div&gt;\n        &lt;!-- 下一张按钮 --&gt;\n        &lt;div class=&quot;next&quot;&gt;&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/body&gt;\n</code></pre> <pre><code class="language-css">body {\n    background-color: rgb(39, 39, 39);\n}\n\n.box {\n    overflow: hidden;\n    position: relative;\n    margin: 200px auto;\n    width: 450px;\n    height: 300px;\n}\n\n.main {\n    position: absolute;\n    width: 2700px;\n    height: 300px;\n}\n\n.main img {\n    float: left;\n    width: 450px;\n    height: 300px;\n}\n\n.next,\n.last {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 30px;\n    height: 60px;\n}\n\n.next {\n    right: 0;\n    background: url(../img/右.png) no-repeat center center / 32px 32px rgba(255, 255, 255, 0.5);\n}\n\n.last {\n    left: 0;\n    background: url(../img/左.png) no-repeat center center / 32px 32px rgba(255, 255, 255, 0.5);\n}\n\n.btns {\n    position: absolute;\n    top: 85%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 110px;\n}\n\n.btns span {\n    float: left;\n    display: block;\n    margin: 4px;\n    width: 14px;\n    height: 14px;\n    background-color: #ffffff80;\n    border-radius: 50%;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: center;\n    cursor: pointer;\n}\n\n.btns span:nth-child(1) {\n    background-color: deepskyblue;\n    color: #fff;\n}\n</code></pre> <pre><code class="language-js">$(function() {\n    // 图片的下标\n    var index = 0;\n    // 图片的宽度\n    var w = $(&#39;.main img&#39;).width();\n\n    // 点击切换下一张图片\n    $(&#39;.next&#39;).click(function() {\n        // 图片序号+1，图片向右移动一张图片的距离\n        index++;\n        // 调用 图片移动函数\n        move();\n        // 按钮颜色改变\n        btnColor();\n    });\n\n    // 点击切换上一张图片\n    $(&#39;.last&#39;).click(function() {\n        // 图片序号-1，图片向左移动一张图片的距离\n        index--;\n        // 调用 图片移动函数\n        move();\n        // 按钮颜色改变\n        btnColor();\n    });\n\n    // 点击圆点切换图片\n    $(&#39;.btns span&#39;).click(function(e) {\n        // 下标是对应的\n        index = $(this).index();\n        move();\n        btnColor();\n    })\n\n    // 图片移动函数\n    function move() {\n        // 当图片显示第一张时，点击上一张按钮，下标和坐标变为最后一张图片，\n        if (index &lt; 0) {\n            index = 4;\n            $(&#39;.main&#39;).animate({\n                left: -w * (index + 1)\n            }, 0)\n        }\n        // 根据下标移动图片\n        $(&#39;.main&#39;).animate({\n            left: -w * index\n        });\n        // 当图片移动到最后一张时，下标变为0，坐标变为第一张图片\n        if (index === 5) {\n            index = 0;\n            $(&#39;.main&#39;).animate({\n                left: 0\n            }, 0)\n        }\n    };\n\n    // 圆点颜色随图片移动而改变\n    function btnColor() {\n        // 将点击的圆点变为蓝色\n        $(&#39;.btns span&#39;).eq(index).css({ backgroundColor: &#39;deepskyblue&#39;, color: &#39;#fff&#39; });\n        // 将其他的圆点变为白色\n        $(&#39;.btns span&#39;).eq(index).siblings().css({ backgroundColor: &#39;#ffffff80&#39;, color: &#39;#000&#39; });\n    }\n\n    // 定时器，自动轮播\n    var timer = null;\n    // 每隔2s切换下一张图片\n    timer = setInterval(function() {\n        index++;\n        move();\n        btnColor();\n    }, 2000)\n\n    // 鼠标移入清除定时器\n    $(&#39;.box&#39;).mouseover(function() {\n        clearInterval(timer);\n    });\n\n    // 鼠标移出开启定时器\n    $(&#39;.box&#39;).mouseout(function() {\n        timer = setInterval(function() {\n            index++;\n            move();\n            btnColor();\n        }, 2000)\n    })\n\n})\n</code></pre> ';
        n["default"] = o;
      },
      2927: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;js圆盘时钟&quot;, &quot;createTime&quot;: &quot;2022-10-20 10:25:04&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <h2 id="实现一个简单的圆盘时钟">实现一个简单的圆盘时钟</h2> <h3 id="预览图：">预览图：</h3> <p><img src="https://img-blog.csdnimg.cn/6d0a6fd9e5854df5abf581b6da11231c.gif" alt="在这里插入图片描述"></p> <h2 id="代码：">代码：</h2> <h3 id="css：">css：</h3> <pre><code class="language-css">&lt;style&gt;\n        .disc {\n            position: relative;\n            margin: 200px auto;\n            width: 300px;\n            height: 300px;\n            border: 1px solid #000;\n            border-radius: 50%;\n        }\n        \n        .axis {\n            position: absolute;\n            top: 150px;\n            left: 150px;\n            transform: translate(-50%, -50%);\n            width: 10px;\n            height: 10px;\n            border-radius: 50%;\n            background-color: #000;\n        }\n        \n        .hourHand {\n            position: absolute;\n            top: 150px;\n            left: 147px;\n            width: 6px;\n            height: 80px;\n            background-color: #000;\n            transform-origin: 3px 0;\n        }\n        \n        .minuteHand {\n            position: absolute;\n            top: 150px;\n            left: 148px;\n            width: 4px;\n            height: 110px;\n            background-color: #000;\n            transform-origin: 2px 0;\n        }\n        \n        .secondHand {\n            position: absolute;\n            top: 150px;\n            left: 149px;\n            width: 2px;\n            height: 130px;\n            background-color: #000;\n            transform-origin: 1px 0;\n        }\n        \n        .scale {\n            position: absolute;\n            top: 0;\n            left: 150px;\n            transform-origin: 2.5px 150px;\n            width: 2px;\n            height: 5px;\n            background-color: #000;\n        }\n        \n        .num {\n            position: absolute;\n            top: 15px;\n            left: 150px;\n            width: 20px;\n            height: 20px;\n            color: 16px;\n            text-align: center;\n            line-height: 20px;\n            transform-origin: 50% 135px;\n        }\n        \n        .num span {\n            display: block;\n            transform-origin: 50% 50%;\n        }\n    &lt;/style&gt;\n</code></pre> <h3 id="html：">html：</h3> <pre><code class="language-html">     &lt;div class=&quot;disc&quot;&gt;\n        &lt;div class=&quot;axis&quot;&gt;&lt;/div&gt;\n        &lt;div class=&quot;hourHand&quot;&gt;&lt;/div&gt;\n        &lt;div class=&quot;minuteHand&quot;&gt;&lt;/div&gt;\n        &lt;div class=&quot;secondHand&quot;&gt;&lt;/div&gt;\n\n    &lt;/div&gt;\n</code></pre> <h3 id="js：">js：</h3> <pre><code class="language-js">     // 获取元素\n        var disc = document.getElementsByClassName(&#39;disc&#39;)[0];\n        var hourHand = document.getElementsByClassName(&#39;hourHand&#39;)[0];\n        var minuteHand = document.getElementsByClassName(&#39;minuteHand&#39;)[0];\n        var secondHand = document.getElementsByClassName(&#39;secondHand&#39;)[0];\n        var scale = document.getElementsByClassName(&#39;scale&#39;);\n\n        // 生成刻度\n        for (var i = 0; i &lt; 60; i++) {\n            var scale = document.createElement(&#39;div&#39;);\n            scale.classList.add(&#39;scale&#39;);\n            scale.style.transform = `translate(-50%) rotate(${i*6}deg)`;\n            disc.appendChild(scale);\n            scale.style.transform = `translate(-50%) rotate(${i*6}deg)`;\n            if (i % 5 === 0) {\n                scale.style.width = 4 + &#39;px&#39;;\n                scale.style.height = 12 + &#39;px&#39;;\n            }\n        }\n\n        // 生成数字\n        for (var i = 0; i &lt; 12; i++) {\n            var num = document.createElement(&#39;div&#39;);\n            var numx = document.createElement(&#39;span&#39;);\n            num.classList.add(&#39;num&#39;);\n            num.style.transform = `translate(-50%) rotate(${i*30+30}deg)`;\n            numx.style.transform = `rotate(${-i*30-30}deg)`;\n            numx.innerHTML = i + 1;\n            disc.appendChild(num);\n            num.appendChild(numx);\n        }\n\n\n        // 浏览器刚打开就显示，不会停顿\n        var h = getTime().hours;\n        h = h &gt; 12 ? h - 12 : h;\n        hourHand.style.transform = `rotate(${h*30-180+(getTime().minute*0.5)}deg)`;\n        minuteHand.style.transform = `rotate(${getTime().minute*6-180}deg)`;\n        secondHand.style.transform = `rotate(${getTime().second*6-180}deg)`;\n\n        // 定时器，每过一秒执行一次\n        setInterval(function() {\n            var h = getTime().hours;\n            h = h &gt; 12 ? h - 12 : h;\n            hourHand.style.transform = `rotate(${h*30-180+(getTime().minute*0.5)}deg)`;\n            minuteHand.style.transform = `rotate(${getTime().minute*6-180}deg)`;\n            secondHand.style.transform = `rotate(${getTime().second*6-180}deg)`;\n        }, 1000)\n\n\n        // 函数：获取时间\n        function getTime() {\n            var date = new Date();\n            var year = date.getFullYear();\n            var month = date.getMonth();\n            month = month &lt; 10 ? &#39;0&#39; + month : month;\n            var day = date.getDate();\n            day = day &lt; 10 ? &#39;0&#39; + day : day;\n            var week = date.getDay();\n            var weeks = [&#39;日&#39;, &#39;一&#39;, &#39;二&#39;, &#39;三&#39;, &#39;四&#39;, &#39;五&#39;, &#39;六&#39;];\n            var weekZn = weeks[week];\n            var hou = date.getHours();\n            hou = hou &lt; 10 ? &#39;0&#39; + hou : hou;\n            var min = date.getMinutes();\n            min = min &lt; 10 ? &#39;0&#39; + min : min;\n            var sec = date.getSeconds();\n            sec = sec &lt; 10 ? &#39;0&#39; + sec : sec;\n            return {\n                year: year,\n                month: month,\n                day: day,\n                week: weekZn,\n                hours: hou,\n                minute: min,\n                second: sec\n            }\n        }\n</code></pre> ';
        n["default"] = o;
      },
      7904: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;js数组排序方式&quot;, &quot;createTime&quot;: &quot;2022-10-20 10:20:31&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <h1 id="1-冒泡排序">1. 冒泡排序</h1> <p>冒泡排序（Bubble Sort），是一种比较简单的排序算法。</p> <p>它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果顺序（如从大到小、首字母从Z到A）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。</p> <p>这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端（升序或降序排列），就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”。</p> <h2 id="原理">原理</h2> <p>冒泡排序算法的原理： </p> <ol> <li><strong>比较相邻的元素。如果第一个比第二个大，就交换他们两个。</strong> </li> <li><strong>对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。</strong> </li> <li><strong>针对所有的元素重复以上的步骤，除了最后一个。</strong></li> <li><strong>持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。</strong></li> </ol> <h2 id="代码：">代码：</h2> <pre><code class="language-js">        // 1. 冒泡排序\n        function bubbleSort(arr) {\n            // 定义一个中间变量，来交换值\n            let k;\n            for (let i = 0; i &lt; arr.length - 1; i++) {\n            \n                for (let j = 0; j &lt; arr.length - i - 1; j++) {\n                \n                    if (arr[j] &gt; arr[j + 1]) {\n                        k = arr[j];\n                        arr[j] = arr[j + 1];\n                        arr[j + 1] = k;\n                        // 也可以写成这样\n                        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n                    }\n                }\n            }\n            return arr;\n        }\n\n        let a = [4, 20, 999, 55, 23, 14, 34]\n        console.log(bubbleSort(a)); // [4, 14, 20, 23, 34, 55, 999]\n</code></pre> <h1 id="2-插入排序">2. 插入排序</h1> <p>插入排序，一般也被称为直接插入排序。对于少量元素的排序，它是一个有效的算法 。插入排序是一种最简单的排序方法，它的基本思想是将一个记录插入到已经排好序的有序表中，从而一个新的、记录数增1的有序表。在其实现过程使用双层循环，外层循环对除了第一个元素之外的所有元素，内层循环对当前元素前面有序表进行待插入位置查找，并进行移动 。</p> <h2 id="原理-1">原理</h2> <p>将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）</p> <h2 id="代码">代码</h2> <pre><code class="language-javascript">    // 插入排序\n        function insertionSort(arr) {\n            for (let i = 1; i &lt; arr.length; i++) {\n                let k = arr[i];\n                let j = i - 1;\n                while (j &gt;= 0 &amp;&amp; k &lt; arr[j]) {\n                    arr[j + 1] = arr[j];\n                    j--;\n                }\n                arr[j + 1] = k;\n            }\n            return arr;\n        }\n        let arr = [11, 5, 9, 6, 3, 14, 2, 8, 36]\n        console.log(insertionSort(arr)) // [2, 3, 5, 6, 8, 9, 11, 14, 36]\n</code></pre> <h1 id="3-选择排序">3. 选择排序</h1> <p>选择排序(Selection sort)是一种简单直观的排序算法。</p> <h2 id="原理-2">原理</h2> <ol> <li>首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。</li> <li>再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。</li> <li>重复第二步，直到所有元素均排序完毕。</li> </ol> <h2 id="代码-1">代码</h2> <pre><code class="language-javascript">         // 选择排序\n        function selectionSort(arr) {\n            for (let i = 0; i &lt; arr.length - 1; i++) {\n                let min = arr[i];\n                let minindex = i;\n                for (let j = i + 1; j &lt; arr.length; j++) {\n                    if (min &gt; arr[j]) {\n                        min = arr[j];\n                        minindex = j;\n                    }\n                }\n                arr[minindex] = arr[i];\n                arr[i] = min;\n            }\n            return arr;\n        }\n        let arr = [11, 5, 9, 6, 3, 14, 88, 8, 36]\n        console.log(selectionSort(arr)) //[3, 5, 6, 8, 9, 11, 14, 36, 88]\n</code></pre> ';
        n["default"] = o;
      },
      2129: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;mock.js使用方法&quot;, &quot;createTime&quot;: &quot;2022-10-19 16:22:38&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <h1 id="1-简介">1. 简介</h1> <p>随机生成相应格式的数据。支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等。 官方文档：<a href="http://mockjs.com/">http://mockjs.com/</a></p> <h1 id="2-安装">2. 安装</h1> <pre><code class="language-javascript">npm install mockjs --save\n</code></pre> <h1 id="3-引入mock">3. 引入mock</h1> <pre><code class="language-javascript">// (1) import引入\nimport Mock from &#39;mockjs&#39;\n\n// (2) require引入\nlet Mock = require(&#39;mockjs&#39;)\n</code></pre> <h1 id="4-使用">4. 使用</h1> <ul> <li>属性名 和 生成规则 之间用竖线 | 分隔。</li> <li>生成规则 是可选的。</li> <li>生成规则 有 7 种格式：</li> </ul> <pre><code class="language-javascript">&#39;name|min-max&#39;: value\n&#39;name|count&#39;: value\n&#39;name|min-max.dmin-dmax&#39;: value\n&#39;name|min-max.dcount&#39;: value\n&#39;name|count.dmin-dmax&#39;: value\n&#39;name|count.dcount&#39;: value\n&#39;name|+step&#39;: value\n</code></pre> <h2 id="数据模板定义">数据模板定义</h2> <p>数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：</p> <pre><code>// 属性名   name\n// 生成规则 rule\n// 属性值   value\n\n&#39;name|rule&#39;: value\n</code></pre> <h3 id="（1）string，number，boolean">（1）string，number，boolean</h3> <pre><code>//属性值自动加 1，初始值为 number。\n&#39;name|+1&#39;: number\n\n//生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。\n&#39;name|min-max&#39;: number\n\n//生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。\n&#39;name|min-max.dmin-dmax&#39;: number\n</code></pre> <pre><code>//随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。\n&#39;name|1&#39;: boolean\n//随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。\n&#39;name|min-max&#39;: value\n</code></pre> <pre><code class="language-javascript">\nlet data = Mock.mock({\n  &quot;string1|1-10&quot;: &quot;★&quot; , // &quot;★★★★★★★★&quot;  // 随机生成1-10个星 \n  &quot;string2|3&quot;: &quot;1&quot;,  // &quot;111&quot; // 生成3个 &quot;1&quot;\n  \n  &quot;number1|1-100&quot;: 100, // 55  // 随机生成1-100之间的数字\n  &quot;number2|1-100.1-10&quot;: 1, // 12.156  // 随机生成1-100之间的数，随机1-10位小数\n  &quot;number3|55.1-10&quot;: 1, // 55.114  // 55后面随机1-10位小数\n  &quot;number4|10.3&quot;: 1, // 10.356 // 10后面随机3位小数\n  \n  &quot;boolean1|1-2&quot;: true, // true // 生成true 或 false\n})\n</code></pre> <h3 id="（2）object">（2）object</h3> <pre><code>//从属性值 object 中随机选取 count 个属性。\n&#39;name|count&#39;: object\n//从属性值 object 中随机选取 min 到 max 个属性。\n&#39;name|min-max&#39;: object\n</code></pre> <pre><code class="language-javascript">let data = Mock.mock({\n  &quot;object1|2&quot;: {\n    &quot;a&quot;: &quot;111&quot;,\n    &quot;b&quot;: &quot;222&quot;,\n    &quot;c&quot;: &quot;333&quot;,\n    &quot;d&quot;: &quot;444&quot;\n  } , // {b: &quot;222&quot;, a: &quot;111&quot;} // 生成该对象中的随机2个属性 \n   &quot;object2|2-4&quot;: {\n    &quot;a&quot;: &quot;111&quot;,\n    &quot;b&quot;: &quot;222&quot;,\n    &quot;c&quot;: &quot;333&quot;,\n    &quot;d&quot;: &quot;444&quot;\n  }  // {a: &quot;111&quot;, d: &quot;444&quot;, c: &quot;333&quot;} // 生成该对象中的随机2-4个属性 \n})\n</code></pre> <h3 id="（3）array">（3）array</h3> <pre><code>//从属性值 array 中随机选取 1 个元素，作为最终值。\n&#39;name|1&#39;: array\n//从属性值 array 中顺序选取 1 个元素，作为最终值。\n&#39;name|+1&#39;: array\n//通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。\n&#39;name|min-max&#39;: array\n//通过重复属性值 array 生成一个新数组，重复次数为 count。\n&#39;name|count&#39;: array\n</code></pre> <pre><code class="language-javascript">let data = Mock.mock({\n  &quot;array1|1&quot;: [\n    &quot;a&quot;,\n    &quot;b&quot;,\n    &quot;c&quot;\n  ], // {array1: &quot;b&quot;} // 随机生成其中一个值\n  \n   &quot;array2|+1&quot;: [\n    &quot;a&quot;,\n    &quot;b&quot;,\n    &quot;c&quot;\n  ], //  {array2: &quot;a&quot;} // 按顺序获取第一个值\n  \n  &quot;array|1-10&quot;: [\n    &quot;abc&quot;\n  ], // [&quot;abc&quot;, &quot;abc&quot;, &quot;abc&quot;, &quot;abc&quot;, &quot;abc&quot;] // 随机生成含有1-10个abc的数组\n}) \n</code></pre> <h3 id="（4）function">（4）function</h3> <p>执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 &#39;name&#39; 所在的对象。</p> <pre><code class="language-javascript">let data = Mock.mock({\n  &#39;name&#39;: &#39;zhangsan&#39;,\n  &#39;fn&#39;: function() {\n    return this.name\n  }\n}) // {name: &quot;zhangsan&quot;, fn: &quot;zhangsan&quot;}\n</code></pre> <h3 id="（5）regexp">（5）RegExp</h3> <pre><code class="language-javascript">let data = Mock.mock({\n   // 随机生成符合正则的数据\n  &#39;regexp1&#39;: /[a-z][A-Z][0-9]/ , // {regexp1: &quot;wM6&quot;} \n  &#39;regexp2&#39;: /\\d{5,10}/ , // {regexp2: &quot;43897705&quot;}\n})\n</code></pre> <h2 id="数据占位符定义">数据占位符定义</h2> <p>占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中。</p> <p>Mock.Random 是一个工具类，用于生成各种随机数据。 Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 @占位符(参数 [, 参数]) 。</p> <blockquote> <p>注意：</p> <p>用 @ 来标识其后的字符串是 占位符。 占位符 引用的是 Mock.Random 中的方法。 通过 Mock.Random.extend() 来扩展自定义占位符。 占位符 也可以引用 数据模板 中的属性。 占位符 会优先引用 数据模板 中的属性。 占位符 支持 相对路径 和 绝对路径。</p> </blockquote> <table> <thead> <tr> <th>Type</th> <th>Method</th> </tr> </thead> <tbody><tr> <td>Basic</td> <td>boolean, natural, integer, float, character, string, range, date, time, datetime, now</td> </tr> <tr> <td>Image</td> <td>image, dataImage</td> </tr> <tr> <td>Color</td> <td>color</td> </tr> <tr> <td>Text</td> <td>paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle</td> </tr> <tr> <td>Name</td> <td>first, last, name, cfirst, clast, cname</td> </tr> <tr> <td>Web</td> <td>url, domain, email, ip, tld</td> </tr> <tr> <td>Address</td> <td>area, region</td> </tr> <tr> <td>Helper</td> <td>capitalize, upper, lower, pick, shuffle</td> </tr> <tr> <td>Miscellaneous</td> <td>guid, id</td> </tr> </tbody></table> <pre><code class="language-javascript">let data = Mock.mock({\n    &quot;data&quot;:\n      {\n          \n        &quot;time&quot;: &quot;@datetime&quot;,//随机生成日期时间\n        &quot;score&quot;:  &quot;@natural(1, 100)&quot;,//随机生成1-100的数字\n        &quot;name&quot;: &quot;@cname&quot;,//随机生成中文名字\n        &quot;string&quot;: &quot;@cword&quot;, // 生成一个随机字符串\n        str: &#39;@cword(10,15)&#39; ,// 生成一个10-15位随机字符串\n        title: &quot;@ctitle(5,8)&quot;, // 生成指定范围的标题\n        sentence: &#39;@csentence(50,80)&#39;, // 生成指定范围的句子\n        content: &#39;@cparagraph()&#39; , // 随机生成段落\n        idCard: &#39;@id()&#39;, // 身份证号码\n           address: &#39;@city(true)&#39; // 如果@city(),只会生成市，如果@city(true)会生成省和市\n      }\n});\n</code></pre> ';
        n["default"] = o;
      },
      8749: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;uni-app的使用方法&quot;, &quot;createTime&quot;: &quot;2022-10-20 10:18:20&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <h1 id="简介">简介</h1> <p>uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。 <strong>官方网站：</strong><a href="https://uniapp.dcloud.io/">https://uniapp.dcloud.io/</a></p> <h1 id="开始使用">开始使用</h1> <h2 id="开发工具">开发工具</h2> <p>推荐使用 <a href="https://www.dcloud.io/hbuilderx.html">HBuilderX</a> 优点：</p> <ol> <li>HBuilderX是通用的前端开发工具，但为uni-app做了特别强化。能直接创建uni-app项目。</li> <li>专为vue打造，提供比其他工具更优秀的vue支持，大幅提升vue开发效率</li> <li>自动安装项目所需插件</li> </ol> <h3 id="安装插件">安装插件</h3> <p>sass / scss 编译，less 编译，uni-app 编译</p> <h3 id="创建项目">创建项目</h3> <pre><code class="language-javascript">点击 文件 --&gt;  点击 新建 --&gt;  点击 1.项目 --&gt;  输入项目名称  --&gt;  选择模板 --&gt;  点击创建\n</code></pre> <h3 id="项目目录">项目目录</h3> <pre><code class="language-javascript">┌─components            uni-app组件目录\n│  └─comp-a.vue         可复用的a组件\n├─hybrid                存放本地网页的目录，详见\n├─platforms             存放各平台专用页面的目录，详见\n├─pages                 业务页面文件存放的目录\n│  ├─index\n│  │  └─index.vue       index页面\n│  └─list\n│     └─list.vue        list页面\n├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此\n├─wxcomponents          存放小程序组件的目录，详见\n├─main.js               Vue初始化入口文件\n├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期\n├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见\n└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见\n</code></pre> <h3 id="页面配置">页面配置</h3> <h4 id="全局配置">全局配置</h4> <pre><code class="language-js">&quot;globalStyle&quot;: {\n  &quot;navigationBarTextStyle&quot;: &quot;black&quot;, //导航栏标题颜色\n  &quot;navigationBarTitleText&quot;: &quot;app&quot;, //导航栏标题文字\n  &quot;navigationBarBackgroundColor&quot;: &quot;#F8F8F8&quot;, //导航栏背景颜色\n  &quot;backgroundColor&quot;: &quot;#F8F8F8&quot;, //下拉窗口背景颜色\n  &quot;backgroundTextStyle&quot;:light, //下拉 loading 的样式\n  &quot;enablePullDownRefresh&quot;:true, //开启下拉刷新\n  &quot;onReachBottomDistance&quot;:60,//页面上拉触发距页面底部距离为60\n  &quot;usingComponents&quot;:{\n    &quot;collapse-tree-item&quot;:&quot;/components/collapse-tree-item&quot;\n  },//引用小程序组件\n  &quot;pageOrientation&quot;: &quot;auto&quot;//支持屏幕旋转\n},\n</code></pre> <h4 id="页面配置-1">页面配置</h4> <pre><code class="language-js">{\n  &quot;pages&quot;: [{\n      &quot;path&quot;: &quot;pages/index/index&quot;,\n      &quot;style&quot;: {\n        &quot;navigationBarTitleText&quot;: &quot;首页&quot;, //设置页面标题文字\n        &quot;disableScroll&quot;: true, //设置为true则页面整体不能上下滚动\n        &quot;enablePullDownRefresh&quot;:true, //开启下拉刷新\n        &quot;navigationBarShadow&quot;: {  \n          &quot;colorType&quot;: &quot;green&quot;\n        },//导航栏阴影\n      }\n    },\n    ...\n  ]\n}\n</code></pre> <h4 id="tabbar">tabbar</h4> <pre><code class="language-js">&quot;tabBar&quot;: {\n        &quot;list&quot;: [\n            {\n                &quot;text&quot;:&quot;首页&quot;,\n                &quot;pagePath&quot;: &quot;pages/home/home&quot;,\n                &quot;iconPath&quot;: &quot;static/icon/home.png&quot;,\n                &quot;selectedIconPath&quot;:&quot;static/icon/home-active.png&quot;\n            },\n            {\n                &quot;text&quot;:&quot;资讯&quot;,\n                &quot;pagePath&quot;: &quot;pages/new/new&quot;,\n                &quot;iconPath&quot;: &quot;static/icon/news.png&quot;,\n                &quot;selectedIconPath&quot;:&quot;static/icon/news-active.png&quot;\n            }\n        ],\n        &quot;color&quot;:&quot;#dadadb&quot;,\n        &quot;selectedColor&quot;:&quot;#d81e06&quot;\n    }\n</code></pre> <h2 id="常用api">常用api</h2> <h3 id="uninavigatetoobject"><code>uni.navigateTo(OBJECT)</code></h3> <p>保留当前页面，跳转到应用内的某个页面，使用<code>uni.navigateBack</code>可以返回到原页面。</p> <pre><code class="language-js">//在起始页面跳转到test.vue页面并传递参数\nuni.navigateTo({\n    url: &#39;test?id=1&amp;name=uniapp&#39;\n});\n</code></pre> <h3 id="uniswitchtabobject"><code>uni.switchTab(OBJECT)</code></h3> <p>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。</p> <pre><code class="language-js">uni.switchTab({\n    url: &#39;/pages/index/index&#39;\n});\n</code></pre> <h3 id="unisetstorageobject"><code>uni.setStorage(OBJECT)</code></h3> <p>将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。</p> <pre><code class="language-js">uni.setStorage({\n    key: &#39;storage_key&#39;,\n    data: &#39;hello&#39;,\n    success: function () {\n        console.log(&#39;success&#39;);\n    }\n});\n</code></pre> <h3 id="unisetstorageobject-1"><code>uni.setStorage(OBJECT)</code></h3> <p>将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。</p> <pre><code class="language-js">const value = uni.getStorageSync(&#39;storage_key&#39;);\n    if (value) {\n        console.log(value);\n    }\n</code></pre> <h3 id="unichooseimageobject"><code>uni.chooseImage(OBJECT)</code></h3> <p>从本地相册选择图片或使用相机拍照。</p> <pre><code class="language-js">uni.chooseImage({\n    count: 6, //默认9\n    sizeType: [&#39;original&#39;, &#39;compressed&#39;], //可以指定是原图还是压缩图，默认二者都有\n    sourceType: [&#39;album&#39;], //从相册选择\n    success: function (res) {\n        console.log(JSON.stringify(res.tempFilePaths));\n    }\n});\n</code></pre> <h3 id="unipreviewimageobject"><code>uni.previewImage(OBJECT)</code></h3> <p>预览图片。</p> <pre><code class="language-js">// 预览图片\n    previewImg(current) {\n        uni.previewImage({\n            urls: [current], // 需要预览的图片链接列表\t\n            current  // current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张\n          })\n    },\n</code></pre> <h3 id="unishowtoastobject"><code>uni.showToast(OBJECT)</code></h3> <p>显示消息提示框。</p> <pre><code class="language-js">uni.showToast({\n    title: &#39;标题&#39;,\n    duration: 2000\n});\n</code></pre> <h3 id="unishowloadingobject"><code>uni.showLoading(OBJECT)</code></h3> <p>显示 loading 提示框, 需主动调用 uni.hideLoading 才能关闭提示框。</p> <pre><code class="language-js">uni.showLoading({\n    title: &#39;加载中&#39;\n});\n</code></pre> <h3 id="unishowmodalobject"><code>uni.showModal(OBJECT)</code></h3> <p>显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。</p> <pre><code class="language-js">uni.showModal({\n    title: &#39;提示&#39;,\n    content: &#39;这是一个模态弹窗&#39;,\n    success: function (res) {\n        if (res.confirm) {\n            console.log(&#39;用户点击确定&#39;);\n        } else if (res.cancel) {\n            console.log(&#39;用户点击取消&#39;);\n        }\n    }\n});\n</code></pre> <h1 id="组件库uni-ui">组件库uni-ui</h1> <p>下载地址：<a href="https://ext.dcloud.net.cn/plugin?id=55">https://ext.dcloud.net.cn/plugin?id=55</a> 代码示例地址 ：<a href="https://ext.dcloud.net.cn/plugin?id=4941">https://ext.dcloud.net.cn/plugin?id=4941</a> 组件演示地址：<a href="https://hellouniapp.dcloud.net.cn">https://hellouniapp.dcloud.net.cn</a> 组件文档地址：<a href="https://uniapp.dcloud.io/component/uniui/uni-ui">https://uniapp.dcloud.io/component/uniui/uni-ui</a></p> <p><strong>推荐使用HBuilder X直接创建uni-ui项目</strong> <img src="https://img-blog.csdnimg.cn/66172775e7904dc1b373fd7e66c3f973.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bGx5LiO5bCP5bKb,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/a6917f9765ed4cc0abcd3f33760e37c9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bGx5LiO5bCP5bKb,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"></p> ';
        n["default"] = o;
      },
      6945: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;vue组件的使用和封装&quot;, &quot;createTime&quot;: &quot;2022-10-20 10:16:41&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <h1 id="1-文件目录结构">1. 文件目录结构</h1> <p><img src="https://img-blog.csdnimg.cn/172c0dcb7bb642599919e6dae21abcab.png" alt="在这里插入图片描述"></p> <ul> <li>在views目录中放页面基础结构的组件</li> <li>在components里放页面中各个功能模块的组件</li> </ul> <h1 id="2-使用组件">2. 使用组件</h1> <p>（1）在页面中单独引用</p> <pre><code class="language-js">&lt;template&gt;\n  &lt;Nav&gt;&lt;/Nav&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nimport nav from &#39;@/components/Nav.vue&#39;\nexport default {\n  name: &#39;Home&#39;,\n  components: { Nav },\n&lt;/script&gt;\n</code></pre> <p>（2）在全局引用</p> <ul> <li>在mian.js里</li> </ul> <p><strong>注册单个组件</strong></p> <pre><code class="language-js">import Nav from &#39;@/components/Nav.vue&#39; \nVue.component(&#39;Nav&#39;, Nav) // 全局注册Nav组件\n</code></pre> <p><strong>注册所有组件</strong></p> <pre><code class="language-js">const components = require.context(&#39;./components&#39;, true, /\\.vue$/);\ncomponents.keys().forEach(key =&gt; {\n  const name = key.match(/\\/(\\w+?)\\.vue$/)[1];\n  Vue.component(name, components(key).default);\n});\n</code></pre> <h1 id="3-组件传值">3. 组件传值</h1> <h3 id="（1）父组件向子组件传值">（1）父组件向子组件传值</h3> <ul> <li>父组件通过绑定自定义属性来实现，<code>v-bind</code>(简写为<code>:</code>)绑定需要传递给子组件的值，子组件通过<code>props</code>来接收父组件传递的值。</li> </ul> <pre><code class="language-html">&lt;!-- 父组件 --&gt;\n&lt;Child :name=&quot;zhang&quot;&gt;&lt;/Child&gt;\n</code></pre> <pre><code class="language-js">// 子组件\nexport default {\n props: {\n    name: {\n      type: String, // 限制类型\n      required: true, // 限制必要性\n      default: &quot;&quot;, // 指定默认值\n    },\n  },\n}\n</code></pre> <h3 id="（2）子组件给父组件传值">（2）子组件给父组件传值</h3> <pre><code class="language-js">// 子组件\n&lt;button @click=&quot;changeName&quot;&gt;改变父组件的name&lt;/button&gt; \nexport default {\n    methods: {\n        //子组件的事件\n        changeName() {\n            this.$emit(&#39;handleChange&#39;, &#39;zhang&#39;) // 触发父组件中handleChange事件并传参Jack\n            // 此处事件名称与父组件中绑定的事件名称要一致\n        }\n    }\n}\n</code></pre> <pre><code class="language-js">// 父组件\n&lt;child @handleChange=&quot;changeName&quot;&gt;&lt;/child&gt;\nmethods: {\n    changeName(name) {  // name形参是子组件中传入的值Jack\n        this.name = name\n    }\n}\n</code></pre> <h3 id="（3）通过-parent-children，root-或-refs-访问组件实例">（3）通过 $parent ,$children，$root 或 $refs 访问组件实例</h3> <pre><code class="language-js">// 子组件\nexport default {\n  data () {\n    return {\n      title: &#39;子组件&#39;\n    }\n  },\n  methods: {\n    sayHello () {\n        console.log(&#39;Hello&#39;);\n    }\n  }\n}\n</code></pre> <pre><code class="language-js">// 父组件\n&lt;template&gt;\n  &lt;child ref=&quot;child&quot; /&gt;\n&lt;/template&gt;\n&lt;script&gt;\n  export default {\n    created () {\n      // 通过 $ref 来访问子组件\n      console.log(this.$refs.child.title);  // 子组件\n      this.$refs.child.sayHello(); // Hello\n      // 通过 $children 来调用子组件的方法\n      this.$children.sayHello(); // Hello \n    }\n  }\n&lt;/script&gt;\n</code></pre> <h3 id="（4）attrs和listeners">（4）$attrs和$listeners</h3> <p><strong>$attrs</strong> </p> <ul> <li>$attrs在vue的2.40版本以上可使用</li> <li>$attrs，当一个组件没有声明任何 prop 时，$attrs里包含所有父作用域的绑定的自定义属性 (class 和 style 除外)，<strong>并且可以通过 <code>v-bind=&quot;$attrs&quot;</code> 传入内部组件</strong></li> <li>如果给组件传递的数据，组件不使用props接收，那么这些数据将作为组件的HTML元素的特性，这些特性绑定在组件的HTML根元素上（可使用<code>inheritAttrs: false</code>取消）</li> <li><code>inheritAttrs: false</code>的含义是不希望本组件的根元素继承父组件的attribute，同时父组件传过来的属性（没有被子组件的props接收的属性），也不会显示在子组件的dom元素上，但是在组件里可以通过其$attrs可以获取到没有使用的注册属性, ``inheritAttrs: false`是不会影响 style 和 class 的绑定</li> </ul> <p> <strong>$listeners</strong> </p> <ul> <li><code>$listeners</code>它是一个对象，里面包含了作用在这个组件上的所有监听器</li> <li>并且可以通过 v-=&quot;$listeners&quot; 传入内部组件</li> </ul> <pre><code class="language-html">&lt;!-- 父组件 --&gt;\n&lt;template&gt;\n  &lt;div&gt;\n    &lt;HomeHeader\n      @toHome=&quot;logoCilck&quot;\n      :value=&quot;22&quot;\n      aa=&quot;aa&quot;\n    &gt;&lt;/HomeHeader&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n</code></pre> <pre><code class="language-js">// 子组件\n&lt;template&gt;\n &lt;Menu v-bind=&quot;$attrs&quot; v-on=&quot;$listeners&quot;&gt;&lt;/Menu&gt;\n&lt;/template&gt;\n\nexport default {\n  name: &quot;HomeHeader&quot;,\n  inheritAttrs: false, // 避免传入的未声明的值绑定到子组件的根元素上\n  mounted() {\n    console.log(this.$attrs); // {value: 22, aa: &#39;aa&#39;}\n    console.log(this.$listeners) // {toHome: ƒ}\n  },\n};\n</code></pre> <pre><code class="language-js">// 孙子组件\nexport default {\n  name: &#39;Menu&#39;,\n  mounted() {\n    console.log(this.$attrs); // {value: 22, aa: &#39;aa&#39;}\n    console.log(this.$listeners) // {toHome: ƒ}\n  },\n};\n</code></pre> <h3 id="（5）子组件之间传值">（5）子组件之间传值</h3> <ol> <li>将<code>props</code>和<code>$emit</code>结合使用，子组件先传给父组件，再由父组件传给另一个子组件。</li> <li><code>EventBus</code>，</li> </ol> <p>创建一个 EventBus.js 文件，并暴露一个 vue 实例</p> <pre><code class="language-js">import Vue from &#39;Vue&#39;\nexport default new Vue()\n</code></pre> <p>在要传值的文件里导入这个空 vue 实例，绑定事件并通过 $emit 触发事件函数 (也可以在 main.js 中全局引入该 js 文件，我一般在需要使用到的组件中引入)</p> <pre><code class="language-js">&lt;template&gt;\n    &lt;div&gt;\n        &lt;p&gt;姓名: {{ name }}&lt;/p&gt;\n        &lt;button @click=&quot;changeName&quot;&gt;修改姓名&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/template&gt; \n&lt;script&gt;\nimport { EventBus } from &quot;../EventBus.js&quot;\nexport default {\n data() {\n     return {\n         name: &#39;John&#39;,\n     }\n  },\n  methods: {\n      changeName() {\n          this.name = &#39;Lily&#39;\n          EventBus.$emit(&quot;editName&quot;, this.name) // 触发全局事件,并且把改变后的值传入事件函数\n      }\n    }\n}\n&lt;/script&gt;\n</code></pre> <p>在接收传值的组件中也导入 vue 实例，通过 $on 监听回调，回调函数接收所有触发事件时传入的参数</p> <pre><code class="language-js">import { EventBus } from &quot;../EventBus.js&quot; \nexport default {\n    data() {\n        return {\n            name: &#39;&#39;\n        }\n    },\n    created() {\n         EventBus.$on(&#39;editName&#39;, (name) =&gt; {\n             this.name = name\n         })\n    }\n}\n</code></pre> <h3 id="（6）provide，inject">（6）provide，inject</h3> <p>它们需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。</p> <pre><code class="language-js">// 父组件\nexport default {\n  provide: { // 它的作用就是将 name 这个变量提供给它的所有子组件。\n    name: &#39;zhang&#39;\n  }\n}\n</code></pre> <pre><code class="language-js">export default {\n  inject: [&#39;name&#39;], // 注入了从父组件中提供的name变量\n  mounted () {\n    console.log(this.name);  // zhang\n  }\n}\n</code></pre> <h1 id="4-插槽">4. 插槽</h1> <ul> <li>**<code>slot</code> ** <strong>默认插槽</strong> 插槽就是子组件中的提供给父组件使用的一个占位符，用<slot></slot> 表示，父组件可以在这个占位符中填充任何模板代码 <strong>具名插槽</strong></li> </ul> <pre><code class="language-html">&lt;!-- 子组件 --&gt;\n&lt;template&gt;\n  &lt;div class= &#39;button&#39;&gt;\n      &lt;button&gt;  &lt;/button&gt;\n      &lt;slot name=&#39;one&#39;&gt; 这就是默认值1&lt;/slot&gt;\n      &lt;slot name=&#39;two&#39;&gt; 这就是默认值2 &lt;/slot&gt;\n      &lt;slot name=&#39;three&#39;&gt; 这就是默认值3 &lt;/slot&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n</code></pre> <pre><code class="language-html">&lt;!-- 父组件 --&gt;\n&lt;template&gt;\n  &lt;div class= &#39;app&#39;&gt;\n     &lt;ebutton&gt; \n        &lt;template v-slot:one&gt; 这是插入到one插槽的内容 &lt;/template&gt;\n        &lt;template v-slot:two&gt; 这是插入到two插槽的内容 &lt;/template&gt;\n        &lt;template v-slot:three&gt; 这是插入到three插槽的内容 &lt;/template&gt;\n     &lt;/ebutton&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n</code></pre> <p><strong>作用域插槽 ( 父组件 在子组件 <slot> </slot> 处使用子组件 data)</strong></p> <pre><code class="language-js">//子组件 ： (假设名为：ebutton)\n&lt;template&gt;\n  &lt;div class= &#39;button&#39;&gt;\n      &lt;button&gt;  &lt;/button&gt;\n      &lt;slot name= &#39;one&#39; :value1=&#39;child1&#39;&gt; 这就是默认值1&lt;/slot&gt;    //绑定child1的数据\n      &lt;slot :value2=&#39;child2&#39;&gt; 这就是默认值2 &lt;/slot&gt;  //绑定child2的数据，这里我没有命名slot\n  &lt;/div&gt;           \n&lt;/template&gt;\n\nnew Vue({\n  el:&#39;.button&#39;,\n  data:{\n    child1:&#39;数据1&#39;,\n    child2:&#39;数据2&#39;\n  }\n})\n</code></pre> <pre><code class="language-js">//父组件：（引用子组件 ebutton）\n&lt;template&gt;\n  &lt;div class= &#39;app&#39;&gt;\n     &lt;ebutton&gt; \n        // 通过v-slot的语法 将插槽 one 的值赋值给slotonevalue \n        &lt;template v-slot:one = &#39;slotonevalue&#39;&gt;  \n           {{ slotonevalue.value1 }}\n        &lt;/template&gt;\n        // 同上，由于子组件没有给slot命名，默认值就为default\n        &lt;template v-slot:default = &#39;slottwovalue&#39;&gt; \n           {{ slottwovalue.value2 }}\n        &lt;/template&gt;\n     &lt;/ebutton&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n</code></pre> <ul> <li><code>$slots</code> vm.$slots是一个对象，键名是所有具名slot的名称，加上一个default，而键值则是一个存放VNode节点的数组。</li> </ul> ';
        n["default"] = o;
      },
      5643: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;vue跨域 - 配置代理&quot;, &quot;createTime&quot;: &quot;2022-10-19 16:22:38&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <p>Vue 中配置跨域的配置在 vue.config.js 文件中添加:</p> <pre><code class="language-javascript">module.exports = {\n  devServer: {\n    proxy: &#39;http://localhost:3000&#39; // 配置访问的服务器地址\n  }\n}\n</code></pre> <p><strong>配置多个地址</strong></p> <pre><code class="language-javascript">module.exports = {\n  devServer: {\n    proxy: {\n      &#39;/api&#39;: {\n        target: &#39;http://localhost:4000&#39;, // 配置访问的服务器地址\n        pathRewrite: { &#39;^/api&#39;: &#39;&#39; },  // 用于将请求中的 /api 字符串替换为空, 然后访问地址就能正确访问，若不添加此行配置，那么访问地址就变成了： http://localhost:5000/api/request_url，这样的请求就会出现 404 操作\n        ws: true, // 是否支持 webstocket, 默认是 true\n        changeOrigin: true // 用于控制请求头中的 host 值, 默认是 ture\n      },\n      &#39;/api2&#39;: {\n        target: &#39;http://localhost:5000&#39;, // 配置访问的服务器地址\n        pathRewrite: { &#39;^/api2&#39;: &#39;&#39; },  // 用于将请求中的 /api2 字符串替换为空, 然后访问地址就能正确访问，若不添加此行配置，那么访问地址就变成了： http://localhost:6000/api/request_url，这样的请求就会出现 404 操作\n        ws: true, // 是否支持 webstocket, 默认是 true\n        changeOrigin: true // 用于控制请求头中的 host 值, 默认是 ture\n      }\n    }\n  }\n}\n</code></pre> ';
        n["default"] = o;
      },
      3296: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;使用nvm管理多个node版本&quot;, &quot;createTime&quot;: &quot;2022-10-19 16:22:38&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <h1 id="1-简介">1. 简介</h1> <p>针对node版本进行管理的工具，通过它可以安装和切换不同版本的node.js</p> <h1 id="2-安装">2. 安装</h1> <p>地址：<a href="https://github.com/coreybutler/nvm-windows/releases">https://github.com/coreybutler/nvm-windows/releases</a> <img src="https://img-blog.csdnimg.cn/d04600b5eda24587823a42ade37ebf66.png" alt="在这里插入图片描述"> 下载完成后，全点下一步，完成安装。</p> <h1 id="3-nvm常用命令">3. nvm常用命令</h1> <p>打开命令行窗口，输入以下命令操作node</p> <ul> <li><code>nvm list</code> 查看现在所有安装的node版本</li> <li><code>nvm list available</code> 查看nodejs 官方的所有版本</li> <li><code>nvm install 17.0.0</code> 下载对应的node版本号（以node17.0.0为例）</li> <li><code>nvm use 17.0.0</code> 切换为对应node版本</li> <li><code>nvm uninstall 17.0.0</code> 卸载对应版本的node</li> </ul> ';
        n["default"] = o;
      },
      5837: function (t, n, e) {
        "use strict";
        e.r(n);
        var o =
          '<h1 id="info">info</h1> <p>{&quot;title&quot;: &quot;容易忘记的css样式&quot;, &quot;createTime&quot;: &quot;2022-10-19 16:22:38&quot;, &quot;author&quot;: &quot;借我一秋风&quot;}</p> <p><strong>详细的css教程推荐查看 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS">MDN</a></strong></p> <h1 id="1--文字单行显示，超出用省略号显示">1. 文字单行显示，超出用省略号显示</h1> <p><img src="https://img-blog.csdnimg.cn/d338cc2291614873bd637fb8e87e427e.png" alt="在这里插入图片描述"></p> <pre><code class="language-css">white-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;\n</code></pre> <h1 id="2-文字多行显示，超出用省略号显示">2. 文字多行显示，超出用省略号显示</h1> <p><img src="https://img-blog.csdnimg.cn/dd1ba996e24a473081ec6b5ba0e7b8f3.png" alt="在这里插入图片描述"></p> <pre><code class="language-css">word-break: break-all;\ntext-overflow: ellipsis;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: 2; /* 这里是超出几行省略 */\noverflow: hidden;\n</code></pre> <p><strong>仅在webkit内核浏览器生效（谷歌浏览器）</strong></p> <h1 id="3-设置滚动条样式">3. 设置滚动条样式</h1> <p><code>::-webkit-scrollbar</code> 滚动条整体部分 <code>::-webkit-scrollbar-button</code> 滚动条两端的按钮 <code>::-webkit-scrollbar-track</code> 外层轨道 <code>::-webkit-scrollbar-track-piece</code> 内层轨道，滚动条中间部分 <code>::-webkit-scrollbar-thumb</code> 滚动条里面可以拖动的那个 <code>::-webkit-scrollbar-corner</code> 边角 <code>::-webkit-resizer</code> 定义右下角拖动块的样式 <strong>详细：</strong> <code>:horizontal</code>水平方向的滚动条 <code>:vertical</code>垂直 方向的滚动条 <code>:decrement</code>应用于按钮和内层轨道(track piece)。它用来指示按钮或者内层轨道是否会减小视窗的位置(比如，垂直滚动条的上面，水平滚动条的左边。) <code>:incrementdecrement</code>类似，用来指示按钮或内层轨道是否会增大视窗的位置(比如，垂直滚动条的下面和水平滚动条的右边。) <code>:start</code>伪类也应用于按钮和滑块。它用来定义对象是否放到滑块的前面。 <code>:end</code>类似于start伪类，标识对象是否放到滑块的后面。 <code>:double-button</code>该伪类以用于按钮和内层轨道。用于判断一个按钮是不是放在滚动条同一端的一对按钮中的一个。对于内层轨道来说，它表示内层轨道是否紧靠一对按钮。 <code>:single-button</code>类似于double-button伪类。对按钮来说，它用于判断一个按钮是否自己独立的在滚动条的一段。对内层轨道来说，它表示内层轨道是否紧靠一个single-button。</p> <p><strong>例如：</strong> <img src="https://img-blog.csdnimg.cn/471c513a57c74370934699f15e9350f1.png" alt="在这里插入图片描述"></p> <pre><code class="language-css">.box {\n        width: 200px;\n        height: 200px;\n        background-color: #ccc;\n        overflow-y: auto;  \n      }\n.box::-webkit-scrollbar-thumb {\n        background-color: bisque;\n        border-radius: 5px;\n      } \n.box::-webkit-scrollbar {\n       background-color: blueviolet;\n       width: 10px;\n       border-radius: 5px;\n      }\n</code></pre> <p><strong>仅在webkit内核浏览器生效（谷歌浏览器）</strong></p> <h1 id="4-字体样式镂空、渐变、背景">4. 字体样式(镂空、渐变、背景)</h1> <ul> <li><strong>文字镂空</strong> <img src="https://img-blog.csdnimg.cn/ac64178c89e748a7b6f7e2f4e115ca18.png" alt="在这里插入图片描述"></li> </ul> <pre><code class="language-css">.box {\n        font-size: 120px;\n        color: white;\n        -webkit-text-stroke: 6px red;\n      }\n</code></pre> <ul> <li><strong>文字渐变色</strong> <img src="https://img-blog.csdnimg.cn/701bbb90184545f19c9e78372ae9113b.png" alt="在这里插入图片描述"></li> </ul> <pre><code class="language-css">.box {\n        /* 转变为行内块元素 文字渐变才会生效 */\n        display: inline-block;\n        font-size: 50px;\n        background: linear-gradient(to right, red, blue);\n        -webkit-background-clip: text;\n        color: transparent;\n      }\n</code></pre> <ul> <li><strong>文字背景图</strong> <img src="https://img-blog.csdnimg.cn/bdcca819d7fb441697270e4858ef2fbb.png" alt="在这里插入图片描述"></li> </ul> <pre><code class="language-css"> .box {\n        font-size: 100px;\n        color: transparent;\n        background-image: url(&quot;https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_45fa33e6a9717c6d418ccae4b8eff9b4/0&quot;);\n        -webkit-background-clip: text;\n        background-position:center;\n      }\n</code></pre> <h1 id="5-清除浮动">5. 清除浮动</h1> <p>使用 Clearfix 清除浮动，解决父类高度崩塌。</p> <pre><code class="language-css">.clearfix {\n    zoom: 1;\n}\n\n.clearfix:after {\n     visibility: hidden;\n     display: block;\n     font-size: 0;\n     content: &quot; &quot;;\n     clear: both;\n     height: 0;\n }\n</code></pre> <h1 id="6-引入字体">6. 引入字体</h1> <p><img src="https://img-blog.csdnimg.cn/e84a843cf0bf45d0bd3a1e1bfc2cf5fe.png" alt="在这里插入图片描述"></p> <pre><code class="language-html">&lt;style&gt;\n      @font-face {\n        font-family: &#39;font-cicada&#39;;\n        src: url(&#39;./abc.ttf&#39;);\n      }\n      .box {\n        font-family: &#39;font-cicada&#39;;\n        font-size: 30px;\n      }\n &lt;/style&gt;\n &lt;body&gt;\n    &lt;div class=&quot;box&quot;&gt;你好吗？&lt;/div&gt;\n &lt;/body&gt;\n</code></pre> <h1 id="7-拖动右下角改变一个div元素尺寸大小">7. 拖动右下角改变一个div元素尺寸大小</h1> <p><img src="https://img-blog.csdnimg.cn/fa3e676a0386473eb1a8e1cc35bba783.png" alt="在这里插入图片描述"></p> <pre><code class="language-css"> .box {\n        resize: both;\n        overflow: auto;\n        border: 2px solid #000;\n      }\n</code></pre> <h1 id="8-网格布局">8. 网格布局</h1> <p><strong>要使 HTML 元素变成一个网格容器，可以将 display 属性设置为 <code>grid</code> 或 <code>inline-grid</code></strong></p> <p><code>grid-template-columns</code> 属性定义了网格布局中的列的数量，它也可以设置每个列的宽度。 <code>grid-template-rows</code> 属性设置每一行的高度。网格引入了 <code>fr</code> 单位来帮助我们创建灵活的网格轨道。一个 fr 单位代表网格容器中可用空间的一等份。 <code>grid-column-gap</code> ，<code>grid-row-gap</code> ， <code>grid-gap</code> 可以使用这些属性来调整间隙大小。 <code>justify-content</code> 属性用于对齐容器内的网格，设置如何分配顺着弹性容器主轴(或者网格行轴) 的元素之间及其周围的空间。 <code>align-content</code> 属性用于设置垂直方向上的网格元素在容器中的对齐方式。 <code>grid-column</code> 属性定义了网格元素列的开始和结束位置。 <code>grid-row</code> 属性定义了网格元素行的开始和结束位置。 <img src="https://img-blog.csdnimg.cn/6a99493782524a9fb56937ad3f5b6ece.png" alt="在这里插入图片描述"></p> <pre><code class="language-html">&lt;style&gt;\n      .box {\n        width: 300px;\n        height: 300px;\n        background-color: #000;\n        border: 1px solid #000;\n        \n        /* 网格布局 */\n        display: grid;\n        grid-template-columns: auto auto auto;\n        grid-gap: 1px;     \n      }\n      .item {\n        background-color: #fff;\n      }\n    &lt;/style&gt;\n\n  &lt;body&gt;\n    &lt;div class=&quot;box&quot;&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/body&gt;\n</code></pre> <p>详细教程 <a href="https://www.runoob.com/css3/css-grid.html">菜鸟教程</a>、<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">MDN</a></p> <h1 id="9-其他">9. 其他</h1> <ul> <li><code>user-select: none;</code> 禁止用户选中文本</li> <li><code>outline: none;</code> 去除当点击Input元素时显示的边框</li> <li><code>opacity: 0.5;</code> 给背景颜色添加透明度,取值范围是0~1</li> <li><code>cursor: pointer;</code> 改变鼠标指针样式</li> </ul> <pre><code class="language-css">cursor:hand;手型\ncursor:pointer;手型\ncursor:auto;由系统自动给出\ncursor:crosshair;十字型 \ncursor:text;I字形\ncursor:wait;等待\ncursor:default;默认\ncursor:e-resize;向右的箭头\ncursor:ne-resize;向右上箭头\ncursor:n-resize;向上箭头\ncursor:nw-resize;向左上箭头\ncursor:w-resize;向左箭头\ncursor:sw-resize;向坐下箭头\ncursor:s-resize;向右下箭头\n</code></pre> ';
        n["default"] = o;
      },
      2320: function (t, n, e) {
        "use strict";
        e(1539), e(4747), e(3948), e(4916), e(4723);
        var o = [];
        function a(t) {
          t.keys().forEach(function (n) {
            var e = n.match(/\/(.+?)\.md$/)[1];
            o.push({ title: e, html: t(n).default });
          });
        }
        a(e(6624)), (n["Z"] = o);
      },
      7107: function (t, n, e) {
        "use strict";
        e(6992), e(8674), e(9601), e(7727);
        var o = e(8935),
          a = function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
          },
          r = [],
          i = e(3736),
          u = {},
          l = (0, i.Z)(u, a, r, !1, null, null, null),
          s = l.exports,
          c = e(2809),
          d =
            (e(1539),
            e(8783),
            e(3948),
            [
              { path: "/", redirect: "/login" },
              {
                path: "/login",
                name: "login",
                component: function () {
                  return e.e(606).then(e.bind(e, 4606));
                },
              },
              {
                path: "/home",
                name: "home",
                component: function () {
                  return e.e(529).then(e.bind(e, 4529));
                },
              },
              {
                path: "/article",
                name: "article",
                component: function () {
                  return e.e(216).then(e.bind(e, 7216));
                },
              },
            ]),
          p = d;
        o.Z.use(c.Z);
        var g = new c.Z({ mode: "history", base: "/", routes: p });
        g.beforeEach(function (t, n, e) {
          e();
        }),
          g.afterEach(function () {});
        var m = g,
          h = e(4665);
        o.Z.use(h.ZP);
        var q = new h.ZP.Store({
          state: {},
          getters: {},
          mutations: {},
          actions: {},
          modules: {},
        });
        e(4747), e(4916), e(4723);
        function f(t) {
          t.keys().forEach(function (n) {
            var e = n.match(/\/(\w+?)\.vue$/)[1];
            o.Z.component(e, t(n).default);
          });
        }
        f(e(5142));
        var b = e(7471);
        (o.Z.prototype.$axios = b.ZP),
          (o.Z.config.productionTip = !1),
          new o.Z({
            router: m,
            store: q,
            render: function (t) {
              return t(s);
            },
          }).$mount("#app");
      },
      6624: function (t, n, e) {
        var o = {
          "./jQuery实现轮播图.md": 1832,
          "./js圆盘时钟.md": 2927,
          "./js数组排序方式.md": 7904,
          "./mock.js使用方法.md": 2129,
          "./uni-app的使用方法.md": 8749,
          "./vue组件的使用和封装.md": 6945,
          "./vue跨域 - 配置代理.md": 5643,
          "./使用nvm管理多个node版本.md": 3296,
          "./容易忘记的css样式.md": 5837,
        };
        function a(t) {
          var n = r(t);
          return e(n);
        }
        function r(t) {
          if (!e.o(o, t)) {
            var n = new Error("Cannot find module '" + t + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          }
          return o[t];
        }
        (a.keys = function () {
          return Object.keys(o);
        }),
          (a.resolve = r),
          (t.exports = a),
          (a.id = 6624);
      },
      5142: function (t, n, e) {
        var o = {
          "./ArticleList.vue": 1794,
          "./Footer.vue": 2731,
          "./HomeHeader.vue": 1433,
          "./Markdown.vue": 8487,
        };
        function a(t) {
          var n = r(t);
          return e(n);
        }
        function r(t) {
          if (!e.o(o, t)) {
            var n = new Error("Cannot find module '" + t + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          }
          return o[t];
        }
        (a.keys = function () {
          return Object.keys(o);
        }),
          (a.resolve = r),
          (t.exports = a),
          (a.id = 5142);
      },
      9586: function (t, n, e) {
        "use strict";
        t.exports = e.p + "img/csdn.87d26b4b.svg";
      },
      5475: function (t, n, e) {
        "use strict";
        t.exports = e.p + "img/gitee.a88ba93f.svg";
      },
      5679: function (t, n, e) {
        "use strict";
        t.exports = e.p + "img/github.dcf54e06.svg";
      },
      8308: function (t, n, e) {
        "use strict";
        t.exports = e.p + "img/avatar.90ed9bdc.png";
      },
      2580: function (t) {
        "use strict";
        t.exports = JSON.parse(
          '{"S":"借我一秋风","u":{"$":[{"id":1,"title":"首页"},{"id":2,"title":"文章"},{"id":3,"title":"动漫"},{"id":4,"title":"游戏"},{"id":5,"title":"关于我"}]}}'
        );
      },
    },
    n = {};
  function e(o) {
    var a = n[o];
    if (void 0 !== a) return a.exports;
    var r = (n[o] = { exports: {} });
    return t[o](r, r.exports, e), r.exports;
  }
  (e.m = t),
    (function () {
      var t = [];
      e.O = function (n, o, a, r) {
        if (!o) {
          var i = 1 / 0;
          for (c = 0; c < t.length; c++) {
            (o = t[c][0]), (a = t[c][1]), (r = t[c][2]);
            for (var u = !0, l = 0; l < o.length; l++)
              (!1 & r || i >= r) &&
              Object.keys(e.O).every(function (t) {
                return e.O[t](o[l]);
              })
                ? o.splice(l--, 1)
                : ((u = !1), r < i && (i = r));
            if (u) {
              t.splice(c--, 1);
              var s = a();
              void 0 !== s && (n = s);
            }
          }
          return n;
        }
        r = r || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > r; c--) t[c] = t[c - 1];
        t[c] = [o, a, r];
      };
    })(),
    (function () {
      e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return e.d(n, { a: n }), n;
      };
    })(),
    (function () {
      e.d = function (t, n) {
        for (var o in n)
          e.o(n, o) &&
            !e.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
      };
    })(),
    (function () {
      (e.f = {}),
        (e.e = function (t) {
          return Promise.all(
            Object.keys(e.f).reduce(function (n, o) {
              return e.f[o](t, n), n;
            }, [])
          );
        });
    })(),
    (function () {
      e.u = function (t) {
        return (
          "js/" +
          t +
          "-legacy." +
          { 216: "356c8c3f", 529: "2a153f4c", 606: "038fbd20" }[t] +
          ".js"
        );
      };
    })(),
    (function () {
      e.miniCssF = function (t) {
        return (
          "css/" +
          t +
          "." +
          { 216: "8d14b4ce", 529: "7269e1ed", 606: "02b83911" }[t] +
          ".css"
        );
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      };
    })(),
    (function () {
      var t = {},
        n = "blog:";
      e.l = function (o, a, r, i) {
        if (t[o]) t[o].push(a);
        else {
          var u, l;
          if (void 0 !== r)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var d = s[c];
              if (
                d.getAttribute("src") == o ||
                d.getAttribute("data-webpack") == n + r
              ) {
                u = d;
                break;
              }
            }
          u ||
            ((l = !0),
            (u = document.createElement("script")),
            (u.charset = "utf-8"),
            (u.timeout = 120),
            e.nc && u.setAttribute("nonce", e.nc),
            u.setAttribute("data-webpack", n + r),
            (u.src = o)),
            (t[o] = [a]);
          var p = function (n, e) {
              (u.onerror = u.onload = null), clearTimeout(g);
              var a = t[o];
              if (
                (delete t[o],
                u.parentNode && u.parentNode.removeChild(u),
                a &&
                  a.forEach(function (t) {
                    return t(e);
                  }),
                n)
              )
                return n(e);
            },
            g = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: u }),
              12e4
            );
          (u.onerror = p.bind(null, u.onerror)),
            (u.onload = p.bind(null, u.onload)),
            l && document.head.appendChild(u);
        }
      };
    })(),
    (function () {
      e.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      e.p = "/";
    })(),
    (function () {
      var t = function (t, n, e, o) {
          var a = document.createElement("link");
          (a.rel = "stylesheet"), (a.type = "text/css");
          var r = function (r) {
            if (((a.onerror = a.onload = null), "load" === r.type)) e();
            else {
              var i = r && ("load" === r.type ? "missing" : r.type),
                u = (r && r.target && r.target.href) || n,
                l = new Error(
                  "Loading CSS chunk " + t + " failed.\n(" + u + ")"
                );
              (l.code = "CSS_CHUNK_LOAD_FAILED"),
                (l.type = i),
                (l.request = u),
                a.parentNode.removeChild(a),
                o(l);
            }
          };
          return (
            (a.onerror = a.onload = r),
            (a.href = n),
            document.head.appendChild(a),
            a
          );
        },
        n = function (t, n) {
          for (
            var e = document.getElementsByTagName("link"), o = 0;
            o < e.length;
            o++
          ) {
            var a = e[o],
              r = a.getAttribute("data-href") || a.getAttribute("href");
            if ("stylesheet" === a.rel && (r === t || r === n)) return a;
          }
          var i = document.getElementsByTagName("style");
          for (o = 0; o < i.length; o++) {
            (a = i[o]), (r = a.getAttribute("data-href"));
            if (r === t || r === n) return a;
          }
        },
        o = function (o) {
          return new Promise(function (a, r) {
            var i = e.miniCssF(o),
              u = e.p + i;
            if (n(i, u)) return a();
            t(o, u, a, r);
          });
        },
        a = { 143: 0 };
      e.f.miniCss = function (t, n) {
        var e = { 216: 1, 529: 1, 606: 1 };
        a[t]
          ? n.push(a[t])
          : 0 !== a[t] &&
            e[t] &&
            n.push(
              (a[t] = o(t).then(
                function () {
                  a[t] = 0;
                },
                function (n) {
                  throw (delete a[t], n);
                }
              ))
            );
      };
    })(),
    (function () {
      var t = { 143: 0 };
      (e.f.j = function (n, o) {
        var a = e.o(t, n) ? t[n] : void 0;
        if (0 !== a)
          if (a) o.push(a[2]);
          else {
            var r = new Promise(function (e, o) {
              a = t[n] = [e, o];
            });
            o.push((a[2] = r));
            var i = e.p + e.u(n),
              u = new Error(),
              l = function (o) {
                if (e.o(t, n) && ((a = t[n]), 0 !== a && (t[n] = void 0), a)) {
                  var r = o && ("load" === o.type ? "missing" : o.type),
                    i = o && o.target && o.target.src;
                  (u.message =
                    "Loading chunk " + n + " failed.\n(" + r + ": " + i + ")"),
                    (u.name = "ChunkLoadError"),
                    (u.type = r),
                    (u.request = i),
                    a[1](u);
                }
              };
            e.l(i, l, "chunk-" + n, n);
          }
      }),
        (e.O.j = function (n) {
          return 0 === t[n];
        });
      var n = function (n, o) {
          var a,
            r,
            i = o[0],
            u = o[1],
            l = o[2],
            s = 0;
          if (
            i.some(function (n) {
              return 0 !== t[n];
            })
          ) {
            for (a in u) e.o(u, a) && (e.m[a] = u[a]);
            if (l) var c = l(e);
          }
          for (n && n(o); s < i.length; s++)
            (r = i[s]), e.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return e.O(c);
        },
        o = (self["webpackChunkblog"] = self["webpackChunkblog"] || []);
      o.forEach(n.bind(null, 0)), (o.push = n.bind(null, o.push.bind(o)));
    })();
  var o = e.O(void 0, [998], function () {
    return e(7107);
  });
  o = e.O(o);
})();
//# sourceMappingURL=app-legacy.97decc64.js.map
