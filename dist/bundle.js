"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function consl(e){var t=process.env.NODE_ENV||window&&window.__env__&&window.__env__.NODE_ENV;if(["test","development"].indexOf(t)>-1){for(var o,r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];(o=console)[e].apply(o,n)}}function log(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.unshift(banner),consl.apply(void 0,["log"].concat(t)),["log"].concat(t)}function info(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.unshift(banner),consl.apply(void 0,["info"].concat(t)),["info"].concat(t)}function debug(e,t,o){var r=o,n=t,a=[e];return a.unshift(banner),n===-1&&(n=(new Date).getTime()),"number"==typeof n&&"number"!=typeof r&&(r=(new Date).getTime()),n&&r&&a.push("["+(r-n)+"ms]"),consl.apply(void 0,["info"].concat(a)),["info"].concat(a)}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function createComponent(e,t){for(var o=arguments.length,r=Array(o>2?o-2:0),n=2;n<o;n++)r[n-2]=arguments[n];return new(Function.prototype.bind.apply(_PlasmaticComponent2.default,[null].concat([e,t],r)))}function createLiteral(e){return new _TextNode2.default(e)}function createDomNode(e){var t=e.toDom();return e.childNodes&&e.childNodes.forEach(function(e){createDomNode(e),t.appendChild(e.$domReference)}),t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function isHtmlTag(e){var t=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];return null!==e&&t.indexOf(e.toLowerCase())>-1}Object.defineProperty(exports,"__esModule",{value:!0});var _Renderer=require("./lib/Renderer"),_Renderer2=_interopRequireDefault(_Renderer),_Plasmatic=require("./lib/Plasmatic"),_Plasmatic2=_interopRequireDefault(_Plasmatic);exports.default={App:_Plasmatic2.default,createComponent:_Renderer2.default.createComponent,createLiteral:_Renderer2.default.createLiteral},Object.defineProperty(exports,"__esModule",{value:!0});var banner="[PLASMATIC]";exports.default={log:log,info:info,debug:debug,consl:consl},Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),_PlasmaticError=require("./PlasmaticError"),_PlasmaticError2=_interopRequireDefault(_PlasmaticError),_Logger=require("./Logger"),_Logger2=_interopRequireDefault(_Logger),_Renderer=require("./Renderer"),_Renderer2=_interopRequireDefault(_Renderer),_PlasmaticNode=require("./models/PlasmaticNode"),_PlasmaticNode2=_interopRequireDefault(_PlasmaticNode),Plasmatic=function(){function e(t){var o=this;if(_classCallCheck(this,e),!t)throw new _PlasmaticError2.default("Application ID must be specified");this.$applicationId=t,document.addEventListener("DOMContentLoaded",function(){o.run()}),_Logger2.default.info("Plasmatic is running application ("+this.$applicationId+")")}return _createClass(e,[{key:"render",value:function(e){if(!e)throw new _PlasmaticError2.default("Application render method called without Plasmatic component");this.$mountPoint=e}},{key:"run",value:function(){if(this.$startMicroseconds=(new Date).getTime(),_Logger2.default.debug("DOM Content Loaded",this.$startMicroseconds),this.$applicationContainer=document.querySelectorAll('[pm-component="'+this.$applicationId+'"]')[0],!this.$applicationContainer)throw Error('Application mount point [pm-component="'+this.$applicationId+'"] not found');this.mountApplication(),_Logger2.default.debug("Application mounted",this.$startMicroseconds)}},{key:"mountApplication",value:function(){if(this.$mountPoint){var e=_Renderer2.default.createDomNode(this.$mountPoint);this.$applicationContainer.appendChild(e)}}}]),e}();exports.default=Plasmatic,Object.defineProperty(exports,"__esModule",{value:!0});var PlasmaticError=function e(t){_classCallCheck(this,e);var o=new Error(t);return o.name="Plasmatic Error",o};exports.default=PlasmaticError,Object.defineProperty(exports,"__esModule",{value:!0});var _PlasmaticComponent=require("./models/PlasmaticComponent"),_PlasmaticComponent2=_interopRequireDefault(_PlasmaticComponent),_PlasmaticNode=require("./models/PlasmaticNode"),_PlasmaticNode2=_interopRequireDefault(_PlasmaticNode),_TextNode=require("./models/TextNode"),_TextNode2=_interopRequireDefault(_TextNode);exports.default={createLiteral:createLiteral,createComponent:createComponent,createDomNode:createDomNode};var _PlasmaticNode=require("./models/PlasmaticNode"),_PlasmaticNode2=_interopRequireDefault(_PlasmaticNode);Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),_PlasmaticNode2=require("./PlasmaticNode"),_PlasmaticNode3=_interopRequireDefault(_PlasmaticNode2),HtmlNode=function(e){function t(e,o){_classCallCheck(this,t);for(var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o)),n=arguments.length,a=Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return r.childNodes=a,r}return _inherits(t,e),_createClass(t,[{key:"toDom",value:function(){return this.$domReference=document.createElement(this.type),this.$domReference}}]),t}(_PlasmaticNode3.default);exports.default=HtmlNode,Object.defineProperty(exports,"__esModule",{value:!0});var _DomUtils=require("../utils/DomUtils"),_DomUtils2=_interopRequireDefault(_DomUtils),_HtmlNode=require("./HtmlNode"),_HtmlNode2=_interopRequireDefault(_HtmlNode),_TextNode=require("./TextNode"),_TextNode2=_interopRequireDefault(_TextNode),_PlasmaticNode=require("./PlasmaticNode"),_PlasmaticNode2=_interopRequireDefault(_PlasmaticNode),PlasmaticComponent=function e(t,o){_classCallCheck(this,e);var r=!1;if(_DomUtils2.default.isHtmlTag(t)){for(var n=arguments.length,a=Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];r=new(Function.prototype.bind.apply(_HtmlNode2.default,[null].concat([t,o],a)))}else r=new _TextNode2.default("{undefined}");return r};exports.default=PlasmaticComponent,Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),PlasmaticNode=function(){function e(t,o){_classCallCheck(this,e),this.type=t,null!==o&&"object"===("undefined"==typeof o?"undefined":_typeof(o))?this.props=o:this.props={}}return _createClass(e,[{key:"setState",value:function(e){this.state=e}},{key:"getNode",value:function(){return this}},{key:"setType",value:function(e){this.type=e}},{key:"toDom",value:function(){return this.$domReference=document.createTextNode(this.type),this.$domReference}},{key:"toJson",value:function(){return{node:this}}},{key:"setParentNode",value:function(e){this.$parentNode=e}},{key:"getParentNode",value:function(){return this.$parentNode}}]),e}();exports.default=PlasmaticNode,Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),_PlasmaticNode2=require("./PlasmaticNode"),_PlasmaticNode3=_interopRequireDefault(_PlasmaticNode2),TextNode=function(e){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,t);for(var r=arguments.length,n=Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];var i=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o,n));return i.content=e,i}return _inherits(t,e),_createClass(t,[{key:"toDom",value:function(){return this.$domReference=document.createTextNode(this.content),this.$domReference}}]),t}(_PlasmaticNode3.default);exports.default=TextNode,Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={isHtmlTag:isHtmlTag};