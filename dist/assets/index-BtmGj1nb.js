(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))f(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function p(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(l){if(l.ep)return;l.ep=!0;const n=p(l);fetch(l.href,n)}})();(function(){const s=CanvasRenderingContext2D.prototype.arc;CanvasRenderingContext2D.prototype.arc=function(g,p,f,l,n,d){const v=Math.abs(n-l);Math.abs(v-Math.PI*2)<.01&&this.moveTo(g+f,p),s.call(this,g,p,f,l,n,d)}})();const oe={cat:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <polygon points="15,40 30,10 45,35" fill="#ff85a2" />
    <polygon points="85,40 70,10 55,35" fill="#ff85a2" />
    <ellipse cx="50" cy="55" rx="40" ry="32" fill="#ffccd5" stroke="#ff85a2" stroke-width="6" />
    <polygon points="20,38 30,18 40,34" fill="#ff4d6d" />
    <polygon points="80,38 70,18 60,34" fill="#ff4d6d" />
    <circle cx="35" cy="50" r="5" fill="#3c2f42" />
    <circle cx="65" cy="50" r="5" fill="#3c2f42" />
    <circle cx="33" cy="48" r="1.5" fill="#ffffff" />
    <circle cx="63" cy="48" r="1.5" fill="#ffffff" />
    <ellipse cx="27" cy="58" rx="6" ry="4" fill="#ff85a2" opacity="0.6" />
    <ellipse cx="73" cy="58" rx="6" ry="4" fill="#ff85a2" opacity="0.6" />
    <path d="M47,55 Q50,58 53,55" fill="none" stroke="#3c2f42" stroke-width="3" stroke-linecap="round" />
    <path d="M47,58 Q50,61 53,58" fill="none" stroke="#3c2f42" stroke-width="3" stroke-linecap="round" />
    <line x1="15" y1="55" x2="3" y2="52" stroke="#ff85a2" stroke-width="3" stroke-linecap="round" />
    <line x1="15" y1="62" x2="2" y2="62" stroke="#ff85a2" stroke-width="3" stroke-linecap="round" />
    <line x1="85" y1="55" x2="97" y2="52" stroke="#ff85a2" stroke-width="3" stroke-linecap="round" />
    <line x1="85" y1="62" x2="98" y2="62" stroke="#ff85a2" stroke-width="3" stroke-linecap="round" />
  </svg>`,heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M12,35 C12,18 30,10 50,30 C70,10 88,18 88,35 C88,58 65,78 50,88 C35,78 12,58 12,35 Z" fill="#ff4d6d" stroke="#ff85a2" stroke-width="6" stroke-linejoin="round" />
    <ellipse cx="32" cy="30" rx="8" ry="4" fill="#ffffff" opacity="0.4" transform="rotate(-30 32 30)" />
  </svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M50,5 L63,33 L93,38 L71,59 L76,89 L50,75 L24,89 L29,59 L7,38 L37,33 Z" fill="#ffd166" stroke="#f4a261" stroke-width="6" stroke-linejoin="round" />
    <circle cx="38" cy="48" r="4" fill="#3c2f42" />
    <circle cx="62" cy="48" r="4" fill="#3c2f42" />
    <path d="M47,56 Q50,59 53,56" fill="none" stroke="#3c2f42" stroke-width="2.5" stroke-linecap="round" />
    <ellipse cx="32" cy="53" rx="4" ry="2.5" fill="#f4a261" opacity="0.6" />
    <ellipse cx="68" cy="53" rx="4" ry="2.5" fill="#f4a261" opacity="0.6" />
  </svg>`,cloud:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M25,65 C15,65 10,55 18,47 C15,35 28,25 40,30 C48,20 68,20 75,32 C85,30 92,40 88,50 C94,60 85,70 75,67 C70,72 30,72 25,65 Z" fill="#e8f1f5" stroke="#a3c4f3" stroke-width="6" stroke-linejoin="round" />
    <circle cx="38" cy="48" r="4" fill="#3c2f42" />
    <circle cx="62" cy="48" r="4" fill="#3c2f42" />
    <path d="M48,53 Q50,55 52,53" fill="none" stroke="#3c2f42" stroke-width="2" stroke-linecap="round" />
    <ellipse cx="32" cy="52" rx="4" ry="2" fill="#ff85a2" opacity="0.6" />
    <ellipse cx="68" cy="52" rx="4" ry="2" fill="#ff85a2" opacity="0.6" />
  </svg>`,boba:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M25,25 L32,80 C33,85 38,88 43,88 L57,88 C62,88 67,85 68,80 L75,25 Z" fill="#ffe3e0" stroke="#f4a261" stroke-width="5" stroke-linejoin="round" />
    <path d="M26,35 L31,78 C32,82 36,84 40,84 L60,84 C64,84 68,82 69,78 L74,35 Z" fill="#e29578" />
    <circle cx="40" cy="74" r="5" fill="#3c2f42" />
    <circle cx="50" cy="76" r="5" fill="#3c2f42" />
    <circle cx="60" cy="73" r="5" fill="#3c2f42" />
    <circle cx="45" cy="66" r="5" fill="#3c2f42" />
    <circle cx="55" cy="67" r="5" fill="#3c2f42" />
    <ellipse cx="50" cy="25" rx="28" ry="6" fill="#ffffff" stroke="#f4a261" stroke-width="4" />
    <rect x="47" y="5" width="8" height="23" rx="3" fill="#ff758f" stroke="#f4a261" stroke-width="2" transform="rotate(-10 50 15)" />
    <circle cx="42" cy="46" r="3.5" fill="#3c2f42" />
    <circle cx="58" cy="46" r="3.5" fill="#3c2f42" />
    <path d="M48,51 Q50,53 52,51" fill="none" stroke="#3c2f42" stroke-width="2" stroke-linecap="round" />
  </svg>`,bear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="25" cy="28" r="16" fill="#ddb892" stroke="#b08968" stroke-width="5" />
    <circle cx="75" cy="28" r="16" fill="#ddb892" stroke="#b08968" stroke-width="5" />
    <circle cx="25" cy="28" r="9" fill="#ffb5a7" />
    <circle cx="75" cy="28" r="9" fill="#ffb5a7" />
    <circle cx="50" cy="56" r="38" fill="#ddb892" stroke="#b08968" stroke-width="5" />
    <ellipse cx="50" cy="66" rx="14" ry="10" fill="#ffffff" />
    <ellipse cx="50" cy="62" rx="5" ry="3.5" fill="#3c2f42" />
    <path d="M50,65 L50,70" stroke="#3c2f42" stroke-width="2" />
    <circle cx="36" cy="50" r="4" fill="#3c2f42" />
    <circle cx="64" cy="50" r="4" fill="#3c2f42" />
    <circle cx="34.5" cy="48.5" r="1.2" fill="#ffffff" />
    <circle cx="62.5" cy="48.5" r="1.2" fill="#ffffff" />
    <ellipse cx="26" cy="58" rx="5" ry="3" fill="#ff85a2" opacity="0.6" />
    <ellipse cx="74" cy="58" rx="5" ry="3" fill="#ff85a2" opacity="0.6" />
  </svg>`,sparkles:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M50,15 C50,35 65,50 85,50 C65,50 50,65 50,85 C50,65 35,50 15,50 C35,50 50,35 50,15 Z" fill="#ffd166" stroke="#f4a261" stroke-width="4" />
    <path d="M80,20 C80,28 86,34 94,34 C86,34 80,40 80,48 C80,40 74,34 66,34 C74,34 80,28 80,20 Z" fill="#ffd166" />
    <path d="M22,65 C22,71 27,76 33,76 C27,76 22,81 22,87 C22,81 17,76 11,76 C17,76 22,71 22,65 Z" fill="#ff758f" />
  </svg>`,music:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M35,70 A12,12 0 1,1 23,58 C23,58 23,20 23,20 L75,10 L75,48 A12,12 0 1,1 63,36" fill="none" stroke="#b388ff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M23,24 L75,14" fill="none" stroke="#b388ff" stroke-width="8" stroke-linecap="round" />
    <circle cx="21" cy="68" r="2" fill="#ffffff" />
    <circle cx="27" cy="66" r="2" fill="#ffffff" />
    <path d="M23,71 Q25,72 26,71" fill="none" stroke="#ffffff" stroke-width="1.5" />
    <circle cx="61" cy="46" r="2" fill="#ffffff" />
    <circle cx="67" cy="44" r="2" fill="#ffffff" />
    <path d="M63,49 Q65,50 66,49" fill="none" stroke="#ffffff" stroke-width="1.5" />
  </svg>`,shop:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M35,32 C35,18 65,18 65,32" fill="none" stroke="#ff758f" stroke-width="6" stroke-linecap="round" />
    <rect x="20" y="30" width="60" height="55" rx="14" fill="#ffe5ec" stroke="#ff758f" stroke-width="5" />
    <circle cx="40" cy="54" r="4.5" fill="#3c2f42" />
    <circle cx="60" cy="54" r="4.5" fill="#3c2f42" />
    <circle cx="38" cy="52" r="1.2" fill="#ffffff" />
    <circle cx="58" cy="52" r="1.2" fill="#ffffff" />
    <path d="M47,60 Q50,64 53,60" fill="none" stroke="#3c2f42" stroke-width="3" stroke-linecap="round" />
    <ellipse cx="32" cy="58" rx="4.5" ry="2.5" fill="#ff758f" opacity="0.6" />
    <ellipse cx="68" cy="58" rx="4.5" ry="2.5" fill="#ff758f" opacity="0.6" />
  </svg>`,pin:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M50,90 C50,90 20,58 20,38 C20,20 33,8 50,8 C67,8 80,20 80,38 C80,58 50,90 50,90 Z" fill="#ff7096" stroke="#ff477e" stroke-width="6" stroke-linejoin="round" />
    <circle cx="50" cy="38" r="18" fill="#ffffff" />
    <circle cx="44" cy="38" r="3" fill="#3c2f42" />
    <circle cx="56" cy="38" r="3" fill="#3c2f42" />
    <path d="M48,43 Q50,45 52,43" fill="none" stroke="#3c2f42" stroke-width="2" stroke-linecap="round" />
    <ellipse cx="39" cy="40" rx="3" ry="1.5" fill="#ff85a2" opacity="0.6" />
    <ellipse cx="61" cy="40" rx="3" ry="1.5" fill="#ff85a2" opacity="0.6" />
  </svg>`,sushi:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <rect x="25" y="45" width="50" height="35" rx="12" fill="#ffffff" stroke="#3c2f42" stroke-width="5" />
    <rect x="18" y="28" width="64" height="22" rx="8" fill="#f4a261" stroke="#e76f51" stroke-width="4" />
    <path d="M28,30 Q33,48 38,30 M48,30 Q53,48 58,30" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.8" />
    <rect x="44" y="28" width="12" height="52" fill="#2d3748" />
    <circle cx="38" cy="38" r="2.5" fill="#3c2f42" />
    <circle cx="62" cy="38" r="2.5" fill="#3c2f42" />
    <path d="M49,42 Q50,44 51,42" fill="none" stroke="#3c2f42" stroke-width="1.5" stroke-linecap="round" />
  </svg>`,coffee:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M65,40 C78,40 78,65 65,65" fill="none" stroke="#e76f51" stroke-width="5" stroke-linecap="round" />
    <path d="M25,30 L30,70 C31,75 36,78 41,78 L59,78 C64,78 69,75 70,70 L75,30 Z" fill="#f4a261" stroke="#e76f51" stroke-width="5" stroke-linejoin="round" />
    <path d="M38,18 Q42,10 38,5" fill="none" stroke="#e76f51" stroke-width="3" stroke-linecap="round" />
    <path d="M50,18 Q54,10 50,5" fill="none" stroke="#e76f51" stroke-width="3" stroke-linecap="round" />
    <path d="M62,18 Q66,10 62,5" fill="none" stroke="#e76f51" stroke-width="3" stroke-linecap="round" />
    <circle cx="42" cy="52" r="3.5" fill="#ffffff" />
    <circle cx="58" cy="52" r="3.5" fill="#ffffff" />
    <path d="M48,58 Q50,60 52,58" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
    <ellipse cx="36" cy="56" rx="4" ry="2" fill="#e76f51" opacity="0.6" />
    <ellipse cx="64" cy="56" rx="4" ry="2" fill="#e76f51" opacity="0.6" />
  </svg>`,thaiarch:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <polygon points="50,10 56,18 44,18" fill="#a2aa96" />
    <path d="M43,20 L57,20 L96,56 L4,56 Z M50,27.5 L20,50 L80,50 Z" fill="#a2aa96" fill-rule="evenodd" />
    <polygon points="50,27.5 52.5,39 50,50 47.5,39" fill="#a2aa96" />
    <polygon points="48.5,27.5 50,27.5 31.5,50 29,50" fill="#a2aa96" />
    <polygon points="50,27.5 51.5,27.5 71,50 68.5,50" fill="#a2aa96" />
    <polygon points="48.5,56 51.5,56 50,59" fill="#a2aa96" />
    <path d="M47.5,59 L52.5,59 L52.5,64 L47.5,64 Z M50,61.5 A1,1 0 1,0 50,61.501 Z" fill="#a2aa96" fill-rule="evenodd" />
    <line x1="50" y1="64" x2="50" y2="66.5" stroke="#a2aa96" stroke-width="1.5" stroke-linecap="round" />
    <polygon points="45,66.5 55,66.5 50,77" fill="#a2aa96" />
    <text x="50" y="88" font-family="'Mitr', 'Inter', 'sans-serif'" font-weight="900" font-size="5" fill="#a2aa96" text-anchor="middle" letter-spacing="-0.1">ศูนย์ข้อมูลสถาปัตยกรรมไทย</text>
  </svg>`},le={strawberry:{dotType:"extra-rounded",cornerSquareType:"extra-rounded",cornerDotType:"dot",colorMode:"gradient",gradStart:"#ff85a2",gradEnd:"#ff4d6d",gradType:"linear",gradRot:45,customCorners:!1,bgColor:"#ffffff",transparentBg:!1},matcha:{dotType:"rounded",cornerSquareType:"extra-rounded",cornerDotType:"dot",colorMode:"gradient",gradStart:"#70e000",gradEnd:"#38b000",gradType:"linear",gradRot:135,customCorners:!1,bgColor:"#f4f9f4",transparentBg:!1},ocean:{dotType:"dots",cornerSquareType:"dot",cornerDotType:"dot",colorMode:"gradient",gradStart:"#4ea8de",gradEnd:"#0077b6",gradType:"linear",gradRot:90,customCorners:!0,cornerSquareColor:"#0096c7",cornerDotColor:"#03045e",bgColor:"#ffffff",transparentBg:!1},sunset:{dotType:"classy-rounded",cornerSquareType:"extra-rounded",cornerDotType:"dot",colorMode:"gradient",gradStart:"#f77f00",gradEnd:"#fcbf49",gradType:"linear",gradRot:45,customCorners:!1,bgColor:"#fffcf2",transparentBg:!1},lavender:{dotType:"extra-rounded",cornerSquareType:"extra-rounded",cornerDotType:"dot",colorMode:"gradient",gradStart:"#b388ff",gradEnd:"#7c4dff",gradType:"linear",gradRot:60,customCorners:!1,bgColor:"#ffffff",transparentBg:!1},darkpastel:{dotType:"classy",cornerSquareType:"classy",cornerDotType:"square",colorMode:"single",singleColor:"#3c2f42",customCorners:!1,bgColor:"#fcfbfe",transparentBg:!1}};function ce(s){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(s)))}let w="",k=null;document.addEventListener("DOMContentLoaded",()=>{lucide.createIcons();const s=document.getElementById("qrText"),g=document.getElementById("clearTextBtn"),p=document.getElementById("dotTypeContainer"),f=document.getElementById("cornerSquareType"),l=document.getElementById("cornerDotType"),n=document.getElementById("colorModeSelector"),d=document.getElementById("singleColorPanel"),v=document.getElementById("gradientColorPanel"),m=document.getElementById("qrColorSingle"),Q=document.getElementById("qrColorSingleHex"),C=document.getElementById("qrColorGradStart"),A=document.getElementById("qrColorGradStartHex"),L=document.getElementById("qrColorGradEnd"),F=document.getElementById("qrColorGradEndHex"),M=document.getElementById("gradientType"),T=document.getElementById("gradientRotation"),Z=document.getElementById("gradRotVal"),q=document.getElementById("customCornerColors"),E=document.getElementById("customCornersPanel"),D=document.getElementById("cornerSquareColor"),z=document.getElementById("cornerSquareHex"),O=document.getElementById("cornerDotColor"),j=document.getElementById("cornerDotHex"),y=document.getElementById("qrBgColor"),G=document.getElementById("qrBgColorHex"),a=document.getElementById("transparentBg"),B=document.getElementById("predefinedStickers"),i=document.getElementById("uploadArea"),b=document.getElementById("customLogoInput"),R=document.getElementById("uploadedFileInfo"),J=document.getElementById("uploadedFileName"),X=document.getElementById("removeLogoBtn"),S=document.getElementById("logoOptionsPanel"),N=document.getElementById("logoSize"),Y=document.getElementById("logoSizeVal"),V=document.getElementById("logoMargin"),$=document.getElementById("logoMarginVal"),U=document.getElementById("hideDotsBehind"),ee=document.querySelector(".presets-row"),W=document.getElementById("exportFormatSelector"),te=document.getElementById("exportSize"),I=document.getElementById("downloadBtn"),u=document.getElementById("copyBtn"),re=document.getElementById("themeToggleBtn");let H="extra-rounded",P="png";k=new QRCodeStyling({width:300,height:300,type:"canvas",data:s.value||"https://google.com",image:"",dotsOptions:{color:"#2b2d42",type:"extra-rounded"},backgroundOptions:{color:"#ffffff"},imageOptions:{crossOrigin:"anonymous",margin:6,imageSizeFactor:.25,hideBackgroundDots:!0},cornersSquareOptions:{type:"extra-rounded",color:"#2b2d42"},cornersDotOptions:{type:"dot",color:"#2b2d42"}}),k.append(document.getElementById("qrPreviewCanvas"));function c(){const e={data:s.value||" ",backgroundOptions:{},dotsOptions:{type:H},cornersSquareOptions:{type:f.value},cornersDotOptions:{type:l.value},image:w,imageOptions:{margin:parseInt(V.value,10),imageSizeFactor:parseFloat(N.value)/100,hideBackgroundDots:U.checked}};a.checked?e.backgroundOptions.color="rgba(0,0,0,0)":e.backgroundOptions.color=y.value;const t=document.querySelector("#colorModeSelector .tab-btn.active").dataset.value;t==="gradient"?(e.dotsOptions.gradient={type:M.value,rotation:parseInt(T.value,10)*Math.PI/180,colorStops:[{offset:0,color:C.value},{offset:1,color:L.value}]},delete e.dotsOptions.color):(e.dotsOptions.color=m.value,delete e.dotsOptions.gradient),q.checked?(e.cornersSquareOptions.color=D.value,e.cornersDotOptions.color=O.value):t==="gradient"?(e.cornersSquareOptions.color=C.value,e.cornersDotOptions.color=L.value):(e.cornersSquareOptions.color=m.value,e.cornersDotOptions.color=m.value),k.update(e)}s.addEventListener("input",c),g.addEventListener("click",()=>{s.value="",s.focus(),c()}),p.addEventListener("click",e=>{const t=e.target.closest(".selector-card");t&&(p.querySelectorAll(".selector-card").forEach(o=>o.classList.remove("active")),t.classList.add("active"),H=t.dataset.value,c())}),f.addEventListener("change",c),l.addEventListener("change",c),n.addEventListener("click",e=>{const t=e.target.closest(".tab-btn");if(!t)return;n.querySelectorAll(".tab-btn").forEach(r=>r.classList.remove("active")),t.classList.add("active"),t.dataset.value==="gradient"?(d.classList.remove("active"),v.classList.add("active")):(d.classList.add("active"),v.classList.remove("active")),c()});function x(e,t){e.addEventListener("input",o=>{t.value=o.target.value,c()}),t.addEventListener("input",o=>{let r=o.target.value.trim();r.length===6&&!r.startsWith("#")&&(r="#"+r),r.length===7&&r.startsWith("#")&&(e.value=r,c())})}x(m,Q),x(C,A),x(L,F),x(D,z),x(O,j),x(y,G),M.addEventListener("change",e=>{const t=document.getElementById("gradientRotationContainer");e.target.value==="radial"?(t.style.opacity="0.5",t.style.pointerEvents="none"):(t.style.opacity="1",t.style.pointerEvents="all"),c()}),T.addEventListener("input",e=>{Z.textContent=e.target.value+"°",c()}),q.addEventListener("change",e=>{e.target.checked?E.classList.add("active"):E.classList.remove("active"),c()}),a.addEventListener("change",e=>{const t=y.closest(".color-picker-wrapper");e.target.checked?(t.style.opacity="0.5",t.style.pointerEvents="none"):(t.style.opacity="1",t.style.pointerEvents="all"),c()}),B.addEventListener("click",e=>{const t=e.target.closest(".sticker-card");if(!t)return;B.querySelectorAll(".sticker-card").forEach(r=>r.classList.remove("active")),t.classList.add("active");const o=t.dataset.sticker;if(o==="none")w="",S.classList.remove("active");else{const r=oe[o];w=ce(r),S.classList.add("active"),R.classList.remove("active"),b.value=""}c()}),i.addEventListener("click",()=>b.click()),["dragenter","dragover","dragleave","drop"].forEach(e=>{i.addEventListener(e,t=>t.preventDefault(),!1)}),i.addEventListener("dragover",()=>{i.style.borderColor="var(--accent-color)",i.style.background="var(--accent-light)"}),i.addEventListener("dragleave",()=>{i.style.borderColor="var(--input-border)",i.style.background="var(--card-inactive)"}),i.addEventListener("drop",e=>{i.style.borderColor="var(--input-border)",i.style.background="var(--card-inactive)";const o=e.dataTransfer.files;o.length>0&&K(o[0])}),b.addEventListener("change",e=>{e.target.files.length>0&&K(e.target.files[0])});function K(e){if(!e.type.startsWith("image/")){alert("กรุณาอัปโหลดไฟล์รูปภาพเท่านั้นนะค้าา 🌸");return}const t=new FileReader;t.onload=o=>{w=o.target.result,J.textContent=e.name,R.classList.add("active"),S.classList.add("active"),B.querySelectorAll(".sticker-card").forEach(r=>r.classList.remove("active")),B.querySelector("[data-sticker='none']").classList.add("active"),c()},t.readAsDataURL(e)}X.addEventListener("click",()=>{w="",b.value="",R.classList.remove("active"),S.classList.remove("active"),c()}),N.addEventListener("input",e=>{Y.textContent=e.target.value+"%",c()}),V.addEventListener("input",e=>{$.textContent=e.target.value+"px",c()}),U.addEventListener("change",c),ee.addEventListener("click",e=>{const t=e.target.closest(".preset-badge");if(!t)return;const o=t.dataset.theme,r=le[o];r&&(H=r.dotType,p.querySelectorAll(".selector-card").forEach(h=>{h.dataset.value===r.dotType?h.classList.add("active"):h.classList.remove("active")}),f.value=r.cornerSquareType,l.value=r.cornerDotType,n.querySelectorAll(".tab-btn").forEach(h=>{h.dataset.value===r.colorMode?h.classList.add("active"):h.classList.remove("active")}),r.colorMode==="gradient"?(d.classList.remove("active"),v.classList.add("active"),C.value=r.gradStart,A.value=r.gradStart,L.value=r.gradEnd,F.value=r.gradEnd,M.value=r.gradType,T.value=r.gradRot,Z.textContent=r.gradRot+"°"):(d.classList.add("active"),v.classList.remove("active"),m.value=r.singleColor,Q.value=r.singleColor),q.checked=r.customCorners,r.customCorners?(E.classList.add("active"),D.value=r.cornerSquareColor,z.value=r.cornerSquareColor,O.value=r.cornerDotColor,j.value=r.cornerDotColor):E.classList.remove("active"),a.checked=r.transparentBg,y.value=r.bgColor,G.value=r.bgColor,y.closest(".color-picker-wrapper").style.opacity=r.transparentBg?"0.5":"1",y.closest(".color-picker-wrapper").style.pointerEvents=r.transparentBg?"none":"all",c())}),W.addEventListener("click",e=>{const t=e.target.closest(".tab-btn");if(t)if(W.querySelectorAll(".tab-btn").forEach(o=>o.classList.remove("active")),t.classList.add("active"),P=t.dataset.value,P==="jpg"){if(a.checked){a.checked=!1;const o=y.closest(".color-picker-wrapper");o.style.opacity="1",o.style.pointerEvents="all",c()}a.disabled=!0,a.closest(".toggle-container").style.opacity="0.5",a.closest(".toggle-container").style.cursor="not-allowed"}else a.disabled=!1,a.closest(".toggle-container").style.opacity="1",a.closest(".toggle-container").style.cursor="pointer"}),I.addEventListener("click",async()=>{const e=I.innerHTML;I.innerHTML='<i data-lucide="loader" class="animate-spin"></i><span>กำลังประมวลผล...</span>',lucide.createIcons();const t=parseInt(te.value,10);try{k.update({width:t,height:t}),await new Promise(o=>setTimeout(o,250)),await k.download({name:"narak-qr",extension:P})}catch(o){console.error(o),alert("เกิดข้อผิดพลาดในการดาวน์โหลดรูปภาพ")}finally{k.update({width:300,height:300}),I.innerHTML=e,lucide.createIcons()}}),u.addEventListener("click",async()=>{const e=document.querySelector("#qrPreviewCanvas canvas");if(!e){alert("ยังไม่พบภาพคิวอาร์โค้ด กรุณาลองใหม่อีกครั้ง");return}try{e.toBlob(async t=>{if(!t){alert("ไม่สามารถสร้างรูปภาพเพื่อคัดลอกได้");return}try{const o=new ClipboardItem({"image/png":t});await navigator.clipboard.write([o]);const r=u.innerHTML;u.innerHTML='<i data-lucide="check"></i><span>คัดลอกแล้ว!</span>',u.style.borderColor="#2a9d8f",u.style.color="#2a9d8f",lucide.createIcons(),setTimeout(()=>{u.innerHTML=r,u.style.borderColor="",u.style.color="",lucide.createIcons()},2e3)}catch(o){console.error("Clipboard write error: ",o),alert("บราวเซอร์ของคุณไม่รองรับการคัดลอกภาพโดยตรง กรุณากดดาวน์โหลดแทนนะค้าา 🌸")}},"image/png")}catch(t){console.error(t),alert("เกิดข้อผิดพลาดในการคัดลอกรูปภาพ")}}),re.addEventListener("click",()=>{const e=document.documentElement,o=(e.getAttribute("data-theme")||"light")==="light"?"dark":"light";e.setAttribute("data-theme",o),localStorage.setItem("narak-qr-theme",o)});const _=localStorage.getItem("narak-qr-theme");_&&document.documentElement.setAttribute("data-theme",_),c()});
