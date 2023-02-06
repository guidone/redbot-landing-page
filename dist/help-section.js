/*!
 * Name: redbot-help-pages
 * Id: redbot-help-pages
 * Version: 1.0.0
 * Description:
 * Author: undefined (undefined)
 * Repository: undefined
 */
define(["code-plug","../../src/components"],(e,t)=>(()=>{"use strict";var r={727:e=>{e.exports=t},737:t=>{t.exports=e}},o={};function p(e){var t=o[e];if(void 0!==t)return t.exports;var l=o[e]={exports:{}};return r[e](l,l.exports,p),l.exports}p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},p.d=(e,t)=>{for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{p.r(l);var e=p(737),t=p(727);const{Contents:r}=t.Content;(0,e.plug)("sidebar",null,{id:"help-pages",label:"Help pages",url:"/help",icon:"file-text"}),(0,e.plug)("pages",r,{url:"/help",title:"Help pages",id:"help-pages",namespace:"help-pages",sortable:!0,labels:{createContent:"Create help page",emptyContent:"No help pages",saveContent:"Save help page"}})})(),l})());