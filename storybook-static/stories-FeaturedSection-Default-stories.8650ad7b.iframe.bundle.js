/*! For license information please see stories-FeaturedSection-Default-stories.8650ad7b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklaracamp=self.webpackChunklaracamp||[]).push([[814],{"./src/stories/FeaturedSection/Default.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Default_stories});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/assets/css/index.css");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function FeaturedSection(_ref){let{number,content,button,badge,image}=_ref;return(0,jsx_runtime.jsx)("div",{className:"container mx-auto px-4 group",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-28 xl:gap-x-36",children:[(0,jsx_runtime.jsxs)("div",{className:"w-full md:w-4/12 2xl:w-3/12 md:group-odd:order-2 md:group-even:order-1",children:[(0,jsx_runtime.jsx)("h3",{className:"text-green uppercase font-semibold mb-3",children:content.preheading||"Pre Heading"}),(0,jsx_runtime.jsx)("h2",{className:"text-navy font-semibold text-[30px] mb-5",children:content.heading||"Heading"}),(0,jsx_runtime.jsx)("h3",{className:"text-grey leading-8 mb-8",children:content.paragraph||"Paragraph"})]}),(0,jsx_runtime.jsxs)("div",{className:"relative md:group-odd:order-1 md:group-even:order-2",children:[(0,jsx_runtime.jsx)("div",{className:["absolute rounded-full inline-flex items-center justify-center text-2xl font-semibold top-0 left-0 z-10 border-2 border-white text-white transform -translate-x-1/2 -translate-y-1/2 p-4 w-14 h-14",number.className||"bg-green"].join(" "),children:number.text}),(0,jsx_runtime.jsxs)("div",{className:"absolute rounded-xl bottom-0 right-0 bg-white z-10 transform translate-x-4 translate-y-4 md:translate-x-1/4 xl:translate-x-1/2 xl:translate-y-1/2 p-4 w-56",children:[(0,jsx_runtime.jsxs)("span",{className:"flex items-center gap-x-2 mb-2",children:[(0,jsx_runtime.jsx)("span",{className:"w-5 h-5 bg-green rounded-full flex items-center justify-center ",children:(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 8",fill:"none",preserveAspectRatio:"xMidYMid meet",children:(0,jsx_runtime.jsx)("path",{d:"M1.83325 4L4.46483 6.5L10.1666 1.5",className:"stroke-white",strokeWidth:"2","stroke-linecap":"round","stroke-linejoin":"round"})})}),(0,jsx_runtime.jsx)("span",{className:"text-navy font-medium",children:badge.title})]}),(0,jsx_runtime.jsx)("p",{className:"text-grey text-sm hidden md:block",children:badge.content})]}),(0,jsx_runtime.jsx)("div",{className:"relative max-w-full w-[240px] h-[340px] xl:w-[340px] xl:h-[440px] rounded-tr-[59px] rounded-bl-[59px] rounded-tl-3xl rounded-br-3xl overflow-hidden",children:"string"==typeof image?(0,jsx_runtime.jsx)("img",{src:image,alt:badge.title}):image})]})]})})}const components_FeaturedSection=FeaturedSection;FeaturedSection.__docgenInfo={description:"",methods:[],displayName:"FeaturedSection",props:{number:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  text: ReactNode;\n  className: string;\n}",signature:{properties:[{key:"text",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!0}}]}},description:""},content:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  preheading: string;\n  heading: string;\n  paragraph: string;\n}",signature:{properties:[{key:"preheading",value:{name:"string",required:!0}},{key:"heading",value:{name:"string",required:!0}},{key:"paragraph",value:{name:"string",required:!0}}]}},description:""},button:{required:!0,tsType:{name:"ReactNode"},description:""},badge:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  title: string;\n  content: string;\n}",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!0}}]}},description:""},image:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""}}};var Button=__webpack_require__("./src/components/Button/index.tsx");const Default_stories={title:"Components/FeaturedSection",component:components_FeaturedSection,tags:["autodocs"],parameters:{layout:"centered"}},Default={args:{number:{text:"1.",className:"bg-yellow"},content:{preheading:"Better Career",heading:"Prepare The Journey",paragraph:"We do really care to our students’ future career so it would be good if you are taking a quick interview"},button:(0,jsx_runtime.jsx)(Button.A,{state:"secondary",children:(0,jsx_runtime.jsx)("a",{href:"",children:"Learn More"})}),badge:{title:"Interview",content:"Before taking any program it is good to choose the path"},image:"/images/image-2.jpg"},render:args=>(0,jsx_runtime.jsx)(components_FeaturedSection,{...args})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    number: {\n      text: "1.",\n      className: "bg-yellow"\n    },\n    content: {\n      preheading: "Better Career",\n      heading: "Prepare The Journey",\n      paragraph: "We do really care to our students’ future career so it would be good if you are taking a quick interview"\n    },\n    button: <Button state="secondary">\n        <a href="">Learn More</a>\n      </Button>,\n    badge: {\n      title: "Interview",\n      content: "Before taking any program it is good to choose the path"\n    },\n    image: "/images/image-2.jpg"\n  },\n  render: args => <FeaturedSection {...args} />\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Button});var react=__webpack_require__("./node_modules/react/index.js");const Button_configs={state:{primary:"border-2 border-trasnparent bg-purple hover:bg-navy focus:bg-navy active:bg-navy text-white",secondary:"border-2 border-purple-soft2 hover:border-transparent bg-purple-soft hover:bg-navy focus:bg-navy active:bg-navy text-purple hover:text-white",alternative:"",disabled:"border-2 border-transparent bg-soft-grey text-grey",loading:"border-2 border-transparent bg-soft-grey text-grey"}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(props){var _configs$state,_props$children;let{state}=props;props.isDisabled&&(state="disabled"),props.isLoading&&(state="loading");const className=["py-2 px-6 font-medium rounded-full relative appearance-none focus:outline-none transition-all duration-300 inline-flex items-center justify-center select-none overflow-hidden",(null==Button_configs||null===(_configs$state=Button_configs.state)||void 0===_configs$state?void 0:_configs$state[state])||"",(null==props?void 0:props.className)||""];let returnChildren=props.children,returnContent=props.children.props.children;"object"==typeof(null===(_props$children=props.children)||void 0===_props$children?void 0:_props$children.type)&&(returnChildren=props.children.props.children,returnContent=props.children.props.children.props.children);const children=(0,react.cloneElement)(returnChildren,{...props.children.props,disabled:props.isDisabled||props.isLoading,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:["transition-all duration-300 inline-flex items-center",props.isLoading?"-top-full opacity-0 invisible":"top-0 opacity-100 visible"].join(" "),children:returnContent}),(0,jsx_runtime.jsx)("span",{className:["transition-all duration-300 absolute left-0 right-0 bottom-0 z-10 inline-flex items-center justify-center",props.isLoading?"top-0 opacity-100":"-top-full opacity-0"].join(" "),children:(0,jsx_runtime.jsxs)("svg",{className:"animate-spin w-5 h-5",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("circle",{opacity:"0.2",cx:"14",cy:"14",r:"13",className:"stroke-white",strokeWidth:"2"}),(0,jsx_runtime.jsx)("path",{d:"M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24",className:"stroke-white",strokeWidth:"2"})]})})]})});return(0,react.cloneElement)(children,{className:className.join(" ")})}const components_Button=Button;Button.__docgenInfo={description:"Primary Badge components",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"JSX.Element"},description:""},state:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "alternative" | "disabled" | "loading"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"alternative"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"loading"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/assets/css/index.css":()=>{},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);