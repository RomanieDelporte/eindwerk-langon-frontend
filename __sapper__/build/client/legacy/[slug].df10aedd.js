import{N as t,_ as n,a as e,b as r,c as s,i as a,d as o,S as c,s as u,f as i,e as f,t as l,E as h,k as p,l as v,g as d,h as m,j as y,m as x,n as j,o as R,y as b,r as g,I as w}from"./client.8dcf677f.js";function E(t,n,e,r,s,a,o){try{var c=t[a](o),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,s)}function k(t){return function(){var n=this,e=arguments;return new Promise((function(r,s){var a=t.apply(n,e);function o(t){E(a,r,s,o,c,"next",t)}function c(t){E(a,r,s,o,c,"throw",t)}o(void 0)}))}}function H(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var o=e(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return r(this,s)}}function P(t){var n,e,r,s,a,o,c=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=i(),r=f("h1"),s=l(c),a=i(),o=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(p),e=v(t),r=d(t,"H1",{});var n=m(r);s=y(n,c),n.forEach(p),a=v(t),o=d(t,"DIV",{class:!0}),m(o).forEach(p),this.h()},h:function(){x(o,"class","content svelte-m1j4hv")},m:function(t,n){j(t,e,n),j(t,r,n),R(r,s),j(t,a,n),j(t,o,n),o.innerHTML=u},p:function(t,e){var r=b(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&c!==(c=t[0].title+"")&&g(s,c),1&r&&u!==(u=t[0].html+"")&&(o.innerHTML=u)},i:w,o:w,d:function(t){t&&p(e),t&&p(r),t&&p(a),t&&p(o)}}}function B(t){return I.apply(this,arguments)}function I(){return(I=k(t.mark((function n(e){var r,s,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function L(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var M=function(t){n(r,c);var e=H(r);function r(t){var n;return s(this,r),n=e.call(this),a(o(n),t,L,P,u,{post:0}),n}return r}();export default M;export{B as preload};
