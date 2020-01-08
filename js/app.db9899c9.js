(function(e){function t(t){for(var i,a,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},1:function(e,t){},"1d5b":function(e,t,n){"use strict";var i=n("9940"),s=n.n(i);s.a},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("rock-paper-scissors-lizard-spock (v4)")]),n("Capture")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"instructions"}},[e._m(0),e._m(1),n("p",[e._v("Also, a couple of things to note:")]),n("ul",[n("li",[e._v("Max images that can be submitted at a time is 64 (Current count is at "+e._s(e.list.length)+")")]),n("li",[e._v("These images will be used to train a machine learning model (this means you're ok with what you submit).")]),n("li",[e._v("Don't submit anything you don't wish others to see")])])]),n("div",{attrs:{id:"radioselection"}},[e._l(e.labels,(function(t,i){return n("span",{key:t+i},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedSign,expression:"selectedSign"}],attrs:{type:"radio",id:t,name:"sign"},domProps:{value:t,checked:e.selectedSign==t,checked:e._q(e.selectedSign,t)},on:{change:function(n){e.selectedSign=t}}}),n("label",{attrs:{for:t}},[e._v(e._s(t))]),e._v("\n             \n        ")])})),null!=e.interval?n("div",[e._v("Click Spacebar to Stop!")]):e._e()],2),n("div",{attrs:{id:"images"}},[n("video",{attrs:{id:"video",width:"320",height:"240",autoplay:""},on:{click:function(t){return e.predict()}}}),n("canvas",{attrs:{id:"rendered",width:"224",height:"224"}}),n("canvas",{attrs:{id:"canvas",width:"320",height:"240"}}),n("div",{attrs:{id:"output"}},[null!=e.modelmeta?n("div",{attrs:{id:"flavor"}},[e._v("Type: "+e._s(e.modelmeta.Flavor))]):e._e(),null!=e.modelmeta?n("div",{attrs:{id:"exported"}},[e._v("Exported: "+e._s(e.modelmeta.ExportedDate))]):e._e(),n("div",{attrs:{id:"current"}},[e._v(e._s(e.guess))]),n("div",{attrs:{id:"plist"}},[n("ul",e._l(e.probabilities,(function(t,i){return n("li",{key:i},[e._v(e._s(t.label)+": "+e._s(t.probability.toFixed(2))+"%")])})),0)])])]),e.list.length>0?n("div",{attrs:{id:"listOPics"}},[n("div",[e._v("Click on an image to remove (or "),n("button",{attrs:{type:"button"},on:{click:function(t){return e.clearImages()}}},[e._v("Clear All")]),e._v(")")]),n("div",[e._v("(Also maybe clean out any images that might be ambiguous if possible)")]),e.list.length>=64?n("div",{attrs:{id:"warning"}},[e._v("64 Limit Reached - either submit or remove some images")]):e._e(),e._l(e.list,(function(t,i){return n("ul",{key:i,staticClass:"imagelist"},[n("li",{staticClass:"imgitem",on:{click:function(t){return e.removeImage(i)}}},[n("div",[e._v(e._s(t.type))]),n("img",{attrs:{height:"120",width:"160",src:t.image}})])])})),n("div",{staticClass:"btn"},[e.list.length>0?n("button",{directives:[{name:"show",rawName:"v-show",value:!e.processing,expression:"!processing"}],attrs:{type:"button"},on:{click:function(t){return e.submitImages()}}},[e._v("Submit Training Data")]):e._e()])],2):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:e.processing,expression:"processing"}],attrs:{id:"notifications"}},[e._v("\n        "+e._s(e.message)+"\n    ")])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Capture Instructions")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[e._v("Select desired gesture")]),n("li",[e._v("Get into position!")]),n("li",[e._v("Spacebar to start")])])}],l=n("75fc"),c=(n("28a5"),n("96cf"),n("3b8d")),u=n("bc3a"),d=n.n(u),p=n("1157"),h=n.n(p),v=n("cf58"),m={name:"Capture",data:function(){return{processing:!1,message:"",video:null,canvas:null,selectedSign:"none",list:[],lastresponse:null,interval:null,model:null,modelmeta:null,labels:[],probabilities:[],guess:"none",vdim:{width:0,height:0},appSettings:""}},mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,i,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(document.onkeyup=this.key,t=document.getElementById("canvas"),this.canvas=t.getContext("2d"),this.video=document.getElementById("video"),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){e.next=10;break}return e.next=7,navigator.mediaDevices.getUserMedia({video:!0});case 7:n=e.sent,i=n.getVideoTracks(),i.length>=1&&(s=i[0].getSettings(),this.vdim.width=s.width,this.vdim.height=s.height,this.video.srcObject=n,this.video.play());case 10:return e.next=12,h.a.get("config.json");case 12:return this.appSettings=e.sent,this.model=new v["ClassificationModel"],e.next=16,this.model.loadModelAsync("model/model.json");case 16:return e.next=18,h.a.getJSON("model/cvexport.manifest");case 18:return this.modelmeta=e.sent,e.next=21,h.a.get("model/labels.txt");case 21:r=e.sent,this.labels=r.split("\n").map((function(e){return e.trim()})),setInterval(this.predict,500);case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{predict:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,i,s,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=document.getElementById("rendered"),n=t.getContext("2d"),n.drawImage(this.video,0,0,320,240),e.next=5,this.model.executeAsync(t);case 5:i=e.sent,s=i[0],this.guess=this.labels[s.indexOf(Math.max.apply(Math,Object(l["a"])(s)))],this.probabilities=s.map((function(e,t){return{label:r.labels[t],probability:100*e}}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),key:function(e){32==e.keyCode&&(null!=this.interval?this.stopCapture():this.startCapture())},startCapture:function(){this.stopCapture(),setTimeout(this.stopCapture,60010),this.interval=setInterval(this.addImage,500),this.video.style.border="thick solid #FF0000"},stopCapture:function(){null!=this.interval&&(clearInterval(this.interval),this.interval=null,this.video.style.border="solid 1px gray")},addImage:function(){if(this.list.length<64){this.canvas.drawImage(this.video,0,0,320,240);var e=document.getElementById("canvas");this.list.push({type:this.selectedSign,image:e.toDataURL()})}else this.stopCapture()},removeImage:function(e){this.list.splice(e,1)},clearImages:function(){this.list=[],this.processing=!1},submitImages:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.processing=!0,this.message="sending data",e.prev=2,t=this.appSettings.saveEndpoint,n=this.appSettings.maxSubmitCount,i=0;case 6:if(!(i<this.list.length)){e.next=14;break}return e.next=9,d.a.post(t,{items:this.list.slice(i,i+n)},{headers:{"Content-Type":"application/json"}});case 9:s=e.sent,this.lastresponse=s["data"];case 11:i+=n,e.next=6;break;case 14:this.message="done!",this.list=[],this.processing=!1,e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](2),console.log(e.t0),this.processing=!1;case 23:case"end":return e.stop()}}),e,this,[[2,19]])})));function t(){return e.apply(this,arguments)}return t}()}},g=m,f=(n("1d5b"),n("2877")),b=Object(f["a"])(g,a,o,!1,null,"3534cda1",null),_=b.exports,y={name:"app",components:{Capture:_}},w=y,x=(n("034f"),Object(f["a"])(w,s,r,!1,null,null,null)),k=x.exports;i["a"].config.productionTip=!1,i["a"].config.devtools=!0,new i["a"]({render:function(e){return e(k)}}).$mount("#app")},6:function(e,t){},"64a9":function(e,t,n){},9940:function(e,t,n){}});
//# sourceMappingURL=app.db9899c9.js.map