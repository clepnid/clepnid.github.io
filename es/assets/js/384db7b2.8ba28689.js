"use strict";(self.webpackChunkmy_own_docs=self.webpackChunkmy_own_docs||[]).push([[2268],{5318:(A,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var o=t(7378);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function n(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,o,a=function(A,e){if(null==A)return{};var t,o,a={},r=Object.keys(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var l=o.createContext({}),g=function(A){var e=o.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):n(n({},e),A)),t},s=function(A){var e=g(A.components);return o.createElement(l.Provider,{value:e},A.children)},p="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},F=o.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,l=A.parentName,s=i(A,["components","mdxType","originalType","parentName"]),p=g(t),F=a,m=p["".concat(l,".").concat(F)]||p[F]||c[F]||r;return t?o.createElement(m,n(n({ref:e},s),{},{components:t})):o.createElement(m,n({ref:e},s))}));function m(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,n=new Array(r);n[0]=F;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=A,i[p]="string"==typeof A?A:a,n[1]=i;for(var g=2;g<r;g++)n[g]=t[g];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}F.displayName="MDXCreateElement"},6929:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var o=t(5773),a=(t(7378),t(5318));const r={title:"Screen Sharing",sidebar_position:2},n=void 0,i={unversionedId:"server_module_examples/Screen_sharing",id:"server_module_examples/Screen_sharing",title:"Screen Sharing",description:"No funciona en Firefox:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/4_server_module_examples/Screen_sharing.md",sourceDirName:"4_server_module_examples",slug:"/server_module_examples/Screen_sharing",permalink:"/es/docs/server_module_examples/Screen_sharing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4_server_module_examples/Screen_sharing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Screen Sharing",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Video downloader",permalink:"/es/docs/server_module_examples/Video_downloader"},next:{title:"System info",permalink:"/es/docs/server_module_examples/System_info"}},l={},g=[{value:"Tutorial: Compartir y controlar pantalla usando ngrok",id:"tutorial-compartir-y-controlar-pantalla-usando-ngrok",level:3},{value:"<strong>Pasos a seguir:</strong>",id:"pasos-a-seguir",level:4}],s={toc:g},p="wrapper";function c(A){let{components:e,...r}=A;return(0,a.kt)(p,(0,o.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"No funciona en Firefox:"),(0,a.kt)("br",{parentName:"p"}),"\n","Este m\xf3dulo solo es compatible con Google Chrome.  ")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Requisito de HTTPS:"),(0,a.kt)("br",{parentName:"p"}),"\n","Para que la funcionalidad de compartir pantalla funcione, el servidor debe estar alojado en un entorno HTTPS. Utilizaremos ",(0,a.kt)("strong",{parentName:"p"},"ngrok")," en este tutorial para cumplir con este requisito.  ")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tutorial-compartir-y-controlar-pantalla-usando-ngrok"},"Tutorial: Compartir y controlar pantalla usando ngrok"),(0,a.kt)("p",null,"Este tutorial te guiar\xe1 paso a paso para configurar y utilizar la funcionalidad de compartir y controlar pantalla de forma segura a trav\xe9s de ",(0,a.kt)("strong",{parentName:"p"},"ngrok"),"."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"pasos-a-seguir"},(0,a.kt)("strong",{parentName:"h4"},"Pasos a seguir:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Descarga ngrok:"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ve al sitio oficial de ngrok (",(0,a.kt)("a",{parentName:"li",href:"https://ngrok.com/download"},"ngrok.com"),") y descarga el script correspondiente a tu sistema operativo."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Crea una cuenta en ngrok:"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Reg\xedstrate en ",(0,a.kt)("a",{parentName:"li",href:"https://ngrok.com/signup"},"ngrok.com")," y obt\xe9n tu ",(0,a.kt)("strong",{parentName:"li"},"token de autenticaci\xf3n"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configura el token en ngrok:"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Abre la terminal o consola y ejecuta el siguiente comando para configurar el token:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{alt:"ngrok_1",src:t(6829).Z,width:"1857",height:"526"}),"\nngrok config add-authtoken TU_TOKEN\n")))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Abre el puerto del servidor:"),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Para este tutorial, utilizaremos el puerto ",(0,a.kt)("strong",{parentName:"li"},"3000")," (puedes ajustarlo seg\xfan tu configuraci\xf3n):",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{alt:"ngrok_2",src:t(9569).Z,width:"1075",height:"275"}),"\nngrok http 3000\n")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Accede al m\xf3dulo en el sistema:"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dir\xedgete a ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"/menu"))," \u2192 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"/menutools"))," y selecciona la funcionalidad de pantalla."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Opciones de pantalla disponibles:"),(0,a.kt)("br",{parentName:"p"}),"\n","Dentro del m\xf3dulo, encontrar\xe1s tres opciones:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ver pantalla:")," Permite visualizar la pantalla del servidor.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Controlar pantalla:")," Proporciona control remoto sobre la pantalla compartida.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Compartir pantalla:")," Inicia el proceso de compartir la pantalla del servidor.\n",(0,a.kt)("img",{alt:"screen_sharing",src:t(2921).Z,width:"1372",height:"448"})," "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configuraci\xf3n en el ordenador servidor:"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"En el ordenador servidor, abre Google Chrome y selecciona la opci\xf3n ",(0,a.kt)("strong",{parentName:"li"},"Compartir pantalla"),".\n",(0,a.kt)("img",{alt:"screen_sharing_1",src:t(473).Z,width:"1920",height:"1022"})," "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Accede desde otro dispositivo:"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Desde cualquier otro ordenador conectado a la red, abre el enlace proporcionado por ngrok y selecciona las opciones de ",(0,a.kt)("strong",{parentName:"li"},"Ver pantalla")," o ",(0,a.kt)("strong",{parentName:"li"},"Controlar pantalla")," para interactuar con el servidor remoto.\n",(0,a.kt)("img",{alt:"screen_sharing_2",src:t(3063).Z,width:"256",height:"219"}),(0,a.kt)("img",{alt:"screen_sharing_3",src:t(3946).Z,width:"1920",height:"712"})," ")))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa1Listo! Con esta configuraci\xf3n, podr\xe1s compartir y controlar la pantalla del servidor de forma segura mediante ngrok, asegurando la compatibilidad con HTTPS y utilizando Google Chrome como navegador."))}c.isMDXComponent=!0},6829:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/ngrok_1-eab30a110829a47002bec5f8b5d95867.JPG"},9569:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/ngrok_http_3000-5ef8841be033eb8a6d3c25efb14cbb7f.JPG"},2921:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/screen_sharing-441ac8cbd817406c394120d4a3da2f48.JPG"},473:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/screen_sharing_1-da77fecb72396c6704649108fc7bd90d.JPG"},3063:(A,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QLcRXhpZgAATU0AKgAAAAgABAE7AAIAAAAGAAABSodpAAQAAAABAAABUJydAAEAAAAMAAACyOocAAcAAAEMAAAAPgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcGF2b24AAAWQAwACAAAAFAAAAp6QBAACAAAAFAAAArKSkQACAAAAAzkwAACSkgACAAAAAzkwAADqHAAHAAABDAAAAZIAAAAAHOoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwMjQ6MTE6MjcgMTQ6MjI6MDYAMjAyNDoxMToyNyAxNDoyMjowNgAAAHAAYQB2AG8AbgAAAP/hBBhodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDI0LTExLTI3VDE0OjIyOjA2Ljg5NzwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5wYXZvbjwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0n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"},3946:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/screen_sharing_3-90e129072701ac50c84eb3a675a1a639.JPG"}}]);