(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ab45ccc"],{"4fde":function(t,e,n){"use strict";n("7ce0")},"7ce0":function(t,e,n){},a55b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.token,expression:"token",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"loginning",on:{click:t.login}},[n("a",[t._v("登录")])])])},i=[],s={data:function(){return{token:""}},methods:{login:function(){var t=this;sessionStorage.setItem("token",this.token);var e=sessionStorage.getItem("token");console.log(e),this.$store.dispatch("getMyInfo",this.token).then((function(){sessionStorage.setItem("isLogin",!0),t.$router.push("/")})).catch((function(t){console.log(t),alert("token 有误")}))}}},c=s,r=(n("4fde"),n("2877")),a=Object(r["a"])(c,o,i,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-7ab45ccc.5a65b4e4.js.map