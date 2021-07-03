if (self.CavalryLogger) { CavalryLogger.start_js(["eqNxI"]); }

__d("ChatTypeaheadConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({USER_TYPE:"user",THREAD_TYPE:"thread",FRIEND_TYPE:"friend",NON_FRIEND_TYPE:"non_friend",FB4C_TYPE:"fb4c",PAGE_TYPE:"page",MEETING_ROOM_PAGE_TYPE:"meeting_room_page",COMMERCE_PAGE_TYPE:"commerce_page",HEADER_TYPE:"header",INTERNAL_BOT_PAGE_TYPE:"internal_bot_page",GAME_TYPE:"game"});e.exports=a}),null);
__d("MessengerGroupCreateDialog.react",["BootloadOnRender.react","JSResource","LazyComponent.react","React"],(function(a,b,c,d,e,f){"use strict";var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(b("BootloadOnRender.react"),{component:b("React").createElement(b("LazyComponent.react"),{entryPoint:this.props.entryPoint,isShown:this.props.isShown,onClose:this.props.onClose}),loader:b("JSResource")("MessengerGroupCreateDialogImpl.react").__setRef("MessengerGroupCreateDialog.react"),placeholder:b("React").createElement("div",null)})};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("MessengerGroupCreateDialogReact.bs",["ReasonReact.bs","MessengerGroupCreateDialog.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e){return b("ReasonReact.bs").wrapJsForReason(b("MessengerGroupCreateDialog.react"),{entryPoint:a,isShown:c,onClose:d},e)}f.make=a}),null);
__d("MessengerGroupCreationEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHAT_TAB:"chat_tab_add_people",JEWEL:"jewel_new_message",CHAT_SIDEBAR:"chat_sidebar_new_message",GCF_JEWEL:"jewel_new_group",GCF_CHAT_SIDEBAR:"chat_sidebar_new_group",GCF_SHARE_FLOW:"chat_share_message_to_messenger"})}),null);
__d("ChatSidebarGroupCreateButtonReact.bs",["cx","fbt","bs_block","bs_curry","React","LinkReact.bs","ReasonReact.bs","joinClasses","bs_js_primitive","MessengerGroupCreateDialogReact.bs","MessengerGroupCreationEntryPoint"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").reducerComponent("ChatSidebarGroupCreateButtonReact"),j=b("MessengerGroupCreationEntryPoint").GCF_CHAT_SIDEBAR;function k(a){var c=a[1];if(c)return b("ReasonReact.bs").element(0,0,b("MessengerGroupCreateDialogReact.bs").make(j,!0,function(){return b("bs_curry")._1(a[3],1)},[]));else return null}function l(a,c){return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],function(c){var d=h._("Create New Group"),e="_1-4-";e=a?b("joinClasses")(e,a[0]):e;return b("React").createElement("div",{className:"_46fv"},k(c),b("ReasonReact.bs").element(0,0,b("LinkReact.bs").make([d],[e],["tooltip"],[d],0,["below"],0,0,[function(){return b("bs_curry")._1(c[3],0)}],0,0,0,0,0,0,0,[])))},function(){return!1},i[11],function(c,a){if(c)return b("bs_block").__(0,[!1]);else return b("bs_block").__(0,[!0])},i[13]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return l(b("bs_js_primitive").null_undefined_to_opt(a.className),[])});f.component=i;f.entryPoint=j;f.renderDialog=k;f.make=l;f.jsComponent=a}),null);
__d("ChatSidebarGroupCreateButtonReactComponent",["ChatSidebarGroupCreateButtonReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("ChatSidebarGroupCreateButtonReact.bs").jsComponent;e.exports=a}),null);