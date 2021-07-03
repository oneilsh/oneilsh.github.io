if (self.CavalryLogger) { CavalryLogger.start_js(["4ffsS"]); }

__d("GroupMemberSuggestionConstants",[],(function(a,b,c,d,e,f){e.exports={suggestionIDPrefix:"suggested_member_"}}),null);
__d("EntStreamGroupMall",["DOM","$","ge","ScrollingPager"],(function(a,b,c,d,e,f){__p&&__p();a={replacePager:function(a,c){b("DOM").setContent(b("$")("pagelet_group_pager"),a);if(c){a=b("ScrollingPager").getInstance(c);a&&a.register()}},replaceFilesPager:function(a,c){b("DOM").setContent(b("$")("group_files_pager_"+c),a)},replacePostApprovalSection:function(a){var c=b("ge")("pagelet_consolidate_posts");c!==null&&b("DOM").setContent(c,a)},replaceScheduledPostsSection:function(a){var c=b("ge")("pagelet_scheduled_posts");c!==null&&b("DOM").setContent(c,a)}};e.exports=a}),null);
__d("GroupDescription",["Arbiter","Event","tidyEvent"],(function(a,b,c,d,e,f){a={onDescriptionActionButtonClick:function(a){b("tidyEvent")(b("Event").listen(a,"click",function(){b("Arbiter").inform("GroupsRHC/expandDescContainer")}))}};e.exports=a}),null);
__d("GroupsDescTagContainer",["cx","Arbiter","CSS","Event","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d){"use strict";this.$1=a,this.$2=c,this.$3=d,this.checkAndCollapseContent(),b("Arbiter").subscribe("GroupsRHC/expandDescContainer",this.expandContainer.bind(this))}a.prototype.checkAndCollapseContent=function(){"use strict";if(this.$1.getBoundingClientRect().height<=this.$3)return;b("CSS").addClass(this.$1,"__gz");b("CSS").show(this.$2);b("tidyEvent")(b("Event").listen(this.$2,"click",this.expandContainer.bind(this)))};a.prototype.expandContainer=function(){"use strict";b("CSS").removeClass(this.$1,"__gz"),b("CSS").hide(this.$2)};e.exports=a}),null);
__d("GroupsMemberCountUpdater",["Arbiter","DOM"],(function(a,b,c,d,e,f){__p&&__p();function a(){}a.subscribeMemberCount=function(a){b("Arbiter").subscribe("GroupsMemberCount/changeText",function(c,d){b("DOM").setContent(a,d)})};a.subscribeNewMemberCount=function(a){b("Arbiter").subscribe("GroupsMemberCount/changeNewMembersText",function(c,d){b("DOM").setContent(a,d)})};a.subscribeWelcomeMemberCount=function(a){b("Arbiter").subscribe("GroupsMemberCount/changeWelcomeMembersText",function(c,d){b("DOM").setContent(a,d)})};e.exports=a}),null);
__d("GroupMemberActionSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",UNKNOWN_DISCOVER:"unknown_discover",REACTIVATE_ACCOUNT:"reactivate_account",ADD_FROM_PROFILE:"add_from_profile",APP_COMMUNITY_MANAGER:"app_community_manager",BUY_SELL_GROUP_MEGA_MALL:"buy_sell_group_mega_mall",BUY_SELL_GROUP_MINI_MALL:"buy_sell_group_mini_mall",CHAT_WITH_GROUP:"chat_with_group",COMPOSER:"composer",CREATE_FLOW:"create_flow",FULL_SUGGESTION:"full_suggestion",GYSJ:"gysj",MALL_GYSJ:"mall_gysj",GAME_GYSJ:"game_gysj",LOCAL_NEWS_GYSJ:"local_news_gysj",AGORA_GYSJ:"agora_gysj",LWG_TAB_GYSJ:"lwg_tab_gysj",AGORA_START_A_CONVERSATION:"agora_start_a_conversation",GROUP_ABOUT_PAGE:"group_about_page",GROUP_BROWSE:"group_browse",GROUP_CONTEXT_ROWS:"group_context_rows",GROUP_MALL:"group_mall",GROUP_MALL_EDUCATION_TIP:"group_mall_education_tip",GROUP_MALL_CONTEXT_CARD:"group_mall_context_card",GROUP_SETTINGS_PAGE:"settings_page",GROUP_INFO_PAGE:"group_info_page",SUGGESTED_PURPOSE_MODAL:"suggested_purpose_modal",MARKETPLACE:"marketplace",NEWSFEED:"nf",TYPEAHEAD:"typeahead",DIALOG_TYPEAHEAD:"dialog_typeahead",DEFAULT_CHILD_GROUP:"default_child_group",SGNY:"sgny",PERMALINK:"permalink",DISCOVER_GROUPS:"discover_groups",SCHOOL_NUX:"launch",GROUP_MALL_NUX:"group_mall_nux",GROUP_COMMENT:"group_comment",GLYPH:"glyph",INTERNAL_SUPPORT:"internal_support",ADMIN_ACTIVITY_LOG:"admin_activity_log",DEVELOPER_CIRCLES:"developer_circles",DEVELOPER_SUPPORT_HOME:"developer_support_home",CREATE_GROUP:"create_group",MEMBER_FEED:"member_feed",REQUESTED_GROUPS_SECTION:"requested_groups_section",JOIN_PARENT_DIALOG:"join_parent_dialog",MANAGE_PAGE:"manage_page",MEMBER_ADD_UNDO:"member_add_undo",MEMBER_BOX:"memberbox",MEMBER_BADGE:"member_badge",PROFILE_BROWSER:"profile_browser",PROFILE_BROWSER_BLOCKED:"profilebrowser_blocked",TAG_BOX:"tagbox",GROUP_POST_NEWSFEED:"group_post_newsfeed",UNCONNECTED_OPEN_GROUP_POST_NEWSFEED:"unconnected_open_group_post_newsfeed",GROUP_LIST_SUGGESTED_GROUPS:"group_list_suggested_groups",HOVERCARD:"hovercard",INVITED:"invite",MEMBER_SUMMARY:"member_summary",NF_HEADLINE:"nf_headline",NOTIFICATION:"notification",RELATED_GROUPS:"related_groups",REQUESTS_QUEUE:"requests_queue",PEOPLE_REQUESTS_QUEUE:"people_requests_queue",PAGE_REQUESTS_QUEUE:"page_requests_queue",RHC_TAG:"rhc_tag",RHC_SUGGESTED_TAGS:"rhc_suggested_tags",RHC_LOCATION:"rhc_location",RHC_SUGGESTED_GROUPS:"suggested_groups",RHC_SUGGESTED_GROUPS_NEW:"suggested_groups_new",RHC_SUGGESTED_MEMBERS_NEW:"suggested_members_new",RHC_SUGGESTED_PAGE_MEMBERS:"rhc_suggested_page_members",RHC_SUGGESTED_PAGE_FANS:"rhc_suggested_page_fans",SUGGESTED_MEMBERS_ADD_MEMBER_LIST:"suggested_members_add_member_list",FEED_SUGGESTED_GROUP_WITH_STORY:"feed_suggested_group_with_story",FEED_SUGGESTED_GROUPS:"feed_suggested_groups",SUGGESTION:"suggestion",SEARCH:"search",SETTINGS:"settings",UNIT_TEST:"unit_test",FEED_ATTACHMENT:"feed_attachment",FEED_ATTACHMENT_SPONSORED:"feed_attachment_sponsored",CHILD_SEARCH:"child_search",GROUP_JUMP_HEADER:"group_jump_header",GROUP_JUMP_HEADER_GREEN:"group_jump_header_green",MEMBER_LIST:"member_list",MEMBER_REQUEST:"member_request",PENDING_POST_REQUEST_QUEUE:"pending_post_request_queue",PENDING_STORY_REQUEST_QUEUE:"pending_story_request_queue",REPORTED_POST_REQUEST_QUEUE:"reported_post_request_queue",REPORTED_COMMENT_REQUEST_QUEUE:"reported_comment_request_queue",REPORTED_STORY_REQUEST_QUEUE:"reported_story_request_queue",REQUEST_QUEUE_MANAGED_GROUPS:"request_queue_managed_groups",REQUEST_QUEUE_NON_MANAGED_GROUPS:"request_queue_non_managed_groups",FILTERED_OUT_REQUESTS_QUEUE:"filtered_out_request_queue",FLAGGED_POST_REQUEST_QUEUE:"flagged_post_request_queue",GROUP_COMMERCE_MAP:"group_commerce_map",GROUP_COMMERCE_SUGGESTED_GROUPS_CARD:"group_commerce_suggested_groups_card",GROUP_COMMERCE_MOBILE_LANDING_PAGE:"group_commerce_mobile_landing_page",GROUP_COMMERCE_LOW_QUALITY_CLEAN_SCRIPT:"group_commerce_low_quality_clean_script",GROUP_COMMERCE_CROSS_POSTING_CTA:"group_commerce_cross_posting_cta",ENTITY_CARD:"entity_card",MOBILE_ADD_MEMBERS:"mobile_add_members",MOBILE_CREATE_GROUP:"mobile_create_group",MOBILE_GROUP_JOIN:"mobile_group_join",MOBILE_SEE_ALL:"mobile_see_all",MOBILE_GROUPS_DASH:"mobile_groups_dash",MOBILE_GROUP_FEED_PYMI:"mobile_group_feed_pymi",MOBILE_GROUP_FEED_PAGE_FAN_PYMI:"mobile_group_feed_page_fan_pymi",MOBILE_NEWSFEED_PYMI:"mobile_newsfeed_pymi",FOF_INVITE_JOIN:"fof_invite_join_dialogue",EMAIL_INVITE_JOIN:"email_invite_join_dialogue",EMAIL_LEGACY_JOIN:"email_invite_join_bar",INVITE_LINK_JOIN:"invite_link_join_bar",PENDING_INVITE_JOIN:"pending_invite_join_page",INVITE_FROM_MENTION:"invite_from_mention",PAGES_BULK_INVITE:"pages_bulk_invite",PAGE_GROUP_DROPDOWN_MENU:"page_group_dropdown_menu",PAGE_GROUP_AYMT_INVITE_PAGE_FAN_TIP:"page_group_aymt_invite_page_fan_tip",TREEHOUSE_GROUP_MALL:"treehouse_group_mall",TREEHOUSE_GROUP_INFO:"treehouse_group_info",TREEHOUSE_HOME:"treehouse_home",TREEHOUSE_NOTIFICATION:"treehouse_notif",TREEHOUSE_DISCOVER_SEARCH:"treehouse_discover_search",TREEHOUSE_DISCOVER_SUGGESTION:"treehouse_discover_suggestion",TREEHOUSE_REPORTED_POSTS_QUEUE:"treehouse_reported_posts_queue",IPAD_SIDEFEED_GROUP_ABOUT:"ipad_sidefeed_group_about",IPAD_SIDEFEED_GROUP_GYMJ:"ipad_sidefeed_group_gymj",PAGES_GROUPS_CARD:"pages_groups_card",PAGES_PROFILE_GROUPS_TAB:"pages_profile_groups_tab",PAGES_PROFILE_HOME_TAB:"pages_profile_home_tab",PAGES_LINK_GROUP_DIALOG:"pages_link_groups_dialog",PAGES_INSIGHTS_GROUPS_TAB:"pages_insights_groups_tab",PAGES_GROUP_CTA:"pages_group_cta",PAGES_MORE_MENU:"pages_more_menu",PAGES_TIPS:"pages_tips",PAGES_COMMUNITY_CARD:"pages_community_card",PAGES_PAGE_LIKE_LINKED_GROUP_CHAINING:"pages_page_like_linked_group_chaining",PAGES_PAGE_LIKE_GYSJ_CHAINING:"pages_page_like_gysj_chaining",PAGES_RECOMMEND_GROUP_TIP:"pages_recommend_group_tip",PAGE_MANAGER_INBOX:"page_manager_inbox",PAGES_RECOMMEND_VISITING_GROUPS_NEWSFEED_QP:"pages_recommend_visiting_groups_newsfeed_qp",GROUP_MALL_MEGAPHONE:"group_mall_megaphone",PAGES_STORY_LIKE_LINKED_GROUP_FEED_CHAINING:"pages_story_like_linked_group_feed_chaining",PROFILE_GROUP_COLLECTION:"group_collection",PROFILE_MOBILE_GROUP_COLLECTION:"mobile_collection",WORK_ADMIN_PANEL:"work_admin_panel",WORK_BULK_UPLOAD:"work_bulk_upload",WORK_CLAIM_FLOW:"atworknux",WORK_COWORKER_INVITE:"work_coworker_invite",WORK_GROUP_CREATION_DIALOG:"work_group_creation_dialog",WORK_ONBOARDING_GROUP_INVITE:"work_onboarding_group_invite",WORK_GROUP_INVITATION_DIALOG:"work_group_invitation_dialog",WORK_GYSJ_EMAIL:"work_gysj_email",WORK_INVITE_LINK_SIGNUP:"work_invite_link_signup",WORK_JOIN_GROUP_GOAL:"work_join_group_goal",WORK_LHC_GREEN_BUTTON:"work_lhc_green_button",WORK_NEWSFEED_NUX:"work_newsfeed_nux",WORK_SIGNUP_FLOW:"work_signup_flow",WORK_INTERNAL_SCRIPT:"work_internal_script",WORK_MANAGER_GROUP:"work_manager_group",WORK_CREATION_SUGGESTIONS:"work_creation_suggestions",WORK_MOBILE_ADD_CONTACT:"work_mobile_add_contact",WORK_MOBILE_ADD_ALL_CONTACTS:"work_mobile_add_all_contacts",WORK_MOBILE_GROUPS_TAB:"work_mobile_groups_tab",WORK_MOBILE_GROUPS_TAB_GYSJ:"work_mobile_groups_tab_gysj",WORK_DEFAULT_GROUP_CREATE:"work_default_group_create",WORK_SETUP_TEAM_STEP:"work_setup_team_step",WORK_SETUP_TEAM_STEP_SKIP:"work_setup_team_step_skip",WORK_ADMIN_MCG_OBSERVER:"work_admin_mcg_observer",WORK_USER_GROUP_RULES:"work_user_group_rules",API:"api",GROUP_SUGGESTION_TIP:"group_suggestion_tip",FBAPP_DISCOVERY_LANDING_PAGE:"fbapp_discovery_landing_page",MESSENGER_ATTACHMENT:"messenger_group_attachment",MESSENGER_SCHOOL_COMMUNITY_TAB:"messenger_school_community_tab",CO_ACTION_FOR_SCHOOL_COMMUNITY:"co_action_for_school_community",FB_SCHOOL_COMMUNITY_TAB:"fb_school_community_tab",WEB_SOCIAL_PLUGIN:"web_social_plugin",EMAIL_CAMPAIGN_PLUGIN:"email_campaign_plugin",SAFETY_CHECK:"safety_check",PULSE_DASHBOARD:"pulse_dashboard",SOCIAL_PLAYER:"social_player",WATCH_SUGGESTED_GROUPS:"watch_suggested_groups",DISCOVER_SUGGESTION:"discover_suggestion",DISCOVER_SEARCH:"discover_search",CATEGORY_DISCOVER_LANDING:"category_discover_landing",CATEGORY_DISCOVER_CATEGORY:"category_discover_category",CATEGORY_DISCOVER_TAG:"category_discover_tag",DISCOVER_RELATED_GROUPS:"discover_related_groups",GROUP_BROWSE_NEW:"group_browse_new",CASUAL_GROUP_BROWSE:"casual_group_browse",BOOKMARKS:"bookmarks",GROUPS_HUB:"groups_hub",COMMUNITY_SUGGESTED_GROUPS:"community_suggested_groups",COMMUNITY_FORUM_GROUPS:"community_forum_groups",COMMUNITY_SUBGROUPS_SEARCH:"community_subgroups_search",COMMUNITY_ALL_SUBGROUPS:"community_all_subgroups",COMMUNITY_VIEWER_SUBGROUPS:"community_viewer_subgroups",COMMUNITY_INVITE_FRIEND:"community_invite_friend",COMMUNITY_ONBOARDING_NUX:"community_onboarding_nux",COMMUNITY_JOIN_CONTEXT:"community_join_context",COMMUNITY_JOIN_WITH_EMAIL:"community_join_with_email",SUBGROUP_CARD:"subgroup_card",SUBGROUP_HSCROLL:"subgroup_hscroll",SUBGROUP_EDIT_SETTINGS:"subgroup_edit_settings",LINKED_GROUPS_HSCROLL:"linked_groups_hscroll",LINKED_GROUPS_SEE_ALL:"linked_groups_see_all",LINKED_GROUPS_UNJOINED_HSCROLL:"linked_groups_unjoined_hscroll",LINKED_GROUPS_LOGGING_SEE_ALL:"linked_groups_hscroll_see_all",SUGGESTED_GROUPS_AFTER_PARTY:"suggested_groups_after_party",INSTANT_GAMES:"instant_games",ADMIN_ACTIVITY:"admin_activity",AUTO_PROMOTE_MEMBERS:"auto_promote_members",COMMUNITY_SUBGROUP:"community_subgroup",COMMUNITY_EMAIL_CONFIRM:"community_email_confirm",DEVELOPER_GROUP_MANAGER:"developer_group_manager",EGO_SUGGEST_MEMBERS_EVENT:"ego_suggest_members_event",FAD_ACTION:"fad_action",FB_LITE_GROUP_CREATION:"fb_lite_group_creation",GROUP_ADD_FRIEND_CONTROLLER:"group_add_friend_controller",GROUP_LAUNCH:"group_launch",GROUPS_INSIGHTS:"groups_insights",INTERN_BOOTCAMP:"intern_bootcamp",INTERN_EMPLOYEE_SETTINGS:"intern_employee_settings",JOBS_DETAIL_VIEW:"jobs_detail_view",LUNCH_TABLE_GROUP:"lunch_table_group",SPAM_SNIPER:"spam_sniper",MEMBERFY:"memberfy",MTOUCH_ADD_MEMBER:"mtouch_add_member",MTOUCH_NON_MEMBER_TAG_HOVERCARD:"mtouch_non_member_tag_hovercard",WORK_MEMBERSHIP_OBSERVER:"work_membership_observer",WORK_SETUP_TEAM_SIGNUP_STEP:"setup_team_signup_step",WORK_USER_MIGRATION:"work_user_migration",EDUCATION_CHANGED_HOOK:"education_changed_hook",CONTEXTUAL_UNJOINED_MALL_EXPANDING:"contextual_unjoined_mall_expanding",CONTEXTUAL_UNJOINED_MALL_CHAINING:"contextual_unjoined_mall_chaining",CONTEXTUAL_LEAVE_GROUP:"contextual_leave_group",GROUP_MALL_RHC:"group_mall_rhc",NEWSFEED_FOLLOWUP_UNIT:"newsfeed_followup_unit",CANVAS_RHC:"canvas_rhc",GAME_HUB:"game_hub",GROUPS_SYNC:"groups_sync",DITTO_CREATION:"ditto_creation",FOX_CREATION:"fox_creation",STORY_CHEVRON:"story_chevron",STORY_SUBTITLE:"story_subtitle",SUBTITLE_SEE_ALL:"subtitle_see_all",TAG_FEED:"tag_feed",MORE_LIKE_THIS:"more_like_this",SAFETY_HUB:"safety_hub",SAFETY_HUB_HISTORY_ITEM:"safety_hub_history_item",DITTO_INTEREST_PICKER:"ditto_interest_picker",TEST_GROUPS_TOOL:"test_groups_tool",GROUPS_ENGAGE_TAB:"groups_engage_tab",GROUPS_DISCOVER_TAB:"groups_discover_tab"})}),null);
__d("XGroupsMemberSuggestionSeeMoreAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/membersuggestion/seemore/",{group_id:{type:"Int",required:!0},already_suggested_ids:{type:"IntVector",required:!0},see_more_link_id:{type:"String",required:!0},suggestion_list_id:{type:"String",required:!0},replace_suggestion_id:{type:"Int"},page_id:{type:"FBID"},ref:{type:"String",defaultValue:""},source:{type:"String"}})}),null);
__d("GroupsMemberSuggestionsUtils",["csx","AsyncRequest","DOMQuery","GroupMemberSuggestionConstants","XGroupsMemberSuggestionSeeMoreAsyncController","ge"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={getSuggestedMemberIDs:function(){var a=b("DOMQuery").scry(b("ge")("pagelet_group_rhc"),"._275p");if(a.length===0)return[];a=a[0];a=b("DOMQuery").scry(a,"li");a=a.map(function(a){return a.id.startsWith(b("GroupMemberSuggestionConstants").suggestionIDPrefix)?a.id.slice(b("GroupMemberSuggestionConstants").suggestionIDPrefix.length):null});return a.filter(function(a){return a!==null})},seeMoreSuggestions:function(a,c,d,e,f,g,i){var j=h.getSuggestedMemberIDs();a=b("XGroupsMemberSuggestionSeeMoreAsyncController").getURIBuilder().setInt("group_id",a).setIntVector("already_suggested_ids",j).setString("see_more_link_id",d).setString("suggestion_list_id",e).setInt("replace_suggestion_id",c).setFBID("page_id",f).setString("ref",g).setString("source",i).getURI();new(b("AsyncRequest"))(a).send()}};e.exports=h}),null);
__d("PageGroupJoinActivitiesTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:PageGroupJoinActivitiesLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:PageGroupJoinActivitiesLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PageGroupJoinActivitiesLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setGroupID=function(a){this.$1.group_id=a;return this};a.prototype.setLoggingEvent=function(a){this.$1.logging_event=a;return this};a.prototype.setLoggingExtra=function(a){this.$1.logging_extra=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPageIds=function(a){this.$1.page_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={group_id:!0,logging_event:!0,logging_extra:!0,page_id:!0,page_ids:!0,vc:!0};e.exports=a}),null);
__d("XGroupMemberSuggestionXoutAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/membersuggestion/xout/",{})}),null);
__d("GroupMemberSuggestionInvitationToggle",["ActorURI","AsyncRequest","Button","CSS","Event","GroupMemberActionSource","GroupsMemberSuggestionsUtils","PageGroupJoinActivitiesTypedLogger","XGroupMemberSuggestionXoutAsyncController","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a){__p&&__p();b("tidyEvent")(b("Event").listen(a.button,"click",function(){b("Button").setEnabled(a.button,!1);var c="/ajax/groups/members/add_post.php";a.pageID&&(c=b("ActorURI").create(c,a.pageID));var d={group_id:a.groupID,members:[a.suggestionID],message_id:a.completionTextID,recommendation_key:a.recommendationKey,ref:a.ref,source:a.source};new(b("AsyncRequest"))(c).setData(d).setHandler(function(c){c=c.getPayload();c&&c.error_occurred?b("Button").setEnabled(a.button,!0):b("GroupsMemberSuggestionsUtils").seeMoreSuggestions(a.groupID,a.suggestionID,a.seeMoreLinkID,a.suggestionListID,a.pageID,a.ref,a.source)}).send();a.source===b("GroupMemberActionSource").RHC_SUGGESTED_PAGE_MEMBERS&&new(b("PageGroupJoinActivitiesTypedLogger"))().setGroupID(a.groupID).setLoggingEvent("page_group_join_page_admin_invite_click").setPageID(a.suggestionID).log()})),b("tidyEvent")(b("Event").listen(a.suggestionRow,"mouseenter",function(){b("CSS").show(a.xoutButton)})),b("tidyEvent")(b("Event").listen(a.suggestionRow,"mouseleave",function(){b("CSS").hide(a.xoutButton)})),b("tidyEvent")(b("Event").listen(a.xoutButton,"click",function(){var c=b("XGroupMemberSuggestionXoutAsyncController").getURIBuilder().getURI();a.pageID&&(c=b("ActorURI").create(c,a.pageID));var d={group_id:a.groupID,invitee_id:a.suggestionID,recommendation_key:a.recommendationKey,source:a.source};new(b("AsyncRequest"))(c).setData(d).setHandler(function(){b("GroupsMemberSuggestionsUtils").seeMoreSuggestions(a.groupID,a.suggestionID,a.seeMoreLinkID,a.suggestionListID,a.pageID,a.ref,a.source)}).send();a.source===b("GroupMemberActionSource").RHC_SUGGESTED_PAGE_MEMBERS&&new(b("PageGroupJoinActivitiesTypedLogger"))().setGroupID(a.groupID).setLoggingEvent("page_group_join_page_admin_hide_suggestion").setPageID(a.suggestionID).log()}))}};e.exports=a}),null);
__d("GroupMemberSuggestionsRhcUnit",["Event","GroupMemberActionSource","GroupsMemberSuggestionsUtils","PageGroupJoinActivitiesTypedLogger","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={init__NEW:function(a){b("tidyEvent")(b("Event").listen(a.seeMoreLink,"click",function(){b("GroupsMemberSuggestionsUtils").seeMoreSuggestions(a.groupID,null,a.seeMoreLinkID,a.suggestionListID,a.pageID,a.ref,a.source),a.source===b("GroupMemberActionSource").RHC_SUGGESTED_PAGE_MEMBERS&&new(b("PageGroupJoinActivitiesTypedLogger"))().setGroupID(a.groupID).setLoggingEvent("page_group_join_recommendation_see_more").log()}))}};e.exports=a}),null);
__d("XGroupMemberSuggestionsUnitXoutAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/suggestionunit/xout/",{})}),null);
__d("GroupMemberSuggestionsRhcUnitContainer",["AsyncRequest","CSS","Event","XGroupMemberSuggestionsUnitXoutAsyncController","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={init:function(a){b("tidyEvent")(b("Event").listen(a.hideLink,"click",function(){b("CSS").hide(a.root);var c=b("XGroupMemberSuggestionsUnitXoutAsyncController").getURIBuilder().setInt("group_id",a.groupId).setString("source",a.source).setString("recommendation_key",a.recommenderId).getURI();new(b("AsyncRequest"))(c).setErrorHandler(function(){b("CSS").show(a.root);return}).send()}))}};e.exports=a}),null);
__d("GroupNewMemberWelcomePost",["CSS","Arbiter"],(function(a,b,c,d,e,f){__p&&__p();var g=null;a.prototype.construct=function(){"use strict"};a.initRhcNotice=function(a){"use strict";g=a};a.registerForComposerFinish=function(a){"use strict";b("Arbiter").subscribe("Pages/composeFinished",function(c,d){d.composerID===a&&(g!=null&&b("CSS").hide(g))})};function a(){"use strict"}e.exports=a}),null);
__d("GroupsAddMemberTypeahead",["Arbiter","DOM","Typeahead","ge"],(function(a,b,c,d,e,f){__p&&__p();function a(a,b){a&&b&&this.init(a,b)}Object.assign(a.prototype,{init:function(a,c){a.subscribe("select",function(a,d){b("Arbiter").inform("GroupsAddMemberTypeahead/add",{gid:c,uid:d.selected.uid,name:d.selected.text,photo:d.selected.photo})}),b("Arbiter").subscribe("GroupsAddMemberTypeahead/updateGroupToken",this.resetTypeaheadCaches.bind(this))},resetTypeaheadCaches:function(a,c){a=b("DOM").scry(b("ge")("pagelet_group_"),".uiTypeahead:not(.uiPlacesTypeahead)");for(var d=0;d<a.length;d++){var e=b("Typeahead").getInstance(a[d]);if(e){var f=e.getData();f.updateToken(c.token);e.getCore().subscribe("focus",f.bootstrap.bind(f))}}}});e.exports=a}),null);
__d("legacy:GroupsAddMemberTypeahead",["GroupsAddMemberTypeahead"],(function(a,b,c,d,e,f){a.GroupsAddMemberTypeahead=b("GroupsAddMemberTypeahead")}),3);
__d("GroupsAddTypeaheadView",["Arbiter","ContextualTypeaheadView"],(function(a,b,c,d,e,f){__p&&__p();var g,h;g=babelHelpers.inherits(a,b("ContextualTypeaheadView"));h=g&&g.prototype;a.prototype.select=function(a){"use strict";var c=this.results[this.index];b("Arbiter").inform("GroupsMemberSuggestion/remove",c.uid);c.is_member?this.reset():h.select.call(this,a)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("GroupsAddMemberTypeaheadView",["csx","cx","fbt","CSS","CurrentUser","DOM","GroupsAddTypeaheadView","ex","getOrCreateDOMID"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j,k,l="friends",m="others",n="coworkers",o="email";function p(a){__p&&__p();var c;switch(a){case l:c=i._("Friends");break;case m:c=i._("Others");break;case n:c=i._("Coworkers");break;case o:c=i._("Email");break;default:throw new Error(b("ex")("The given typeahead result category seems to be untransformed: %s",a))}a=b("DOM").create("li",{className:"_3cz5",data:a},c);return a}j=babelHelpers.inherits(c,b("GroupsAddTypeaheadView"));k=j&&j.prototype;c.prototype.getItems=function(){"use strict";return b("DOM").scry(this.content,'li[role="option"]')};c.prototype.buildResults=function(c){"use strict";__p&&__p();var d,e=null;typeof this.renderer=="function"?(d=this.renderer,e=this.renderer.className||""):(d=a.TypeaheadRenderers[this.renderer],e=this.renderer);d=d.bind(this);var f=null;c=c.reduce(function(a,c,e){__p&&__p();e=c.node||d(c,e);var g=c.bootstrapped&&c.type!="email"?l:m;b("CurrentUser").isWorkUser()&&(c.aux_data&&c.aux_data.is_email?g=o:g=n);c.header=g;if(g!==f){c=p(g);f!==null&&b("CSS").addClass(c,"_3cz6");a=a.concat(c);f=g}return a.concat(e)},[]);if(c.length>0){var g=c.filter(function(a){return b("CSS").matchesSelector(a,"._3cz5")});g.length==1&&c[0].className==="_3cz5"&&c[0].attributes.data.value===m&&c.shift()}g=b("DOM").create("ul",{className:e,id:"typeahead_list_"+b("getOrCreateDOMID")(this.typeahead?this.typeahead:this.element)},c);g.setAttribute("role","listbox");return g};c.prototype.render=function(a,b,c){"use strict";var d={friends:[],others:[]};b.reduce(function(a,b){b.header===l?a.friends.push(b):a.others.push(b);return a},d);b=d.friends.concat(d.others);return k.render.call(this,a,b,c)};function c(){"use strict";j.apply(this,arguments)}e.exports=c}),null);
__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(function(a,b,c,d,e,f){__p&&__p();var g={buildRequest:function(a,c){__p&&__p();var d=(b("Form").getAttribute(a,"method")||"GET").toUpperCase();c=c&&b("Parent").byTag(c,"button")||c;var e=c&&b("Parent").byClass(c,"stat_elem")||a;if(b("CSS").hasClass(e,"async_saving"))return null;if(c&&(c.form!==a||c.nodeName!="INPUT"&&c.nodeName!="BUTTON"||c.type!="submit")){var f=b("DOMQuery").scry(a,".enter_submit_target")[0];f&&(c=f)}f=b("Form").serialize(a,c);b("Form").setDisabled(a,!0);c=b("Form").getAttribute(a,"ajaxify")||b("Form").getAttribute(a,"action");var g=!!b("Form").getAttribute(a,"data-cors");b("trackReferrer")(a,c);return new(b("AsyncRequest"))().setAllowCrossOrigin(g).setURI(c).setData(f).setNectarModuleDataSafe(a).setReadOnly(d=="GET").setMethod(d).setRelativeTo(a).setStatusElement(e).setInitialHandler(b("Form").setDisabled.bind(null,a,!1)).setHandler(function(c){b("Event").fire(a,"success",{response:c})}).setErrorHandler(function(c){b("Event").fire(a,"error",{response:c})!==!1&&b("AsyncResponse").defaultErrorHandler(c)}).setFinallyHandler(b("Form").setDisabled.bind(null,a,!1))},send:function(a,b){a=g.buildRequest(a,b);a&&a.send();return a}};e.exports=g}),null);
__d("TypeaheadSubmitOnSelect",["FormSubmit"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._typeahead=a}a.prototype.enable=function(){"use strict";this._subscription=this._typeahead.subscribe("select",function(){var a=this._typeahead.getCore().getElement().form;a&&(a.getAttribute("rel")=="async"?b("FormSubmit").send(a):a.submit())}.bind(this))};a.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription),this._subscription=null};Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("GroupsAddMessage",["CSS","Event","Toggler","TypeaheadSubmitOnSelect"],(function(a,b,c,d,e,f){__p&&__p();var g={showNUX:!0,toggleState:function(a,c,d){a.init();var e=a.getCore();e.reset();c.value="";!b("CSS").hasClass(d,"openToggler")?(a.disableBehavior(b("TypeaheadSubmitOnSelect")),e.resetOnSelect=!1):(a.enableBehavior(b("TypeaheadSubmitOnSelect")),e.resetOnSelect=!0)},initEvents:function(a,c,d,e,f,h,i){b("Event").listen(a,"click",function(){g.toggleState(f,e,i)}),b("Event").listen(c,"click",function(){g.toggleState(f,e,i),b("Toggler").toggle(i)}),b("Event").listen(d,"success",function(){var a=f.getCore();a.reset()})},initNUXEvent:function(a,c,d){b("Event").listen(a.getCore().getElement(),"select",function(event){c&&g.showNUX&&(c.show(),b("Event").kill(event),g.showNUX=!1)})}};e.exports=g}),null);
__d("GroupsAddMemberTypeaheadRenderer",["cx","fbt","DOM"],(function(a,b,c,d,e,f,g,h){__p&&__p();function a(a,c){__p&&__p();c=[];a.photo&&c.push(b("DOM").create("img",{alt:"",src:a.photo,className:"_2-fx"}));a.text&&c.push(b("DOM").create("span",{className:"_2-fy"},a.text));if(a.subtext){var d=[a.subtext];c.push(b("DOM").create("span",{className:"subtext"},d))}a.type==="member"?d=h._("Already a member"):a.already_invited_to_group?d=h._("Already invited"):d=a.category;c.push(b("DOM").create("span",{className:"subtext"},d));d=b("DOM").create("li",{className:a.type||""},c);a.text&&(d.setAttribute("title",a.text),d.setAttribute("role","option"),d.setAttribute("aria-label",a.text));return d}a.className="_2-fz";e.exports=a}),null);
__d("LitestandRHCAds",["csx","AdsRefreshHandler","Arbiter","DOMQuery","Event","NavigationMessage","Run","SubscriptionsHandler","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h=void 0,i=void 0,j=void 0,k=void 0,l=void 0;function m(){i&&i.forceLoadIfEnoughTimePassed(0)}function n(){var a=b("DOMQuery").scry(j,"._5f85 a")[0];a&&h&&h.addSubscriptions(b("Event").listen(a,"click",m))}function o(){var a=b("ge")(k);a&&l&&(a.appendChild(l),l=null)}function p(){i&&(i.cleanup(),i=null),h&&(h.release(),h=null),l=null}function q(a,b){l=b,m()}a={init:function(a,c,d){j=b("ge")(a),k=a,i=new(b("AdsRefreshHandler"))(j,c,d).subscribeDefaultEventsForRefresh(),h=new(b("SubscriptionsHandler"))(),h.addSubscriptions(b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,p),b("Arbiter").subscribe("AdsRefreshHandler/AdsLoaded",n),b("Arbiter").subscribe("AdsRefreshHandler/AdsLoaded",o),b("Arbiter").subscribe("ProfileQuestionAnswered",q)),n(),b("Run").onLeave(p)}};e.exports=a}),null);
__d("GroupAddMemberCustomTypeahead",["Typeahead"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("Typeahead"));g=c&&c.prototype;function a(a,b,c,d,e){"use strict";g.constructor.call(this,a,b,c,d),this._memberSuggestions=e}a.prototype.containsInSuggestedMembers=function(a){"use strict";a=parseInt(a,10);return this._memberSuggestions.indexOf(a)>-1};a.prototype.addSuggestedMember=function(a){"use strict";a=parseInt(a,10);this._memberSuggestions.push(a)};a.prototype.removeSuggestedMember=function(a){"use strict";a=parseInt(a,10);a=this._memberSuggestions.indexOf(a);a>-1&&this._memberSuggestions.splice(a,1)};e.exports=a}),null);
__d("legacy:SubmitOnSelectTypeaheadBehavior",["TypeaheadSubmitOnSelect"],(function(a,b,c,d,e,f){a.TypeaheadBehaviors||(a.TypeaheadBehaviors={}),a.TypeaheadBehaviors.submitOnSelect=function(a){a.enableBehavior(b("TypeaheadSubmitOnSelect"))}}),3);
__d("TypeaheadShowResultsOnFocus",["Event","Keys"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._typeahead=a}a.prototype.enable=function(){"use strict";this._typeahead.getCore().resetOnKeyup=!1,this._subscription=this._typeahead.subscribe("bootstrap",function(a,b){this.firstFetch(b,this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._keyUpListener=b("Event").listen(this._typeahead.getCore().getElement(),"keyup",function(event){(b("Event").getKeyCode(event)==b("Keys").BACKSPACE||b("Event").getKeyCode(event)==b("Keys").DELETE)&&this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._focusListener=b("Event").listen(this._typeahead.getCore().getElement(),"focus",function(event){this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};a.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription),this._subscription=null,this._keyUpListener.remove(),this._keyUpListener=null,this._focusListener.remove(),this._focusListener=null};a.prototype.firstFetch=function(a,b,c){"use strict";a.bootstrapping||this.respond(b,c)};a.prototype.respond=function(a,b){"use strict";a.getValue()||this.refreshAndShowNeededResults(a,b)};a.prototype.refreshAndShowNeededResults=function(a,b){"use strict";var c=this.getUidsFromData(b);a.setValue("");a=b.buildUids(" ",c);b.respond("",a)};a.prototype.getUidsFromData=function(a){"use strict";a=a.getAllEntries();var b=[];for(var c in a)b.push({uid:a[c].uid,index:a[c].index});b.sort(function(a,b){return a.index-b.index});return b.map(function(a){return a.uid})};Object.assign(a.prototype,{_subscription:null,_keyUpListener:null,_focusListener:null});e.exports=a}),null);
__d("TypeaheadCustomGroupShowMemberSuggestionsOnFocus",["TypeaheadShowResultsOnFocus"],(function(a,b,c,d,e,f){__p&&__p();var g,h;g=babelHelpers.inherits(a,b("TypeaheadShowResultsOnFocus"));h=g&&g.prototype;a.prototype.enable=function(){"use strict";h.enable.call(this),this.enableCustomizedFeature()};a.prototype.firstFetch=function(a,b,c){"use strict";setTimeout(function(){h.firstFetch.call(this,a,b,c)}.bind(this),200)};a.prototype.enableCustomizedFeature=function(){"use strict";this._typeahead.subscribe("select",function(a,b){this._typeahead.removeSuggestedMember(b.selected.uid),this.refreshAndShowNeededResults(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};a.prototype.getUidsFromData=function(a){"use strict";a=a.getAllEntries();var b=[];for(var c in a)this._typeahead.containsInSuggestedMembers(a[c].uid)&&b.push({uid:a[c].uid,index:a[c].index});b.sort(function(a,b){return a.index-b.index});return b.map(function(a){return a.uid})};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("TypeaheadCustomGroupShowMemberSuggestionsOnRHCFocus",["TypeaheadCustomGroupShowMemberSuggestionsOnFocus"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("TypeaheadCustomGroupShowMemberSuggestionsOnFocus"));g&&g.prototype;a.prototype.enableCustomizedFeature=function(){"use strict";this._typeahead.subscribe("select",function(a,b){this._typeahead.removeSuggestedMember(b.selected.uid)}.bind(this))};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);