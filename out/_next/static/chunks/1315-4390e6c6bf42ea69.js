"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1315],{22562:function(e,t,i){i.d(t,{zx:function(){return l},II:function(){return h},Y8:function(){return y},q4:function(){return g},Kx:function(){return N}});var n=i(85893);let a={PRIMARY:"bg-indigo-700 border text-white",SECONDARY:"bg-transparent border-2 border-indigo-700 hover:bg-indigo-100 text-indigo-700",TERTIARY:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 focus:ring-offset-2",BRAND_PRIMARY:"primary-gradient-background border border-transparent text-white",BRAND_SECONDARY:"bg-transparent border-2 border-indigo-700 primary-gradient-text focus:ring-indigo-500"},s={SMALL:"rounded-sm",MEDIUM:"rounded-md",LARGE:"rounded-2xl"},l=e=>{let{isLoading:t=!1,children:i,className:l,onClick:r,type:o="PRIMARY",rounded:c="MEDIUM"}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("button",{disabled:t,onClick:r,className:"ml-3 ".concat(a[o]," ").concat(s[c]," inline-flex justify-center px-8 py-2 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ").concat(l),children:[t&&(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("div",{className:"h-6 w-6 animate-spin rounded-full border-b-2 border-white"})}),!t&&i]})})};var r=i(53043),o=i(11355),c=i(67294),d=i(65898),m=i(72886);let u=e=>(0,n.jsx)("span",{children:"string"==typeof e?e:JSON.stringify(e)}),f=e=>JSON.stringify(e),p=e=>{let{dataSource:t,value:i,multiple:a,onChange:s,itemRenderer:l=f,labelRenderer:p=u}=e,[g,h]=(0,c.useState)(t||[]),[x,v]=(0,c.useState)(i||void 0),[b,y]=(0,c.useState)([]);return(0,c.useEffect)(function(){h(t)},[t]),(0,c.useEffect)(function(){if(g&&0!==g.length){let e=g.map((e,t)=>[l(e,t),e]).map((e,t)=>{let[i,a]=e;return(0,n.jsx)(r.R.Option,{className:e=>{let{active:t}=e;return"relative cursor-pointer select-none py-2 pl-10 pr-4  ".concat(t?"bg-indigo-100 text-indigo-900":"text-gray-900")},as:"div",value:JSON.stringify(a),children:e=>{let{selected:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"block truncate ".concat(t?"font-medium":"font-normal"),children:i}),t?(0,n.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-500",children:(0,n.jsx)(d.dZ6,{className:"h-5 w-5","aria-hidden":"true"})}):null]})}},t)});y(e)}},[]),(0,n.jsxs)(r.R,{value:JSON.stringify(x),onChange:e=>{let t=JSON.parse(e);v(t),s&&s(t),m.V.getState().setCollection(t)},multiple:a,children:[(0,n.jsxs)(r.R.Button,{className:"relative w-full cursor-default rounded border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:outline-none sm:text-sm",children:[p(x),(0,n.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:(0,n.jsx)(d.kWQ,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,n.jsx)(o.u,{enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,n.jsx)(r.R.Options,{className:" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:b})})]})},g=e=>(0,n.jsx)(p,{...e}),h=(0,c.forwardRef)(function(e,t){let{name:i,id:a,placeholder:s,className:l,value:r="",label:o,errors:d=[],onBlur:m=()=>{},onChange:u,type:f="text",required:p,disabled:g}=e,[h,x]=(0,c.useState)(r||""),v=(0,c.useRef)(null);return(0,c.useEffect)(()=>{x(r)},[r]),(0,c.useImperativeHandle)(t,()=>({focus:()=>{v.current.focus()},select:()=>{v.current.select()}})),(0,n.jsxs)(c.Fragment,{children:[(0,n.jsxs)("label",{htmlFor:i,className:"block text-sm font-semibold text-gray-700",children:[o,p&&(0,n.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("input",{ref:v,type:f,name:i,disabled:g,value:h,id:a,className:"block w-full rounded-md p-3 border-gray-300 text-gray-700 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ".concat(l," ").concat(d.length>0?"border-red-600":""),placeholder:s,onChange:e=>{x(e.target.value),u(e.target.value,e)},onBlur:e=>{x(e.target.value),m(e.target.value,e)}})})]})});var x=i(11171),v=i(63750);let b=e=>JSON.stringify(e),y=e=>{let{dataSource:t,value:i,onChange:a,itemRenderer:s=b}=e,[l,r]=(0,c.useState)(t||[]),[o,d]=(0,c.useState)(i||void 0),[m,u]=(0,c.useState)([]);return(0,c.useEffect)(function(){r(t)},[t]),(0,c.useEffect)(function(){if(l&&0!==l.length){let e=l.map((e,t)=>[s(e,t),e]).map((e,t)=>{let[i,a]=e;return(0,n.jsx)(x.E.Option,{value:JSON.stringify(a),className:()=>"relative flex cursor-pointer bg-white rounded-md px-3 py-1.5 mb-3.5 border border-gray-300 focus:outline-none",children:e=>{let{checked:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("div",{children:(0,n.jsx)(x.E.Label,{as:"p",className:"text-sm font-medium",children:i})})}),(0,n.jsx)(n.Fragment,{}),t?(0,n.jsx)("div",{className:"shrink-0 text-indigo-500",children:(0,n.jsx)(v.q9I,{className:"h-6 w-6"})}):(0,n.jsx)("div",{className:"shrink-0",children:(0,n.jsx)(v.b9R,{className:"h-6 w-6"})})]})})}},t)});u(e)}},[]),(0,n.jsx)(x.E,{value:JSON.stringify(o),onChange:e=>{let t=JSON.parse(e);d(t),a&&a(t)},children:m})},N=(0,c.forwardRef)(function(e,t){let{name:i,id:a,placeholder:s,className:l,value:r="",label:o,errors:d=[],onBlur:m=()=>{},onChange:u=()=>{},required:f,disabled:p}=e,[g,h]=(0,c.useState)(r||""),x=(0,c.useRef)(null);return(0,c.useImperativeHandle)(t,()=>({focus:()=>{x.current.focus()},select:()=>{x.current.select()}})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("label",{htmlFor:i,className:"block text-sm font-semibold text-gray-700",children:[o,f&&(0,n.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("textarea",{ref:x,id:a,name:i,onChange:e=>{h(e.target.value),u(e.target.value,e)},onBlur:e=>{h(e.target.value),m(e.target.value,e)},value:g,rows:3,placeholder:s,disabled:p,className:"block w-full p-3 resize-none rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ".concat(l," ").concat(d.length>0?"border-red-600":"")})})]})})},6036:function(e,t,i){var n=i(85893),a=i(9008),s=i.n(a),l=i(11163),r=i(2962);t.Z=e=>{let t=(0,l.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,n.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,n.jsx)(r.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:"en",site_name:"utility"}})]})}},15736:function(e,t,i){var n=i(85893);t.Z=e=>{let{children:t}=e;return(0,n.jsx)("main",{children:t})}},72886:function(e,t,i){i.d(t,{V:function(){return a}});var n=i(73445);let a=(0,n.Ue)((e,t)=>({utility:[{key:1,collectionName:"PointSix",claims:300,utilityName:"1:1",image:"https://picsum.photos/200/300"},{key:2,collectionName:"Bored Ape Yatch club",claims:200,utilityName:"Access",image:"https://picsum.photos/100/300"},{key:3,collectionName:"Doodles",claims:100,utilityName:"Whitelist",image:"https://picsum.photos/100/200"},{key:4,collectionName:"Doodles",claims:100,utilityName:"Whitelist",image:"https://picsum.photos/100/200"},{key:5,collectionName:"Doodles",claims:100,utilityName:"Whitelist",image:"https://picsum.photos/100/200"}],title:"AllowList",description:"",confirmationTitle:"",image:"https://picsum.photos/300/300",confirmationDescription:"",activeTokenGates:{id:1,name:"Multiple reveal"},selectedCollection:{id:1,name:"No Collection Found",address:null},selectedNft:{name:"Select all NFTs",description:"Every holder can claim once per NFT held"},startDate:"2023-07-07",endDate:"2023-07-07",maxClaims:2e3,tags:[],token_types:[{id:1,name:"Multiple reveal"},{id:2,name:"Single reveal"}],nft_types:[{name:"Select all NFTs",description:"Every holder can claim once per NFT held"}],collection_list:[],tagList:["Physical","Digital","Event","AllowList"],setTitle(t){e({title:t})},setCollectionList(t){e({collection_list:t})},setDescription(t){e({description:t})},setConfirmationTitle(t){e({confirmationTitle:t})},setConfirmationDescriptione(t){e({confirmationDescription:t})},setActiveTokenGates(t){e({activeTokenGates:t})},setCollection(t){e({selectedCollection:t})},setSelectedNft(t){e({selectedNft:t})},setStartDate(t){e({startDate:t})},setEndDate(t){e({endDate:t})},setMaxClaims(t){e({maxClaims:t})},setTags(t){e({tags:t})},setImage(t){e({image:t})},setUtility(t){e(t)},updateTemplate(t){e({maxClaims:t.claims,title:t.name,image:t.img})},saveDraft(){console.info("Payload",{title:t().title,description:t().description,image:t().image,confirmationTitle:t().confirmationTitle,confirmationDescription:t().confirmationDescription,activeTokenGates:t().activeTokenGates,selectedCollection:t().selectedCollection,startDate:t().startDate,endDate:t().endDate,maxClaims:t().maxClaims,tags:t().tags})},publishUtility(){console.info("Payload",{title:t().title,description:t().description,image:t().image,confirmationTitle:t().confirmationTitle,confirmationDescription:t().confirmationDescription,activeTokenGates:t().activeTokenGates,selectedCollection:t().selectedCollection,startDate:t().startDate,endDate:t().endDate,maxClaims:t().maxClaims,tags:t().tags})}}))}}]);