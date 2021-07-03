if (self.CavalryLogger) { CavalryLogger.start_js(["F67+C"]); }

__d("HubbleTimeZoneDisclaimerStrings",["fbt"],(function(a,b,c,d,e,f,g){e.exports={AD:g._("Ads activity is reported in the time zone of your ad account."),PAGE:g._("Insights activity is reported in the Pacific time zone."),PAGE_AND_AD:g._("Insights activity is reported in the Pacific time zone. Ads activity is reported in the time zone of your ad account.")}}),null);
__d("BVIGrowthIndicator.react",["ix","cssVar","cx","Image.react","InsightsFormatters","React","fbglyph","intlSummarizeNumber"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){j.constructor.call(this,a)}a.prototype.$1=function(a){a<0&&(a=-a);return this.props.rawGrowth!=null?b("intlSummarizeNumber")(a):b("InsightsFormatters").percentageFormatter(a)};a.prototype.render=function(){var a=this.props.percentGrowth!=null?this.props.percentGrowth:this.props.rawGrowth;return a==null?b("React").createElement("span",null):a<0?b("React").createElement("span",null,b("React").createElement(b("Image.react"),{className:"_63af",src:g("118896")}),b("React").createElement("span",{className:"_63af",style:{color:"#fa3e3e"}},this.$1(a))):b("React").createElement("span",null,b("React").createElement(b("Image.react"),{className:"_63af",src:g("120510")}),b("React").createElement("span",{className:"_63af",style:{color:"#42b72a"}},this.$1(a)))};e.exports=a}),null);
__d("BVITableMetricOverview.react",["cx","BUIProgressBar.react","React","Tooltip.react","VideoUtils","intlNumUtils","intlSummarizeNumber"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=100;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(a){h.constructor.call(this,a)}a.prototype.$1=function(){var a=this.props.value;if(a==null)return b("React").createElement("span",null,"--");if(this.props.valueFormatter)return this.props.valueFormatter(a);return a<1e3?b("React").createElement("span",null,b("intlSummarizeNumber")(a)):b("React").createElement(b("Tooltip.react"),{tooltip:b("intlNumUtils").formatNumberWithThousandDelimiters(a)},b("intlSummarizeNumber")(a))};a.prototype.render=function(){var a=this.props.value&&this.props.columnMax?100*this.props.value/this.props.columnMax:0;return b("React").createElement("div",{className:"_4d4z"+(this.props.value==null?" _4d4-":"")+(this.props.hideProgressBar?" _3-99":"")},this.$1(),this.props.benchmarkValue&&this.props.value?b("React").createElement("div",{className:"_hcw"},b("VideoUtils").formatPercentage(this.props.value,this.props.benchmarkValue)):null,this.props.hideProgressBar?null:b("React").createElement(b("BUIProgressBar.react"),{className:"_3-8x _5ag0",percentage:a,width:this.props.barWidth,height:"small",color:this.props.selected?"blue":"gray"}))};a.defaultProps={barWidth:c};e.exports=a}),null);
__d("InsightsInfoTip.react",["cx","ix","Image.react","React","ReactDOM","Tooltip","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=function(){b("Tooltip").set(b("ReactDOM").findDOMNode(this.refs.root),b("ReactDOM").findDOMNode(this.refs.tooltip).cloneNode(!0),this.props.position,this.props.alignH)}.bind(this),c}a.prototype.componentDidMount=function(){"use strict";this.$1()};a.prototype.componentDidUpdate=function(a){"use strict";this.$1()};a.prototype.componentWillUnmount=function(){"use strict";this.refs.icon&&b("Tooltip").remove(b("ReactDOM").findDOMNode(this.refs.icon))};a.prototype.render=function(){"use strict";var a=h("76155"),c=null;this.props.noImage||(c=b("React").createElement(b("Image.react"),{className:"_5j1g",src:a,ref:"icon"}));a=b("joinClasses")("_5j1f",this.props.className);return b("React").createElement("span",{className:a,ref:"root"},this.props.children,c,b("React").createElement("div",{className:"_5j1h"},b("React").createElement("div",{className:"_5j1i",ref:"tooltip"},this.props.tip)))};a.propTypes={alignH:c.oneOf(["center","left","right"]),position:c.oneOf(["above","below","left","right"])};a.defaultProps={alignH:"right",position:"above"};e.exports=a}),null);
__d("InsightsLoadingIndicator.react",["cx","fbt","React","XUISpinner.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=b("joinClasses")("_5g39",this.props.className),c=b("joinClasses")("_2byj",this.props.className);return b("React").createElement("div",{className:a},b("React").createElement(b("XUISpinner.react"),{background:"light",size:this.props.size}),b("React").createElement("div",{className:c},h._("Loading Data...")))};function a(){"use strict";i.apply(this,arguments)}a.propTypes={size:c.string};a.defaultProps={size:"large"};e.exports=a}),null);
__d("InsightsDateRange.react",["fbt","React","formatDate"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.includeTime?"g:ia F jS, Y":"F d, Y",c=this.props.from,d=new Date(this.props.to.getTime()-1);c=b("formatDate")(c,a,{utc:this.props.utc});d=b("formatDate")(d,a,{utc:this.props.utc});if(c!=d){a=g._("{from} to {to}",[g._param("from",c),g._param("to",d)]);return b("React").createElement("span",null,a)}return b("React").createElement("span",null,c)};function a(){"use strict";h.apply(this,arguments)}a.defaultProps={includeTime:!1};e.exports=a}),null);
__d("ClickableAreaButton.react",["cx","invariant","Focus","React","ReactDOM"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.componentDidMount=function(){"use strict";this.$1&&b("Focus").relocate(b("ReactDOM").findDOMNode(this.$1),b("ReactDOM").findDOMNode(this))};a.prototype.focus=function(){"use strict";b("Focus").set(this.$1)};a.prototype.render=function(){"use strict";var a=this.props,c=a.children,d=a.disabled,e=a.label,f=a.onClick;a=a.pressed;c=b("React").Children.only(c);c.props.onClick&&h(0);a=f?b("React").createElement("button",{"aria-pressed":a,className:"accessible_elem",disabled:d,label:e,key:"accessible_button",ref:function(a){return this.$1=a}.bind(this)},e):null;return b("React").cloneElement(c,{onClick:d?null:f},[c.props.children,a])};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("LayerPage",["Arbiter","CSS","DOM","Layer","LayerButtons","LayerFormHooks","LayerHideOnTransition","LayerMouseHooks","LayerTabIsolation","ModalLayer","Style"],(function(a,b,c,d,e,f){__p&&__p();var g,h;g=babelHelpers.inherits(a,b("Layer"));h=g&&g.prototype;a.prototype._configure=function(a,b){"use strict";this._fitWidth=!!a.fitWidth,a.width?this._width=Math.floor(a.width):this._width=null,a.bottomMargin!==undefined?this._bottomMargin=a.bottomMargin:this._bottomMargin=null,h._configure.call(this,a,b)};a.prototype._getDefaultBehaviors=function(){"use strict";return h._getDefaultBehaviors.call(this).concat([k,b("LayerButtons"),b("LayerFormHooks"),b("LayerHideOnTransition"),b("LayerMouseHooks"),b("LayerTabIsolation"),b("ModalLayer")])};a.prototype._buildWrapper=function(a,c){"use strict";return b("DOM").create("div",null,c)};a.prototype.updatePosition=function(){"use strict";__p&&__p();var a=b("DOM").find(this.getRoot(),"div.uiLayerPage");if(this._fitWidth)b("Style").set(a,"width",j+"%");else if(this._width){var c=b("DOM").find(a,"div.uiLayerPageContentWrap"),d=this._width;b("CSS").hasClass(c,"uiLayerPageDefaultPadding")&&(d+=2*i);b("Style").set(a,"width",d+"px")}return!0};a.prototype.getContentRoot=function(){"use strict";this._contentRoot||(this._contentRoot=b("DOM").find(this.getRoot(),".uiOverlayContent"));return this._contentRoot};a.prototype.getBottomMargin=function(){"use strict";return this._bottomMargin};function a(){"use strict";g.apply(this,arguments)}var i=15,j=95;function k(a){"use strict";this._layer=a,this._subscription=null}k.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe(["show","hide"],function(a,c){a==="show"?b("Arbiter").inform("layer_shown",{type:"LayerPage"}):b("Arbiter").inform("layer_hidden",{type:"LayerPage"})})};k.prototype.disable=function(){"use strict";this._subscription.unsubscribe(),this._subscription=null};e.exports=a}),null);
__d("LayerPage.react",["CSS","LayerPage","ReactLayer","LayerFadeOnHide","LayerHideOnBlur","LayerHideOnEscape","LayerHideOnTransition"],(function(a,b,c,d,e,f){__p&&__p();a=b("ReactLayer").createClass({immutableProps:{modal:null},getDefaultEnabledBehaviors:function(){return{fadeOnHide:b("LayerFadeOnHide"),hideOnBlur:b("LayerHideOnBlur"),hideOnEscape:b("LayerHideOnEscape"),hideOnTransition:b("LayerHideOnTransition")}},componentDidUpdate:function(a){this.props.children!==a.children&&this.layer.updatePosition()},createLayer:function(a){var c=this.enumerateBehaviors(this.props.behaviors);c={width:this.props.width,modal:this.props.modal,addedBehaviors:c,fitWidth:this.props.fitWidth};c=new(b("LayerPage"))(c,a);c.conditionShow(this.props.shown);this.props.layerRootClass&&b("CSS").addClass(c.getRoot(),this.props.layerRootClass);return c},receiveProps:function(a,b){this.updateBehaviors(b.behaviors,a.behaviors),this.layer.conditionShow(a.shown)}});e.exports=a}),null);
__d("LayerPageContent.react",["cx","React"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a="uiLayerPageContentWrap"+(this.props.useCustomPadding?"":" uiLayerPageDefaultPadding");return b("React").createElement("div",{className:"uiLayerPageInner"},b("React").createElement("div",{className:"uiLayerPage uiOverlay"},b("React").createElement("div",{className:"uiOverlayContent"},b("React").createElement("div",{className:a},b("React").createElement("div",{className:"uiLayerPageContent"},this.props.children)))))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUIPageSideNavigationItemAmbientNux.react",["ContextualLayerUpdateOnScroll","React","XUIAmbientNUX.react"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this,a),this.state={isVisible:!0}}a.prototype.componentDidMount=function(){"use strict";this.props.onSeen&&this.props.onSeen()};a.prototype.onCloseButtonClick=function(){"use strict";this.setState({isVisible:!1}),this.props.onClose&&this.props.onClose()};a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIAmbientNUX.react"),{behaviors:{ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")},contextRef:this.props.contextRef,customwidth:this.props.customwidth,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onCloseButtonClick:this.onCloseButtonClick.bind(this),shown:this.state.isVisible,width:this.props.width,position:"right"},this.props.message)};e.exports=a}),null);
__d("XUIPageSideNavigationItem.react",["cx","Link.react","React","XUIPageSideNavigationItemAmbientNux.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.label,d=a.nux;a=babelHelpers.objectWithoutProperties(a,["label","nux"]);return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},a,{ref:"sectionLink"}),b("React").createElement(b("XUIText.react"),{ref:"sectionLabel",className:"_3f-j",size:"header4"},c),this.$1(d))};a.prototype.$1=function(a){return a==null?null:b("React").createElement(b("XUIPageSideNavigationItemAmbientNux.react"),babelHelpers["extends"]({contextRef:function(){return this.refs.sectionLabel}.bind(this)},a))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("HubbleTimeZoneDisclaimer.react",["fbt","HubbleTimeZoneDisclaimerStrings","React","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.includePageDisclaimer,d=a.includeAdsDisclaimer;a=babelHelpers.objectWithoutProperties(a,["includePageDisclaimer","includeAdsDisclaimer"]);c=this.$1(c,d);return b("React").createElement(b("XUIText.react"),a,c)};a.prototype.$1=function(a,c){if(a&&c)return b("HubbleTimeZoneDisclaimerStrings").PAGE_AND_AD;else if(a)return b("HubbleTimeZoneDisclaimerStrings").PAGE;else if(c)return b("HubbleTimeZoneDisclaimerStrings").AD;else return null};function a(){h.apply(this,arguments)}a.defaultProps={includeAdsDisclaimer:!0,includePageDisclaimer:!0};e.exports=a}),null);
__d("d3-old/time/time",[],(function(a,b,c,d,e,f){__p&&__p();b={};c=Date;d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function a(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}a.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){g.setUTCDate.apply(this._,arguments)},setDay:function(){g.setUTCDay.apply(this._,arguments)},setFullYear:function(){g.setUTCFullYear.apply(this._,arguments)},setHours:function(){g.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){g.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){g.setUTCMinutes.apply(this._,arguments)},setMonth:function(){g.setUTCMonth.apply(this._,arguments)},setSeconds:function(){g.setUTCSeconds.apply(this._,arguments)},setTime:function(){g.setTime.apply(this._,arguments)}};var g=Date.prototype;b._time=c;b._daySymbols=d;b._utc=a;e.exports=b}),null);
__d("d3-old/time/interval",["d3-old/time/time"],(function(a,b,c,d,e,f){__p&&__p();var g=b("d3-old/time/time")._utc;function a(a,c,d){__p&&__p();function e(b){var c=a(b),d=i(c,1);return b-c<d-b?c:d}function f(d){c(d=a(new(b("d3-old/time/time")._time)(d-1)),1);return d}function i(a,d){c(a=new(b("d3-old/time/time")._time)(+a),d);return a}function j(a,b,e){a=f(a);var g=[];if(e>1)while(a<b)d(a)%e||g.push(new Date(+a)),c(a,1);else while(a<b)g.push(new Date(+a)),c(a,1);return g}function k(c,d,e){try{b("d3-old/time/time")._time=g;var a=new g();a._=c;return j(a,d,e)}finally{b("d3-old/time/time")._time=Date}}a.floor=a;a.round=e;a.ceil=f;a.offset=i;a.range=j;var l=a.utc=h(a);l.floor=l;l.round=h(e);l.ceil=h(f);l.offset=h(i);l.range=k;return a}function h(a){return function(c,d){try{b("d3-old/time/time")._time=g;var e=new g();e._=c;return a(e,d)._}finally{b("d3-old/time/time")._time=Date}}}f._interval=a}),null);
__d("d3-old/time/day",["d3-old/time/interval","d3-old/time/time","d3-old/time/year"],(function(a,b,c,d,e,f){__p&&__p();a=b("d3-old/time/interval")._interval;c=a(function(a){var c=new(b("d3-old/time/time")._time)(1970,0);c.setFullYear(a.getFullYear(),a.getMonth(),a.getDate());return c},function(a,b){a.setDate(a.getDate()+b)},function(a){return a.getDate()-1});c.s=c.range;c.s.utc=c.utc.range;c.ofYear=function(a){var c=b("d3-old/time/year")(a);return Math.floor((a-c-(a.getTimezoneOffset()-c.getTimezoneOffset())*6e4)/864e5)};e.exports=c}),null);
__d("d3-old/time/year",["d3-old/time/interval","d3-old/time/day"],(function(a,b,c,d,e,f){__p&&__p();a=b("d3-old/time/interval")._interval;c=a(function(a){a=b("d3-old/time/day")(a);a.setMonth(0,1);return a},function(a,b){a.setFullYear(a.getFullYear()+b)},function(a){return a.getFullYear()});c.s=c.range;c.s.utc=c.utc.range;e.exports=c}),null);
__d("InsightsUtils",["invariant","DateTime","Timezone","UTCUtils","d3-old/time/day"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();b("Timezone").PST8PDT;var h=b("Timezone").UTC,i=24*60*60,j=25*60*60,k={dateToSeconds:function(a){return a instanceof Date?parseInt(a.getTime()/1e3,10):a},_isEmpty:function(a){return Object.keys(a).length===0},_isKeyed:function(a){for(var b=0;b<a.length;++b){if(typeof a[b].value!=="object")return!1;if(!this._isEmpty(a[b].value))return!0}return!0},formatInsightsResponse:function(a){__p&&__p();var b=this;b=-Infinity;var c=0,d=null,e=!1,f=0,g=null,h=0,l=Infinity,m=a.data.length,n=null,o=null,p={},q={};for(var r=0;r<m;++r){d=a.data[r];for(var s=0;s<d.values.length;)Object.prototype.hasOwnProperty.call(d.values[s],"value")?s++:d.values.splice(s,1);if(d.values.length===0)continue;e=this._isKeyed(d.values);l=Math.min(l,d.values[0].end_time-i);b=Math.max(b,d.values[d.values.length-1].end_time);p[d.name]=p[d.name]||{};if(e){p[d.name][d.period]=g={};for(var s=0;s<d.values.length;++s)o=d.values[s],Object.keys(o.value).forEach(function(a){Object.prototype.hasOwnProperty.call(g,a)||(p[d.name][d.period][a]=null)})}else p[d.name][d.period]=null;d.description_from_api_doc&&(q[d.name]=d.description_from_api_doc)}h=Math.round((b-l)/i);for(var s=0;s<m;++s){c=l;d=a.data[s];if(d.values.length===0)continue;e=this._isKeyed(d.values);f=0;n=d.period+"_timestamps";r=k.fillArray(h,null);p[d.name][n]=r;e||(p[d.name][d.period]=k.fillArray(h,null));r=function(a){o=d.values[a],o.end_time-c>j&&(f+=Math.round((o.end_time-c)/i)-1),e?(g=p[d.name][d.period],Object.keys(g).forEach(function(b){g[b]===null&&(g[b]=k.fillArray(h,null)),g[b][a+f]=o.value[b]||0})):typeof o.value==="object"?p[d.name][d.period][a+f]=0:p[d.name][d.period][a+f]=o.value,p[d.name][n][a+f]=o.end_time,c=o.end_time};for(var t=0;t<d.values.length;++t)r(t)}t={endTime:k.pacificSecondsToUTCDate(b),seriesLength:h,startTime:k.pacificSecondsToUTCDate(l+i),values:p};Object.keys(q).length>0&&(t.descriptions=q);return t},formatParams:function(a){var b=babelHelpers["extends"]({},a);b.date_format="U";a.since&&(b.since=this.utcDateToPacificSeconds(a.since));a.until&&(b.until=this.utcDateToPacificSeconds(a.until));return b},localTimeToPacificDate:function(a){return new Date(a.getTime()+b("UTCUtils").offsetFromPacificTime(a))},pacificSecondsToUTCDate:function(a){a=a*1e3;return new Date(a+b("UTCUtils").getPacificOffsetAt(a))},utcDateToPacificSeconds:function(a){return this.dateToSeconds(a)-Math.round(b("UTCUtils").getPacificOffsetAt(a)/1e3)},utcTimeToPacificTime:function(a){return new Date(a.getTime()-b("UTCUtils").getPacificOffsetAt(a))},utcTimeToPacificDay:function(a){return new Date(b("d3-old/time/day").utc.floor(a).getTime()-b("UTCUtils").getPacificOffsetAt(a))},timestampToUTCDay:function(a,c){a=new(b("DateTime"))(a,c);return a.toParallelDate()},utcDayToTimestamp:function(a,c){a=b("DateTime").fromDate(a,h);a=a.getParallel(c);return a.getUnixTimestampSeconds()},pstTimeToUTCDay:function(a){return b("d3-old/time/day").utc.floor(new Date(a.getTime()+b("UTCUtils").getPacificOffsetAt(a)))},utcTimeToPST:function(a){return new Date(b("d3-old/time/day").utc.floor(a).getTime()-b("UTCUtils").getPacificOffsetAt(a))},getMostRecentPacificDayBegin:function(a){a=a.getTime();a=a+b("UTCUtils").getPacificOffsetAt(a);a=b("d3-old/time/day").utc.floor(new Date(a)).getTime();a=new Date(a-b("UTCUtils").getPacificOffsetAt(a));return a},fillArray:function(a,b){var c=new Array(a);for(var d=0;d<a;)c[d++]=b;return c},getRangeIndices:function(a,b){return[k.millisecondsToDays(b.since-a)+1,k.millisecondsToDays(b.until-a)]},millisecondsToDays:function(a){var b=1e3*60*60*24;return Math.round(a/b)},sliceData:function(a,b,c){b=k.getRangeIndices(b,c);return a.slice(b[0],b[1]+1)},moveRange:function(a,c){c=c||-7;return{since:b("d3-old/time/day").utc.offset(a.since,c),until:b("d3-old/time/day").utc.offset(a.until,c)}},chartHasDataToRender:function(a){return a.lines&&a.lines.length||a.areas&&a.areas.length},getNowOffsetByPacificTimezone:function(){var a=Date.now();return new Date(a+b("UTCUtils").getPacificOffsetAt(a))}};e.exports=k}),null);
__d("SpectrumTooltipData",["cx","React"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("span",{className:"_51i3"},this.props.children)};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpectrumTooltipDescription",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("span",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_2fp7")}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("HubbleUtils",["fbt","BusinessConf","InsightsDeprecatedMetrics","InsightsUtils","React","SpectrumTooltipData","SpectrumTooltipDescription","URI","UTCUtils","formatDate"],(function(a,b,c,d,e,f,g){__p&&__p();function h(){return{ageBuckets:{"13-17":0,"18-24":0,"25-34":0,"35-44":0,"45-54":0,"55-64":0,"65+":0},total:0}}var i={aggregateValues:function(a){var c=null;Object.keys(a).forEach(function(d,e){c===null&&(c=b("InsightsUtils").fillArray(a[d].length,null)),a[d].forEach(function(a,b){a!=null&&c!=null&&(c[b]+=a)})});return c},apiGenderToText:function(a){switch(a){case"F":return g._("Women");case"M":return g._("Men");case"U":return g._("Unknown");default:}},isDataValid:function(a){var b=a!==undefined;a=!!(a&&typeof a==="object"&&Object.keys(a).length>0);return b&&a},constructNewBaseInsightsURI:function(){var a=b("URI").getNextURI(),c=new(b("URI"))(a.getPath()),d=b("BusinessConf").BIZ_ID_PARAM_NAME;a.getQueryData().sk&&c.setQueryData({sk:a.getQueryData().sk});Object.prototype.hasOwnProperty.call(a.getQueryData(),d)&&(c.addQueryData(d,a.getQueryData()[d]),c.setSubdomain(b("BusinessConf").DOMAIN));c.removeQueryData(["section","subsection"]);return c},mergeKeyedDataSets:function(a){__p&&__p();var b={};a.forEach(function(a){if(!a)return;Object.keys(a).forEach(function(c){if(Object.prototype.hasOwnProperty.call(b,c)){var d=a[c].forEach?a[c]:Object.keys(a[c]);d.forEach(function(d,e){b[c][e]+=a[c][e]})}else b[c]=a[c]})});return b},getSectionByName:function(a,b){for(var c=b.length-1;c>=0;--c)if(b[c].type.getName()===a)return b[c]},parseGenderAgeResponse:function(a){__p&&__p();var b={F:h(),M:h(),total:0,U:h()};if(!this.isDataValid(a))return null;var c=Object.keys(a);c.forEach(function(c){var d=c.split(".");if(d.length!==2||!Object.prototype.hasOwnProperty.call(b,d[0])||!Object.prototype.hasOwnProperty.call(b[d[0]].ageBuckets,d[1]))return;c=a[c][a[c].length-1];b[d[0]].ageBuckets[d[1]]+=c;b[d[0]].total+=c;b.total+=c});return b},sliceDataForPreviousPeriod:function(a,c,d){var e=d.until-d.since;d={since:d.since-e,until:d.until-e};e=b("InsightsUtils").getRangeIndices(c,d);e[0]<0&&(e[0]=0);e[1]<0&&(e[1]=0);return a.slice(e[0],e[1]+1)},pairAndSortKeyedDataSet:function(a){__p&&__p();var b,c,d;if(!this.isDataValid(a))return[];var e={};for(var f in a){c=0;d=d||a[f].length;b=-1;while(++b<d)c+=a[f][b]?a[f][b]:0;e[f]=c}return Object.keys(a).map(function(a){return[a,e[a]]}).sort(function(a,b){return b[1]-a[1]})},summarizeKeyedDataSet:function(a,c){__p&&__p();var d=i.pairAndSortKeyedDataSet(a),e,f,h={},j=d.length,k=j>c?1:0,l=Math.min(j,c-k);for(e=0;e<l;++e)f=d[e][0],h[f]=a[f];if(k){l=null;k=0;e=c-2;while(++e<j){f=d[e][0];l==null&&(k=a[f].length,l=b("InsightsUtils").fillArray(k,null));c=-1;while(++c<k)a[f][c]!=null&&(l[c]+=a[f][c])}h[g._("Others")]=l}return h},groupKeyedDataSet:function(a,b){__p&&__p();var c={};a&&Object.keys(a).forEach(function(d){var e=b(d);if(Object.prototype.hasOwnProperty.call(c,e))for(var f=0;f<c[e].length;++f){var g=a[d][f];g!=null&&(c[e][f]+=a[d][f])}else c[e]=a[d].slice()});return c},groupKeyValuePair:function(a,b,c){var d={};a&&Object.keys(a).forEach(function(a){var e=b(a);d[e]=c(a)});return d},partialValue:function(a){return a.partial},valueX:function(a){return a.x},valueY:function(a){return a.y},findNonZeroValueInValues:function(a){__p&&__p();var b=a;if(a.valueY===0&&a.allData)for(var c=a.allData.length;c-->0;){var d=a.allData[c];if(d.valueY!==0){b=d;break}}b.isPartial=a.isPartial;return b},getCustomTooltipFormat:function(){var a=new Date();a.setHours(a.getHours()+b("UTCUtils").offsetFromPacificTime(a));var c=i.findNonZeroValueInValues;return function(d){d=c(d);var e=d.title||d.label,f=d.yValueString,h;d.isPartial?(h=b("formatDate")(a,"M d, Y ga"),h=g._("as of {timestamp}",[g._param("timestamp",h)])):h=d.xValueString;d=[b("React").createElement(b("SpectrumTooltipDescription"),{key:"desc"},e),b("React").createElement(b("SpectrumTooltipData"),{key:"data"},f),b("React").createElement(b("SpectrumTooltipDescription"),{key:"foot"},h)];return d}},getVideoID:function(a){a=a.split("_");return a.length>=2?a[1]:"0"},getPostID:function(a){a=a.split("_");return a.length>=2?a[1]:"0"},getPageID:function(a){a=a.split("_");return a.length>=2?a[0]:"0"},isDeprecatedMetric:function(a){return this.getDeprecatedMetrics().has(a)},getDeprecatedMetrics:function(){return b("InsightsDeprecatedMetrics").deprecated_metrics}};e.exports=i}),null);
__d("DialogFitHeightToContent",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"max-height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("d3-old/scale/ordinal",["d3-old/core/map","d3-old/core/range","d3-old/scale/scale"],(function(a,b,c,d,e,f){__p&&__p();var g=b("d3-old/core/map")._Map,h=b("d3-old/scale/scale")._scaleExtent;a=function(){return i([],{t:"range",a:[[]]})};function i(a,c){__p&&__p();var d,e,f;function j(b){return e[((d.get(b)||d.set(b,a.push(b)))-1)%e.length]}function k(c,d){return b("d3-old/core/range")(a.length).map(function(a){return c+d*a})}j.domain=function(b){if(!arguments.length)return a;a=[];d=new g();var e=-1,f=b.length,h;while(++e<f)d.has(h=b[e])||d.set(h,a.push(h));return j[c.t].apply(j,c.a)};j.range=function(a){if(!arguments.length)return e;e=a;f=0;c={t:"range",a:arguments};return j};j.rangePoints=function(b,d){arguments.length<2&&(d=0);var g=b[0],h=b[1],i=(h-g)/(Math.max(1,a.length-1)+d);e=k(a.length<2?(g+h)/2:g+i*d/2,i);f=0;c={t:"rangePoints",a:arguments};return j};j.rangeBands=function(b,d,g){arguments.length<2&&(d=0);arguments.length<3&&(g=d);var h=b[1]<b[0],i=b[h-0],l=b[1-h],m=(l-i)/(a.length-d+2*g);e=k(i+m*g,m);h&&e.reverse();f=m*(1-d);c={t:"rangeBands",a:arguments};return j};j.rangeRoundBands=function(b,d,g){arguments.length<2&&(d=0);arguments.length<3&&(g=d);var h=b[1]<b[0],i=b[h-0],l=b[1-h],m=Math.floor((l-i)/(a.length-d+2*g)),n=l-i-(a.length-d)*m;e=k(i+Math.round(n/2),m);h&&e.reverse();f=Math.round(m*(1-d));c={t:"rangeRoundBands",a:arguments};return j};j.rangeBand=function(){return f};j.rangeExtent=function(){return h(c.a[0])};j.copy=function(){return i(a,c)};return j.domain(a)}e.exports=a}),null);
__d("BVIMetric",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALL_PAGES:"ALL_PAGES",MINUTES_VIEWED:"MINUTES_VIEWED",VIDEO_VIEWS:"VIDEO_VIEWS",ENGAGEMENT:"ENGAGEMENT",NEW_FOLLOWERS:"NEW_FOLLOWERS",VIDEO_POSTS:"VIDEO_POSTS",REVENUE:"REVENUE",AD_IMPRESSIONS:"AD_IMPRESSIONS",AD_CPM:"AD_CPM",SHARES:"SHARES"})}),null);
__d("PageInsightsUIReferrer",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADMIN_HOVERCARD:"admin_hovercard",BUSINESS_ASSISTANT:"business_assistant",AYMT:"aymt",CONTEXT_ROW:"context_row",EMAIL:"email",EMAIL_NUX:"email_nux",FB4B_CTA_ADS_BUTTON:"fb4b_cta_ads_button",GROWTH_NOTIFICATION:"growth_notification",HOME_PAGE_PANEL:"home_page_panel",INSIGHTS_DIALOG:"insights_dialog",NEWS_FEED:"news_feed",NOTIF:"notif",PAGE_INSIGHTS_TAB_BUTTON:"page_insights_tab_button",PAGE_SETTINGS:"page_settings",PAGE_TIP:"page_tip",PAGES_MANAGER_SPRINGBOARD:"page_manager_springboard",PUBLISHING_TOOLS_BRANDED_CONTENT:"publishing_tools_branded_content",PUBLISHING_TOOLS_VIDEO_LIBRARY:"publishing_tools_video_library",PAGES_HOME_CARD_FOOTER:"pages_home_card_footer",PAGES_VIDEO_HUB:"pages_video_hub"})}),null);
__d("InsightsNumUtils",["Currency","NumberFormatConfig","intlNumUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={prettyCurrency:function(a,c){var d=b("Currency").getFormat(a)||"{symbol}{amount}";a=b("Currency").getSymbol(a)||"";c=c.toFixed(2).split(".");var e=b("NumberFormatConfig").decimalSeparator;e=g.prettyInt(parseInt(c[0],10))+e+c[1];return d.replace("{symbol}",a).replace("{amount}",e)},prettyShortCurrency:function(a,c){var d=b("Currency").getFormat(a)||"{symbol}{amount}";a=b("Currency").getSymbol(a)||"";c=g.prettyShortInt(c);return d.replace("{symbol}",a).replace("{amount}",c)},prettyCurrencyEx:function(a,b){if(b>-1e3&&b<1e3)return g.prettyCurrency(a,b);else return g.prettyShortCurrency(a,b)},prettyFloat:function(a){return b("intlNumUtils").getFloatString(a,b("NumberFormatConfig").numberDelimiter,b("NumberFormatConfig").decimalSeparator)},prettyShortFloat:function(a,b){b||(b=0);a=Number(Math.round(Number(a+"e"+b))+"e-"+b);return g.prettyFloat(a)},_withThreeSigFigs:function(a){var c=Math.abs(a);if(c<9.995)return b("intlNumUtils").formatNumber(a,2);else if(c<99.95)return b("intlNumUtils").formatNumber(a,1);else return b("intlNumUtils").formatNumber(a,0)},prettyShortInt:function(a){if(Math.abs(a)>=999.5*1e6)return g._withThreeSigFigs(a/1e9)+"B";if(Math.abs(a)>=999.5*1e3)return g._withThreeSigFigs(a/1e6)+"M";return Math.abs(a)>=999.5?g._withThreeSigFigs(a/1e3)+"K":g.prettyInt(a)},parsePrettyShortInt:function(a){return parseFloat(a)*(a.endsWith("K")?1e3:a.endsWith("M")?1e6:a.endsWith("B")?1e9:1)},prettyShortIntRounded:function(a){if(Math.abs(a)>=1e9)return b("intlNumUtils").formatNumber(a/1e9,0)+"B";if(Math.abs(a)>=1e6)return b("intlNumUtils").formatNumber(a/1e6,0)+"M";return Math.abs(a)>=1e3?b("intlNumUtils").formatNumber(a/1e3,0)+"K":g.prettyInt(a)},prettyInt:function(a){return b("intlNumUtils").formatNumberWithThousandDelimiters(Math.round(a))},prettyPercent:function(a,b){b||(b=0);a=a*100;return Number(Math.round(Number(a+"e"+b))+"e-"+b)+"%"},prettyPercentQuotient:function(a){var b=a.numerator,c=a.denominator;a=a.precision;var d=1;b!=null&&c!=null&&(d=c===0?0:Math.min(1,b/c));return g.prettyPercent(d,a)}};e.exports=g}),null);
__d("SpectrumStyle",[],(function(a,b,c,d,e,f){a={BLUE_HOVER:"rgba(113, 137, 174, 0.3)",BLUE:"#B1BDD6",BLUE2:"#899BC1",BLUE3:"#95A5D0",BLUE4:"#3C6399",BLUE_BRUSH:"rgba(58, 96, 149, 0.08)",BRIGHT_BLUE:"#5890FF",BOLD_BLUE:"#627AAD",DARK_BLUE:"#23355B",FB_BLUE:"#3B5998",LIGHT_BLUE:"#C5CEE0",LIGHT_BLUE2:"#9DACCB",LIGHT_BLUE3:"#D7DAE7",LAVENDER:"#9C7AB3",TROUT:"#4E5665",CASPER:"#ABB7CF",COBALT:"#9DACCB",COBALT2:"#758AB7",COBALT3:"#7F96C7",GRAY:"#ADB3BC",LIGHT_GRAY:"#E5E5E5",MAUVE:"#D094AB",MAUVE2:"#DEB5C5",ORANGE:"#F79600",ORANGE_BRUSH:"rgba(242, 100, 52, 0.14)",LIGHT_ORANGE:"#FFCA87",PINK:"#DE8585",DEEP_PURPLE:"#705781",PURPLE:"#BC7F96",PURPLE2:"#B7758F",PURPLE3:"#925E73",PURPLE4:"#98677D",PURPLE5:"#B36D88",PURPLE6:"#B194C2",LIGHT_GREEN:"#F0EEC4",DARK_RED:"#D44040",SALMON:"#DA7878",BROWN:"#892A2A",BEIGE:"#C9B4A0",DUCKEGG:"#BFDBC6",TAN:"#E8C595",VIOLET:"#865EA1",FONT_FAMILY:["'helvetica neue'","helvetica","arial","'lucida grande'","tahoma","verdana","sans-serif"].join(","),FONT_SIZE_TINY:10,FONT_SIZE_SMALL:12};a.BREAKDOWN_COLORS=[a.COBALT3,a.LIGHT_BLUE3,a.PURPLE6,a.LIGHT_GREEN,a.CASPER,a.TAN,a.DUCKEGG,a.GRAY,a.MAUVE,a.BEIGE];a.BUTTERFLY_COLORS=[a.LIGHT_GRAY,a.BLUE2,a.LIGHT_GRAY,a.BLUE4];a.BUTTERFLY_LABEL=a.TROUT;e.exports=a}),null);