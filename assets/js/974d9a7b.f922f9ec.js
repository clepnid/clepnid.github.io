"use strict";(self.webpackChunkmy_own_docs=self.webpackChunkmy_own_docs||[]).push([[5194],{5318:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},A=Object.keys(e);for(i=0;i<A.length;i++)n=A[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(i=0;i<A.length;i++)n=A[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},w=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,A=e.originalType,l=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),h=s(n),w=a,d=h["".concat(l,".").concat(w)]||h[w]||p[w]||A;return n?i.createElement(d,c(c({ref:t},o),{},{components:n})):i.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var A=n.length,c=new Array(A);c[0]=w;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:a,c[1]=r;for(var s=2;s<A;s++)c[s]=n[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}w.displayName="MDXCreateElement"},4403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>A,metadata:()=>r,toc:()=>s});var i=n(5773),a=(n(7378),n(5318));const A={title:"Functionality",sidebar_position:1},c="Functionality: Share and Paste Content on the Network",r={unversionedId:"base_system/Functionality",id:"base_system/Functionality",title:"Functionality",description:"This feature allows users to easily share content between different PCs on the same network using keyboard shortcuts and the Clepnid application. Additionally, integration with Android devices extends its usefulness.",source:"@site/docs/1_base_system/Functionality.md",sourceDirName:"1_base_system",slug:"/base_system/Functionality",permalink:"/docs/base_system/Functionality",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1_base_system/Functionality.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Functionality",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Base System",permalink:"/docs/category/base-system"},next:{title:"Web Server",permalink:"/docs/base_system/Web_server"}},l={},s=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Functional Sections",id:"functional-sections",level:2},{value:"1. View Shared Content Types",id:"1-view-shared-content-types",level:3},{value:"2. Parts of the Window",id:"2-parts-of-the-window",level:3},{value:"3. Integration with Android App",id:"3-integration-with-android-app",level:3},{value:"4. Additional Utilities",id:"4-additional-utilities",level:3},{value:"Notes",id:"notes",level:2}],o={toc:s},h="wrapper";function p(e){let{components:t,...A}=e;return(0,a.kt)(h,(0,i.Z)({},o,A,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functionality-share-and-paste-content-on-the-network"},"Functionality: Share and Paste Content on the Network"),(0,a.kt)("p",null,"This feature allows users to easily share content between different PCs on the same network using keyboard shortcuts and the ",(0,a.kt)("strong",{parentName:"p"},"Clepnid")," application. Additionally, integration with Android devices extends its usefulness.  "),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Select content to share"),": From any application, select the content you want to share.  "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Shortcut to share"),": Press ",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + Shift + 1"),". This will:  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Detect the types of selected content.  "),(0,a.kt)("li",{parentName:"ul"},"Display a summary of the selected file types on the screen.  "),(0,a.kt)("li",{parentName:"ul"},"Automatically share the content with ",(0,a.kt)("strong",{parentName:"li"},"Clepnid")," windows on other PCs in the same network.  "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Shortcut to paste content"),": On a networked PC with ",(0,a.kt)("strong",{parentName:"li"},"Clepnid"),":  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + Shift + 2")," to automatically paste the shared files in the designated location.  ")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"functional-sections"},"Functional Sections"),(0,a.kt)("h3",{id:"1-view-shared-content-types"},"1. View Shared Content Types"),(0,a.kt)("p",null,"When you share content using ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + 1"),", a pop-up window will display information about the selected file types.",(0,a.kt)("br",{parentName:"p"}),"\n","For example:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Documents: ",(0,a.kt)("inlineCode",{parentName:"li"},".pdf"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".docx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".txt"),".  "),(0,a.kt)("li",{parentName:"ul"},"Images: ",(0,a.kt)("inlineCode",{parentName:"li"},".jpg"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".png"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".gif"),".  "),(0,a.kt)("li",{parentName:"ul"},"Others: ",(0,a.kt)("inlineCode",{parentName:"li"},".zip"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".exe"),".  ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"files",src:n(2077).Z,width:"546",height:"569"}),"  "),(0,a.kt)("p",null,"It detects when the shared content is text:\n",(0,a.kt)("img",{alt:"text",src:n(2742).Z,width:"582",height:"388"}),"  "),(0,a.kt)("p",null,"It detects when the shared content is HTML:\n",(0,a.kt)("img",{alt:"html",src:n(8325).Z,width:"568",height:"155"})),(0,a.kt)("p",null,"This helps you see what is being shared on the network.  "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"2-parts-of-the-window"},"2. Parts of the Window"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"empty_window",src:n(5459).Z,width:"579",height:"387"}),"  "),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Clepnid")," window is divided into the following sections:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Options"),": Various options for handling different parts of the application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Receiving Area"),": Lists the received content in real time.  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Settings"),": Allows you to adjust preferences and system options.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"settings",src:n(1608).Z,width:"527",height:"445"}),"  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"History"),": Displays pasted files, their existence in the system, and whether they can be recovered.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"history",src:n(8078).Z,width:"530",height:"800"}),"  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Server"),": Indicates if this computer is the server in the network.\n",(0,a.kt)("img",{alt:"server_window",src:n(2735).Z,width:"133",height:"41"}),"  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Circle"),": If it's blue, there is a computer sharing data on the network from this application.\n",(0,a.kt)("img",{alt:"shared_window",src:n(1419).Z,width:"36",height:"30"}),"  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Minimize"),": On Windows, when the application is minimized, it will be in the task bar.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"task_bar",src:n(9970).Z,width:"477",height:"200"}),"  "))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"3-integration-with-android-app"},"3. Integration with Android App"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Clepnid")," functionality extends to Android devices:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Scan QR"),": In the app, it will open the camera to scan the PC application's QR code.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"web_server_menu",src:n(5851).Z,width:"465",height:"423"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"app_qr",src:n(2492).Z,width:"412",height:"470"}),"  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Synchronization"),': In the app, to sync, it must be on the same network and contain the code displayed in the "Scanner App Code" option.',(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"app_code",src:n(4266).Z,width:"556",height:"229"}),"  "))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"4-additional-utilities"},"4. Additional Utilities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Drag and Drop Support"),": Drag files to the ",(0,a.kt)("strong",{parentName:"li"},"Clepnid")," window for quick sharing.    "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configuration Persistence"),": Settings can be saved for different sessions:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{alt:"web_menu",src:n(7172).Z,width:"381",height:"462"}),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Configuration settings.  "),(0,a.kt)("li",{parentName:"ul"},"Shared files.  ")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure that all PCs are connected to the same local network for sharing functionality to work correctly.  "),(0,a.kt)("li",{parentName:"ul"},"The application requires network and file system access permissions.")))}p.isMDXComponent=!0},1608:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Configure-b4a4a1cf049d6287d611f5c6a700dcb5.png"},8078:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/History-b5564f4c98ab9c62cdce0e26441a4a10.png"},2077:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/archivos-2c853c9014ad8a6be924b3b3e9e2baf9.png"},8325:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjgAAACbCAMAAABYvBGtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQjEwRDU3OEE2NUMxMUVGOUM5M0Q2NEM5OEIyNEJBNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQjEwRDU3N0E2NUMxMUVGOUM5M0Q2NEM5OEIyNEJBNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHN0UmVmOmRvY3VtZW50SUQ9IjgyMjNGMkVCRTE0RUFGMjNGNDY1NTJCQTFFOUQwMDNCIi8+IDxkYzpjcmVhdG9yPiA8cmRmOlNlcT4gPHJkZjpsaT5wYXZvbjwvcmRmOmxpPiA8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"},9970:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/task_bar-13f8e88473cccedb7c9364e90ed3e217.png"},2742:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/window-01c56c126aefb6ffba3d596355d9f0e8.png"},2492:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/window_qr-db1643e1792a7d0b38a205c8301da2a0.png"},2735:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAApCAMAAAAs2hqbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNzM4MzU0OUE2NUIxMUVGQkEzNEVCOTkyNjdDMEYzNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNzM4MzU0OEE2NUIxMUVGQkEzNEVCOTkyNjdDMEYzNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHN0UmVmOmRvY3VtZW50SUQ9IjY5QTY5NTA5MTY4MzJBQzMwRUU2Q0ExOUMyOTQ0OUQxIi8+IDxkYzpjcmVhdG9yPiA8cmRmOlNlcT4gPHJkZjpsaT5wYXZvbjwvcmRmOmxpPiA8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"},1419:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAMAAABzP0xhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGM0VBQkZENUE2NUIxMUVGQUVDNkY1MzJFNDI3REE3QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGM0VBQkZENEE2NUIxMUVGQUVDNkY1MzJFNDI3REE3QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHN0UmVmOmRvY3VtZW50SUQ9IkREMkRGNTdBRDJFQ0MxQ0QwRDcyQ0MzQ0U0NkRBOTJBIi8+IDxkYzpjcmVhdG9yPiA8cmRmOlNlcT4gPHJkZjpsaT5wYXZvbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7yzQ6+AAAAwFBMVEXO+f///en//vFOxP5Kvf6W0Pn/+f9ltelvr8j//vmHuuGt6f+v0/ns//9UuOX///90zfrx///1//7h/v/4//9Quf7/9f7/9/JNtf5atP//+vj//vxFv/75//p6tfVTuvRqr+hjsf///P9TqOp3s+VbqvZat/VfuNxav/5Tt/9Ns+j//OJNvfj8///r9//29P///PxyqetItf/2+f94xdmOzdz6//T3//hawd9grv/8/P/8//xeuO36/PtCuvdBuP/5Z/zBAAACJElEQVR42mzT63qiMBAGYIgYBI00J9DgMVpBBUvLrmutu97/Xe0ExUJbfB7/8OokM/NZCHlxoHNBKWMi15pSEWiMFUI2UjgMA3gs5HmeQYzViL2UIS4QKK9G5is2H61UHMceQkpr+CsPeR+CUfpAxsRFUYBRKIpCDAwKTB9I6zyfThG8i5Q6E6oxo4Tzg4CffjBCvqEioIAEJYRQBmhKP5H4c0RVFcqtfne2cJ+e+hanWqH9ft9GKsTE+t2bvS7cS5L41qGBMA7i4xGuoinvLnZSygk82WUx4BpHX9BffRis3XRUo/V6EOoawbVNOwXhfXfldK4yy7LJxJGb1WzAKc1biFr+YvPWuWYGOY5Mnxc+J6KsEBMxxhgO1E8uUGw0n282m/FWOlK6fc5uSLA76ibDuWygN+l2+eFWDtoFY4QW/ToNd+ny3XG24+VyvHWuWeLzSDUR473TaZg+L2s0cbKkR1TUQhagXRN1fkC3cu8GLQHJyT8oR+7lHrczB9/eD76RcPA5HPzep8ftqhaMPpGTQgto2WwmY5bvVs2UmVM306Ki/DqW9QqQBARKptVYyrw94HM1YNgCpxrwqz94wZFtt1flzHjX3aVyVK/KAQPa6/bSYVz266VzYekw/r6ZZn1Jtb6X2/pC9hqoDkJUQI61Lk0QCKQlED+lBecGmbTwCuU1uoczUCac0AzbjqIqnEUjnO0Ex7FtowJiHoJ/xPy/AAMAtNlgxaLOiqsAAAAASUVORK5CYII="},5459:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkMAAAGDCAMAAAAf5+SAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTRFMDlDQjVBNjYxMTFFRkI4RjdCQTQ4NDU0QzM1QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTRFMDlDQjZBNjYxMTFFRkI4RjdCQTQ4NDU0QzM1QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NEUwOUNCM0E2NjExMUVGQjhGN0JBNDg0NTRDMzVBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NEUwOUNCNEE2NjExMUVGQjhGN0JBNDg0NTRDMzVBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqF4gtIAAADAUExURWa2/4/b/zWV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"},7172:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/window_web_menu-8497cca32c528d94437510ae893263a8.png"},5851:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/window_web_server_menu-af164a682dd86398a2c90ff45cd66ace.png"},4266:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows_app_code-0814bb8e12d937f664bd74b957935264.png"}}]);