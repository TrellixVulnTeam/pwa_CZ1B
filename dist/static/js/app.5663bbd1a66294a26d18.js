webpackJsonp([1],{100:function(t,a,e){"use strict";var s=e(101),i=e(104),n=e(19),c=n(s.a,i.a,!1,null,null,null);a.a=c.exports},101:function(t,a,e){"use strict";var s=e(102);e.n(s);a.a={data:function(){return{}},computed:{cat:function(){var t=this;return Object(s.find)(this.$root.cat,function(a){return a[".key"]===t.$route.params.id})}}}},104:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mdl-grid"},[e("div",{staticClass:"mdl-cell mdl-cell--8-col"},[e("div",{staticClass:"picture"},[e("img",{attrs:{src:t.cat.url}})]),t._v(" "),e("div",{staticClass:"info"},[e("span",[t._v(t._s(t.cat.info))])])]),t._v(" "),e("div",{staticClass:"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"},[e("div",{staticClass:"comment"},[e("span",[t._v(t._s(t.cat.comment))])]),t._v(" "),e("div",{staticClass:"actions"},[e("router-link",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",attrs:{to:"/post"}},[t._v("\n        ANSWER\n      ")])],1)])])},i=[],n={render:s,staticRenderFns:i};a.a=n},105:function(t,a,e){"use strict";function s(t){e(106)}var i=e(107),n=e(112),c=e(19),l=s,o=c(i.a,n.a,!1,l,"data-v-070bcb08",null);a.a=o.exports},106:function(t,a){},107:function(t,a,e){"use strict";var s=e(108),i=e.n(s);a.a={data:function(){return{catUrl:null,title:""}},mounted:function(){var t=this;this.$http.get("https://thecatapi.com/api/images/get?format=xml&results_per_page=1").then(function(a){t.catUrl=i()(a.body).root.children[0].children[0].children[0].children[0].content})},methods:{postCat:function(){this.$root.$firebaseRefs.cat.push({url:this.catUrl,comment:this.title,info:"Posted by Moff on Today",created_at:-1*(new Date).getTime()}).then(this.$router.push("/"))}}}},112:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("div",{staticClass:"mdl-grid"},[e("div",{staticClass:"mdl-cell mdl-cell--8-col"},[e("div",{staticClass:"card-image__picture"},[e("img",{attrs:{src:this.catUrl}})])]),t._v(" "),e("div",{staticClass:"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"},[e("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"mdl-textfield__input",attrs:{id:"username",type:"text"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}}),t._v(" "),e("label",{staticClass:"mdl-textfield__label",attrs:{for:"username"}},[t._v("Describe me")])]),t._v(" "),e("div",{staticClass:"actions"},[e("a",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",on:{click:function(a){a.preventDefault(),t.postCat(a)}}},[t._v("\n          POST A CAT\n        ")])])])])])},i=[],n={render:s,staticRenderFns:i};a.a=n},113:function(t,a,e){"use strict";var s=e(114),i=e.n(s),n={apiKey:"AIzaSyAtKUps9uqYZpBpeB0Jcb0d_m4ExxabEXY",authDomain:"cropchat-7027c.firebaseapp.com",databaseURL:"https://cropchat-7027c.firebaseio.com",projectId:"cropchat-7027c",storageBucket:"cropchat-7027c.appspot.com",messagingSenderId:"285168754673"};i.a.initializeApp(n),a.a={database:i.a.database()}},196:function(t,a){},82:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(42),i=e(84),n=e(90),c=e(113),l=e(194),o=e.n(l),r=e(195);s.a.config.productionTip=!1,s.a.use(o.a),s.a.use(r.a),new s.a({el:"#app",firebase:{cat:c.a.database.ref("cat").orderByChild("created_at")},router:n.a,template:"<App/>",components:{App:i.a}})},84:function(t,a,e){"use strict";function s(t){e(85)}var i=e(87),n=e(89),c=e(19),l=s,o=c(i.a,n.a,!1,l,null,null);a.a=o.exports},85:function(t,a){},87:function(t,a,e){"use strict";e(88),a.a={name:"app",methods:{hideMenu:function(){document.getElementsByClassName("mdl-layout__drawer")[0].classList.remove("is-visible"),document.getElementsByClassName("mdl-layout__obfuscator")[0].classList.remove("is-visible")}}}},89:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header"},[t._m(0),t._v(" "),e("div",{staticClass:"mdl-layout__drawer"},[e("span",{staticClass:"mdl-layout-title"},[t._v("CropChat")]),t._v(" "),e("nav",{staticClass:"mdl-navigation"},[e("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/"},nativeOn:{click:function(a){t.hideMenu(a)}}},[t._v("Home")]),t._v(" "),e("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/post"},nativeOn:{click:function(a){t.hideMenu(a)}}},[t._v("Post a picture")])],1)]),t._v(" "),e("main",{staticClass:"mdl-layout__content"},[e("div",{staticClass:"page-content"},[e("router-view")],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"mdl-layout__header"},[e("div",{staticClass:"mdl-layout__header-row"},[e("span",{staticClass:"mdl-layout-title"},[t._v("CropChat")])])])}],n={render:s,staticRenderFns:i};a.a=n},90:function(t,a,e){"use strict";var s=e(42),i=e(91),n=e(92),c=e(100),l=e(105);s.a.use(i.a),a.a=new i.a({routes:[{path:"/",name:"home",component:n.a},{path:"/detail/:id",name:"detail",component:c.a},{path:"/post",name:"post",component:l.a}]})},92:function(t,a,e){"use strict";function s(t){e(93),e(94)}var i=e(95),n=e(99),c=e(19),l=s,o=c(i.a,n.a,!1,l,"data-v-6ccd1a7b",null);a.a=o.exports},93:function(t,a){},94:function(t,a){},95:function(t,a,e){"use strict";var s=e(96),i=e.n(s);a.a={methods:{displayDetails:function(t){this.$router.push({name:"detail",params:{id:t}})},getCats:function(){return navigator.onLine?(this.saveCatsToCache(),this.$root.cat):JSON.parse(localStorage.getItem("cats"))},saveCatsToCache:function(){this.$root.$firebaseRefs.cat.orderByChild("created_at").once("value",function(t){var a=[];t.forEach(function(t){var e=t.val();e[".key"]=t.key,a.push(e)}),localStorage.setItem("cats",i()(a))})}},mounted:function(){this.saveCatsToCache()}}},99:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._l(this.$root.cat,function(a){return e("div",{staticClass:"image-card",on:{click:function(e){t.displayDetails(a[".key"])}}},[e("div",{staticClass:"image-card__picture"},[e("img",{attrs:{src:a.url}})]),t._v(" "),e("div",{staticClass:"image-card__comment mdl-card__actions"},[e("span",[t._v(t._s(a.comment))])])])}),t._v(" "),e("router-link",{staticClass:"add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored",attrs:{to:"/post"}},[e("i",{staticClass:"material-icons"},[t._v("add")])])],2)},i=[],n={render:s,staticRenderFns:i};a.a=n}},[82]);
//# sourceMappingURL=app.5663bbd1a66294a26d18.js.map