!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([a]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<t.length;a++){var s=t[a];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(8),i={},s=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,u=!1,d=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(v(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(v(n.parts[a]));i[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function v(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(u)return d;r.parentNode.removeChild(r)}if(p){var a=c++;r=o||(o=m()),e=y.bind(null,r,a,!1),n=y.bind(null,r,a,!0)}else r=m(),e=function(t,e){var n=e.css,r=e.media,a=e.sourceMap;r&&t.setAttribute("media",r);l.ssrId&&t.setAttribute(f,e.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){u=n,l=r||{};var s=a(t,e);return h(s),function(e){for(var n=[],r=0;r<s.length;r++){var o=s[r];(c=i[o.id]).refs--,n.push(c)}e?h(s=a(t,e)):s=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function y(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,a);else{var i=document.createTextNode(a),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t,e,n,r,a,i){var s,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,o=t.default);var u,d="function"==typeof o?o.options:o;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId=a),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=u):r&&(u=r),u){var l=d.functional,f=l?d.render:d.beforeCreate;l?(d._injectStyles=u,d.render=function(t,e){return u.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:o,options:d}}},function(t,e,n){n(4),t.exports=n(16)},function(t,e,n){Nova.booting(function(t,e,r){e.addRoutes([{name:"report-by-address",path:"/report-by-address",component:n(5)}])})},function(t,e,n){var r=n(2)(n(9),n(15),!1,function(t){n(6)},null,null);t.exports=r.exports},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("1092f686",r,!0,{})},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".myItem{width:12%;margin-right:5px;min-width:50px}ul{list-style:none;padding:0}.liItem{padding-top:5px}ul .liItem span{cursor:pointer;font-size:14px;line-height:2rem}liItem .tou{width:auto;min-width:100px}.tree-table-title{background-color:var(--30);font-weight:800;font-size:.75rem;color:var(--80);text-transform:uppercase;border-bottom-width:2px;border-color:var(--50);padding:.75rem;letter-spacing:.05em}.liItem .myItem{font-weight:300;color:var(--90);padding-left:.75rem;padding-right:.75rem;min-width:56px;height:3.8125rem;line-height:3.8125rem;font-size:22px}",""])},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],s=i[0],o={id:t+":"+a,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(o):n.push(r[s]={id:s,parts:[o]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),a=n.n(r);e.default={components:{tree:a.a},data:function(){return{data1:[]}},methods:{getMessage:function(){var t=this;this.getData("https://yantai.ljfl.ltd/api/addresses/statistics/1").then(function(e){200===e.status&&(t.data1=[e.data.data])})},getData:function(t){return axios.get(t).then(function(t){return t}).catch(function(t){return t})}},computed:{data1:function(){return this.data1&&this.data1.length}},metaInfo:function(){return{title:"ReportByAddress"}},mounted:function(){this.getMessage()}}},function(t,e,n){var r=n(2)(n(13),n(14),!1,function(t){n(11)},null,null);t.exports=r.exports},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("09f052c8",r,!0,{})},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"em.icon{display:inline-block;width:20px;height:2rem;margin-right:5px;background-repeat:no-repeat;vertical-align:middle}.tree-menu li{line-height:1.5}",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tree",props:{data:{type:[Object,Array],required:!0},ceng:{type:Number}},data:function(){return{open:!1,xinData:[]}},computed:{hasChild:function(){return this.data.children&&this.data.children.length},xinData:function(){return this.xinData&&this.xinData.length}},mounted:function(){},methods:{dianji:function(t){this.xinData.length?this.open=!this.open:this.getId(this.data.id)},getId:function(t){var e=this;this.data.hasChildren&&this.getData("https://yantai.ljfl.ltd/api/addresses/statistics/"+t+"/children").then(function(t){e.xinData=t.data.data,e.open=!e.open})},getData:function(t){return axios.get(t).then(function(t){return t}).catch(function(t){return t})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"liItem",on:{click:function(e){return e.stopPropagation(),t.dianji(e)}}},[n("div",{staticClass:"flex",staticStyle:{"align-items":"center","border-bottom":"1px solid var(--50)"}},[n("div",{staticClass:"myItem tou flex-1",staticStyle:{"text-align":"left"}},[n("span",{style:{paddingLeft:20*t.ceng+"px"}},[t.data.hasChildren?n("em",{staticClass:"icon"},[t._v(t._s(t.open?"-":"+"))]):t._e(),t._v(" "),t.data.hasChildren?t._e():n("em",{staticClass:"icon file-text"}),t._v("\n            "+t._s(t.data.name)+"\n        ")])]),t._v(" "),t._l(t.data.data,function(e){return n("div",{staticClass:"myItem",staticStyle:{"flex-shrink":"1"}},[n("span",[t._v(" "+t._s(e.amount)+" ")])])})],2),t._v(" "),t.xinData?n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}]},t._l(t.xinData,function(e,r){return n("tree",{key:r,attrs:{data:e,ceng:t.ceng+1}})}),1):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("heading",{staticClass:"mb-6"},[t._v("分级统计")]),t._v(" "),n("div",{staticClass:"card flex flex-col justify-center",staticStyle:{"text-align":"center"}},[t.data1.length?n("div",{staticClass:"flex tree-table-title"},[t._m(0),t._v(" "),t._l(t.data1[0].data,function(e){return n("div",{staticClass:"myItem",staticStyle:{"flex-shrink":"1"}},[n("span",[t._v(" "+t._s(e.type)+" ")])])})],2):t._e(),t._v(" "),t.data1.length?n("ul",t._l(t.data1,function(t){return n("tree",{attrs:{data:t,ceng:0}})}),1):n("div",{staticClass:"card text-center flex justify-center items-center px-6 py-8"},[n("h3",{staticClass:"text-base text-80 font-normal"},[t._v("数据不符合给定的标准。")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myItem tou flex-1"},[e("span",[this._v(" 地址 ")])])}]}},function(t,e){}]);