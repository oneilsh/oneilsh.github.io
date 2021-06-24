if (self.CavalryLogger) { CavalryLogger.start_js(["Cr4iG"]); }

__d("ScrollColumn.react",["cx","invariant","SubscriptionsHandler","joinClasses","throttle","tidyEvent","Arbiter","Event","React","ReactDOM","Vector","ViewportBounds"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;var i="ScrollColumn/adjust";c=b("React").createClass({displayName:"ScrollColumn",_subscriptionsHandler:null,propTypes:{left:a.string,topOffset:a.number,zIndex:a.number},getDefaultProps:function(){return{left:"",topOffset:0,zIndex:0}},_scroll:0,_scrollDelta:0,getInitialState:function(){return{fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0}},render:function(){var a="auto",c=this.state.fixedLeft,d="auto";this.state.fixed==="bottom"?a=this.state.fixedBottom:this.state.fixed==="top"?d=this.state.fixedTop:(c="auto",d=this.state.top);var e=b("joinClasses")(this.props.className,"_5ss7");return b("React").createElement("div",{className:e,ref:"container"},b("React").createElement("div",{className:"_5ss8"+(this.state.fixed?" fixed_always":""),ref:"column",style:{bottom:a,left:c,top:d,zIndex:this.props.zIndex}},this.props.children))},componentDidMount:function(){this._subscriptionsHandler=new(b("SubscriptionsHandler"))(),this._subscriptionsHandler.addSubscriptions(b("tidyEvent")(b("Arbiter").subscribe(i,function(){this._adjust()}.bind(this))),b("tidyEvent")(b("Event").listen(window,"resize",b("throttle")(this._adjust))),b("tidyEvent")(b("Event").listen(window,"scroll",this._onScroll)),b("tidyEvent")(b("ViewportBounds").subscribe("change",this._adjust))),this._adjust()},componentDidUpdate:function(a,c){c.fixed!==this.state.fixed&&b("Arbiter").inform("reflow")},componentWillUnmount:function(){this._subscriptionsHandler&&this._subscriptionsHandler.release()},_onScroll:function(event){var a=b("Vector").getScrollPosition().y;this._scrollDelta=a-this._scroll;this._scroll=a;this._adjust()},_adjust:function(){__p&&__p();if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return}if(this._scrollDelta>0&&this._isBottomOfColumnVisible()){this._setFixedToBottom();return}if(this._scrollDelta<0&&this._isTopOfColumnVisible()){this._setFixedToTop();return}var a=this._getTopPositionForRef("column"),b=this._getTopPositionForRef("container");a=a-b;this._setNotFixed(a)},_getTopPositionForRef:function(a){a=this.refs[a];a||h(0);a=b("Vector").getElementPosition(b("ReactDOM").findDOMNode(a),"viewport").y;this._scroll<0&&(a+=this._scroll);return a},_getTopBoundWithOffset:function(){return b("ViewportBounds").getTop()+this.props.topOffset},_isContainerBelowViewportTop:function(){var a=this._getTopPositionForRef("container");return a>=this._getTopBoundWithOffset()},_isColumnLargerThanViewport:function(){var a=b("Vector").getViewportDimensions().y-b("ViewportBounds").getBottom()-this._getTopBoundWithOffset();return b("ReactDOM").findDOMNode(this.refs.column).offsetHeight>a},_isBottomOfColumnVisible:function(){var a=this._getTopPositionForRef("column"),c=b("Vector").getElementDimensions(b("ReactDOM").findDOMNode(this.refs.column),"viewport").y;a=a+c;return a<=b("Vector").getViewportDimensions().y-b("ViewportBounds").getBottom()},_isTopOfColumnVisible:function(){var a=this._getTopPositionForRef("column");return a>=this._getTopBoundWithOffset()},_getFixedLeft:function(){return b("Vector").getElementPosition(b("ReactDOM").findDOMNode(this.refs.container),"viewport").x},_setFixedToBottom:function(){this.setState({fixed:"bottom",fixedBottom:b("ViewportBounds").getBottom(),fixedLeft:this.props.left===""?this._getFixedLeft():this.props.left})},_setFixedToTop:function(){this.setState({fixed:"top",fixedLeft:this.props.left===""?this._getFixedLeft():this.props.left,fixedTop:this._getTopBoundWithOffset()})},_setNotFixed:function(a){this.setState({fixed:!1,top:a})},_updateContainerHeight:function(){b("ReactDOM").findDOMNode(this.refs.container).style.height=b("ReactDOM").findDOMNode(this.refs.column).offsetHeight+this.state.top+"px"},_updateColumnWidth:function(){b("ReactDOM").findDOMNode(this.refs.column).style.width=b("ReactDOM").findDOMNode(this.refs.container).offsetWidth+"px"}});c.EVENT_SHOULD_ADJUST=i;e.exports=c}),null);
__d("SwapButtonDEPRECATED",["Event","Arbiter","CSS","Focus"],(function(a,b,c,d,e,f){function a(a,c,d){this._swapperButton=a,this._swappeeButton=c,b("Event").listen(a,"click",this.swap.bind(this)),d&&b("Event").listen(c,"click",this.unswap.bind(this)),b("Arbiter").subscribe("SwapButtonDEPRECATED/focusOnJoinButton",this.setFocusOnSwapper.bind(this),b("Arbiter").SUBSCRIBE_ALL)}Object.assign(a.prototype,{_swapperButton:null,_swappeeButton:null,swap:function(a){b("CSS").hide(this._swapperButton),b("CSS").show(this._swappeeButton),a!==!1&&b("Focus").setWithoutOutline(this._swappeeButton)},unswap:function(a){b("CSS").show(this._swapperButton),b("CSS").hide(this._swappeeButton),a!==!1&&b("Focus").setWithoutOutline(this._swapperButton)},toggle:function(){b("CSS").toggle(this._swapperButton),b("CSS").toggle(this._swappeeButton)},setFocusOnSwapper:function(){this._swapperButton.focus()}});e.exports=a}),null);
__d("XFollowPrivacyNuxLogViewAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/follow/follow_privacy/nux/log/view/",{})}),null);
__d("XPubcontentChainedSuggestionsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/chained_suggestions/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:!1},friendid:{type:"Int"}})}),null);
__d("SubscribeButton",["Arbiter","AsyncRequest","Button","CSS","Event","TooltipData","XFollowPrivacyNuxLogViewAsyncController","XPubcontentChainedSuggestionsController"],(function(a,b,c,d,e,f){__p&&__p();var g={SUBSCRIBED:"FollowingUser",UNSUBSCRIBED:"UnfollowingUser",_enable:function(a){b("Button").setEnabled(a,!0),b("TooltipData").remove(a)},_disable:function(a,c){b("Button").setEnabled(a,!1),c&&b("TooltipData").set(a,c)},init:function(a,c,d,e,f,h,i,j,k,l,m,n,o){__p&&__p();var p=!m&&!o,q=!(k===undefined||k===null);q&&!i&&!j&&g._disable(c,k);b("Event").listen(c,"click",function(){b("Arbiter").inform(g.SUBSCRIBED,{profile_id:e,contextID:n,suppress:!0});if(l){l.show();var a=b("XFollowPrivacyNuxLogViewAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).send()}});b("Arbiter").subscribe(g.SUBSCRIBED,function(k,l){__p&&__p();if(e==l.profile_id){f||d.suppressNextMouseEnter&&d.suppressNextMouseEnter();q&&(typeof l.connected!=="undefined"&&(i=l.connected),(i||j)&&g._enable(c));l.focusOnClick!==undefined&&(p=l.focusOnClick);a.swap(p);if(h===!0&&l.chaining!==!1){k=b("XPubcontentChainedSuggestionsController").getURIBuilder().setInt("profileid",e).getURI();new(b("AsyncRequest"))().setURI(k).send()}}});b("Arbiter").subscribe(g.UNSUBSCRIBED,function(f,h){e==h.profile_id&&(a.unswap(p),d.hideFlyout&&d.hideFlyout(),q&&(typeof h.connected!=="undefined"&&(i=h.connected),!i&&!j&&g._disable(c,k)),b("Arbiter").inform("SubMenu/Reset"))})},initSubscribe:function(a,c){b("Event").listen(a,"click",function(){setTimeout(b("Arbiter").inform.bind(b("Arbiter"),g.SUBSCRIBED,{profile_id:c}),0)})},initUnsubscribe:function(a,c,d){b("Event").listen(a,"click",function(){setTimeout(b("Arbiter").inform.bind(b("Arbiter"),g.UNSUBSCRIBED,{profile_id:c,contextID:d}),0)})},initSubscribeMenuItem:function(a,c,d){b("CSS").hide(c),this._initMenuItem(a,c,d)},initUnsubscribeMenuItem:function(a,c,d){b("CSS").hide(a),this._initMenuItem(a,c,d)},_initMenuItem:function(a,c,d){this.initSubscribe(a,d),this.initUnsubscribe(c,d),b("Arbiter").subscribe(g.SUBSCRIBED,function(d,e){b("CSS").hide(a),b("CSS").show(c)}),b("Arbiter").subscribe(g.UNSUBSCRIBED,function(d,e){b("CSS").hide(c),b("CSS").show(a)})}};e.exports=g}),null);
__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/inline_photo_pivots_chaining/events/",{})}),null);
__d("EntstreamAttachmentRelatedShare",["csx","cx","Arbiter","AsyncRequest","AttachmentRelatedShareConstants","CSS","DOM","Event","SubscribeButton","XPubcontentInlinePhotoPivotsEventsController","ge","getOrCreateDOMID","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=2,j=3;a={loadSuggestedShowsPivotAttachment:function(a,c,d){var e=b("ge")(a);if(!e)return;var f=b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED,function(a,g){f.unsubscribe();if(g.profile_id!==c.toString())return;b("Arbiter").inform(b("AttachmentRelatedShareConstants").SHOW_FOLLOW_CLICK,{attachment:e,pageID:c,storyID:d})})},loadRelatedAttachment:function(a,c,d){var e=null;typeof a==="string"?e=b("ge")(a):e=a;if(!e)return;var f=b("Event").listen(e,"click",function(){f.remove(),b("Arbiter").inform(b("AttachmentRelatedShareConstants").ARTICLE_CLICK,{attachment:e,global_share_id:c,is_right_click:!1,share_id:d})}),g=b("Event").listen(e,"mousedown",function(event){(event.which===j||event.button===i)&&(g.remove(),b("Arbiter").inform(b("AttachmentRelatedShareConstants").ARTICLE_CLICK,{attachment:e,global_share_id:c,is_right_click:!0}))})},loadInlineStoryPivotAttachment:function(a,c){var d=b("ge")(a);if(!d)return;var e=b("Event").listen(d,"click",function(){e.remove(),b("Arbiter").inform(b("AttachmentRelatedShareConstants").PHOTO_CLICK,{attachment:d,storyid:c})})},loadRelatedGameAttachment:function(a,c){var d=null;typeof a==="string"?d=b("ge")(a):d=a;if(!d)return;b("tidyEvent")(b("Event").listen(d,"click",function(){b("Arbiter").inform(b("AttachmentRelatedShareConstants").GAME_CLICK,{attachment:d,global_share_id:c})}));b("tidyEvent")(b("Event").listen(d,"mousedown",function(event){(event.which===j||event.button===i)&&b("Arbiter").inform(b("AttachmentRelatedShareConstants").GAME_CLICK,{attachment:d,global_share_id:c})}))},loadRelatedLSCVideoAttachment:function(a,c){var d=null;typeof a==="string"?d=b("ge")(a):d=a;if(!d)return;var e=b("Event").listen(d,"click",function(){e.remove(),b("Arbiter").inform(b("AttachmentRelatedShareConstants").VIDEO_CLICK,{attachment:d,global_share_id:c})})},loadRelatedLSCInlineVideoAttachment:function(a,c){__p&&__p();var d=null;typeof a==="string"?d=b("ge")(a):d=a;if(!d)return;b("Event").listen(d,"click",function(){__p&&__p();var a="^div._4-u2",e="_1d8v";a=b("DOM").scry(d,a);a=a.length===1?a[0]:null;var f=a.parentNode,g=f.previousSibling;while(!g)f=f.parentNode,g=f.previousSibling;if(!b("CSS").hasClass(g,e))var f=b("DOM").create("div",{className:e}),e=b("DOM").insertBefore(a.parentNode,f),a=e.length>=1?e[0]:null;else a=g;f=b("getOrCreateDOMID")(a);new(b("AsyncRequest"))().setURI("/ajax/flash/expand_inline.php").setData({share_id:c,target_div:f,max_width:470,max_height:264,replace_target_div:!0}).setMethod("GET").setReadOnly(!0).setRelativeTo(d.parentNode).send()})},loadRelatedEventsPivotAttachment:function(a,c){var d=null;typeof a==="string"?d=b("ge")(a):d=a;if(!d)return;b("tidyEvent")(b("Event").listen(d,"click",function(){b("Arbiter").inform(b("AttachmentRelatedShareConstants").EVENT_JOIN,{attachment:d,event_id:c})}))},loadRelatedProductAttachment:function(a,c){var d=null;typeof a==="string"?d=b("ge")(a):d=a;if(!d)return;b("tidyEvent")(b("Event").listen(d,"click",function(){b("Arbiter").inform(b("AttachmentRelatedShareConstants").PRODUCT_CLICK,{attachment:d,product_id:c})}))},loadMapAttachment:function(a,c,d){a=typeof a==="string"?b("ge")(a):a;if(!a)return;var e=typeof c==="string"?b("ge")(c):c;if(!e)return;b("tidyEvent")(b("Event").listen(a,"click",function(){b("Arbiter").inform(b("AttachmentRelatedShareConstants").MAP_CLICK,{attachment:e,story_id:d})}))},loadMapAttachmentActionButton:function(a,c){var d=typeof a==="string"?b("ge")(a):a;if(!d)return;b("tidyEvent")(b("Event").listen(d,"click",function(){b("Arbiter").inform(b("AttachmentRelatedShareConstants").ACTION_BUTTON_CLICK,{button:d,story_id:c})}))},closeButton:function(a,c){b("Event").listen(a,"click",function(){b("DOM").remove(c)})},closeButtonPhotoPivots:function(a,c,d,e){b("Event").listen(a,"click",function(){var a=b("XPubcontentInlinePhotoPivotsEventsController").getURIBuilder(),f={story_id:d,search_query_type:e,event:"hide"};new(b("AsyncRequest"))().setMethod("POST").setURI(a.getURI()).setData(f).send();b("DOM").remove(c)})},seeAllLinkPhotoPivots:function(a,c,d){b("Event").listen(a,"click",function(){var a=b("XPubcontentInlinePhotoPivotsEventsController").getURIBuilder(),e={story_id:c,search_query_type:d,event:"see_all"};new(b("AsyncRequest"))().setMethod("POST").setURI(a.getURI()).setData(e).send()})},removeOldSuggestions:function(a){a=b("ge")(a);if(!a)return;var c=b("DOM").scry(a.parentNode,"._5d73");for(var a=1;a<c.length;a++)b("DOM").remove(c[a]);setTimeout(function(){b("CSS").show(c[0])},1e3)},showHiddenSuggestions:function(a){__p&&__p();var c=b("Event").listen(a,"click",function(){c.remove();var d="^._1ui8";d=b("DOM").scry(a,d);if(!d)return;b("CSS").hide(d[0]);d=d[0].previousSibling;while(d)b("CSS").show(d),d=d.previousSibling})}};e.exports=a}),null);
__d("FollowRequestResultEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REVERT:"revert"})}),null);
__d("SeeFirstNuxEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"})}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/control/see_first/nux/",{})}),null);
__d("ProfileHoverButton",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","FollowRequestResultEnum","MenuStaticItem","ProfileSubFollowStatus","Run","SeeFirstNuxEvents","SubscribeButton","SubscriptionsHandler","XFeedSeeFirstNuxController"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=1,j="live_notifs",k={follow:0,see_first:0,subscribe_all_live_notifications:j,subscribe_suggested_live_notifications:j,subscribe_none_live_notifications:j};function a(a,c,d,e,f){"use strict";this.$1=c,this.$2=d,this.$3=f,this.$4=e,this.$5=a,this.$6=null,this.$7=new(b("SubscriptionsHandler"))(),this.$2.subscribe("itemclick",function(a,c){if(c.item instanceof b("MenuStaticItem"))return;a=c.item.getValue();a==="unfollow"?(b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED,{profile_id:this.$3.id}),b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,{profile_id:this.$3.id}),this.$4&&this.$4.hide(),this.$5.getPopover().hideLayer()):(this.setSelected(a),a===b("ProfileSubFollowStatus").SEE_FIRST&&this.$4&&(this.$4.hide(),this.logNux(b("SeeFirstNuxEvents").SEE_FIRST_SELECTED)))}.bind(this)),this.$7.addSubscriptions(b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED,this.setSelected.bind(this,b("ProfileSubFollowStatus").REGULAR_FOLLOW))),this.$7.addSubscriptions(b("Arbiter").subscribe(b("FollowRequestResultEnum").REVERT,this.handleResponse.bind(this))),this.$4&&(this.$4.show(),this.logNux(b("SeeFirstNuxEvents").IMP),this.$7.addSubscriptions(b("Event").listen(b("DOM").find(this.$4.getRoot(),"._50zy"),"click",this.logNux.bind(this,b("SeeFirstNuxEvents").XOUT)))),b("Run").onLeave(this.cleanUp.bind(this))}a.prototype.logNux=function(event){"use strict";var a=b("XFeedSeeFirstNuxController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).setData({event:event,id:this.$3.id}).send()};a.prototype.getButtons=function(){"use strict";return b("DOM").scry(this.$1,"._3oz-")};a.prototype.getSelected=function(){"use strict";var a=this.getButtons(),c=null;a.forEach(function(a){var d=a.getAttribute("data-status");b("CSS").matchesSelector(a,"._52-0")&&(c=d)});return c};a.prototype.setSelected=function(a){"use strict";__p&&__p();this.$6=this.getSelected();var c=this.getButtons(),d=k[a];c.forEach(function(c){if(d===j)return;var e=c.getAttribute("data-status");e===a?b("CSS").addClass(c,"_52-0"):b("CSS").removeClass(c,"_52-0")});this.$2.forEachItem(function(c){if(!c.getValue)return;var e=c.getValue(),f=k[e];if(e==="unfollow")return;c=c.getRoot();e===a?b("CSS").addClass(c,"_52-0"):f===d&&b("CSS").removeClass(c,"_52-0")})};a.prototype.handleResponse=function(event,a){"use strict";if(a.id!==this.$3.id||a.location!==i)return;event===b("FollowRequestResultEnum").REVERT&&this.revert()};a.prototype.revert=function(){"use strict";if(this.$6===null)return;this.setSelected(this.$6)};a.prototype.cleanUp=function(){"use strict";this.$7&&this.$7.release(),this.$7=null,this.$1=null,this.$2=null,this.$3=null};e.exports=a}),null);
__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function(a,b,c,d,e,f){var g;g=babelHelpers.inherits(a,b("PopoverMenu"));g&&g.prototype;a.prototype._onMenuDone=function(a){"use strict"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("VertexScrollColumn.react",["DOMContainer.react","React","ScrollColumn.react"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;var h=5,i=10;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";var a=b("React").createElement(b("ScrollColumn.react"),{topOffset:i,ref:"scrollColumn",zIndex:h},b("React").createElement(b("DOMContainer.react"),null,this.props.content));return a};function a(){"use strict";g.apply(this,arguments)}a.propTypes={content:c.object.isRequired};e.exports=a}),null);
__d("ScrollColumnRenderer",["DOMContainer.react","React","ReactRenderer","ScrollColumn.react"],(function(a,b,c,d,e,f){a={init:function(a,c,d){b("ReactRenderer").constructAndRenderComponentAcrossTransitions(b("ScrollColumn.react"),babelHelpers["extends"]({children:[b("React").createElement(b("DOMContainer.react"),{key:"content"},a)]},d),c)}};e.exports=a}),null);