!function(){"use strict";var t=window.wp.element;function e(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}(0,t.createElement)("svg",{width:"20px",height:"20px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"m56.898 44.301h-13.598v-4c0-3.5 2.6016-6.6016 6.1016-7h0.69922c3.8008 0 6.8008 3.1016 6.8008 6.8008zm-6.8984 6.3008h-0.30078c-1.1992 0.10156-2.1016 1-2.3008 2.1992-0.19922 1 0.19922 1.8984 0.89844 2.5l-0.69922 3.3984c-0.10156 0.39844 0.19922 0.69922 0.60156 0.69922h3.6016c0.39844 0 0.69922-0.39844 0.60156-0.69922l-0.69922-3.3008c0.60156-0.5 1-1.1992 1-2.1016-0.003906-1.4961-1.2031-2.6953-2.7031-2.6953zm-19.301-32.902c3.1016-1.8984 6.5-3.3008 9.8984-4.1992l1.5-9c0.30078-1.6992 1.6992-2.8984 3.3984-2.8984h9c1.6992 0 3.1016 1.1992 3.3984 2.8984l1.5 9c3.3984 0.89844 6.6016 2.1992 9.6992 4l7.3984-5.3008c1.3984-1 3.1992-0.80078 4.3984 0.30078l6.3984 6.3984c1.1992 1.1992 1.3984 3.1016 0.39844 4.5l-5.3008 7.3984c1.8008 3.1016 3.1992 6.3008 4 9.6992l9 1.5c1.6992 0.30078 2.8984 1.6992 2.8984 3.3984v9c0 1.6992-1.1992 3.1016-2.8984 3.3984l-9 1.5c-0.89844 3.3984-2.1992 6.6016-4 9.6992l5.3008 7.3984c1 1.3984 0.80078 3.3008-0.39844 4.5l-3.1992 3.1992-3.0898 3.3086c-1.1992 1.1992-3.1016 1.3984-4.5 0.39844l-7.3984-5.3008c-3 1.8008-6.1992 3.1016-9.5 3.8984l-1.5 9.1016c-0.30078 1.6992-1.6992 2.8984-3.3984 2.8984h-9c-1.6992 0-3.1016-1.1992-3.3984-2.8984l-1.5-8.8984c-3.3008-0.89844-6.6016-2.1992-9.6992-4l-7.5 5.3008c-1.3984 1-3.3008 0.80078-4.5-0.39844l-3.1055-3.1992-3.1992-3.1992c-1.1992-1.1992-1.3984-3.1016-0.39844-4.5l5.1992-7.3984c-1.8008-3-3.1992-6.3008-4.1016-9.6992l-9.1016-1.5c-1.6992-0.30078-2.8984-1.6992-2.8984-3.3984v-9c0-1.6992 1.1992-3.1016 2.8984-3.3984l8.8984-1.3984c0.89844-3.3008 2.1992-6.6016 4-9.6992l-5.3008-7.5c-1-1.3984-0.80078-3.3008 0.39844-4.5l6.3984-6.3984c1.1992-1.1992 3.1016-1.3984 4.5-0.39844zm3.8008 44.602c0 1.8008 1.3984 3.1992 3.1992 3.1992h24.5c1.8008 0 3.1992-1.3984 3.1992-3.1992v-14.801c0-1.8008-1.3984-3.1992-3.1992-3.1992h-0.10156v-4.1992c0-6.6992-5.3984-12.102-12.102-12.102h-0.5c-6.3945 0.30078-11.496 5.8984-11.496 12.398v3.8984h-0.30078c-1.8008 0-3.1992 1.3984-3.1992 3.1992z"}));const{__:__}=wp.i18n,{Component:s,Fragment:l}=wp.element,{InspectorControls:n}=wp.editor,{PanelBody:i,PanelRow:a,TextControl:c,Button:o,Spinner:r}=wp.components,{apiFetch:p}=wp;function d(){return p({path:"/jsforwpadvgb/v1/block-setting"}).then((t=>t)).catch((t=>t))}class g extends s{constructor(){super(...arguments),e(this,"state",{blockSetting:"",isLoading:!0,isSaving:!1,isEditing:!1}),e(this,"updateSetting",(async()=>{this.setState({isSaving:!0});const t=await(e=this.state.blockSetting,p({path:"/jsforwpadvgb/v1/block-setting",method:"POST",body:e}).then((t=>t)).catch((t=>t)));var e;this.setState({blockSetting:t,isSaving:!1,isEditing:!1})}))}async componentDidMount(){const t=await d();this.setState({blockSetting:t,isLoading:!1})}render(){const{className:e}=this.props;return this.state.isLoading?(0,t.createElement)("p",null,(0,t.createElement)(r,null)," ",__("Loading","jsforwpadvblocks")):(0,t.createElement)(l,null,(0,t.createElement)(n,null,(0,t.createElement)(i,{title:__("Block Setting","jsforwpadvblocks"),initialOpen:!0},(0,t.createElement)(a,null,this.state.isEditing||""===this.state.blockSetting?(0,t.createElement)("p",null,(0,t.createElement)(c,{label:__("Please enter a setting","jsforwpadvblocks"),value:this.state.blockSetting,onChange:t=>{this.state.isSaving||this.setState({blockSetting:t,isEditing:!0})}}),(0,t.createElement)(o,{isPrimary:!0,disabled:this.state.isSaving,onClick:()=>{this.updateSetting()}},__("Save Setting","jsforwpadvblocks"))," ",(0,t.createElement)(o,{isDefault:!0,disabled:this.state.isSaving,onClick:async()=>{this.setState({isEditing:!1});const t=await d();this.setState({blockSetting:t})}},__("Cancel","jsforwpadvblocks"))):(0,t.createElement)(l,null,(0,t.createElement)("p",null,__("Global Setting Saved","jsforwpadvblocks")),(0,t.createElement)(o,{isDefault:!0,onClick:()=>{this.setState({isEditing:!0})}},__("Edit","jsforwpadvblocks")))))),(0,t.createElement)("div",{className:e},""===this.state.blockSetting?(0,t.createElement)("p",null,__("Please enter a block settings value in the block settings.","jsforwpadvblocks")):(0,t.createElement)("p",null,__("Global Setting: ","jsforwpadvblocks"),this.state.blockSetting)))}}var b=window.wp.i18n,h=window.wp.blocks,m=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"pbrocks-sample-blocks/esnext-tabs","version":"2.0.1","title":"ESNext Tabs","category":"pbrocks-sample-blocks","example":{},"icon":{"background":"rgb(11,61,145)","src":"universal-access-alt"},"description":"Example block written with ESNext standard and JSX support – build step required.","supports":{"html":false},"textdomain":"pbrocks-sample-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,h.registerBlockType)(m,{edit:e=>(0,t.createElement)(g,e),save:e=>(0,t.createElement)("p",null,(0,b.__)("Show block global settings","block-starter"))})}();