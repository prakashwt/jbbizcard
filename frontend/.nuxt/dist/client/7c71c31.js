(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{164:function(e,t,n){"use strict";var r=n(76),l=n(5),o=n(73),c=n(74),d=n(19),v=n(57),f=n(75),h=n(12),m=Math.min,w=[].push,y=4294967295,x=!h((function(){RegExp(y,"y")}));n(58)("split",2,(function(e,t,n,h){var _;return _="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var l=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(l,e,t);for(var o,c,d,output=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,m=void 0===t?y:t>>>0,x=new RegExp(e.source,v+"g");(o=f.call(x,l))&&!((c=x.lastIndex)>h&&(output.push(l.slice(h,o.index)),o.length>1&&o.index<l.length&&w.apply(output,o.slice(1)),d=o[0].length,h=c,output.length>=m));)x.lastIndex===o.index&&x.lastIndex++;return h===l.length?!d&&x.test("")||output.push(""):output.push(l.slice(h)),output.length>m?output.slice(0,m):output}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var l=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,l,r):_.call(String(l),n,r)},function(e,t){var r=h(_,e,this,t,_!==n);if(r.done)return r.value;var f=l(e),w=String(this),k=o(f,RegExp),C=f.unicode,P=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(x?"y":"g"),M=new k(x?f:"^(?:"+f.source+")",P),S=void 0===t?y:t>>>0;if(0===S)return[];if(0===w.length)return null===v(M,w)?[w]:[];for(var p=0,q=0,I=[];q<w.length;){M.lastIndex=x?q:0;var $,T=v(M,x?w:w.slice(q));if(null===T||($=m(d(M.lastIndex+(x?0:q)),w.length))===p)q=c(w,q,C);else{if(I.push(w.slice(p,q)),I.length===S)return I;for(var i=1;i<=T.length-1;i++)if(I.push(T[i]),I.length===S)return I;q=p=$}}return I.push(w.slice(p)),I}]}))},176:function(e,t){var n='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3l14 9-14 9V3z" fill="none" stroke="#fff" stroke-width="2"/></svg>';e.exports=n,t.default=n},177:function(e,t){var n='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke="#fff" stroke-width="2" d="M5 5h14v14H5z"/></svg>';e.exports=n,t.default=n},184:function(e,t,n){"use strict";n.r(t);n(28),n(29),n(10),n(164);var r={props:["media","type","colors","PreviewMode","togglePlay"],methods:{getTitle:function(e){return e.toLowerCase().split(" ").join("_")},setProgress:function(e){var t=this.$refs.mediaSource,time=t.duration*(e.target.value/100);t.currentTime=time},updateSeek:function(){var e=this.$refs.mediaSource,t=e.currentTime,n=this.$refs.seekbar,r=this.$refs.bubble,l=100/e.duration*t;n.value=l;var o=Math.floor(t/60),s=Math.floor(t%60);o.toString().length<2&&(o="0"+o),s.toString().length<2&&(s="0"+s),r.value=o+":"+s,100==l&&(this.isPlaying=!1,n.value=0,this.$refs.play.style.display="block",this.$refs.pause.style.display="none")}},mounted:function(){this.$refs.pCtrl.style.display="flex"}},l=n(45),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mediaC"},[r("video",{directives:[{name:"show",rawName:"v-show",value:"video"==e.type,expression:"type == 'video'"}],ref:"mediaSource",staticClass:"source",style:{pointerEvents:e.PreviewMode?"none":"auto"},attrs:{controlsList:"nodownload nofullscreen noremoteplayback",disablePictureInPicture:"",controls:!e.PreviewMode,preload:"metadata"},on:{timeupdate:function(t){return e.updateSeek()}}},[r("source",{attrs:{src:e.PreviewMode?e.media.dataURI+"#t=0.2":"./media/"+e.getTitle(e.media.title)+"."+e.media.ext}})]),e._v(" "),"music"==e.type&&e.media.coverDataURI?r("img",{attrs:{src:e.PreviewMode?e.media.coverDataURI:"./media/"+e.getTitle(e.media.title)+"."+e.media.coverExt,alt:"cover"}}):e._e(),e._v(" "),r("div",{staticClass:"controls"},[r("p",{staticClass:"title card"},[e._v("\n      "+e._s(e.media.title)+"\n    ")]),e._v(" "),e.media.artist?r("p",{staticClass:"mediaInfo card"},[r("span",[e._v(e._s(e.media.artist))]),e._v(" "),e.media.album?r("span",[e._v(" - "+e._s(e.media.album))]):e._e()]):e._e(),e._v(" "),r("div",{ref:"pCtrl",staticClass:"pCtrl",style:{display:e.PreviewMode?"flex":"none"}},[r("output",{ref:"bubble",staticClass:"currentTime card"},[e._v("00:00")]),e._v(" "),r("input",{ref:"seekbar",staticClass:"seekBar",attrs:{type:"range",value:"0"},on:{change:function(t){return e.setProgress(t)}}}),e._v(" "),r("a",{staticClass:"playPause",style:{backgroundColor:""+e.colors.buttonBg.color},on:{click:function(t){return e.togglePlay(e.$refs.mediaSource)}}},[r("div",{ref:"play",staticClass:"icon play action",domProps:{innerHTML:e._s(n(176))}}),e._v(" "),r("div",{ref:"pause",staticClass:"icon pause action",domProps:{innerHTML:e._s(n(177))}})])])])])}),[],!1,null,null,null);t.default=component.exports}}]);