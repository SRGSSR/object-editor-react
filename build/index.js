!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("ramda"),require("@material-ui/core"),require("@material-ui/core/TableCell"),require("classnames"),require("react-dom"),require("@material-ui/core/TableRow"),require("glamor"),require("@material-ui/core/Checkbox"),require("@material-ui/icons/InfoOutlined"),require("@material-ui/core/IconButton"),require("react-addons-update"),require("@material-ui/core/Toolbar"),require("@material-ui/core/Typography"),require("@material-ui/core/Paper"),require("@material-ui/icons/Delete"),require("@material-ui/core/Modal/ModalManager"),require("@material-ui/core/Button"),require("@material-ui/core/Select"),require("@material-ui/icons/Add"),require("@material-ui/icons/Edit"),require("prop-types"),require("@material-ui/core/Table"),require("@material-ui/core/TableBody"),require("@material-ui/core/TableFooter"),require("@material-ui/core/TableHead"),require("@material-ui/core/TablePagination"),require("@material-ui/core/Popover"));else if("function"==typeof define&&define.amd)define(["react","ramda","@material-ui/core","@material-ui/core/TableCell","classnames","react-dom","@material-ui/core/TableRow","glamor","@material-ui/core/Checkbox","@material-ui/icons/InfoOutlined","@material-ui/core/IconButton","react-addons-update","@material-ui/core/Toolbar","@material-ui/core/Typography","@material-ui/core/Paper","@material-ui/icons/Delete","@material-ui/core/Modal/ModalManager","@material-ui/core/Button","@material-ui/core/Select","@material-ui/icons/Add","@material-ui/icons/Edit","prop-types","@material-ui/core/Table","@material-ui/core/TableBody","@material-ui/core/TableFooter","@material-ui/core/TableHead","@material-ui/core/TablePagination","@material-ui/core/Popover"],t);else{var r="object"==typeof exports?t(require("react"),require("ramda"),require("@material-ui/core"),require("@material-ui/core/TableCell"),require("classnames"),require("react-dom"),require("@material-ui/core/TableRow"),require("glamor"),require("@material-ui/core/Checkbox"),require("@material-ui/icons/InfoOutlined"),require("@material-ui/core/IconButton"),require("react-addons-update"),require("@material-ui/core/Toolbar"),require("@material-ui/core/Typography"),require("@material-ui/core/Paper"),require("@material-ui/icons/Delete"),require("@material-ui/core/Modal/ModalManager"),require("@material-ui/core/Button"),require("@material-ui/core/Select"),require("@material-ui/icons/Add"),require("@material-ui/icons/Edit"),require("prop-types"),require("@material-ui/core/Table"),require("@material-ui/core/TableBody"),require("@material-ui/core/TableFooter"),require("@material-ui/core/TableHead"),require("@material-ui/core/TablePagination"),require("@material-ui/core/Popover")):t(e.react,e.ramda,e["@material-ui/core"],e["@material-ui/core/TableCell"],e.classnames,e["react-dom"],e["@material-ui/core/TableRow"],e.glamor,e["@material-ui/core/Checkbox"],e["@material-ui/icons/InfoOutlined"],e["@material-ui/core/IconButton"],e["react-addons-update"],e["@material-ui/core/Toolbar"],e["@material-ui/core/Typography"],e["@material-ui/core/Paper"],e["@material-ui/icons/Delete"],e["@material-ui/core/Modal/ModalManager"],e["@material-ui/core/Button"],e["@material-ui/core/Select"],e["@material-ui/icons/Add"],e["@material-ui/icons/Edit"],e["prop-types"],e["@material-ui/core/Table"],e["@material-ui/core/TableBody"],e["@material-ui/core/TableFooter"],e["@material-ui/core/TableHead"],e["@material-ui/core/TablePagination"],e["@material-ui/core/Popover"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e,t,r,n,o,a,i,c,u,l,s,p,f,m,h,d,y,v,b,g,E,w,x,j,O,C,P,S){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=28)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=c},function(e,t){e.exports=u},function(e,t){e.exports=l},function(e,t){e.exports=s},function(e,t){e.exports=p},function(e,t){e.exports=f},function(e,t){e.exports=m},function(e,t){e.exports=h},function(e,t){e.exports=d},function(e,t){e.exports=y},function(e,t){e.exports=v},function(e,t){e.exports=b},function(e,t){e.exports=g},function(e,t){e.exports=E},function(e,t){e.exports=w},function(e,t){e.exports=x},function(e,t){e.exports=j},function(e,t){e.exports=O},function(e,t){e.exports=C},function(e,t){e.exports=P},function(e,t){e.exports=S},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e){return function(t){return typeof t===e}}function c(e){return function(t){return Array.isArray(t)&&function(e,t){if(!Array.isArray(e))throw new Error('Expected "array" to be an Array, but got '.concat(Object.prototype.toString.call(e)));return e.reduce((function(r,n,o){return r&&t(n,o,e)}),!0)}(t,(function(t){return h(e,t)}))}}r.r(t);var u=function(e){return function(t){return function(r){return!t&&void 0===r||e(r)}}};function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e;return n.__proto__=a({_isSchemaType:!0,_type:t},r),n}var s=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(e(!!r.required),t,r)}},p={any:s(u((function(e){return void 0!==e})),"any"),string:s(u(i("string")),"string"),boolean:s(u(i("boolean")),"boolean"),function:s(u(i("function")),"function"),number:s(u(i("number")),"number"),date:s(u((function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())})),"date"),array:s(u((function(e){return Array.isArray(e)})),"array"),object:s(u((function(e){return"[object Object]"===Object.prototype.toString.call(e)})),"object"),arrayOf:function(e){return function(t){return s(u(c(e)),"arrayOf")(a({},t,{_elementType:e}))}}};function f(e,t){return"(At ".concat(t,"): Expected a SchemaType, but got ").concat(e,":").concat(typeof e)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e._isSchemaType)return null;if("object"==typeof e&&Object.keys(e).length>0)return Object.keys(e).forEach((function(r){return m(e[r],t+"."+r)})),null;throw new Error(f(e,t))}function h(e,t){try{m(e)}catch(e){throw new Error('Expected "schema" to be a valid schema')}return function e(t,r){if(t._isSchemaType)return t(r);return Object.keys(t).map((function(n){return e(t[n],r&&r[n])})).reduce((function(e,t){return e&&t}),!0)}(e,t)}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e){return(x="function"==typeof Symbol&&"symbol"===w(Symbol.iterator)?function(e){return w(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":w(e)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?j(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=r(0),S=r.n(P),k=r(4),T=r.n(k),R=r(11),N=r.n(R),B=r(1);function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=r(16),A=r.n(_);function M(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I=B.complement(B.isNil),V=B.when(B.complement(Array.isArray),B.of),z=B.curry((function(e,t,r){var n=B.defaultTo(!0)(B.path(["enumerable"],Object.getOwnPropertyDescriptor(r,e)));return Object.defineProperty(r,e,{value:t,enumerable:n}),r})),L=B.curry((function(e,t){var r=!1;return z("length",t.length,(function(){if(!r)return r=!0,setTimeout((function(){return r=!1}),e),t.apply(void 0,arguments)}))})),F=B.curry((function(e,t){var r=Math.max(0|e,20),n=z("length",t.length)((function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return setTimeout((function(){return t.apply(void 0,n)}),r)}));return L(r+5,n)})),H=B.useWith(B.path,[V]),U=B.curryN(2,B.pipe(H,B.is(Function))),W=B.curry((function(e,t,r){if(!U("addEventListener",r))throw new Error("`eventTarget` is not an EventTarget (missing function addEventListener)");r.addEventListener(e,(function n(){r.removeEventListener(e,n),t.apply(void 0,arguments)}))})),$=B.curryN(2,B.converge(B.zipObj,[B.map,B.nthArg(1)])),K=function(e){return e?"".concat(e[0].toUpperCase()).concat(e.slice(1)):e},G=new A.a({handleContainerOverflow:!1});function J(e){var t=function(t,r){return void 0===t[r]?null:e.apply(null,arguments)};return t.isRequired=e,t}var Q={SchemaType:J((function(e,t,r){var n=e[t];if(n&&n.isSchemaType)return null;throw new Error(f(n,r+"."+t))})),Schema:J((function(e,t,r){return m(e[t],r+"."+t)}))};function X(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+t}}var Y={Editor:X("editor"),Cell:X("cell"),ElementRow:X("editor__row"),AddObjectRow:X("editor__add-object"),ColumnTitles:X("editor__column-titles"),ColumnTitle:X("column-title"),EditorInput:X("editor__input")},Z=r(3),ee=r.n(Z),te=r(6),re=r.n(te),ne=r(12),oe=r.n(ne),ae=r(13),ie=r.n(ae),ce=r(14),ue=r.n(ce),le=r(8),se=r.n(le),pe=r(17),fe=r.n(pe),me=r(18),he=r.n(me),de=r(19),ye=r.n(de),ve=r(15),be=r.n(ve),ge=r(20),Ee=r.n(ge),we=r(9),xe=r.n(we),je=r(10),Oe=r.n(je),Ce=r(21),Pe=r.n(Ce),Se=r(22),ke=r.n(Se),Te=r(23),Re=r.n(Te),Ne=r(24),Be=r.n(Ne),qe=r(25),_e=r.n(qe),Ae=r(26),Me=r.n(Ae),De=r(5),Ie=r.n(De),Ve=r(7),ze=r(27),Le=r.n(ze),Fe=r(2);function He(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}var Ue,We=(Ue=null,"undefined"!=typeof window&&W("load",(function(){window.addEventListener("mousemove",(function(e){return Ue=e.target}))}))(window),function(){return Ue}),$e=function(e){E(r,e);var t=He(r);function r(e){var n;y(this,r),(n=t.call(this,e))._refs={popoverContentElement:null,popoverAnchorElement:null},n.state={hoverChildren:!1},n._isMounted=!1,n.checkHovering=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B.F;return function(){if(n._isMounted&&!t()){var r=We();if(r){var o=Ie.a.findDOMNode(j(n)),a=Ie.a.findDOMNode(n._refs.popoverContentElement),i=o&&o.contains(r)||a&&a.contains(r);return e(i)}}}};var o=n.checkHovering((function(e){if(!e)return n.setState({hoverChildren:!1})}),(function(){return!n.state.hoverChildren}));n.handleBodyMove=I(e.hoverEndDurationMs)?F(e.hoverEndDurationMs,o):o;var a=n.checkHovering((function(e){if(e)return n.setState({hoverChildren:!0})}),(function(){return n.state.hoverChildren}));return n.handleComponentMove=I(e.hoverDurationMs)?F(e.hoverDurationMs,a):a,n}return b(r,[{key:"componentDidMount",value:function(){this._isMounted=!0,document.body.addEventListener("mousemove",this.handleBodyMove)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,document.body.removeEventListener("mousemove",this.handleBodyMove)}},{key:"render",value:function(){var e=this,t=this.props.containerStyles,r=void 0===t?{}:t;return S.a.createElement("div",{style:r,onMouseMove:this.handleComponentMove,ref:function(t){e._refs.popoverAnchorElement=t}},this.props.children,S.a.createElement(Le.a,{ref:function(t){e._refs.popoverContentElement=t},className:"".concat(Ke),manager:G,open:this.state.hoverChildren,anchorEl:this._refs.popoverAnchorElement,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},disableRestoreFocus:!0},S.a.createElement(Fe.Box,{pointerEvents:"auto"},this.props.popoverContent)))}}]),r}(S.a.Component),Ke=Ve.css({pointerEvents:"none"});function Ge(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function Je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Qe="shape",Xe="arrayOf",Ye="any",Ze="string",et="boolean",tt="function",rt="number",nt="date",ot="array",at="object";function it(e){return e._isSchemaType?e._type:Qe}var ct={fontFamily:"monospace"},ut=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},ct,{color:"#b966b1"}),lt=function(e){E(r,e);var t=Ge(r);function r(){var e;y(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={expanded:!1},e}return b(r,[{key:"toggleExpanded",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var e=it(this.props.schema);switch(e){case Ye:case Ze:case et:case tt:case rt:case nt:case ot:case at:return"string"==typeof this.props.keyName?S.a.createElement(mt,{preview:S.a.createElement(st,{schemaTypeName:e}),schemaElement:S.a.createElement(st,{schemaTypeName:e}),keyName:this.props.keyName}):S.a.createElement(st,{schemaTypeName:e});case Qe:return"string"==typeof this.props.keyName?S.a.createElement(mt,{schemaElement:S.a.createElement(pt,{schema:this.props.schema}),keyName:this.props.keyName,onToggleExpanded:this.toggleExpanded.bind(this),preview:"Shape",expanded:this.state.expanded}):S.a.createElement(pt,{schema:this.props.schema});case Xe:return"string"==typeof this.props.keyName?S.a.createElement(mt,{schemaElement:S.a.createElement(r,{schema:this.props.schema._elementType}),keyName:this.props.keyName,onToggleExpanded:this.toggleExpanded.bind(this),preview:"ArrayOf",expanded:this.state.expanded}):S.a.createElement(Fe.Box,{display:"flex",cursor:"default"},S.a.createElement(Fe.Box,{width:ft}),S.a.createElement(Fe.Box,{display:"flex",flexDirection:"column"},S.a.createElement(Fe.Box,{css:ct},"ArrayOf"),S.a.createElement(r,{schema:this.props.schema._elementType})));default:throw new Error("invalid schema type identifier")}}}]),r}(S.a.Component);lt.displayName="SchemaView";var st=function(e){E(r,e);var t=Ge(r);function r(){return y(this,r),t.apply(this,arguments)}return b(r,[{key:"render",value:function(){return S.a.createElement(Fe.Box,{css:ct},this.props.schemaTypeName)}}]),r}(S.a.Component);st.displayName="LeafSchema";var pt=function(e){E(r,e);var t=Ge(r);function r(){return y(this,r),t.apply(this,arguments)}return b(r,[{key:"render",value:function(){return S.a.createElement("div",null,B.toPairs(this.props.schema).map((function(e){var t=q(e,2),r=t[0],n=t[1];return S.a.createElement(lt,{key:r,schema:n,keyName:r})})))}}]),r}(S.a.Component);pt.displayName="ShapeSchema";var ft="16px",mt=function(e){E(r,e);var t=Ge(r);function r(){return y(this,r),t.apply(this,arguments)}return b(r,[{key:"render",value:function(){var e=""===this.props.keyName?'""':this.props.keyName;if(!this.props.onToggleExpanded)return S.a.createElement(Fe.Box,{display:"flex",cursor:"default"},S.a.createElement(Fe.Box,{width:ft}),S.a.createElement(Fe.Box,{display:"flex",flexDirection:"row"},S.a.createElement(Fe.Box,{marginRight:"10px",css:ut,onClick:this.props.onToggleExpanded},e,":"),S.a.createElement(Fe.Box,{css:ct},this.props.preview)));var t=this.props.expanded?"▼":"▶";return S.a.createElement(Fe.Box,{display:"flex",cursor:"default"},S.a.createElement(Fe.Box,{display:"flex",width:ft,onClick:this.props.onToggleExpanded},S.a.createElement(Fe.Box,{fontSize:"9px",padding:"2px"},t)),S.a.createElement(Fe.Box,{display:"flex",flexDirection:"column"},S.a.createElement(Fe.Box,{display:"flex",flexDirection:"row",onClick:this.props.onToggleExpanded},S.a.createElement(Fe.Box,{marginRight:"10px",css:ut},e,":"),S.a.createElement(Fe.Box,{css:ct},this.props.preview)),this.props.expanded&&S.a.createElement(Fe.Box,null,this.props.schemaElement)))}}]),r}(S.a.Component);mt.displayName="KeyValueSchemaView";var ht=function(e){var t=S.a.createElement(Fe.Box,{padding:"15px"},S.a.createElement(lt,{schema:e.schema}));return S.a.createElement($e,{hoverDurationMs:300,popoverContent:t,containerStyles:{display:"inline-flex"}},e.children)};function dt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}Q.Schema.isRequired,Pe.a.string;function yt(e){return"object"==typeof e?"Object":function(e){return e._type&&null!==e._type.match(/array/)}(e)?"Array of "+yt(e._elementType||p.any):K(e._type)}var vt=function(e){E(r,e);var t=dt(r);function r(){return y(this,r),t.apply(this,arguments)}return b(r,[{key:"render",value:function(){return S.a.createElement(ee.a,null,S.a.createElement(ht,{schema:this.props.schema},S.a.createElement(Fe.Box,{display:"inline-flex",cursor:"default"},S.a.createElement(Fe.Box,{marginRight:"5px"},this.props.children),S.a.createElement(xe.a,{style:bt}))))}}]),r}(S.a.Component);vt.displayName="ColumnTitle";var bt={fontSize:"16px"},gt=function(e){E(r,e);var t=dt(r);function r(){var e;y(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).renderPrimitiveColumns=function(){return S.a.createElement(vt,{schema:e.props.type},yt(e.props.type))},e.renderObjectColumns=function(){return Object.keys(e.props.type).map((function(t){return S.a.createElement(vt,{key:t,schema:e.props.type[t]},t)}))},e}return b(r,[{key:"render",value:function(){var e=Boolean(this.props.type._isSchemaType),t=2+Object.keys(this.props.type).length;return S.a.createElement(ke.a,{className:T()(Y.Editor(),this.props.className)},S.a.createElement(_e.a,null,S.a.createElement(re.a,{className:Y.ColumnTitles()},S.a.createElement(ee.a,{padding:"checkbox"},this.props.onSelectAll&&S.a.createElement(se.a,{checked:this.props.checked,indeterminate:this.props.indeterminate,onChange:this.props.onSelectAll})),e?this.renderPrimitiveColumns():this.renderObjectColumns(),S.a.createElement(ee.a,null))),S.a.createElement(Re.a,null,this.props.children),this.props.onSelectAll&&S.a.createElement(Be.a,null,S.a.createElement(re.a,null,S.a.createElement(Me.a,{colSpan:t,count:this.props.totalElements,rowsPerPage:this.props.rowsPerPage,page:this.props.page,onChangePage:this.props.onChangePage,onChangeRowsPerPage:this.props.onChangeRowsPerPage}))))}}]),r}(S.a.Component);function Et(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}gt.displayName="BaseTable";new WeakMap;var wt,xt,jt,Ot=function(e){E(r,e);var t=Et(r);function r(e){var n;return y(this,r),(n=t.call(this,e)).handleRootClick=function(e){if(!n.props.disabled&&!Ie.a.findDOMNode(j(n)).contains(e.target))return n.props.onClickScrim(e)},n}return b(r,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleRootClick)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleRootClick)}},{key:"render",value:function(){return this.props.children}}]),r}(S.a.Component);function Ct(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function Pt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function St(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pt(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Ot.displayName="ScrimComponent";var kt="top",Tt="bottom",Rt="left",Nt="right",Bt="start",qt="middle",_t="end",At="start",Mt="middle",Dt="end",It=(B.flip(B.prop)((n(wt={},kt,Tt),n(wt,Tt,kt),n(wt,Rt,Nt),n(wt,Nt,Rt),wt)),n(xt={},kt,!0),n(xt,Tt,!0),n(xt,Rt,!1),n(xt,Nt,!1),xt),Vt=(n(jt={},kt,!1),n(jt,Tt,!1),n(jt,Rt,!0),n(jt,Nt,!0),jt);var zt=function(e){return function(t){return new TypeError("Invalid ".concat(e,": ").concat(t," is not a ").concat(e,"."))}},Lt=zt("anchor"),Ft=zt("position"),Ht=zt("alignment");function Ut(e,t,r,n){var o=B.pick(["top","right","bottom","left","width","height"])(e);if(It[r])switch(n){case Bt:return St({},o,{left:o.left+.5*t.width,right:o.right+.5*t.width});case qt:return o;case _t:return St({},o,{left:o.left-.5*t.width,right:o.right-.5*t.width});default:throw Lt(n)}switch(n){case Bt:return St({},o,{top:o.top+.5*t.height,bottom:o.bottom+.5*t.height});case qt:return o;case _t:return St({},o,{top:o.top-.5*t.height,bottom:o.bottom-.5*t.height});default:throw Lt(n)}}function Wt(e,t,r,n,o){var a=t.width,i=e.left,c=e.right;if(It[n])switch(o){case At:return i;case Mt:return(i+c)/2-a/2;case Dt:return c-a;default:throw Ht(o)}switch(n){case Rt:return i-a;case Nt:return c;default:throw Ft(n)}}function $t(e,t,r,n,o){var a=t.height,i=e.top,c=e.bottom;if(Vt[n])switch(o){case At:return i;case Mt:return(i+c)/2-a/2;case Dt:return c-a;default:throw Ht(o)}switch(n){case kt:return i-a;case Tt:return c;default:throw Ft(n)}}function Kt(e,t,r,n){return Math.min(Math.max(e,r),n-t)}var Gt=function(e){E(r,e);var t=Ct(r);function r(e){var n;return y(this,r),(n=t.call(this,e))._refs={mainContent:null,hoverContent:null},n.trackRef=function(e){return function(t){n._refs[e]=t}},n}return b(r,[{key:"render",value:function(){var e=this,t=q(e.props.visible&&e._refs.mainContent&&e._refs.hoverContent?function(e,t,r,n,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:qt,i=Ut(e,t,n,a);return[Kt(Wt(i,t,0,n,o),t.width,0,r.width),Kt($t(i,t,0,n,o),t.height,0,r.height)]}(e._refs.mainContent.getBoundingClientRect(),e._refs.hoverContent.getBoundingClientRect(),{width:window.innerWidth,height:window.innerHeight},e.props.position||Tt,e.props.alignment||Mt,e.props.anchor):[0,0],2),r=t[0],n=t[1];return S.a.createElement(Ot,{disabled:!this.props.visible,onClickScrim:this.props.onScrimClick||B.T},S.a.createElement("div",null,S.a.createElement("div",{ref:this.trackRef("mainContent")},this.props.children),S.a.createElement("div",{style:{position:"fixed",display:"block",left:"".concat(r,"px"),top:"".concat(n,"px"),visibility:this.props.visible?"visible":"hidden",zIndex:"1"},ref:this.trackRef("hoverContent")},this.props.pinContent)))}}]),r}(S.a.Component);function Jt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}var Qt=function(){return null},Xt=function(e){E(r,e);var t=Jt(r);function r(){var e;y(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selected:new Map,page:0,rowsPerPage:e.props.defaultRowsPerPage},e}return b(r,[{key:"handleDeleteElements",value:function(e){for(var t=$(B.identity,e),r=new Map,n=0,o=0;o<this.props.object.length;o++)o in t?n+=1:this.state.selected.has(o)&&r.set(o-n,!0);this.props.onRemoveElements(e),this.setState({selected:r})}},{key:"render",value:function(){var e=this,t=!!this.props.object&&this.state.selected.size===this.props.object.length,r=this.props.object?this.props.object.length:0,n=this.props.object?this.props.object.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage):[],o=B.add(this.state.page*this.state.rowsPerPage);return S.a.createElement(ue.a,null,S.a.createElement(tr,{schema:this.props.type,onDeleteAll:function(){return e.handleDeleteElements(Array.from(e.state.selected.keys()))},size:this.state.selected.size}),S.a.createElement(gt,{type:this.props.type,className:T()(Y.Editor("--array"),this.props.className),onSelectAll:function(){if(t)return e.setState({selected:new Map});var r=new Map;return e.props.object.forEach((function(e,t){return r.set(t,!0)})),e.setState({selected:r})},checked:t,indeterminate:!t&&this.state.selected.size>0,totalElements:r,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:function(t,r){return e.setState({page:r})},onChangeRowsPerPage:function(t){return e.setState({rowsPerPage:t.target.value})}},n.map((function(t,r){var n=o(r);return S.a.createElement(cr,{parentVisible:e.props.parentVisible,key:n,className:Y.ElementRow("--array"),type:e.props.type,object:t,onChange:function(t){return e.props.onUpdateElement(t,n)},onRemove:function(){return e.handleDeleteElements([n])},isSelected:e.state.selected.has(n),onSelect:function(){var t=Boolean(e.state.selected.get(n)),r=function(e){var t,r=new Map,n=M(e);try{for(n.s();!(t=n.n()).done;){var o=q(t.value,2),a=o[0],i=o[1];r.set(a,i)}}catch(e){n.e(e)}finally{n.f()}return r}(e.state.selected);return t?r.delete(n):r.set(n,!0),e.setState({selected:r})}})})),S.a.createElement(nr,{type:this.props.type,onAddElement:this.props.onAddElement})))}}]),r}(S.a.Component);Xt.displayName="Editor",Xt.defaultProps={className:"",defaultRowsPerPage:10};var Yt=Ve.css({justifyContent:"space-between"}),Zt=Ve.css({background:"#f5015622"}),er=function(e){return S.a.createElement(oe.a,{className:"".concat(Yt)},S.a.createElement(ht,{schema:e.schema},S.a.createElement(Fe.Box,{display:"inline-flex",alignItems:"center",cursor:"default"},S.a.createElement(Fe.Box,{marginRight:"5px"},S.a.createElement(ie.a,{variant:"h6"},e.title)),S.a.createElement(xe.a,{style:{fontSize:"1em"}}))))};er.displayName="BasicToolbar";var tr=function(e){return 0===e.size?S.a.createElement(er,{schema:e.schema,title:"Array"}):S.a.createElement(oe.a,{className:"".concat(Yt," ").concat(Zt)},S.a.createElement(ie.a,{variant:"h6"},e.size," selected"),S.a.createElement(Oe.a,{color:"default","aria-label":"Delete selected elements",onClick:e.onDeleteAll},S.a.createElement(be.a,null)))};tr.displayName="ArrayToolbar";var rr=function(e){E(r,e);var t=Jt(r);function r(){return y(this,r),t.apply(this,arguments)}return b(r,[{key:"render",value:function(){var e="object"==typeof this.props.type?"Object":K(it(this.props.type));return S.a.createElement(ue.a,null,S.a.createElement(er,{schema:this.props.type,title:e}),S.a.createElement(gt,{type:this.props.type,className:T()(Y.Editor("--object"),this.props.className)},S.a.createElement(cr,{parentVisible:this.props.parentVisible,className:Y.ElementRow("--object"),trash:Qt,type:this.props.type,object:this.props.object,onChange:this.props.onUpdateElement,onRemove:Qt})))}}]),r}(S.a.Component);rr.displayName="ObjectEditor",rr.defaultProps={className:""};var nr=function(e){E(r,e);var t=Jt(r);function r(e){var n;return y(this,r),(n=t.call(this,e)).add=function(){if(null!==n.state.object)return n.props.onAddElement(n.state.object)?n.setState({object:null}):void 0},n.addButton=function(){return S.a.createElement(fe.a,{color:"primary",variant:"contained",onClick:n.add},"New",S.a.createElement(ye.a,null))},n.updateObject=function(e){n.setState({object:e})},n.state={object:null},n}return b(r,[{key:"render",value:function(){var e=T()(Y.AddObjectRow());return S.a.createElement(cr,{className:e,type:this.props.type,trash:this.addButton,object:this.state.object,onChange:this.updateObject,onRemove:Qt})}}]),r}(S.a.Component);nr.displayName="AddObjectRow";var or=function(e){E(r,e);var t=Jt(r);function r(){return y(this,r),t.apply(this,arguments)}return b(r,[{key:"render",value:function(){var e=this,t=T()("form-control",Y.EditorInput(),Y.EditorInput("--value"));return S.a.createElement(ee.a,{className:Y.Cell("--value")},S.a.createElement("input",{className:t,type:"text",value:this.props.value||"",required:this.props.type.required,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),r}(S.a.Component);or.displayName="StringCell";var ar=function(e){E(r,e);var t=Jt(r);function r(){return y(this,r),t.apply(this,arguments)}return b(r,[{key:"render",value:function(){var e=this;return S.a.createElement(ee.a,{className:Y.Cell("--value")},S.a.createElement(he.a,{native:!0,value:String(Boolean(this.props.value)),onChange:function(t){return e.props.onChange("true"===t.target.value.toLowerCase())}},S.a.createElement("option",{value:!0},"True"),S.a.createElement("option",{value:!1},"False")))}}]),r}(S.a.Component);ar.displayName="BooleanCell";var ir=function(e){E(r,e);var t=Jt(r);function r(){var e;y(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={open:!1},e.clickEdit=function(t){e.setState({open:!e.state.open})},e.close=function(t){e.setState({open:!1})},e.renderEditor=function(){var t=e.props.type._type&&null!==e.props.type._type.match(/array/)||Array.isArray(e.props.value),r=t?Xt:rr,o=t?e.props.type._elementType||p.any:e.props.type,a=e.props.value||[];return S.a.createElement(r,{parentVisible:e.state.open,className:Y.Editor("--inside"),type:o,object:e.props.value,onUpdateElement:function(t,r){return void 0!==r?e.props.onChange(N()(a,n({},r,{$set:t}))):e.props.onChange(t)},onRemoveElements:function(t){var r=$(B.identity,t);e.props.onChange(B.addIndex(B.reject)((function(e,t){return t in r}),a))},onAddElement:function(t){return e.props.onChange([].concat(d(a),[t])),!0}})},e}return b(r,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.value!==e.value||this.state.open!==t.open||this.props.parentVisible!==e.parentVisible}},{key:"render",value:function(){return"boolean"!=typeof this.props.parentVisible||this.props.parentVisible?S.a.createElement(ee.a,{className:Y.Cell("--object")},S.a.createElement(Gt,{visible:this.state.open,position:"bottom",anchor:"middle",alignment:"middle",pinContent:this.renderEditor(),onScrimClick:this.state.open?this.close:function(){}},S.a.createElement(Fe.Box,{position:"relative",display:"block"},S.a.createElement(Oe.a,{color:"default","aria-label":"Edit value",onClick:this.clickEdit},S.a.createElement(Ee.a,null))))):null}}]),r}(S.a.Component);ir.displayName="ObjectCell";var cr=function(e){var t=S.a.createElement(Oe.a,{color:"default","aria-label":"Delete element",onClick:e.onRemove},S.a.createElement(be.a,null)),r=function(t,r,n,o){var a=function(e){switch(e){case"string":case"number":case"date":return or;case"boolean":return ar;default:return ir}}(t._type);return S.a.createElement(a,{parentVisible:e.parentVisible,key:o,type:t,value:r,onChange:n})},o=T()(Y.ElementRow(),e.className||"");return S.a.createElement(re.a,{className:o},S.a.createElement(ee.a,{padding:"checkbox"},e.onSelect&&S.a.createElement(se.a,{checked:e.isSelected,onChange:e.onSelect})),e.type._isSchemaType?r(e.type,e.object||null,e.onChange):B.map((function(t){var o=e.object?e.object[t]:null;return r(e.type[t],o,function(t){return function(r){return e.object?e.onChange(N()(e.object,n({},t,{$set:r}))):e.onChange(n({},t,r))}}(t),t)}),Object.keys(e.type)),S.a.createElement(ee.a,null,e.trash?e.trash():t))};cr.displayName="ElementRow",r.d(t,"SchemaTypes",(function(){return p})),r.d(t,"matchesSchema",(function(){return h})),r.d(t,"ObjectEditor",(function(){return rr})),r.d(t,"ArrayEditor",(function(){return Xt})),r.d(t,"PropTypes",(function(){return Q}))}])}));