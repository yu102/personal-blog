"use strict";(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[216],{7216:function(t,i,e){e.r(i),e.d(i,{default:function(){return c}});var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"article"},[e("HomeHeader",{attrs:{backgroundColor:"#8893a7",value:22},on:{toHome:t.logoCilck}}),e("div",{staticClass:"content"},[e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._v(t._s(t.info.title))]),e("div",{staticClass:"info"},[e("div",{staticClass:"author"},[t._v(t._s(t.info.author))]),e("div",{staticClass:"time"},[t._v("于 "+t._s(t.info.createTime)+" 发布")])]),e("Markdown",{ref:"markdownInfo",attrs:{markdown:t.markdown}})],1)])],1)},o=[],a=e(2320),n=e(2580),r={name:"Article",data(){return{id:null,markdown:"",info:{},Author:n.S}},mounted(){this.id=this.$route.query.id,this.markdown=a.Z.filter((t=>t.title===this.id))[0].html,window.scrollTo(0,0),setTimeout((()=>{this.info=this.$refs.markdownInfo.info,document.title=`${this.info.title} | ${this.Author}`}),1)},methods:{logoCilck(){sessionStorage.setItem("headBg","transparent"),this.$router.push("/home")}}},l=r,d=e(3736),u=(0,d.Z)(l,s,o,!1,null,"38ec9edb",null),c=u.exports}}]);
//# sourceMappingURL=216.8b0b4ee0.js.map