(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(e,t,r){"use strict";r.r(t);var n={},o=r(45),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"mt-32 mx-4 flex flex-col"},[n("div",{staticClass:"flex flex-col justify-center items-center"},[n("div",{staticClass:"logo w-12",domProps:{innerHTML:e._s(r(168))}}),e._v(" "),n("p",{staticClass:"font-extrabold text-xl mt-2 leading-tight"},[e._v("SMARTvCARD")])]),e._v(" "),e._m(0),e._v(" "),n("p",{staticClass:"mt-1 mb-8 text-center text-xs text-gray-400"},[n("NuxtLink",{staticClass:"\n        underline\n        text-green-600\n        font-extrabold\n        hover:text-green-500\n        focus:text-green-500\n        transition-colors\n        duration-200\n      ",attrs:{to:"/privacy-policy",rel:"noopener noreferrer"}},[e._v("Privacy Policy\n    ")]),e._v("\n    |\n    "),n("NuxtLink",{staticClass:"\n        underline\n        text-green-600\n        font-extrabold\n        hover:text-green-500\n        focus:text-green-500\n        transition-colors\n        duration-200\n      ",attrs:{to:"/terms-and-conditions",rel:"noopener noreferrer"}},[e._v("Terms & Conditions")])],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"mt-6 text-center text-gray-400"},[e._v("\n    Another Software Solution by\n    "),r("a",{staticClass:"\n        underline\n        text-green-600\n        font-extrabold\n        hover:text-green-500\n        focus:text-green-500\n        transition-colors\n        duration-200\n      ",attrs:{href:"https://getbaer.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GET BAER")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:r(165).default})},182:function(e,t,r){"use strict";r.r(t);r(28),r(29),r(10),r(164);var n={props:["media","type","colors","PreviewMode","togglePlay"],methods:{getTitle:function(e){return e.toLowerCase().split(" ").join("_")},setProgress:function(e){var t=this.$refs.mediaSource,time=t.duration*(e.target.value/100);t.currentTime=time},updateSeek:function(){var e=this.$refs.mediaSource,t=e.currentTime,r=this.$refs.seekbar,n=this.$refs.bubble,o=100/e.duration*t;r.value=o;var l=Math.floor(t/60),s=Math.floor(t%60);l.toString().length<2&&(l="0"+l),s.toString().length<2&&(s="0"+s),n.value=l+":"+s,100==o&&(this.isPlaying=!1,r.value=0,this.$refs.play.style.display="block",this.$refs.pause.style.display="none")}},mounted:function(){this.$refs.pCtrl.style.display="flex"}},o=r(45),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mediaC"},[n("video",{directives:[{name:"show",rawName:"v-show",value:"video"==e.type,expression:"type == 'video'"}],ref:"mediaSource",staticClass:"source",style:{pointerEvents:e.PreviewMode?"none":"auto"},attrs:{controlsList:"nodownload nofullscreen noremoteplayback",disablePictureInPicture:"",controls:!e.PreviewMode,preload:"metadata"},on:{timeupdate:function(t){return e.updateSeek()}}},[n("source",{attrs:{src:e.PreviewMode?e.media.dataURI+"#t=0.2":"./media/"+e.getTitle(e.media.title)+"."+e.media.ext}})]),e._v(" "),"music"==e.type&&e.media.coverDataURI?n("img",{attrs:{src:e.PreviewMode?e.media.coverDataURI:"./media/"+e.getTitle(e.media.title)+"."+e.media.coverExt,alt:"cover"}}):e._e(),e._v(" "),n("div",{staticClass:"controls"},[n("p",{staticClass:"title card"},[e._v("\n      "+e._s(e.media.title)+"\n    ")]),e._v(" "),e.media.artist?n("p",{staticClass:"mediaInfo card"},[n("span",[e._v(e._s(e.media.artist))]),e._v(" "),e.media.album?n("span",[e._v(" - "+e._s(e.media.album))]):e._e()]):e._e(),e._v(" "),n("div",{ref:"pCtrl",staticClass:"pCtrl",style:{display:e.PreviewMode?"flex":"none"}},[n("output",{ref:"bubble",staticClass:"currentTime card"},[e._v("00:00")]),e._v(" "),n("input",{ref:"seekbar",staticClass:"seekBar",attrs:{type:"range",value:"0"},on:{change:function(t){return e.setProgress(t)}}}),e._v(" "),n("a",{staticClass:"playPause",style:{backgroundColor:""+e.colors.buttonBg.color},on:{click:function(t){return e.togglePlay(e.$refs.mediaSource)}}},[n("div",{ref:"play",staticClass:"icon play action",domProps:{innerHTML:e._s(r(174))}}),e._v(" "),n("div",{ref:"pause",staticClass:"icon pause action",domProps:{innerHTML:e._s(r(175))}})])])])])}),[],!1,null,null,null);t.default=component.exports},183:function(e,t,r){"use strict";r.r(t);r(164);var n=r(180),o={props:["media","type","colors","PreviewMode"],methods:{getTitle:function(e){return e.toLowerCase().split(" ").join("_")},downloadDocument:function(){Object(n.saveAs)(window.URL.createObjectURL(this.media.file),"".concat(this.media.title,".pdf"))}}},l=r(45),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mediaC"},[n("div",[n("img",{attrs:{src:e.PreviewMode?e.media.coverDataURI:"./media/"+e.getTitle(e.media.title)+"."+e.media.coverExt,alt:e.media.title}})]),e._v(" "),n("div",{staticClass:"controls"},[n("p",{staticClass:"title card"},[e._v("\n      "+e._s(e.media.title)+"\n    ")]),e._v(" "),n("p",{staticClass:"mediaInfo card"},[e._v("PDF - "+e._s(e.media.filesize))]),e._v(" "),n("div",{staticClass:"docDl"},[n("a",{staticClass:"dlBtn",style:{backgroundColor:""+e.colors.buttonBg.color},attrs:{href:e.PreviewMode?"":"./media/"+e.getTitle(e.media.title)+"."+e.media.ext,download:"",target:"_blank"},on:{click:function(t){return t.preventDefault(),e.downloadDocument()}}},[n("div",{staticClass:"icon action",domProps:{innerHTML:e._s(r(171))}})])])])])}),[],!1,null,null,null);t.default=component.exports},184:function(e,t,r){"use strict";r.r(t);r(164);var n={props:["product","colors","PreviewMode"],methods:{getTitle:function(e){return e.toLowerCase().split(" ").join("_")}}},o=r(45),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content",style:{backgroundColor:""+e.colors.cardBg.color}},[e.product.image?r("img",{attrs:{src:e.PreviewMode?e.product.image.dataURI:"./media/"+e.getTitle(e.product.image.title)+"."+e.product.image.ext,alt:"Product image"}}):e._e(),e._v(" "),r("div",{staticClass:"controls prodInfo"},[r("p",{staticClass:"title card"},[e._v("\n      "+e._s(e.product.title)+"\n    ")]),e._v(" "),e.product.description?r("p",{staticClass:"desc card"},[e._v("\n      "+e._s(e.product.description)+"\n    ")]):e._e(),e._v(" "),e.product.price?r("p",{staticClass:"price card"},[e._v("\n      "+e._s(e.product.price)+"\n    ")]):e._e(),e._v(" "),e.product.label?r("a",{staticClass:"label",style:{backgroundColor:""+e.colors.buttonBg.color,lineHeight:e.PreviewMode?"inherit":"1.5rem"},attrs:{target:"_blank",href:e.product.link}},[r("p",{staticClass:"action"},[e._v(e._s(e.product.label))])]):e._e()])])}),[],!1,null,null,null);t.default=component.exports},192:function(e,t,r){var content=r(264);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("7a240351",content,!0,{sourceMap:!1})},199:function(e,t,r){"use strict";r.r(t);r(164),r(108),r(77),r(40),r(39);var n=r(182),o=r(183),l=r(184),c={props:["username","genInfo","images","featured","colors","primaryActions","secondaryActions","PreviewMode","downloadVcard","downloadKey","footerCredit","showAlert","hasLightBG","pubKeyIsValid"],components:{MediaPlayer:n.default,DocumentDownloader:o.default,ProductShowcase:l.default},watch:{getFeaturedMusic:function(e,t){this.paused=this.getFeaturedMusic.map((function(e){return!0}))}},data:function(){return{paused:[]}},computed:{getFeaturedMusic:function(){return this.featured.music},getEmbedContent:function(){var e=this;return this.embedded.map((function(t){return{title:t.title,content:t.content.filter((function(t){return e.stripAttr(t)}))}})).filter((function(e){return e}))},getCssHref:function(){if(this.genInfo.fontLink){var html=(new DOMParser).parseFromString(this.genInfo.fontLink,"text/html"),link=Array.from(html.getElementsByTagName("link")).filter((function(e){return"stylesheet"==e.getAttribute("rel")}));return link.length&&link[0].getAttribute("href")}return!1},getFontFamily:function(){var e=this.genInfo.fontCss.replace(/\s+/,"");if(/^font-family[^;]*/.test(e))return e.match(/^font-family[^;]*/)[0]}},methods:{getTitle:function(e){return e.toLowerCase().split(" ").join("_")},stripAttr:function(e){return/<iframe(.*)\/iframe>/.test(e)?e.match(/<iframe(.*)\/iframe>/)[0].match(/src="?([^"\s]+)"/)[1]:null},toggleContainer:function(e){"2rem"==e.style.top?(e.style.visibility="visible",e.style.top="0px",e.style.opacity=1):(e.style.top="2rem",e.style.opacity=0,setTimeout((function(){e.style.visibility="hidden"}),200))},showKey:function(){var e=this.$refs.modal,t=this.$refs.copyView,r=this.$refs.qrView;this.toggleContainer(e),t.style.display=r.style.display="none"},closePublicKey:function(){var e=this.$refs.modal;this.toggleContainer(e)},sharingAlert:function(){this.showAlert('You are able to share your business card after completing the hosting process.\n\nCheck out the <a class="underline font-extrabold text-green-600 hover:text-green-500 transition-colors duration-200" href="/demo" target="_blank">demo</a> to test the functionality.')},togglePlay:function(e){this.$refs.mediaPlayer.forEach((function(t){var r=t.$refs.mediaSource,n=t.$refs.play,o=t.$refs.pause;e!=r?(r.pause(),n.style.display="block",o.style.display="none"):r.paused?(r.play(),n.style.display="none",o.style.display="block"):(r.pause(),n.style.display="block",o.style.display="none")}))}}},d=(r(263),r(45)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    overflow-y-scroll\n    max-hd\n    border-t-0 border-4 border-black\n    bg-gray-900\n  "},[n("div",{attrs:{id:"Theme1"}},[n("html",{ref:"html",style:{backgroundColor:""+e.colors.logoBg.color},attrs:{lang:"en"}},[n("head",[n("meta",{attrs:{charset:"UTF-8"}}),e._v(" "),n("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),e._v(" "),e.PreviewMode?e._e():n("meta",{attrs:{name:"robots",content:"noindex, nofollow"}}),e._v(" "),n("meta",{attrs:{name:"author",content:"SMARTvCARD - An Open-Source Digital Business Card Generator"}}),e._v(" "),n("meta",{attrs:{name:"url",content:"https://smartvcard.com"}}),e._v(" "),n("meta",{attrs:{name:"designer",content:"Vishnu Raghav"}}),e._v(" "),n("meta",{attrs:{property:"og:title",content:e.genInfo.name+"'s Digital Business Card"}}),e._v(" "),n("meta",{attrs:{property:"twitter:title",content:e.genInfo.name+"'s Digital Business Card"}}),e._v(" "),n("script",[e._v('\n          "http"==window.location.href.substr(0,4)&&"/"!=window.location.href.slice(-1)&&window.location.replace(window.location.href+"/");\n        ')]),e._v(" "),e.getCssHref?n("link",{attrs:{href:e.getCssHref,rel:"stylesheet"}}):e._e(),e._v(" "),n("title",[e._v(e._s(e.genInfo.name)+"'s Digital Business Card")]),e._v(" "),n("style",[e._v("\n          #body{ font-family: sans-serif; } input[type='range']::-moz-range-track { background: none; } input[type='range']::-moz-range-thumb { -moz-appearance: none; width: 3rem; height: 3rem; border-radius: 100%; border: none; background: "+e._s(e.colors.buttonBg.color)+"; z-index: 3; cursor: pointer; } input[type='range']::-webkit-slider-thumb { -webkit-appearance: none; width: 3rem; height: 3rem; border-radius: 100%; border: none; background: "+e._s(e.colors.buttonBg.color)+"; z-index: 3; cursor: pointer; } .closeBtnColor{ "+e._s(e.hasLightBG("mainBg")&&"filter:invert(1)")+" } .topAction{ "+e._s(e.hasLightBG("logoBg")&&"filter:invert(1)")+" } .action{ color:#fff; "+e._s(e.hasLightBG("buttonBg")?"filter:invert(1)":null)+" } .card{ "+e._s(e.hasLightBG("cardBg")&&"color:#000 !important")+" } .text{ text-align: center;line-height: 1.5;"+e._s(e.hasLightBG("mainBg")?"color:#000 !important":"color:#fff !important")+" }\n        ")]),e._v(" "),e.getCssHref?n("style",[e._v("\n          #body{\n          "+e._s(e.genInfo.fontCss&&e.getFontFamily)+"\n          }\n        ")]):e._e()]),e._v(" "),n("body",{attrs:{id:"body"}},[n("div",{ref:"modal",style:"backgroundColor: "+e.colors.mainBg.color+"; visibility: hidden; top: 2rem; opacity: 0;",attrs:{id:"modal"}},[n("div",{attrs:{id:"closeModal"}},[n("a",{staticClass:"closeBtnColor",attrs:{id:"close"},on:{click:function(t){return e.closePublicKey()}}},[n("div",{staticClass:"icon",domProps:{innerHTML:e._s(r(186))}})])]),e._v(" "),n("div",{attrs:{id:"modalView"}},[n("div",{attrs:{id:"keyInfo"}},[n("p",{staticClass:"text"},[e._v("\n                Use my public key to send me encrypted messages\n              ")]),e._v(" "),n("a",{style:{backgroundColor:""+e.colors.buttonBg.color},attrs:{href:!e.PreviewMode&&"./"+e.genInfo.name+"'s public key.asc",download:"",target:"_blank",id:"dlKey",rel:"noreferrer",tabindex:"-1"},on:{"!click":function(t){return t.preventDefault(),e.downloadKey()}}},[n("div",{staticClass:"icon action",domProps:{innerHTML:e._s(r(171))}}),e._v(" "),n("span",{staticClass:"action"},[e._v("Download Key")])])]),e._v(" "),n("div",{ref:"copyView",attrs:{id:"copyView"}},[n("p",{staticClass:"text"},[e._v("\n                Copy and send the URL to share my Business Card\n              ")]),e._v(" "),n("button",{style:{backgroundColor:""+e.colors.buttonBg.color},attrs:{id:"copyURL"}},[n("div",{staticClass:"icon action",domProps:{innerHTML:e._s(r(187))}}),e._v(" "),n("span",{staticClass:"action"},[e._v("Copy URL")])])]),e._v(" "),n("div",{ref:"qrView",attrs:{id:"qrView"}},[n("div",{attrs:{id:"qr"}}),e._v(" "),n("h2",{staticClass:"text"},[e._v("Scan the QR Code")]),e._v(" "),n("p",{staticClass:"text"},[e._v("to view my Business Card on another device")])])])]),e._v(" "),n("header",[e.images.logo.url?n("img",{attrs:{id:"logo",src:e.PreviewMode?e.images.logo.url:"./logo."+e.images.logo.ext,alt:"Logo"}}):e._e(),e._v(" "),n("div",{style:{display:e.PreviewMode?"flex":"none"},attrs:{id:"topActions"}},[n("div",[n("a",{attrs:{id:"share"},on:{"!click":function(t){return t.preventDefault(),e.sharingAlert()}}},[n("div",{staticClass:"icon topAction",domProps:{innerHTML:e._s(r(190))}})]),e._v(" "),n("a",{attrs:{id:"showQR"},on:{"!click":function(t){return t.preventDefault(),e.sharingAlert()}}},[n("div",{staticClass:"icon topAction",domProps:{innerHTML:e._s(r(189))}})])]),e._v(" "),e.pubKeyIsValid?n("a",{attrs:{id:"showKey"},on:{"!click":function(t){return t.preventDefault(),e.showKey()}}},[n("div",{staticClass:"icon topAction",domProps:{innerHTML:e._s(r(188))}})]):e._e()])]),e._v(" "),n("main",{style:{backgroundColor:""+e.colors.mainBg.color}},[n("div",{attrs:{id:"profile"}},[e.images.photo.url?n("img",{attrs:{src:e.PreviewMode?e.images.photo.url:"./photo."+e.images.photo.ext,alt:"Photo"}}):e._e(),e._v(" "),n("div",{attrs:{id:"info"}},[n("p",{staticClass:"name text"},[e._v("\n                "+e._s(e.genInfo.name)+"\n              ")]),e._v(" "),n("p",{staticClass:"jobtitle text"},[e._v("\n                "+e._s(e.genInfo.title)+"\n              ")])])]),e._v(" "),e.genInfo.desc?n("p",{staticClass:"desc text"},[e._v("\n            "+e._s(e.genInfo.desc)+"\n          ")]):e._e(),e._v(" "),n("div",{staticClass:"actions"},[e._l(e.primaryActions,(function(t,o){return n("div",{key:"pa"+o,staticClass:"actionsC"},[n("div",{staticClass:"actionBtn"},[n("a",{style:{backgroundColor:""+e.colors.buttonBg.color},attrs:{href:""+(t.href?t.href+t.value:t.value),target:"_blank",rel:"noopener noreferrer","aria-label":t.name}},[n("div",{staticClass:"icon action",domProps:{innerHTML:e._s(r(170)("./"+t.name+".svg"))}})]),e._v(" "),n("p",{staticClass:"text"},[e._v("\n                  "+e._s(t.name.substr(0,1).toUpperCase()+t.name.slice(1))+"\n                ")])])])})),e._v(" "),n("div",{attrs:{id:"cta"}},[n("a",{style:{backgroundColor:""+e.colors.buttonBg.color},attrs:{id:"vcard",rel:"noreferrer",href:!e.PreviewMode&&e.username+".vcf",download:"",target:"_blank","aria-label":"Add to Contacts"},on:{click:function(t){return t.preventDefault(),e.downloadVcard(t)}}},[n("div",{staticClass:"icon action",domProps:{innerHTML:e._s(r(191))}}),e._v(" "),n("p",{staticClass:"action"},[e._v("Add to Contacts")])])])],2),e._v(" "),n("div",{staticClass:"actions secondary"},e._l(e.secondaryActions,(function(t,o){return n("div",{key:"sa"+o,staticClass:"actionsC"},[n("div",{staticClass:"actionBtn secBtn"},[n("a",{style:{backgroundColor:t.color},attrs:{href:t.value,target:"_blank",rel:"noopener noreferrer","aria-label":t.name}},[n("div",{staticClass:"icon",domProps:{innerHTML:e._s(r(170)("./"+t.name+".svg"))}})])])])})),0),e._v(" "),e._l(e.featured,(function(t,r){return n("div",{key:"fc"+r,staticClass:"attachments"},[n("h2",{staticClass:"section text"},[e._v(e._s(t.title))]),e._v(" "),e._l(t.content,(function(t,i){return n("div",{key:i},["media"==t.contentType?n("div",{staticClass:"content",class:t.type,style:{backgroundColor:""+e.colors.cardBg.color}},["image"==t.type?n("div",[t.dataURI?n("img",{attrs:{src:e.PreviewMode?t.dataURI:"./media/"+e.getTitle(t.title)+"."+t.ext,alt:"Product image"}}):e._e(),e._v(" "),n("div",{staticClass:"controls"},[n("p",{staticClass:"title card"},[e._v("\n                      "+e._s(t.title)+"\n                    ")])])]):e._e(),e._v(" "),"music"==t.type||"video"==t.type?n("MediaPlayer",{ref:"mediaPlayer",refInFor:!0,attrs:{media:t,type:t.type,colors:e.colors,togglePlay:e.togglePlay,PreviewMode:e.PreviewMode}}):e._e(),e._v(" "),"document"==t.type?n("DocumentDownloader",{attrs:{media:t,type:t.type,colors:e.colors,PreviewMode:e.PreviewMode}}):e._e()],1):"product"==t.contentType&&t.title?n("ProductShowcase",{attrs:{product:t,colors:e.colors,PreviewMode:e.PreviewMode}}):"text"==t.contentType&&t.value?n("div",{staticClass:"content text",style:{backgroundColor:""+e.colors.cardBg.color}},[n("p",{staticClass:"textC card"},[e._v(e._s(t.value))])]):e.stripAttr(t)?n("div",{staticClass:"content embedded"},[n("iframe",{attrs:{src:e.stripAttr(t),frameborder:"0",allowfullscreen:""}})]):e._e()],1)}))],2)}))],2),e._v(" "),e.footerCredit?n("footer",{staticClass:"text",style:{backgroundColor:""+e.colors.mainBg.color}},[e._v("\n          Created with\n          "),n("a",{staticClass:"text",attrs:{href:"https://smartvcard.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("SMARTvCARD")])]):e._e()])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MediaPlayer:r(182).default,DocumentDownloader:r(183).default,ProductShowcase:r(184).default,Footer:r(165).default})},263:function(e,t,r){"use strict";r(192)},264:function(e,t,r){var n=r(55)(!1);n.push([e.i,"#Theme1 body{margin:0 auto;width:100%;padding:0;max-width:30rem;color:#fff;position:relative}#Theme1 #modal{position:absolute;z-index:1;width:100%;bottom:0;transition:top .2s ease-out,opacity .1s ease-out;transform:translateZ(0)}#Theme1 #closeModal{display:flex;justify-content:flex-end;margin:1rem 1rem 0 0}#Theme1 #close{padding:.75rem;cursor:pointer;line-height:0}#Theme1 .icon{width:1.5rem;height:1.5rem}#Theme1 #copyView,#Theme1 #keyInfo,#Theme1 #modalView,#Theme1 #qrView{display:flex;flex-direction:column;align-items:center}#Theme1 #copyView p,#Theme1 #keyInfo p{margin:1rem 2em 2rem;text-align:center}#Theme1 #copyURL,#Theme1 #dlKey{display:inline-flex;align-items:center;border-radius:5rem;padding:.75rem 1.5rem;border:none;outline:none;cursor:pointer}#Theme1 #copyURL span,#Theme1 #dlKey span{margin-left:.5rem}#Theme1 #qrView h2,#Theme1 #qrView p{margin:0 2rem .5rem}#Theme1 #qr{margin:1rem 2rem 2rem;padding:2rem;background:#fff;border-radius:.5rem}#Theme1 header{display:flex;align-items:center;justify-content:center;position:relative;padding:6rem 3rem;box-sizing:border-box}#Theme1 #logo{max-height:6rem;text-align:center;color:grey;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#Theme1 #topActions{flex-direction:row-reverse;justify-content:space-between;position:absolute;left:1rem;right:0;top:1rem}#Theme1 #topActions>div{display:flex}#Theme1 #topActions a{padding:.75rem;cursor:pointer;border-radius:100%;line-height:0;margin-right:1rem}#Theme1 main{padding:1rem}#Theme1 #profile{display:flex;flex-direction:column;align-items:center}#Theme1 #profile img{width:7rem;height:7rem;border-radius:100%;text-align:center;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-4.5rem}#Theme1 #info{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;line-height:1.25;word-break:break-word}#Theme1 .name{font-weight:700;font-size:1.25rem;margin:0}#Theme1 .jobtitle{font-size:1rem;margin:.25rem 0 0}#Theme1 .desc,#Theme1 .textC{font-size:.875rem;white-space:pre-line;line-height:1.5;margin:1rem}#Theme1 .textC{font-size:1rem;margin:2rem 1rem}#Theme1 .actions{margin-top:2rem;display:flex;flex-wrap:wrap;justify-content:center}#Theme1 .actionsC{width:33.33%}#Theme1 .actionBtn{padding:.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center}#Theme1 .actionBtn a{border-radius:100%;padding:.75rem;line-height:0}#Theme1 .actionBtn p{margin:.5rem 0 0;font-size:.875rem}#Theme1 .secondary{margin-top:1.25rem}#Theme1 .secBtn{padding:1rem}#Theme1 a{text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#Theme1 #cta{display:flex;justify-content:center;width:100%}#Theme1 #vcard{display:flex;align-items:center;border-radius:5rem;margin-top:1.5rem;padding:.75rem 1.5rem;cursor:pointer;line-height:0}#Theme1 #vcard .icon{margin-right:.5rem}#Theme1 #vcard p{margin:0}#Theme1 .attachments{margin-top:1.5rem;display:flex;flex-direction:column;justify-content:center}#Theme1 .section{font-weight:700;text-align:center;font-size:1.5rem;margin:3rem 1rem 1rem}#Theme1 .content{overflow:hidden;border-radius:.5rem;margin-top:1rem}#Theme1 .content img{display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}#Theme1 .embedded{position:relative;padding-top:56.25%}#Theme1 .embedded iframe{position:absolute;top:0;left:0;width:100%;height:100%}#Theme1 .music,#Theme1 .video{width:100%}#Theme1 .mediaC{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}#Theme1 video{width:100%}#Theme1 .controls{padding:2rem 1rem;font-size:.875rem;text-align:center;width:100%;box-sizing:border-box}#Theme1 .prodInfo .desc{margin:-1rem 0 0}#Theme1 .price{margin:2rem 0 0;font-size:1.25rem;font-weight:700}#Theme1 .label{display:inline-block;font-size:1rem;margin-top:1rem;border-radius:5rem;letter-spacing:1px;padding:.75rem 1.5rem}#Theme1 .label p{margin:0}#Theme1 .title{font-size:1.125rem;font-weight:700;margin:0 0 .5rem}#Theme1 .mediaInfo{margin:0}#Theme1 .docDl,#Theme1 .pCtrl{display:none;flex-direction:column;align-items:center;width:100%}#Theme1 .docDl{display:flex}#Theme1 .seekBar{width:100%;height:.5rem;margin-top:2rem;border-radius:5rem;background:#adb5bd;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}#Theme1 .dlBtn,#Theme1 .playPause{margin:2rem .5rem 0;padding:.75rem;border-radius:5rem;line-height:0;cursor:pointer}#Theme1 .pause{display:none}#Theme1 footer{padding:2.5rem 1.5rem 2rem;font-size:.75rem}#Theme1 footer a{text-decoration:underline;color:inherit}",""]),e.exports=n}}]);