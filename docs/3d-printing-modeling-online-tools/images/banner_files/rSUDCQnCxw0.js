if (self.CavalryLogger) { CavalryLogger.start_js(["fbjhp"]); }

__d("GamesXOut.react",["cx","React","ShimButton.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement("div",{className:b("joinClasses")("_2b2u",this.props.className)},this.props.children,b("React").createElement(b("ShimButton.react"),{className:"_1m6e",onClick:this.props.onClick}))};function a(){h.apply(this,arguments)}a.propTypes={onClick:c.func.isRequired};e.exports=a}),null);
__d("GamesGogglesSwitch",[],(function(a,b,c,d,e,f){var g=!1;a={enable:function(){g=!0},isEnabled:function(){return g}};e.exports=a}),null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","getViewportDimensions","Event"],(function(a,b,c,d,e,f){a={getEventListeners:function(a){return[b("Event").listen(document,"DOMContentLoaded",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,a)]},getViewportInfo:function(){return b("getViewportDimensions")()}};e.exports=a}),null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","DataAttributeUtils","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","getElementPosition","pageID","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g="visibility_tracking",h="[data-vistracking]",i=500,j=50,k=50,l=50,m=50,n=0;function o(a){"use strict";__p&&__p();a=a||{};if(!a.bypass_banzai_check&&!b("Banzai").isEnabled(g))return;this.visibleElementInfo={};this.getDataFromConfig(a);b("Visibility").addListener(b("Visibility").VISIBLE,b("ErrorUtils").guard(function(){return this.fireEvent("browser")}.bind(this),"VisibilityTracking:visible",this));b("Visibility").addListener(b("Visibility").HIDDEN,b("ErrorUtils").guard(function(){return this.clearAllVisibleElements("browser")}.bind(this),"VisibilityTracking:hidden",this));b("ScriptPath").subscribe(b("ErrorUtils").guard(function(){return this.updateVisibleElements()}.bind(this),"VisibilityTracking:scriptPath",this));b("Banzai").subscribe(b("Banzai").SHUTDOWN,b("ErrorUtils").guard(function(){return this.onUnload()}.bind(this),"VisibilityTracking:banzaiShutdown",this));this.fireEventCallback=b("throttle").acrossTransitions(b("ErrorUtils").guard(function(event){return this.fireEvent(event)}.bind(this),"VisibilityTracking:fireEventCallback",this),this.timeout,this);this.listeners=new(b("SubscriptionsHandler"))();b("VisibilityTrackingHelper").getEventListeners(function(){return this.fireEventCallback()}.bind(this)).forEach(function(a){this.listeners.addSubscriptions(a)},this);this.extraInit&&b("ErrorUtils").applyWithGuard(this.extraInit.bind(this))}o.prototype.getDataFromConfig=function(a){"use strict";this.config=a,this.root=a.root||document.documentElement,this.selector=a.selector||h,this.visibleEventCallBack=a.visibleEventCallBack||function(){},this.timeout=a.timeout!==undefined?a.timeout:i,this.minOffsetVisibleFromBottom=a.minOffsetVisibleFromBottom!==undefined?a.minOffsetVisibleFromBottom:j,this.minOffsetVisibleFromTop=a.minOffsetVisibleFromTop!==undefined?a.minOffsetVisibleFromTop:k,this.minOffsetVisibleFromLeft=a.minOffsetVisibleFromLeft!==undefined?a.minOffsetVisibleFromLeft:l,this.minOffsetVisibleFromRight=a.minOffsetVisibleFromRight!==undefined?a.minOffsetVisibleFromRight:m,this.handleAllHiddenEvents=a.handleAllHiddenEvents!==undefined?a.handleAllHiddenEvents:!1,this.handleAllVisibleEvents=a.handleAllVisibleEvents!==undefined?a.handleAllVisibleEvents:!1,this.cacheTrackedElements=a.cacheTrackedElements!==undefined?a.cacheTrackedElements:!1};o.prototype.getAllTrackedElements=function(){"use strict";__p&&__p();if(!this.allTrackedElements){this.allTrackedElements={};var a=[];this.config.is_xtrackable?a=b("DataAttributeUtils").getXTrackableElements():this.root&&this.root.querySelectorAll&&(a=this.root.querySelectorAll(this.selector));for(var c=0;c<a.length;c++){var d=this.getElementID(a[c]);this.allTrackedElements[d.toString()]=a[c]}}return this.allTrackedElements};o.prototype.refreshAllTrackedElements=function(){"use strict";delete this.allTrackedElements;return this.getAllTrackedElements()};o.prototype.getDataToLog=function(a){"use strict";a=Object.assign(b("collectDataAttributes")(a,["gt"]).gt,{client_time:Date.now()/1e3,time_spent_id:b("pageID"),script_path:b("ScriptPath").getScriptPath()});return a};o.prototype.getElementID=function(a){"use strict";var b=a.$1;if(b)return b;a.$1=++n;return n};o.prototype.sendDataToLog=function(a){"use strict";b("BrowseClientEventLogger").maybeLogVisiblityEvent(a),b("Banzai").post(g,a)};o.prototype.isInstreamAdStoryElement=function(a){"use strict";return!1};o.prototype.fireEvent=function(){var a=arguments.length<=0||arguments[0]===undefined?"default":arguments[0],c=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var d in c){var e=c[d],f=b("VisibilityTrackingHelper").getViewportInfo(),g=this.isVisible(e,f);!g&&(d in this.visibleElementInfo||this.handleAllHiddenEvents)?this.handleEvent(e,{name:"hidden",cause:a}):g&&(!(d in this.visibleElementInfo)||this.handleAllVisibleEvents)&&this.handleEvent(e,{name:"visible",cause:a})}this.clearUntrackedVisibleElements()};o.prototype.isVisible=function(a,c){"use strict";if(a==null)return!1;a=b("getElementPosition")(a);return a.y+a.height>=this.minOffsetVisibleFromTop&&a.y<=c.height-this.minOffsetVisibleFromBottom&&a.x+a.width>=this.minOffsetVisibleFromLeft&&a.x<=c.width-this.minOffsetVisibleFromRight};o.prototype.handleEvent=function(a,event){"use strict";__p&&__p();var c=this.getElementID(a).toString(),d=this.getDataToLog(a),e=void 0;if(event.name==="visible"){var f=Math.floor(Date.now()/1e3);e=b("pageID").concat(":",f.toString(),":",this.getElementID(a).toString());this.visibleElementInfo[c]={visibility_id:e,elem:a}}else if(event.name==="hidden"){c in this.visibleElementInfo&&(e=this.visibleElementInfo[c].visibility_id,delete this.visibleElementInfo[c]);if(event.cause==="browser")return}this.sendDataToLog(Object.assign(d,{event:event.name,visibility_id:e}))};o.prototype.clearUntrackedVisibleElements=function(){"use strict";var a=this.getAllTrackedElements();for(var b in this.visibleElementInfo)if(!(b in a)){var c=this.visibleElementInfo[b];c.elem&&this.handleEvent(c.elem,{name:"hidden",cause:"removed"})}};o.prototype.clearAllVisibleElements=function(){var a=arguments.length<=0||arguments[0]===undefined?"default":arguments[0],b=this.getAllTrackedElements();for(var c in b)c in this.visibleElementInfo&&this.handleEvent(b[c],{name:"hidden",cause:a});this.clearUntrackedVisibleElements()};o.prototype.updateVisibleElements=function(){"use strict";this.clearAllVisibleElements(),this.fireEvent()};o.prototype.refreshAndFireEvent=function(event){"use strict";this.refreshAllTrackedElements(),this.fireEventCallback(event)};o.prototype.onUnload=function(){"use strict";this.clearAllVisibleElements(),this.listeners&&(this.listeners.release(),this.listeners=null),this.extraCleanup&&b("ErrorUtils").applyWithGuard(this.extraCleanup.bind(this))};o.init=function(a){"use strict";return new o(a)};e.exports=o}),null);
__d("GamesImpressionTracker",["cx","Arbiter","Banzai","Event","GamesGogglesSwitch","VisibilityTracking","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i="data-gamesrankedimp";c=1e3;function j(a){b("GamesGogglesSwitch").isEnabled()&&(a.className=a.className+" _1z5y")}function k(a){return function(){a&&(a(),a=null)}}h=babelHelpers.inherits(a,b("VisibilityTracking"));h&&h.prototype;a.prototype.handleEvent=function(a,event){if(event.name==="visible"){var c=a.getAttribute(i);a.removeAttribute(i);c&&(j(a),c&&b("Banzai").post("games_ranked_imp",{data:c}));b("Event").listen(a,"mouseover",k(function(){b("Banzai").post("games_mouseover",{data:c}),b("Event").listen(a,"mouseout",k(function(){b("Banzai").post("games_mouseout",{data:c})}))}))}};function a(){h.apply(this,arguments)}var l=new a({selector:"[data-gamesrankedimp]",handleAllVisibleEvents:!0,cacheTrackedElements:!0});d=b("throttle").acrossTransitions(function(){return l.fireEventCallback()},c,null);l.listeners&&l.listeners.addSubscriptions(b("Event").listen(document,"mousemove",d),b("Event").listen(document,"click",d),b("Arbiter").subscribe("games_unit_loaded",function(){return l.refreshAllTrackedElements()}))}),null);
__d("ViewableImpressionUtils",["csx","cx","CSS"],(function(a,b,c,d,e,f,g,h){a={isHorizontallyOffscreen:function(a,c,d){var e=Math.max(c.x,0);d=Math.min(c.x+c.width,d.width);return d-e<c.width||b("CSS").matchesSelector(a,".desktop_hscroll_offscreen")}};e.exports=a}),null);
__d("FullViewLogger",["Banzai","ScriptPath","SubscriptionsHandler","URI"],(function(a,b,c,d,e,f){__p&&__p();g.logFromViewableImpressionTracker=function(a){"use strict";var b=new g();b.subscribeToTrackerEvents(a)};g.prototype.subscribeToTrackerEvents=function(a){"use strict";this.subscriptionsHandler=new(b("SubscriptionsHandler"))(),this.subscriptionsHandler.addSubscriptions(a.addListener("full_view",this.onFullView,this))};g.prototype.onFullView=function(a){"use strict";this.$1()&&this.$2(a);a={token:a.token,fullViewType:a.fullViewType,scriptPath:b("ScriptPath").getTopViewEndpoint()};b("Banzai").post("xtrackable:full_view",a);this.$1()&&this.$3(a)};g.prototype.$1=function(){"use strict";return 0};g.prototype.$2=function(a){"use strict";!1};g.prototype.$3=function(a){"use strict";!1};function g(){"use strict"}e.exports=g}),null);
__d("FullViewType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTIRE_UNIT:1})}),null);
__d("PercentVisible",[],(function(a,b,c,d,e,f){e.exports={NO_VISIBLE:-1,VISIBLE_0_PCT:0,VISIBLE_50_PCT:50,VISIBLE_100_PCT:100}}),null);
__d("VisibilityState",[],(function(a,b,c,d,e,f){"use strict";e.exports={TOP:"TOP",BOTTOM:"BOTTOM",FULL:"FULL",NULL:"NULL"}}),null);
__d("ViewableImpressionTracker",["csx","AdImpressionLoggingConfig","Banzai","BrowseClientEventLogger","DataAttributeUtils","DOM","FullViewType","NonBlockingIFrame","PercentVisible","Style","URI","ViewableImpressionUtils","Visibility","VisibilityState","ge","getElementPosition","getViewportDimensions","mixInEventEmitter"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,b,c){"use strict";this.id=a,this.element=b,this.config=c,this.iframe=null,this.viewableTimeout=null,this.clearSubsequentTimeout=null,this.waitForSubsequent=!1,this.waitForLogged=!1,this.isNonViewableLogged=!1,this.isVisible=!1,this.iframeLogged=!1,this.banzaiLogged=!1,this.topLeftInViewport=!1,this.bottomRightInViewport=!1}a.prototype.getID=function(){"use strict";return this.id};a.prototype.getConfig=function(){"use strict";return this.config};a.prototype.getPercentInViewport=function(){"use strict";var a=b("getViewportDimensions")(),c=b("getElementPosition")(this.element);return this.$1(a,c)};a.prototype.$2=function(a,c){var d=arguments.length<=2||arguments[2]===undefined?0:arguments[2];if(c.x<a.width&&c.x+c.width>0&&c.y<a.height&&c.y+c.height>d&&b("Style").get(this.element,"visibility")!=="hidden"&&b("Style").get(this.element,"opacity")!=="0"){var e=Math.max(c.x,0),f=Math.min(c.x+c.width,a.width),g=Math.max(c.y,d),h=Math.min(c.y+c.height,a.height);if(c.height*c.width===0)return 100;var i=100*(f-e)*(h-g)/(c.height*c.width);return i}return 0};a.prototype.$1=function(a,c){"use strict";return this.config.require_horizontally_onscreen&&b("ViewableImpressionUtils").isHorizontallyOffscreen(this.element,c,a)?0:this.$2(a,c)};a.prototype.$3=function(a,c,d){"use strict";a=this.$2(a,c,d);if(a===0)return b("PercentVisible").NO_VISIBLE;else if(a<50)return b("PercentVisible").VISIBLE_0_PCT;else if(a<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};a.prototype.$4=function(a,c){var d=arguments.length<=2||arguments[2]===undefined?0:arguments[2],e=Math.max(c.y,d),f=Math.min(c.y+c.height,a.height),g=100*(f-e)/(a.height-d);if(g<50)return b("PercentVisible").VISIBLE_0_PCT;else if(g<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};a.prototype.$5=function(a,c){"use strict";__p&&__p();var d=0,e=b("ge")("pagelet_bluebar");e&&e.offsetHeight&&(d=e.offsetHeight+e.offsetTop);if(this.config.should_log_viewport_duration){e=this.$4(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewport_viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:break}}e=this.$3(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:this.emit("hidden",{id:this.getID(),token:this.getToken()});break}};a.prototype.$6=function(a,c){"use strict";if(b("Style").get(this.element,"visibility")==="hidden"||b("Style").get(this.element,"opacity")==="0")return!1;var d=c.x,e=c.y,f=c.x+c.width;c=c.y+c.height;this.topLeftInViewport=this.topLeftInViewport||d>=0&&d<=a.width&&e>=0&&e<=a.height;this.bottomRightInViewport=this.bottomRightInViewport||f>=0&&f<=a.width&&c>=0&&c<=a.height;return this.topLeftInViewport&&this.bottomRightInViewport};a.prototype.$7=function(a,c){"use strict";if(this.hasEmittedFullViewEvent)return;this.$6(a,c)&&(this.emit("full_view",{tracker:this,id:this.getID(),token:this.getToken(),fullViewType:b("FullViewType").ENTIRE_UNIT}),this.hasEmittedFullViewEvent=!0)};a.prototype.$8=function(a,c){"use strict";var d=c.y;c=c.y+c.height;d=d>=0&&d<=a.height;c=c>=0&&c<=a.height;a=void 0;d&&c?a=b("VisibilityState").FULL:d?a=b("VisibilityState").TOP:c?a=b("VisibilityState").BOTTOM:a=b("VisibilityState").NULL;this.emit("viewability_debug",{tracker:this,id:this.getID(),token:this.getToken(),visibleState:a})};a.prototype.onVisible=function(event){"use strict";__p&&__p();this.isVisible=!0;var a=b("getViewportDimensions")(),c=b("getElementPosition")(this.element),d=this.$1(a,c),e=d>this.config.pixel_in_percentage;this.emit("visible",{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:d});this.config.should_log_viewability_duration&&this.$5(a,c);this.config.should_log_debug_duration&&this.$8(a,c);this.$7(a,c);if(!e){this.$9();return}this.isLogged()?this.$10():this.$11();!this.waitForLogged&&!this.isLogged()&&!(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())&&(this.waitForLogged=!0,this.viewableTimeout=setTimeout(function(){__p&&__p();this.waitForLogged=!1;if(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())return;var a=this.getPercentInViewport();a=a>this.config.pixel_in_percentage;if(!a){this.$12();return}this.logImpression(1,{});this.$10()}.bind(this),this.config.duration_in_ms))};a.prototype.onHidden=function(){"use strict";this.emit("hidden",{id:this.getID(),token:this.getToken()}),this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged?this.logNonViewableImpression():!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible&&this.logNonViewableImpression(),this.isVisible=!1,this.waitForLogged&&(this.waitForLogged=!1,clearTimeout(this.viewableTimeout)),this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0&&(this.waitForSubsequent=!0,this.clearSubsequentTimeout=setTimeout(function(){this.waitForSubsequent=!1,this.reset(),this.isVisible&&this.onVisible()}.bind(this),this.config.subsequent_gap_in_ms)),this.$12()};a.prototype.onRemoved=function(){"use strict";this.isVisible=!1};a.prototype.getToken=function(){"use strict";return b("DataAttributeUtils").getDataAttribute(this.element,"data-xt")};a.prototype.logImpression=function(a,c){"use strict";__p&&__p();if(this.isLogged())return;var d=this.getToken(),e=Math.floor(Date.now()/1e3),f=this.$13();d={xt:d,isv:a,cts:e,csp:f};if(b("Banzai").isEnabled("xtrackable_clientview_batch")&&this.config.should_batch||this.config.vital_mode_for_ss||this.config.signal_mode_for_ss){a=this.config.vital_mode_for_ss?b("Banzai").VITAL:{};a.signal=this.config.signal_mode_for_ss;this.logWithBanzai(d,a)}else this.logWithIFrame(Object.assign(d,c))};a.prototype.logNonViewableImpression=function(){"use strict";if(this.config.nonviewableEnabled){var a=this.getToken();b("Banzai").post("xtrackable:nonviewable",{xt:a})}this.isNonViewableLogged=!0};a.prototype.isLogged=function(){"use strict";return this.iframeLogged||this.banzaiLogged};a.prototype.reset=function(){"use strict";this.iframeLogged&&(this.iframeLogged=!1),this.iframe&&(b("DOM").remove(this.iframe),this.iframe=null),this.banzaiLogged&&(this.banzaiLogged=!1),this.isNonViewableLogged=!1,this.isVisible=!1,this.waitForLogged=!1,this.waitForSubsequent=!1};a.prototype.logWithBanzai=function(a,c){"use strict";this.banzaiLogged=!0,b("BrowseClientEventLogger").maybeLogClientViewEvent(a),b("Banzai").post("xtrackable:clientview_batch",a,c)};a.prototype.logWithIFrame=function(a){"use strict";this.iframeLogged=!0,this.config.is_instream_story?b("NonBlockingIFrame").loadIFrame(new(b("URI"))(this.config.impressionURL).addQueryData(a).toString()):(this.iframe=b("DOM").create("iframe",{src:new(b("URI"))(this.config.impressionURL).addQueryData(a),width:0,height:0,frameborder:0,scrolling:"no",className:"fbEmuTracking"}),this.iframe.setAttribute("aria-hidden","true"),b("DOM").appendContent(this.element,this.iframe))};a.prototype.$13=function(){"use strict";__p&&__p();var a=b("DataAttributeUtils").getDataAttribute(this.element,"data-dedupekey");if(a===null)return null;var c=this.$14();if(c===null||c.length===0)return null;var d=c.length;while(--d>=0){var e=b("DataAttributeUtils").getDataAttribute(c[d],"data-dedupekey");if(e!==null&&a===e)break}return d+1};a.prototype.$14=function(){"use strict";__p&&__p();var a=b("ge")("contentArea");if(a){var c="._5jmm";a=b("DOM").scry(a,c);return a.filter(function(a){return b("DataAttributeUtils").getDataAttribute(a,"data-dedupekey")})}else{c=b("ge")("m_newsfeed_stream");return c===null?null:c.getElementsByTagName("article")}};a.prototype.$15=function(){"use strict";return 0};a.prototype.$9=function(){"use strict";this.$15()&&(b("Style").set(this.element,"background-color","#abab9a"),b("Style").set(this.element,"outline","3px solid #abab9a"))};a.prototype.$11=function(){"use strict";this.$15()&&(b("Style").set(this.element,"background-color","#e4f70a"),b("Style").set(this.element,"outline","3px solid #e4f70a"))};a.prototype.$12=function(){"use strict";this.$15()&&(b("Style").set(this.element,"background-color",null),b("Style").set(this.element,"outline",null))};a.prototype.$10=function(){"use strict";this.$15()&&(b("Style").set(this.element,"background-color","#047515"),b("Style").set(this.element,"outline","3px solid #047515"))};b("mixInEventEmitter")(a,{visible:!0,hidden:!0,full_view:!0,viewability:!0,viewport_viewability:!0,viewability_debug:!0});e.exports=a}),null);
__d("ViewabilityDebugLogger",["Banzai","ViewableImpressionTracker","VisibilityState","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")({top_enter_viewport:null,top_exit_viewport:null,bottom_enter_viewport:null,bottom_exit_viewport:null});h.logFromViewableImpressionTracker=function(a){var b=new h();b.subscribeToTrackerEvents(a)};function h(){this.$1=new Map(),this.$2=new Map(),this.$3=new Map()}h.prototype.subscribeToTrackerEvents=function(a){a.addListener("viewability_debug",this.onView.bind(this)),a.addListener("hidden",this.onHidden.bind(this))};h.prototype.onView=function(event){__p&&__p();var a=event.id,c=event.visibleState,d=Date.now(),e=this.$1.get(a),f=this.$2.get(a);switch(c){case b("VisibilityState").TOP:this.$1.has(a)||this.$4(event,d,b("VisibilityState").TOP);if(f){c={token:f.token,start_ts:f.start_ts,event_type:g.bottom_exit_viewport,event_time:d};this.$5(c,a,b("VisibilityState").BOTTOM)}break;case b("VisibilityState").FULL:this.$3.has(a)||this.$4(event,d,b("VisibilityState").FULL);break;case b("VisibilityState").BOTTOM:this.$2.has(a)||this.$4(event,d,b("VisibilityState").BOTTOM);if(e){c={token:e.token,start_ts:e.start_ts,event_type:g.top_exit_viewport,event_time:d};this.$5(c,a,b("VisibilityState").TOP)}break;case b("VisibilityState").NULL:if(e){c={token:e.token,start_ts:e.start_ts,event_type:g.top_exit_viewport,event_time:d};this.$5(c,a,b("VisibilityState").TOP)}if(f){e={token:f.token,start_ts:f.start_ts,event_type:g.bottom_exit_viewport,event_time:d};this.$5(e,a,b("VisibilityState").BOTTOM)}}};h.prototype.onHidden=function(event){var a=event.id,c=Date.now(),d=this.$1.get(a),e=this.$2.get(a);if(d){d={token:d.token,start_ts:d.start_ts,event_type:g.top_exit_viewport,event_time:c};this.$5(d,a,b("VisibilityState").TOP)}if(e){d={token:e.token,start_ts:e.start_ts,event_type:g.bottom_exit_viewport,event_time:c};this.$5(d,a,b("VisibilityState").BOTTOM)}};h.prototype.$4=function(event,a,c){__p&&__p();var d={token:event.token,start_ts:a,event_time:a};switch(c){case b("VisibilityState").TOP:d.event_type=g.top_enter_viewport;this.$1.set(event.id,d);this.$6(d);break;case b("VisibilityState").BOTTOM:d.event_type=g.bottom_enter_viewport;this.$2.set(event.id,d);this.$6(d);break;case b("VisibilityState").FULL:this.$3.set(event.id,d);if(!this.$1.has(event.id)){c={token:d.token,start_ts:a,event_time:a,event_type:g.top_enter_viewport};this.$1.set(event.id,c);this.$6(c)}if(!this.$2.has(event.id)){c={token:d.token,start_ts:a,event_time:a,event_type:g.bottom_enter_viewport};this.$2.set(event.id,c);this.$6(c)}break}};h.prototype.$6=function(a){b("Banzai").post("xtrackable:viewability_debug",a)};h.prototype.$5=function(a,c,d){b("Banzai").post("xtrackable:viewability_debug",a);switch(d){case b("VisibilityState").BOTTOM:this.$2["delete"](c);break;case b("VisibilityState").TOP:this.$1["delete"](c);break}this.$3["delete"](c)};e.exports=h}),null);
__d("VisibilityUnitType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FEED_UNIT:"feed_unit",VIEWPORT:"viewport"})}),null);
__d("ViewabilityDurationSegmentLogger",["Banzai","PercentVisible","ViewableImpressionTracker","VisibilityUnitType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=8e3;h.logFromViewableImpressionTracker=function(a){var b=new h();b.subscribeToTrackerEvents(a)};function h(){this.$1=new Map(),this.$2=new Map(),this.$3=new Map(),this.$4=new Map(),this.$5=new Map()}h.prototype.subscribeToTrackerEvents=function(a){a.addListener("viewability",this.onViewable.bind(this)),a.addListener("viewport_viewability",this.onViewport.bind(this)),a.addListener("hidden",this.onHidden.bind(this))};h.prototype.onViewable=function(event){__p&&__p();var a=event.id,c=event.percentVisible,d=Date.now();void 0;var e;void 0;switch(c){case b("PercentVisible").VISIBLE_0_PCT:c=this.$1.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_0_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$2.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));c=this.$4.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));break;case b("PercentVisible").VISIBLE_50_PCT:c=this.$1.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_0_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$2.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_50_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$4.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));break;case b("PercentVisible").VISIBLE_100_PCT:c=this.$1.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_0_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$2.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_50_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$4.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_100_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);break}};h.prototype.onViewport=function(event){__p&&__p();var a=event.id,c=event.percentVisible,d=Date.now();void 0;var e;void 0;switch(c){case b("PercentVisible").VISIBLE_0_PCT:c=this.$3.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));c=this.$5.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));break;case b("PercentVisible").VISIBLE_50_PCT:c=this.$3.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_50_PCT,d,b("VisibilityUnitType").VIEWPORT):this.$7(c,a,d);c=this.$5.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));break;case b("PercentVisible").VISIBLE_100_PCT:c=this.$3.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_50_PCT,d,b("VisibilityUnitType").VIEWPORT):this.$7(c,a,d);c=this.$5.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_100_PCT,d,b("VisibilityUnitType").VIEWPORT):this.$7(c,a,d);break}};h.prototype.onHidden=function(event){var a=event.id,b=Date.now(),c=this.$1.get(a),d=this.$2.get(a),e=this.$3.get(a),f=this.$4.get(a),g=this.$5.get(a);c&&this.$9(this.$8(c,a,b,!0),a);d&&this.$9(this.$8(d,a,b,!0),a);e&&this.$9(this.$8(e,a,b,!0),a);f&&this.$9(this.$8(f,a,b,!0),a);g&&this.$9(this.$8(g,a,b,!0),a)};h.prototype.$6=function(event,a,c,d){c={token:event.token,startedTrackingTS:c,percentVisible:a,visibilityUnit:d,intervalMs:0,cumulativeMs:0,segmentIdx:0};switch(a){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(event.id,c);break;case b("PercentVisible").VISIBLE_50_PCT:d===b("VisibilityUnitType").FEED_UNIT?this.$2.set(event.id,c):this.$3.set(event.id,c);break;case b("PercentVisible").VISIBLE_100_PCT:d===b("VisibilityUnitType").FEED_UNIT?this.$4.set(event.id,c):this.$5.set(event.id,c);break}};h.prototype.$8=function(a,c,d,e){__p&&__p();d=d-a.startedTrackingTS;var f=d-a.cumulativeMs,g=a.percentVisible;f={token:a.token,startedTrackingTS:a.startedTrackingTS,percentVisible:g,visibilityUnit:a.visibilityUnit,intervalMs:f,cumulativeMs:d,segmentIdx:++a.segmentIdx};e&&(f.duration=d);switch(g){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(c,f);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$2.set(c,f):this.$3.set(c,f);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$4.set(c,f):this.$5.set(c,f);break}return f};h.prototype.$7=function(a,c,d){var e=a.intervalMs,f=d-a.startedTrackingTS-a.cumulativeMs;if(this.$10(e,f)){e=this.$8(a,c,d,!1);b("Banzai").post("xtrackable:viewability",e,b("Banzai").VITAL)}};h.prototype.$10=function(a,b){if(a>=g)return!1;if(a==0)return!0;if(a<1e3)return b>=1e3;a=a/1e3;b=b/1e3;return b>=2*a};h.prototype.$9=function(a,c){var d=a.percentVisible;switch(d){case b("PercentVisible").VISIBLE_0_PCT:this.$1["delete"](c);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$2["delete"](c):this.$3["delete"](c);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$4["delete"](c):this.$5["delete"](c);break}b("Banzai").post("xtrackable:viewability",a,b("Banzai").VITAL)};e.exports=h}),null);
__d("ViewableImpressionDurationLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";__p&&__p();g.logFromViewableImpressionTracker=function(a){var b=new g();b.subscribeToTrackerEvents(a)};function g(){this.$1=new Map()}g.prototype.subscribeToTrackerEvents=function(a){a.addListener("visible",this.onElementVisible.bind(this)),a.addListener("hidden",this.onElementHidden.bind(this))};g.prototype.onElementVisible=function(event){if(this.$1.get(event.id))return null;var a={token:event.token,startedTrackingTS:this.getTimeNow()};this.$1.set(event.id,a);return a};g.prototype.onElementHidden=function(event){var a=this.$1.get(event.id);if(!a)return!1;a.trackingDuration=this.getTimeNow()-a.startedTrackingTS;return this.sendLog(event.id)};g.prototype.sendLog=function(a){var c=this.$1.get(a);if(!c||!c.trackingDuration)return!1;b("Banzai").post("xtrackable:duration",c);this.$1["delete"](a);return!0};g.prototype.getTimeNow=function(){return parseFloat((Date.now()/1e3).toFixed(2))};e.exports=g}),null);
__d("ViewableImpressionHeatmapLogger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();g.logFromViewableImpressionTracker=function(a,b){"use strict";b=new g(b);b.subscribeToTrackerEvents(a)};function g(a){"use strict";this.loggingDurationMS=a,this.trackingEntries={}}g.prototype.subscribeToTrackerEvents=function(a){"use strict";this.visibleSubscription=a.addListener("visible",this.onElementVisible,this),this.hiddenSubscription=a.addListener("hidden",this.onElementHidden,this)};g.prototype.onElementVisible=function(a){"use strict";var b=this.getCurrentTimestamp(),c=this.trackingEntries[a.id];c||(c=this.createTrackingEntry(a),this.beginTracking(a.id,c),b=c.startedTrackingTS);c.viewportProgressEvents.push({timestamp:b,percentInViewport:a.percentInViewport.toFixed(2)})};g.prototype.onElementHidden=function(a){"use strict";var b=this.getCurrentTimestamp();a=this.trackingEntries[a.id];if(!a)return;a.viewportProgressEvents.push({timestamp:b,percentInViewport:0})};g.prototype.onTrackingCompleted=function(a){"use strict";var b=this.trackingEntries[a];b.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:b.tracker.getPercentInViewport().toFixed(2)});this.$1()&&this.$2(a,b);this.logToServer(b);delete this.trackingEntries[a]};g.prototype.logToServer=function(a){"use strict";a=a;delete a.tracker;b("Banzai").post("xtrackable:heatmap",a)};g.prototype.beginTracking=function(a,b){"use strict";this.trackingEntries[a]=b,setTimeout(function(){return this.onTrackingCompleted(a)}.bind(this),this.loggingDurationMS)};g.prototype.createTrackingEntry=function(a){"use strict";return{tracker:a.tracker,token:a.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]}};g.prototype.getCurrentTimestamp=function(){"use strict";return(Date.now()/1e3).toFixed(2)};g.prototype.$1=function(){"use strict";return 0};g.prototype.$2=function(a,b){"use strict";var c="Completed tracking for id "+a+" token="+b.token+" startedTrackingTS="+b.startedTrackingTS+"\n";b.viewportProgressEvents.forEach(function(a){c+="% in view: "+a.percentInViewport+" timestamp="+a.timestamp+"\n"});!1};e.exports=g}),null);
__d("ViewableImpressionEventHandler",["DataAttributeUtils","FullViewLogger","ViewabilityDebugLogger","ViewabilityDurationSegmentLogger","ViewableImpressionDurationLogger","ViewableImpressionHeatmapLogger","ViewableImpressionTracker","VisibilityTracking"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=1;g=babelHelpers.inherits(a,b("VisibilityTracking"));h=g&&g.prototype;a.prototype.extraInit=function(){this.impressionTrackers={}};a.prototype.getDataFromConfig=function(a){h.getDataFromConfig.call(this,a),this.doHeatmapLogging=a.doHeatmapLogging,this.heatmapLoggingDurationMS=a.heatmapLoggingDurationMS,a.impressionURL=a.impressionURL!==undefined?a.impressionURL:"/xti.php",a.nonviewableEnabled=a.nonviewableEnabled!==undefined?a.nonviewableEnabled:!1};a.prototype.getImpressionTracking=function(a){__p&&__p();var c=this.getElementID(a),d=this.impressionTrackers[c];if(!d){var e=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);d=new(b("ViewableImpressionTracker"))(c,a,e);this.impressionTrackers[c]=d;e.log_impression_duration&&b("ViewableImpressionDurationLogger").logFromViewableImpressionTracker(d);this.doHeatmapLogging&&b("ViewableImpressionHeatmapLogger").logFromViewableImpressionTracker(d,this.heatmapLoggingDurationMS);e.should_log_full_views&&b("FullViewLogger").logFromViewableImpressionTracker(d);e.should_log_viewability_duration&&b("ViewabilityDurationSegmentLogger").logFromViewableImpressionTracker(d);e.should_log_debug_duration&&b("ViewabilityDebugLogger").logFromViewableImpressionTracker(d)}return d};a.prototype.handleEvent=function(a,event){var b=this.getImpressionTracking(a);if(!b)return;if(event.name==="visible")b.onVisible(event),this.visibleElementInfo[b.getID()]||(this.visibleElementInfo[b.getID()]={elem:a});else if(event.name==="hidden"){a=b.getConfig();event.cause==="default"||a.log_visibility_hidden_when_browser_inactive&&event.cause==="browser"?(b.onHidden(),delete this.visibleElementInfo[b.getID()]):event.cause==="removed"&&(b.onRemoved(),delete this.visibleElementInfo[b.getID()],delete this.impressionTrackers[b.getID()])}};a.prototype.isInstreamAdStoryElement=function(a){a=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);return!!a.is_instream_story};a.prototype.getConfigFromElement=function(a){return JSON.parse(b("DataAttributeUtils").getDataAttribute(a,"data-xt-vimp"))};a.prototype.getElementID=function(a){a.getAttribute("id")||a.setAttribute("id","xt_uniq_"+i++);return a.getAttribute("id")};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("ViewableImpressionTracking",["Arbiter","DesktopHscrollUnitEventConstants","ErrorUtils","LitestandMessages","Run","ViewableImpressionEventHandler","ViewableImpressionConfig"],(function(a,b,c,d,e,f){a={init:function(){b("ViewableImpressionEventHandler").instance===undefined&&(b("ViewableImpressionEventHandler").instance=new(b("ViewableImpressionEventHandler"))(b("ViewableImpressionConfig")),b("ViewableImpressionEventHandler").instance.listeners.addSubscriptions(b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED,"AdsRefreshHandler/AdsLoaded","MPPInsights/ChartView","PhotoSnowliftAds/displayUnits","WebMessengerAdsControl/adjustAds",b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT,"WebVideoChannelAds/AdsLoaded"],b("ErrorUtils").guard(function(event){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent(event)},"ViewableImpressionTracking")))),b("Run").onLoad(function(){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent()})}};e.exports=a}),null);