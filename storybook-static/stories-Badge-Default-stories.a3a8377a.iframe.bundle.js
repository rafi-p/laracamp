/*! For license information please see stories-Badge-Default-stories.a3a8377a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklaracamp=self.webpackChunklaracamp||[]).push([[24],{"./src/stories/Badge/Default.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/assets/css/index.css");var _components_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Badge",component:_components_Badge__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"],parameters:{layout:"centered"}},Success={args:{state:"success"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{...args,children:"Success"})},Warning={args:{state:"warning"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{...args,children:"Warning"})},Danger={args:{state:"danger"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{...args,children:"Danger"})};Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    state: "success"\n  },\n  render: args => <Badge {...args}>Success</Badge>\n}',...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    state: "warning"\n  },\n  render: args => <Badge {...args}>Warning</Badge>\n}',...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    state: "danger"\n  },\n  render: args => <Badge {...args}>Danger</Badge>\n}',...Danger.parameters?.docs?.source}}};const __namedExportsOrder=["Success","Warning","Danger"]},"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Badge});const Badge_configs={state:{success:"bg-soft-green border border-green text-green",warning:"bg-soft-yellow border border-yellow text-yellow",danger:"bg-soft-red border border-red text-red"}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Badge(_ref){var _configs$state;let{children,state,className}=_ref;const combineClassName=["py-1 px-4 rounded-full inline-flex items-center",(null==Badge_configs||null===(_configs$state=Badge_configs.state)||void 0===_configs$state?void 0:_configs$state[state])||"",className||""];return(0,jsx_runtime.jsx)("span",{className:combineClassName.join(" "),children})}const components_Badge=Badge;Badge.__docgenInfo={description:"Primary Badge components",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},state:{required:!0,tsType:{name:"union",raw:'"success" | "warning" | "danger"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/assets/css/index.css":()=>{},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);