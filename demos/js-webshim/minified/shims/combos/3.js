jQuery.webshims.register("dom-extend",function(e,t,i,n,a){"use strict";t.assumeARIA=Modernizr.localstorage||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims.");var r=t.modules,o=/\s*,\s*/,s={},u={},l={},c={},d={},p=e.fn.val,h=function(t,i,n,a,r){return r?p.call(e(t)):p.call(e(t),n)};e.fn.val=function(t){var i=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return i&&1===i.nodeType?e.prop(i,"value",t,"val",!0):p.call(this);if(e.isArray(t))return p.apply(this,arguments);var n=e.isFunction(t);return this.each(function(r){if(i=this,1===i.nodeType)if(n){var o=t.call(i,r,e.prop(i,"value",a,"val",!0));null==o&&(o=""),e.prop(i,"value",o,"val")}else e.prop(i,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)};var f="_webshimsLib"+Math.round(1e3*Math.random()),m=function(t,i,n){if(t=t.jquery?t[0]:t,!t)return n||{};var r=e.data(t,f);return n!==a&&(r||(r=e.data(t,f,{})),i&&(r[i]=n)),i?r&&r[i]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){return this.map(function(){var e=m(this,"shadowData");return e&&e[t.prop]||this})}}),e.Tween.propHooks._default&&e.extend(e.Tween.propHooks._default,{get:function(t){var i;return null==t.elem[t.prop]&&!u[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(i=jQuery.css(t.elem,t.prop,""),i&&"auto"!==i?i:0):u[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):u[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}}),["removeAttr","prop","attr"].forEach(function(i){s[i]=e[i],e[i]=function(t,n,r,o,c){var p="val"==o,f=p?h:s[i];if(!t||!u[n]||1!==t.nodeType||!p&&o&&"attr"==i&&e.attrFn[n])return f(t,n,r,o,c);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=l[y],w="attr"!=i||r!==!1&&null!==r?i:"removeAttr";if(b||(b=l["*"]),b&&(b=b[n]),b&&(m=b[w]),m){if("value"==n&&(v=m.isVal,m.isVal=p),"removeAttr"===w)return m.value.call(t);if(r===a)return m.get?m.get.call(t):m.value;m.set&&("attr"==i&&r===!0&&(r=n),g=m.set.call(t,r)),"value"==n&&(m.isVal=v)}else g=f(t,n,r,o,c);if((r!==a||"removeAttr"===w)&&d[y]&&d[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!r:!0,d[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==i)||"attr"==e.only&&"prop"!=i)&&e.call(t,r,T,p?"val":w,i)})}return g},c[i]=function(e,n,r){l[e]||(l[e]={}),l[e][n]||(l[e][n]={});var o=l[e][n][i],u=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==i&&"value"==n?function(e){var t=this;return r.isVal?h(t,n,e,!1,0===arguments.length):s[i](t,n,e)}:"prop"==i&&"value"==e&&r.value.apply?function(){var e=s[i](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return s[i](this,n,e)}};l[e][n][i]=r,r.value===a&&(r.set||(r.set=r.writeable?u("set",r,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),r.get||(r.get=u("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=u(e,o))})}});var v=function(){var e=t.getPrototypeOf(n.createElement("foobar")),i=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(r,o,s){var u,l;if(!(a&&(u=n.createElement(r))&&(l=t.getPrototypeOf(u))&&e!==l)||u[o]&&i.call(u,o))s._supvalue=function(){var e=m(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},g.extendValue(r,o,s.value);else{var c=u[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},l[o]=s.value}s.value._supvalue=s._supvalue}}(),g=function(){var i={};t.addReady(function(n,r){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(i,function(e,i){return s(e),i&&i.forEach?(i.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+i),a)}),o=null});var r,o=e([]),s=function(t,a){i[t]?i[t].push(a):i[t]=[a],e.isDOMReady&&(r||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(n.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,i){s(t,function(){var t=e.attr(this,i);null!=t&&e.attr(this,i,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,i,n){s(t,function(){e(this).each(function(){var e=m(this,"propValue",{});e[i]=this[i],this[i]=n})})}}}(),y=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(i){i=e(i);var n=i.prop("id");return n||(t++,n="ID-"+t,i.eq(0).prop("id",n)),n}}(),implement:function(e,i){var n=m(e,"implemented")||m(e,"implemented",{});return n[i]?(t.info(i+" already implemented for element #"+e.id),!1):(n[i]=!0,!0)},extendUNDEFProp:function(t,i){e.each(i,function(e,i){e in t||(t[e]=i)})},createPropDefault:y,data:m,moveToFirstEvent:function(t,i,n){var a,r=(e._data(t,"events")||{})[i];r&&r.length>1&&(a=r.pop(),n||(n="bind"),"bind"==n&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(i).width(),u=e(i).width();if(u==r&&a==o)return;r=u,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var i=n.body,a=n.documentElement;s[t]=function(){return Math.max(i["scroll"+e],a["scroll"+e],i["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(i).bind("resize",this.handler),function(){var t,i=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),i.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(i,n,a){a=a||{},i.jquery&&(i=i[0]),n.jquery&&(n=n[0]);var r=e.data(i,f)||e.data(i,f,{}),o=e.data(n,f)||e.data(n,f,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,f)||e.data(a.shadowFocusElement,f,s)):a.shadowFocusElement=n,r.hasShadow=n,s.nativeElement=o.nativeElement=i,s.shadowData=o.shadowData=r.shadowData={nativeElement:i,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){m(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null,t.docObserve()}}(),propTypes:{standard:function(e){y(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){y(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(i,n){y(i),i.prop||(i.prop={set:function(e){i.attr.set.call(this,e)},get:function(){var i,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(r){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}})}}(),enumarated:function(e){y(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(i,n){"string"==typeof n&&(n=n.split(o)),n.forEach(function(n){t.defineNodeNamesProperty(i,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(i,n,a){return u[n]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,n),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),c[r](i,n,o),"*"!=i&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&v(i,n,o),a[r]=o)}),a.initAttr&&g.content(i,n),a},defineNodeNameProperties:function(e,i,n,a){for(var r in i)!a&&i[r].initAttr&&g.createTmpCache(e),n&&(i[r][n]||(i[r][n]={},["value","set","get"].forEach(function(e){e in i[r]&&(i[r][n][e]=i[r][e],delete i[r][e])}))),i[r]=t.defineNodeNameProperty(e,r,i[r]);return a||g.flushTmpCache(),i},createElement:function(i,n,a){var r;return e.isFunction(n)&&(n={after:n}),g.createTmpCache(i),n.before&&g.createElement(i,n.before),a&&(r=t.defineNodeNameProperties(i,a,!1,!0)),n.after&&g.createElement(i,n.after),g.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,i,n,a){"string"==typeof t&&(t=t.split(o)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof i&&(i=i.split(o)),n.initAttr&&g.createTmpCache(e),i.forEach(function(t){d[e][t]||(d[e][t]=[],u[t]=!0),n.set&&(a&&(n.set.only=a),d[e][t].push(n.set)),n.initAttr&&g.content(e,t)}),g.flushTmpCache()})},defineNodeNamesBooleanProperty:function(i,n,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(i,n,{attr:{set:function(e){this.setAttribute(n,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,i){if(e.nodeName){var n;return i===a?(n=e.attributes[t]||{},i=n.specified?n.value:null,null==i?a:i):("boolean"==typeof i?i?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,i),a)}},activeLang:function(){var i,n,a=[],o={},s=/:\/\/|^\.*\//,u=function(i,n,a){var r;return n&&a&&-1!==e.inArray(n,a.availabeLangs||[])?(i.loading=!0,r=a.langSrc,s.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+n+".js",function(){i.langObj[n]?(i.loading=!1,c(i,!0)):e(function(){i.langObj[n]&&c(i,!0),i.loading=!1})}),!0):!1},l=function(e){o[e]&&o[e].forEach(function(e){e.callback(i,n,"")})},c=function(e,t){if(e.activeLang!=i&&e.activeLang!==n){var a=r[e.module].options;e.langObj[i]||n&&e.langObj[n]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[n],i),l(e.module)):t||u(e,i,a)||u(e,n,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],i),l(e.module))}},d=function(t){return"string"==typeof t&&t!==i?(i=t,n=i.split("-")[0],i==n&&(n=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(o[t.register]||(o[t.register]=[]),o[t.register].push(t),t.callback(i,n,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),i};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,i){t[e]=function(e,n,a,r){"string"==typeof e&&(e=e.split(o));var s={};return e.forEach(function(e){s[e]=t[i](e,n,a,r)}),s}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var i=e.getAttribute("role");i||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(i,function(t,i){for(var o=e(t,a).add(r.filter(t)),s=0,u=o.length;u>s;s++)n(o[s],i)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),u=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!u)return;var l=s[u-1];e(l).closest("section, article")[0]||n(l,"contentinfo")}})}}(jQuery,document),function(e){"use strict";var t="webkitURL"in window,i=window.Modernizr,n=e.webshims,a=n.bugs,r=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),o=function(){if(r[0].querySelector)try{a.findRequired=!r[0].querySelector("select:required")}catch(e){a.findRequired=!1}},s=e("input",r).eq(0),u=function(e){n.loader.loadList(["dom-extend"]),n.ready("dom-extend",e)};a.findRequired=!1,a.validationMessage=!1,n.capturingEventPrevented=function(t){if(!t._isPolyfilled){var i=t.isDefaultPrevented,n=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),n.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},!i.formvalidation||a.bustedValidity?o():(n.capturingEvents(["input"]),n.capturingEvents(["invalid"],!0),(window.opera||window.testGoodWithFix)&&(r.appendTo("head"),o(),a.validationMessage=!s.prop("validationMessage"),n.reTest(["form-native-extend","form-message"]),r.remove(),e(function(){u(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(i){var a=n.defineNodeNameProperty(i,"checkValidity",{prop:{value:function(){n.fromSubmit||e(this).on("invalid.checkvalidity",t),n.fromCheckValidity=!0;var i=a.prop._supvalue.apply(this,arguments);return n.fromSubmit||e(this).unbind("invalid.checkvalidity",t),n.fromCheckValidity=!1,i}}})})})})),t&&!n.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,i=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(i=e.target.form)&&setTimeout(function(){i=!1},1)},!1),e(window).on("invalid",function(e){e.originalEvent&&i&&i==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()),e.webshims.register("form-core",function(e,n,a,r,o,s){var u={checkbox:1,radio:1},l=e([]),c=n.bugs,d=function(t){t=e(t);var i,n,a=l;return"radio"==t[0].type&&(n=t.prop("form"),i=t[0].name,a=i?n?e(n[i]):e(r.getElementsByName(i)).filter(function(){return!e.prop(this,"form")}):t,a=a.filter('[type="radio"]')),a},p=n.getContentValidationMessage=function(t,i,n){var a=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return n&&a[n]&&(a=a[n]),"object"==typeof a&&(i=i||e.prop(t,"validity")||{valid:1},i.valid||e.each(i,function(e,t){return t&&"valid"!=e&&a[e]?(a=a[e],!1):o})),"object"==typeof a&&(a=a.defaultMessage),a||""},h={number:1,range:1,date:1},f=function(t){var i=!1;return e(e.prop(t,"elements")).each(function(){return i=e(this).is(":invalid"),i?!1:o}),i};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!f(t):!(!e.prop(t,"willValidate")||!v(t))},"invalid-element":function(t){return e.nodeName(t,"form")?f(t):!(!e.prop(t,"willValidate")||v(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)},"in-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var i=e.prop(t,"validity");return!(!i||i.rangeOverflow||i.rangeUnderflow)},"out-of-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var i=e.prop(t,"validity");return!(!i||!i.rangeOverflow&&!i.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(i){}return!1};var m=e.event.customEvent||{},v=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(c.bustedValidity||c.findRequired)&&function(){var t=e.find,n=e.find.matchesSelector,a=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/gi,o=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,i=function(i){var n=arguments;return n=e.call(n,1,n.length),n.unshift(i.replace(a,o)),t.apply(this,n)};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i}(),(!i.prefixed||i.prefixed("matchesSelector",r.documentElement))&&(e.find.matchesSelector=function(e,t){return t=t.replace(a,o),n.call(this,e,t)})}();var g=e.prop,y={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,i,n){var a=g.apply(this,arguments);return t&&"form"in t&&y[i]&&n!==o&&e(t).hasClass(T)&&v(t)&&(e(t).getShadowElement().removeClass(T),"checked"==i&&n&&d(t).not(t).removeClass(T).removeAttr("aria-invalid")),a};var b=function(t,i){var n;return e.each(t,function(t,a){return a?(n="customError"==t?e.prop(i,"validationMessage"):t,!1):o}),n},w=function(e){var t;try{t=r.activeElement.name===e}catch(i){}return t},T="user-error",x="user-success",E={time:1,date:1,month:1,datetime:1,week:1,"datetime-local":1},N=function(i){var n,a;if(i.target&&(n=e(i.target).getNativeElement()[0],"submit"!=n.type&&e.prop(n,"willValidate"))){a=e.data(n,"webshimsswitchvalidityclass");var r=function(){if("focusout"!=i.type||"radio"!=n.type||!w(n.name)){var a,r,o,s,l,p=e.prop(n,"validity"),h=e(n).getShadowElement();t&&"change"==i.type&&!c.bustedValidity&&E[h.prop("type")]&&h.is(":focus")||(e(n).trigger("refreshCustomValidityRules"),p.valid?h.hasClass(x)||(a=x,r=T,s="changedvaliditystate",o="changedvalid",u[n.type]&&n.checked&&d(n).not(n).removeClass(r).addClass(a).removeAttr("aria-invalid"),e.removeData(n,"webshimsinvalidcause")):(l=b(p,n),e.data(n,"webshimsinvalidcause")!=l&&(e.data(n,"webshimsinvalidcause",l),s="changedvaliditystate"),h.hasClass(T)||(a=T,r=x,u[n.type]&&!n.checked&&d(n).not(n).removeClass(r).addClass(a),o="changedinvalid")),a&&(h.addClass(a).removeClass(r),setTimeout(function(){e(n).trigger(o)},0)),s&&setTimeout(function(){e(n).trigger(s)},0),e.removeData(n,"webshimsswitchvalidityclass"))}};a&&clearTimeout(a),"refreshvalidityui"==i.type?r():e.data(n,"webshimsswitchvalidityclass",setTimeout(r,9))}};e(r).on(s.validityUIEvents||"focusout change refreshvalidityui",N),m.changedvaliditystate=!0,m.refreshCustomValidityRules=!0,m.changedvalid=!0,m.changedinvalid=!0,m.refreshvalidityui=!0,n.triggerInlineForm=function(t,i){e(t).trigger(i)},n.modules["form-core"].getGroupElements=d;var k=function(){n.scrollRoot=t||"BackCompat"==r.compatMode?e(r.body):e(r.documentElement)},A=i.boxSizing||i["display-table"]||e.support.getSetAttribute?"minWidth":"width";k(),n.ready("DOM",k),n.getRelOffset=function(t,i){t=e(t);var n,a=e(i).offset();return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){n=t.offset()}),a.top-=n.top,a.left-=n.left,a},n.wsPopover={_create:function(){this.options=e.extend({},n.cfg.wspopover,this.options),this.id=n.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},isInElement:function(t,i){return t==i||e.contains(t,i)},show:function(t){var i=e.Event("wspopoverbeforeshow");if(this.element.trigger(i),!i.isDefaultPrevented()&&!this.isVisible){this.isVisible=!0,t=e(t||this.options.prepareFor).getNativeElement();var n=this,o=e(t).getShadowElement();this.clear(),this.element.removeClass("ws-po-visible").css("display","none"),this.prepareFor(t,o),this.position(o),n.timers.show=setTimeout(function(){n.element.css("display",""),n.timers.show=setTimeout(function(){n.element.addClass("ws-po-visible").trigger("wspopovershow")},9)},9),e(r).on("focusin"+this.eventns+" mousedown"+this.eventns,function(e){!n.options.hideOnBlur||n.stopBlur||n.isInElement(n.lastElement[0]||r.body,e.target)||n.isInElement(t[0]||r.body,e.target)||n.isInElement(n.element[0],e.target)||n.hide()}),e(a).on("resize"+this.eventns+" pospopover"+this.eventns,function(){clearTimeout(n.timers.repos),n.timers.repos=setTimeout(function(){n.position(o)},900)})}},prepareFor:function(t,i){var n,a=e.extend({},this.options,e(t.prop("form")||[]).data("wspopover")||{},t.data("wspopover")),r=this,o={};this.lastElement=e(t).getShadowFocusElement(),"element"==a.appendTo?this.element.insertAfter(t):this.element.appendTo(a.appendTo),this.element.attr({"data-class":t.prop("className"),"data-id":t.prop("id")}),o[A]=a.constrainWidth?i.outerWidth():"",this.element.css(o),a.hideOnBlur&&(n=function(e){r.stopBlur?e.stopImmediatePropagation():r.hide()},r.timers.bindBlur=setTimeout(function(){r.lastElement.off(r.eventns).on("focusout"+r.eventns+" blur"+r.eventns,n),r.lastElement.getNativeElement().off(r.eventns)},10)),this.prepared||e.fn.bgIframe&&this.element.bgIframe(),this.prepared=!0},clear:function(){e(a).off(this.eventns),e(r).off(this.eventns),this.stopBlur=!1,e.each(this.timers,function(e,t){clearTimeout(t)})},hide:function(){var t=e.Event("wspopoverbeforehide");if(this.element.trigger(t),!t.isDefaultPrevented()&&this.isVisible){this.isVisible=!1;var i=this,n=function(){i.element.css("display","none").attr({"data-id":"","data-class":"",hidden:"hidden"}),clearTimeout(i.timers.forcehide)};this.clear(),this.element.removeClass("ws-po-visible").trigger("wspopoverhide"),e(a).on("resize"+this.eventns,n),i.timers.forcehide=setTimeout(n,999)}},position:function(e){var t=n.getRelOffset(this.element.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0}).removeAttr("hidden"),e);t.top+=e.outerHeight(),this.element.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(t)}},n.wsPopover.id=0,n.validityAlert=function(){var t=n.objectCreate(n.wsPopover,{},s.messagePopover),i=t.hide.bind(t);return t.element.addClass("validity-alert").attr({role:"alert"}),e.extend(t,{hideDelay:5e3,showFor:function(t,n,a,r){t=e(t).getNativeElement(),this.clear(),this.hide(),r||(this.getMessage(t,n),this.show(t),this.hideDelay&&(this.timers.delayedHide=setTimeout(i,this.hideDelay))),a||this.setFocus(t)},setFocus:function(t){var i,r=e(t).getShadowFocusElement(),o=n.scrollRoot.scrollTop(),s=r.offset().top-30;o>s&&(n.scrollRoot.animate({scrollTop:s-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(o-s)),80)}),i=!0);try{r[0].focus()}catch(u){}i&&(n.scrollRoot.scrollTop(o),setTimeout(function(){n.scrollRoot.scrollTop(o)},0)),e(a).triggerHandler("pospopover"+this.eventns)},getMessage:function(e,i){i||(i=p(e[0])||e.prop("customValidationMessage")||e.prop("validationMessage")),i?t.contentElement.text(i):this.hide()}}),t}(),function(){var t,i,n=[];e(r).on("invalid",function(a){if(!a.wrongWebkitInvalid){var o=e(a.target),s=o.getShadowElement();if(s.hasClass(T)||(s.addClass(T).removeClass(x),setTimeout(function(){e(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},0)),!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=a.isDefaultPrevented;var u=e.Event("firstinvalidsystem");e(r).triggerHandler(u,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&a.preventDefault(),n.push(a.target),a.extraData="fix",clearTimeout(i),i=setTimeout(function(){var i={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(a.target).trigger(i,i)},9),o=null,s=null}})}(),e.fn.getErrorMessage=function(){var t="",i=this[0];return i&&(t=p(i)||e.prop(i,"customValidationMessage")||e.prop(i,"validationMessage")),t},s.replaceValidationUI&&(s.overrideMessages&&(s.customMessages||null==s.customMessages)&&(s.customMessages=!0,s.overrideMessages=!1,n.info("set overrideMessages to false. Use customMessages instead")),n.ready("DOM forms",function(){e(r).on("firstinvalid",function(t){t.isInvalidUIPrevented()||(t.preventDefault(),e.webshims.validityAlert.showFor(t.target))})}))})}(jQuery),jQuery.webshims.register("form-message",function(e,t,i,n,a,r){"use strict";var o=t.validityMessages,s=r.overrideMessages||r.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]="Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]="Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]="Value must be at or before {%max}."}),o["en-US"]=o["en-US"]||o.en,o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zulässig.",email:"{%value} ist keine gültige E-Mail-Adresse.",url:"{%value} ist kein(e) gültige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zulässig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen können."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen können."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zulässig. Hier sind nur bestimmte Werte zulässig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat für dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das Kästchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]="Bitte wählen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]="{%value} ist zu früh. {%min} ist die früheste Zeit, die Sie benutzen können."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]="{%value} ist zu spät. {%max} ist die späteste Zeit, die Sie benutzen können."});var u=o[""],l=function(t,i){return t&&"string"!=typeof t&&(t=t[e.prop(i,"type")]||t[(i.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(i,n){var a,r=l(u[n],i);return r||(r=l(o[""][n],i)||"invalid value",t.info("could not find errormessage for: "+n+" / "+e.prop(i,"type")+". in language: "+e.webshims.activeLang())),r&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==r.indexOf("{%"+o)){var s=("label"==o?e.trim(e('label[for="'+i.id+'"]',i.form).text()).replace(/\*$|:$/,""):e.prop(i,o))||"";"patternMismatch"!=n||"title"!=o||s||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(a||(a=e(i).getShadowElement().data("wsspinner")),a&&a.formatValue&&(s=a.formatValue(s,!1))),r=r.replace("{%"+o+"}",s),"value"==o&&(r=r.replace("{%valueLen}",s.length))}}),r||""},(t.bugs.validationMessage||!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){u=e}}),s.forEach(function(i){t.defineNodeNamesProperty(["fieldset","output","button"],i,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(n){var r=t.defineNodeNameProperty(n,i,{prop:{get:function(){var i=this,n="";if(!e.prop(i,"willValidate"))return n;var o=e.prop(i,"validity")||{valid:1};return o.valid?n:(n=t.getContentValidationMessage(i,o))?n:o.customError&&i.nodeName&&(n=Modernizr.formvalidation&&!t.bugs.bustedValidity&&r.prop._supget?r.prop._supget.call(i):t.data(i,"customvalidationMessage"))?n:(e.each(o,function(e,r){return"valid"!=e&&r?(n=t.createValidationMessage(i,e),n?!1:a):a}),n||"")},writeable:!1}})})})});