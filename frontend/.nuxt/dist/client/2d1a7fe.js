(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{187:function(e,t,n){"use strict";n.r(t);var o={props:["downloadCheckList","item","index"]},c=n(45),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"checklistItem mt-6 mx-2 flex items-center"},[o("div",{staticClass:"relative",staticStyle:{"line-height":"0"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.downloadCheckList[e.index].checked,expression:"downloadCheckList[index].checked"}],staticClass:"checkbox cursor-pointer appearance-none h-12 w-12 border-gray-700 rounded border-4 transition-colors duration-200 checked:bg-green-600 checked:border-green-600 focus:outline-none",class:e.downloadCheckList[e.index].checked?"hover:border-transparent focus:border-transparent hover:bg-green-500 focus:bg-green-500":"hover:border-gray-600 focus:border-gray-600",attrs:{type:"checkbox",id:"check"+e.index,"aria-label":"checkbox"},domProps:{checked:Array.isArray(e.downloadCheckList[e.index].checked)?e._i(e.downloadCheckList[e.index].checked,null)>-1:e.downloadCheckList[e.index].checked},on:{change:function(t){var n=e.downloadCheckList[e.index].checked,o=t.target,c=!!o.checked;if(Array.isArray(n)){var r=e._i(n,null);o.checked?r<0&&e.$set(e.downloadCheckList[e.index],"checked",n.concat([null])):r>-1&&e.$set(e.downloadCheckList[e.index],"checked",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.downloadCheckList[e.index],"checked",c)}}}),e._v(" "),o("img",{staticClass:"absolute top-0 left-0 m-3 z-10 pointer-events-none select-none transition-opacity duration-200",class:e.item.checked?"opacity-100":"opacity-20",attrs:{alt:"checkmark",src:n(196)}})]),e._v(" "),o("p",{staticClass:"ml-3"},[e._v(e._s(e.item.label))])])}),[],!1,null,null,null);t.default=component.exports},196:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIwIDZMOSAxN2wtNS01Ii8+PC9zdmc+"},274:function(e,t,n){"use strict";n.r(t);var o={props:["downloadCheckList","downloadChecked","downloadPackage"],components:{Check:n(187).default}},c=n(45),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-16",attrs:{id:"downloadSection"}},[n("h2",{staticClass:"font-extrabold text-2xl"},[e._v("Download")]),e._v(" "),n("div",{staticClass:"stepC mt-6"},[n("p",[e._v("Please complete the checklist to proceed,")]),e._v(" "),e._l(e.downloadCheckList,(function(t,o){return n("Check",{key:o,attrs:{downloadCheckList:e.downloadCheckList,item:t,index:o}})})),e._v(" "),n("button",{ref:"downloadPackage",staticClass:"\n        inline-block\n        bg-gray-700\n        leading-none\n        text-2xl\n        tracking-wide\n        border-2 border-transparent\n        font-extrabold\n        p-6\n        rounded\n        mt-12\n        select-none\n        transition-colors\n        duration-200\n        focus:outline-none\n      ",class:e.downloadChecked?"bg-green-600 cursor-pointer text-white focus:bg-green-500 hover:bg-green-500":"cursor-not-allowed text-black",attrs:{title:e.downloadChecked?"":"Complete the checklist to download the package"},on:{click:e.downloadPackage}},[e._v("\n      Download as ZIP\n    ")]),e._v(" "),n("p",{staticClass:"mt-6 border p-4 rounded border-gray-700 text-gray-400"},[e._v("\n      Extract the downloaded ZIP file and follow the\n      "),n("NuxtLink",{staticClass:"\n          cursor-pointer\n          underline\n          font-extrabold\n          text-green-600\n          hover:text-green-500\n          focus:text-green-500\n          transition-colors\n          duration-200\n        ",attrs:{to:"/hosting-guide"}},[e._v("Hosting Guide")]),e._v("\n      to get your digital business card online.\n      "),n("br"),n("br"),e._v("\n      Optionally host your vCard Zip folder on our\n      "),n("span",{staticClass:"\n          cursor-pointer\n          underline\n          font-extrabold\n          text-green-600\n          hover:text-green-500\n          focus:text-green-500\n          transition-colors\n          duration-200\n        "},[e._v("short url")]),e._v("\n      (i.e vcard.fyi/yourname)\n    ")],1)],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Check:n(187).default})}}]);