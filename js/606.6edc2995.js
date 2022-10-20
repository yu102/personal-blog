"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([
  [606],
  {
    4606: function (t, s, i) {
      i.r(s),
        i.d(s, {
          default: function () {
            return r;
          },
        });
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i("div", { staticClass: "loading" }, [
            i("div", { staticClass: "cont" }, [
              i("div", { staticClass: "text" }, [t._v(t._s(t.text))]),
              i("div", { staticClass: "ellipsis" }, [t._v(t._s(t.ellipsis))]),
            ]),
          ]);
        },
        l = [],
        n = {
          name: "Loading",
          data() {
            return { text: "loading", ellipsis: "" };
          },
          mounted() {
            this.loading(), this.toHome();
          },
          methods: {
            loading() {
              setInterval(() => {
                if ("..." === this.ellipsis) return (this.ellipsis = "");
                this.ellipsis += ".";
              }, 400);
            },
            toHome() {
              setTimeout(() => {
                this.$router.push("/home");
              }, 3e3);
            },
          },
        },
        a = n,
        o = i(3736),
        u = (0, o.Z)(a, e, l, !1, null, "7323bc8b", null),
        r = u.exports;
    },
  },
]);
//# sourceMappingURL=606.6edc2995.js.map
