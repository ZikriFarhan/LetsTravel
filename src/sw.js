if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const d=e=>i(e,a),f={module:{uri:a},exports:o,require:d};s[a]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-cca42ad5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"App.css",revision:"b715591e3e2aa596ff0892ebd2044c23"},{url:"App.js",revision:"45c921180b5db32b125257670670b474"},{url:"App.test.js",revision:"d18ac434afb00158b91831ac1e36c491"},{url:"index.css",revision:"6c2104b8d219ed99234ae2d6329f4357"},{url:"index.js",revision:"6ecedf6e08a0eeb1e90bffc2c9371ef5"},{url:"logo.svg",revision:"06e733283fa43d1dd57738cfc409adbd"},{url:"pages/About.css",revision:"ced07a0d366531cb176cf7093995f429"},{url:"pages/About.js",revision:"36166ced23f5cad88672f1705c5ac43a"},{url:"pages/Categories.css",revision:"5654b96ab81de7cd29dc68d0caf35a16"},{url:"pages/Categories.js",revision:"1fd4c95bf77d72a956091a65c641eeef"},{url:"pages/Destination.js",revision:"279ced3e5b9d34b36b2fb796ee68141a"},{url:"pages/Details.js",revision:"9ae35d887a0995694ca60ce365e29537"},{url:"pages/Explore.css",revision:"dccee1b507438730ff6df8478d12aca4"},{url:"pages/Explore.js",revision:"ff251e27a5faa99c88834c2624d3948f"},{url:"pages/Home.css",revision:"ed481b851fc04e6fcca5af73c83dde9e"},{url:"pages/Home.js",revision:"3368d7c5eeec957903835e71ad40f3b9"},{url:"reportWebVitals.js",revision:"240e2381f826a9bb84d178b29b7b9abe"},{url:"setupTests.js",revision:"1a77571e1a8cf36018a41bcedf60db75"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
