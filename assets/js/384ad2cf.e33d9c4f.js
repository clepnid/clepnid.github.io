"use strict";(self.webpackChunkmy_own_docs=self.webpackChunkmy_own_docs||[]).push([[9291],{5318:(A,o,e)=>{e.d(o,{Zo:()=>p,kt:()=>s});var t=e(7378);function r(A,o,e){return o in A?Object.defineProperty(A,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[o]=e,A}function i(A,o){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(A,o).enumerable}))),e.push.apply(e,t)}return e}function n(A){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?i(Object(e),!0).forEach((function(o){r(A,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(o){Object.defineProperty(A,o,Object.getOwnPropertyDescriptor(e,o))}))}return A}function a(A,o){if(null==A)return{};var e,t,r=function(A,o){if(null==A)return{};var e,t,r={},i=Object.keys(A);for(t=0;t<i.length;t++)e=i[t],o.indexOf(e)>=0||(r[e]=A[e]);return r}(A,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(t=0;t<i.length;t++)e=i[t],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(r[e]=A[e])}return r}var l=t.createContext({}),g=function(A){var o=t.useContext(l),e=o;return A&&(e="function"==typeof A?A(o):n(n({},o),A)),e},p=function(A){var o=g(A.components);return t.createElement(l.Provider,{value:o},A.children)},K="mdxType",c={inlineCode:"code",wrapper:function(A){var o=A.children;return t.createElement(t.Fragment,{},o)}},C=t.forwardRef((function(A,o){var e=A.components,r=A.mdxType,i=A.originalType,l=A.parentName,p=a(A,["components","mdxType","originalType","parentName"]),K=g(e),C=r,s=K["".concat(l,".").concat(C)]||K[C]||c[C]||i;return e?t.createElement(s,n(n({ref:o},p),{},{components:e})):t.createElement(s,n({ref:o},p))}));function s(A,o){var e=arguments,r=o&&o.mdxType;if("string"==typeof A||r){var i=e.length,n=new Array(i);n[0]=C;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=A,a[K]="string"==typeof A?A:r,n[1]=a;for(var g=2;g<i;g++)n[g]=e[g];return t.createElement.apply(null,n)}return t.createElement.apply(null,e)}C.displayName="MDXCreateElement"},8335:(A,o,e)=>{e.r(o),e.d(o,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>g});var t=e(5773),r=(e(7378),e(5318));const i={title:"Url to Apk",sidebar_position:5},n=void 0,a={unversionedId:"server_module_examples/Url_to_Apk",id:"server_module_examples/Url_to_Apk",title:"Url to Apk",description:"Tutorial: How to Generate an APK from a URL",source:"@site/docs/4_server_module_examples/Url_to_Apk.md",sourceDirName:"4_server_module_examples",slug:"/server_module_examples/Url_to_Apk",permalink:"/docs/server_module_examples/Url_to_Apk",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4_server_module_examples/Url_to_Apk.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Url to Apk",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Torrent Downloader",permalink:"/docs/server_module_examples/Torrent_downloader"}},l={},g=[{value:"Tutorial: How to Generate an APK from a URL",id:"tutorial-how-to-generate-an-apk-from-a-url",level:3},{value:"<strong>Steps to follow:</strong>",id:"steps-to-follow",level:4}],p={toc:g},K="wrapper";function c(A){let{components:o,...i}=A;return(0,r.kt)(K,(0,t.Z)({},p,i,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"tutorial-how-to-generate-an-apk-from-a-url"},"Tutorial: How to Generate an APK from a URL"),(0,r.kt)("p",null,"In this tutorial, you will learn how to convert a URL into an APK application using the ",(0,r.kt)("strong",{parentName:"p"},"url2apk")," module."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"steps-to-follow"},(0,r.kt)("strong",{parentName:"h4"},"Steps to follow:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Access the ",(0,r.kt)("inlineCode",{parentName:"strong"},"url2apk")," module:"),(0,r.kt)("br",{parentName:"p"}),"\n","Go to the main menu and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"url2apk")," option.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Complete the form:"),(0,r.kt)("br",{parentName:"p"}),"\n","You will see a form with the following fields:\n",(0,r.kt)("img",{alt:"url_to_apk_1",src:e(7721).Z,width:"623",height:"626"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," Enter the web address you want to convert into an application.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App Name:")," Type the name that the resulting APK application will have.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App Image:")," Upload an image or icon that will represent the application."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start the process:"),(0,r.kt)("br",{parentName:"p"}),"\n","After completing all the fields, submit the form. The system will begin generating the APK file. This process may take about ",(0,r.kt)("strong",{parentName:"p"},"1 minute"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Download the APK:"),(0,r.kt)("br",{parentName:"p"}),"\n","Once the process is complete, the APK file will automatically download to your device.\n",(0,r.kt)("img",{alt:"url_to_apk_2",src:e(6414).Z,width:"555",height:"124"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Check for possible errors:"),(0,r.kt)("br",{parentName:"p"}),"\n","If any issue occurs during the generation process, go to the ",(0,r.kt)("strong",{parentName:"p"},"activity")," page. There, you will find a detailed log of what happened and information about the error.\n",(0,r.kt)("img",{alt:"url_to_apk_3",src:e(4881).Z,width:"1353",height:"944"})," "))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"That's it! By following these steps, you will be able to convert any URL into a functional APK application."))}c.isMDXComponent=!0},7721:(A,o,e)=>{e.d(o,{Z:()=>t});const t=e.p+"assets/images/url_to_apk_1-e1085cfbe24d71e5c6e9592f3fd04ba7.JPG"},6414:(A,o,e)=>{e.d(o,{Z:()=>t});const t="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QLcRXhpZgAATU0AKgAAAAgABAE7AAIAAAAGAAABSodpAAQAAAABAAABUJydAAEAAAAMAAACyOocAAcAAAEMAAAAPgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcGF2b24AAAWQAwACAAAAFAAAAp6QBAACAAAAFAAAArKSkQACAAAAAzQ0AACSkgACAAAAAzQ0AADqHAAHAAABDAAAAZIAAAAAHOoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwMjQ6MTE6MjcgMTM6Mzc6MzUAMjAyNDoxMToyNyAxMzozNzozNQAAAHAAYQB2AG8AbgAAAP/hBBhodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDI0LTExLTI3VDEzOjM3OjM1LjQzNjwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5wYXZvbjwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0n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91f++qAK1loOl6bfz3thYw29xcDErxrjdznp061oVB5d1/dX/vqjy7r+6v8A31QBPRUHl3X91f8Avqjy7r+6v/fVAEzKrqVcBlYYIIyCKzrfw5otpd/arXSbGGfORJHbqrA+xA4q35d1/dX/AL6o8u6/ur/31QBPRUHl3X91f++qPLuv7q/99UAZ+vf8sP8AgX9KxyAylWAIIwQe9b1/p1zeRKPlV1Pykms3+wNS9Yf++z/hVpqwjmz4S0TPFio9lkcAfgDTovC2jQzJKlipZCGXc7MAR7E4rov7A1L1h/77P+FH9gal6w/99n/CndAU6KunQr9BljFj2Y/4VNHpSbB5kxDd8Ci6A6FECIFHanUUVkMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKrvaqzk4HPtViigAooooAr3N9BaSIkvmF5ASqxxPISBjJwoPqPzqH+17b/nnef+AU3/xNJcf8hy1/69pv/QoqsmgCv/bFt/zzvP8AwBm/+IqazvrbUIPOtJPMT6EEd+QeRxzTu9cn9pv9Ls4rlNLukktIAsrEx7JEVeQfnzjgkHGR+YIB2VFFFABRXnd5Fb6r4z8Wwat4j1GyttOtbeeOG21F7YWoMTFpvkIJHHQ5TjkE1W8P3d74x1LTbHxRe31mV0C1v1gtLuWya6lkLCWQmJlc7NqDbnaDJyM7cC1/r1/yf9XsPTX+un+f9aX9NqpPq2n29peXU17AsFiG+1P5gIg2qGIbHQhSDg9iK850yS+1648N2F5rGotZs+pxme3u3he9hhmVYXZ4ypPygHcCCeecMc52qeHrFPB3xPdLjUi0c04wdVuWHFrE4yDJg8nv1X5T8vFG7du1/wAUv1KS1Sfe35/5HrGm6jBq2nxXtos6wyglRcW0kD9ccpIqsPxHI56Us+o2ttqFrZTS7bi83+Qm0nfsGW5xgYB71xSWMV/4zHhm71DVLewsdKiubSGLVbiOW6Z5HEjtKHErhNqDBYgeZyPu4qaBeXN9qvhJ7q5e8EVxqkEF1IQWuIY2KRuSPvEoq/N3696b8v61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evqaWfStOuruK6urC1muIceXNJCrOmDkYJGRg80+pOvLb+uhzMtxeaPY65dQXdxO76ikKhli/d7xGN4yFGQGwNx28DPfMovtaj+z2V491ZLd3ghiu7kQGYL5bORhMx5LLtBI6HpnmujOnWTS3ErWduZLldk7mJcyrjGGOPmGOMGok0TSo7F7KPTLNbSRtzwLboI2PHJXGCeB+VJbfcPr95S8OZEurq1ybpkviplIUFiIoxztAGexwBz2FTHWL7P/ACLmpn/tpbf/AB6r9taW1nF5dnbxW8fHyRIFHAAHA9gB+FTUAZ9rqV1cXCxy6JfWyNnMsrwFV477ZSfyFVdWiuobyTUbG+soWt7UiSO6hLDbktncHXaOOpB6VtVUutJ06+uEnvtPtbmaP7kk0Kuy854JHHND8g9SC31KPUtKhdXhtrmeCOYQz4YxF+V3LkE/N9MkVW0VnXWNVgumjmulaJ5ZoV2o2UwF2ZJUgDkEsTkHOCANK406yuxILuzt5xKoSQSxK29QcgHI5APIp9pZ2thbiCxtobaEEkRwxhFBPXgcU9Lh0OYumXTPFF9rR+WOF4obs+kLIPmP+62D9C1QRxO9xqOo3Css1/pkspVuqR5xGvthcEj1Jrr3tbeVZlkgidZxiUMgIkGMYb1445pXt4ZGJeGNiyGMkqDlT1X6e1RbS3r+I76/d+H9fkcxoqXEGt6Yb+aC5lm0wrF5ERi8pFKE7gWYtnI+bIAx05rq6qWOladpm/8As2wtbPzMb/s8Kx7sdM4HPU1bq27kpWCiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q=="},4881:(A,o,e)=>{e.d(o,{Z:()=>t});const t=e.p+"assets/images/url_to_apk_3-1ae40b1c6cefdf31eca4b7f48cf333ae.JPG"}}]);