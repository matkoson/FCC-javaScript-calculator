(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_Styles_App_sass__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(19),_Styles_App_sass__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_Styles_App_sass__WEBPACK_IMPORTED_MODULE_7__),_assets_sinkin_sans_SinkinSans_200XLight_woff__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(20),_assets_sinkin_sans_SinkinSans_200XLight_woff__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_sinkin_sans_SinkinSans_200XLight_woff__WEBPACK_IMPORTED_MODULE_8__),_Components_Display__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(10),_Styles_Display_sass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(21),_Styles_Display_sass__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_Styles_Display_sass__WEBPACK_IMPORTED_MODULE_10__),_Components_Keyboard__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(11),operators=["+","-","*","/"],basicOps=["+","-"],priorityOps=["*","/"],customEval=function customEval(string){var len=string.length;return string="0"===string[0]?string.slice(1):string,string=operators.includes(string[len-1])||"."===string[len-1]?string.slice(0,len-1):string,String(eval(String(string)))},App=function(e){function _(e){var a;return Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),(a=Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).call(this,e))).state={inputCalc:"",potentialVal:"",currDisplay:"0",previousVal:""},a.handleNumKeyClick=a.handleNumKeyClick.bind(Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(a))),a.handleOperatorClick=a.handleOperatorClick.bind(Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(a))),a.handleResult=a.handleResult.bind(Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(a))),a.handleStateClearing=a.handleStateClearing.bind(Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(a))),a}return Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(_,e),Object(_home_mateusz_1_worldTree_1_fullStackBranch_2_books_courses_20_freeCodeCamp_projects_frontEndLibs_JavaScriptCalculator_js_calc_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"handleStateClearing",value:function(){return this.setState({inputCalc:"",currDisplay:"0",potentialVal:"",previousVal:""})}},{key:"handleResult",value:function(){var e=this.state,_=e.inputCalc,a=e.potentialVal,r=e.previousVal;a=a?customEval(a):null;var t=customEval(a?String(_).slice(0,_.length-r.length)+a:_);this.setState(function(e){return{inputCalc:t,currDisplay:t,previousVal:t}})}},{key:"handleNumKeyClick",value:function(e){var _=this.state,a=_.potentialVal,r=_.currDisplay,t=e.currentTarget.dataset.calcdata,o=r[r.length-1];return a.includes("*")||a.includes("/")?this.setState(function(e){return{currDisplay:e.currDisplay+t,potentialVal:e.potentialVal?e.potentialVal+t:e.previousVal+t}}):basicOps.includes(o)||priorityOps.includes(o)?this.setState(function(e){return{currDisplay:t,inputCalc:e.inputCalc+t,previousVal:t}}):void this.setState(function(e){return{currDisplay:"0"===e.currDisplay?t:e.currDisplay+t,inputCalc:e.inputCalc+t,previousVal:e.previousVal+t}})}},{key:"handleOperatorClick",value:function(e){var _=this.state.inputCalc,a=e.currentTarget.dataset.calcdata,r=_[_.length-1];return operators.includes(r)?this.setState(function(e){return{inputCalc:e.inputCalc.slice(0,e.inputCalc.length-1)+a,potentialVal:"",currDisplay:a}}):priorityOps.includes(a)?this.setState(function(e){return{currDisplay:a,inputCalc:e.potentialVal?e.inputCalc+customEval(e.potentialVal):e.inputCalc,potentialVal:e.previousVal+a,previousVal:e.currDisplay}}):basicOps.includes(a)?this.setState(function(e){return{currDisplay:a,inputCalc:e.potentialVal?e.inputCalc.slice(0,e.inputCalc.length-e.previousVal.length)+customEval(e.potentialVal)+a:e.inputCalc+a,potentialVal:"",previousVal:""}}):void 0}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main",{className:"app"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"js-calc"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_Display__WEBPACK_IMPORTED_MODULE_9__.a,{primaryDisplay:this.state.currDisplay,secondaryDisplay:this.state.inputCalc}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_Keyboard__WEBPACK_IMPORTED_MODULE_11__.a,{currDisplay:this.state.currDisplay,handleStateClearing:this.handleStateClearing,handleNumKeyClick:this.handleNumKeyClick,handleOperatorClick:this.handleOperatorClick,handleResult:this.handleResult})))}}]),_}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=App},function(e,_,a){"use strict";var r=a(2),t=a(3),o=a(5),s=a(4),l=a(6),n=a(0),c=a.n(n),i=function(e){function _(e){var a;return Object(r.a)(this,_),(a=Object(o.a)(this,Object(s.a)(_).call(this,e))).state={},a}return Object(l.a)(_,e),Object(t.a)(_,[{key:"render",value:function(){return c.a.createElement("div",{className:"display"},c.a.createElement("div",{className:"display__secondary-display"},this.props.secondaryDisplay),c.a.createElement("div",{id:"display",className:"display__primary-display"},this.props.primaryDisplay))}}]),_}(n.Component);_.a=i},function(e,_,a){"use strict";a.d(_,"a",function(){return o});var r=a(0),t=a.n(r);function o(e){var _=e.handleNumKeyClick,a=e.handleResult,r=e.handleOperatorClick,o=e.handleStateClearing,s=e.currDisplay;return t.a.createElement("div",{className:"keyboard"},t.a.createElement("div",{className:"keyboard__keyboard-row-key"},t.a.createElement("div",{id:"clear","data-calcdata":"AC",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn",onClick:o},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"AC")),t.a.createElement("div",{"data-calcdata":"\xb1",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"\xb1")),t.a.createElement("div",{"data-calcdata":"Del",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"Del")),t.a.createElement("div",{id:"divide","data-calcdata":"/",className:"keyboard__keyboard-row-key__key-btn  keyboard__keyboard-row-key__key-btn--operation-btn",onClick:r},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"/"))),t.a.createElement("div",{className:"keyboard__keyboard-row-key"},t.a.createElement("div",{id:"seven","data-calcdata":"7",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"7")),t.a.createElement("div",{id:"eight","data-calcdata":"8",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"8")),t.a.createElement("div",{id:"nine","data-calcdata":"9",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"9")),t.a.createElement("div",{id:"multiply","data-calcdata":"*",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn",onClick:r},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"*"))),t.a.createElement("div",{className:"keyboard__keyboard-row-key"},t.a.createElement("div",{id:"four","data-calcdata":"4",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"4")),t.a.createElement("div",{id:"five","data-calcdata":"5",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"5")),t.a.createElement("div",{id:"six","data-calcdata":"6",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"6")),t.a.createElement("div",{id:"subtract","data-calcdata":"-",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn",onClick:r},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"-"))),t.a.createElement("div",{className:"keyboard__keyboard-row-key"},t.a.createElement("div",{id:"one","data-calcdata":"1",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"1")),t.a.createElement("div",{id:"two","data-calcdata":"2",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"2")),t.a.createElement("div",{id:"three","data-calcdata":"3",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"3")),t.a.createElement("div",{id:"add","data-calcdata":"+",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn",onClick:r},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"+"))),t.a.createElement("div",{className:"keyboard__keyboard-row-key"},t.a.createElement("div",{id:"zero","data-calcdata":"0",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--double keyboard__keyboard-row-key__key-btn--number-btn",onClick:_},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"0")),t.a.createElement("div",{id:"decimal","data-calcdata":".",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn",onClick:function(e){s.includes(".")||_(e)}},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},".")),t.a.createElement("div",{"data-calcdata":"=",id:"equals",className:"keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn",onClick:a},t.a.createElement("span",{className:"keyboard__keyboard-row-key__key-btn__symbol"},"="))))}},function(e,_,a){e.exports=a(22)},,,,,,function(e,_,a){},function(e,_,a){},function(e,_,a){e.exports=a.p+"static/media/SinkinSans-200XLight.8126f07c.woff"},function(e,_,a){},function(e,_,a){"use strict";a.r(_);var r=a(0),t=a.n(r),o=a(8),s=a.n(o),l=(a(18),a(9));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.8c158b97.chunk.js.map