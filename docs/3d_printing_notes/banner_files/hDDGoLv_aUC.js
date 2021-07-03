if (self.CavalryLogger) { CavalryLogger.start_js(["aPSTT"]); }

__d("PlainTextEditor.react",["DraftEditor.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.focus=function(){this.refs.editor.focus()}.bind(this),b}a.prototype.render=function(){return b("React").createElement(b("DraftEditor.react"),babelHelpers["extends"]({},this.props,{ref:"editor",stripPastedStyles:!0}))};a.propTypes=b("DraftEditor.react").propTypes;a.defaultProps=b("DraftEditor.react").defaultProps;e.exports=a}),null);
__d("ProfileFunFactsStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={SINGLE_PROMPT_ANSWER_QUESTION:g._("Add Answer"),SINGLE_PROMPT_ANSWER_QUESTION_SHORT:g._("Answer"),SINGLE_PROMPT_ANSWER_TAB:g._("Answer"),SINGLE_PROMPT_ASK_QUESTION_PLACEHOLDER:g._("What are you curious about?"),SINGLE_PROMPT_ASK_NOTICE:g._("Questions you create are public so anyone can answer them."),SINGLE_PROMPT_ASK_TAB:g._("Ask"),SINGLE_PROMPT_DIALOG_TITLE:g._("Did You Know"),SINGLE_PROMPT_BACK_BUTTON:g._("Back"),SINGLE_PROMPT_RANDOMIZE_QUESTION:g._("New Question"),SINGLE_PROMPT_RANDOMIZE_QUESTION_SHORT:g._("New"),SINGLE_PROMPT_SAVE_AND_TAG:g._("Save and Tag Friends"),MANAGE_QUESTIONS_DELETE_DIALOG_CONTENT:g._("Once you archive a question, it will be unavailable for people to answer and your name will be removed from existing posts. You won't be able to undo this."),MANAGE_QUESTIONS_DELETE_DIALOG_TITLE:g._("Archive this question?"),MANAGE_QUESTIONS_DELETE_BUTTON_TEXT:g._("Archive"),MANAGE_QUESTIONS_NULL_STATE_TITLE:g._("No Questions Yet"),MANAGE_QUESTIONS_NULL_STATE_CTA_TEXT:g._("Create questions for your friends and anyone on Facebook to answer."),MANAGE_QUESTIONS_NULL_STATE_CTA_BUTTON_TEXT:g._("Create Question"),QUESTION_OF_THE_DAY_LABEL:g._("QUESTION OF THE DAY"),MTOUCH_SINGLE_PROMPT_ANSWER_TAB:g._("ANSWER"),MTOUCH_SINGLE_PROMPT_ASK_TAB:g._("ASK"),MTOUCH_SINGLE_PROMPT_COMPOSER_BUTTOM:g._("Add your answer"),MTOUCH_SINGLE_PROMPT_BACK_BUTTON:g._("GO BACK"),MTOUCH_SINGLE_PROMPT_RANDOMIZE_QUESTION:g._("NEW QUESTION"),getAttributionLine:function(a){return g._("by {authorName}",[g._param("authorName",a)])}};e.exports=a}),null);
__d("XProfileFunFactsAskPromptCreateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/ask_prompt/create/",{entry_point:{type:"Enum",defaultValue:"unknown",enumType:1}})}),null);
__d("FunFactAskPromptSelector.react",["cx","AsyncRequest","AsyncResponse","ContentState","CurrentUser","EditorState","FacebookAppIDs","FlexLayout.react","PlainTextEditor.react","ProfileEngagementTypedLogger","ProfileFunFactsStrings","React","TextWithEmoticons.react","XProfileFunFactsAskPromptCreateController","XUIButton.react","XUISpinner.react","isEmpty"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=100,j=128173;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state=this.$1(),this.$4=function(){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("exit").setItemType("ask_input_box").setEventMetadata({entry_point:this.props.entryPoint}).setAppID(b("FacebookAppIDs").WWW).log()}.bind(this),this.$6=function(){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("enter").setItemType("ask_input_box").setEventMetadata({entry_point:this.props.entryPoint}).setAppID(b("FacebookAppIDs").WWW).log()}.bind(this),this.$8=function(){this.setState({isSaving:!0});var a=b("XProfileFunFactsAskPromptCreateController").getURIBuilder().getURI();new(b("AsyncRequest"))().setMethod("POST").setURI(a).setData({emoji:String.fromCodePoint(j),title:this.state.editorState.getCurrentContent().getPlainText()}).setHandler(function(a){this.props.onSave(a.getPayload()),new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("exit").setItemType("ask_tab").setEventMetadata({entry_point:this.props.entryPoint,tap_target:"add_content"}).setAppID(b("FacebookAppIDs").WWW).log()}.bind(this)).setErrorHandler(function(a){b("AsyncResponse").defaultErrorHandler(a),this.setState(this.$1())}.bind(this)).send()}.bind(this),this.$5=function(a){var c=a.getCurrentContent().getPlainText();this.setState({editorState:a,isSaveDisabled:b("isEmpty")(c)||c.length>i})}.bind(this),c}a.prototype.$1=function(){return{editorState:b("EditorState").createWithContent(b("ContentState").createFromText("")),isSaveDisabled:!0,isSaving:!1}};a.prototype.$2=function(){var a=String.fromCodePoint(j),c=b("React").createElement("div",{className:"_4s3r _4s3s _3-8y"},b("React").createElement(b("PlainTextEditor.react"),{editorState:this.state.editorState,handleBeforeInput:this.$3,onBlur:this.$4,onChange:this.$5,onFocus:this.$6,placeholder:b("ProfileFunFactsStrings").SINGLE_PROMPT_ASK_QUESTION_PLACEHOLDER,ref:this.props.inputRef})),d=b("React").createElement("div",{className:"_34s5 _2ph-"},b("ProfileFunFactsStrings").SINGLE_PROMPT_ASK_NOTICE);return b("React").createElement(b("FlexLayout.react"),{align:"stretch",className:"_4s3u",direction:"vertical",justify:"center"},d,b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_34s8",direction:"vertical",justify:"center"},b("React").createElement(b("TextWithEmoticons.react"),{size:32,text:a}),c))};a.prototype.$7=function(){var a=null;this.state.isSaving&&(a=b("React").createElement(b("XUISpinner.react"),{className:"_3-90 _3-8x"}));return b("React").createElement(b("FlexLayout.react"),{className:"_2ph_",direction:"horizontal",justify:"end"},a,b("React").createElement(b("XUIButton.react"),{disabled:this.state.isSaveDisabled||this.state.isSaving,label:b("ProfileFunFactsStrings").SINGLE_PROMPT_SAVE_AND_TAG,onClick:this.$8,size:"large",use:"confirm"}))};a.prototype.$3=function(a,b){a=b.getCurrentContent().getPlainText().length;return a>=i?"handled":"not-handled"};a.prototype.render=function(){return b("React").createElement("div",null,this.$2(),this.$7())};e.exports=a}),null);
__d("ProfileFunFactsTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COLLECTION_ENTRY_POINT:"profile_fun_facts_collection_entry",COMPOSER_TAGGER:"profile_fun_facts_composer_tagger",DIALOG:"profile_fun_facts_dialog",SELECTOR_RANDOMIZE:"profile_fun_facts_selector_randomize",SELECTOR_SELECT:"profile_fun_facts_selector_select"})}),null);
__d("FunFactSinglePromptSelectorActionBar.react",["ix","cx","FlexLayout.react","Image.react","ProfileFunFactsEntryPoint","ProfileFunFactsStrings","ProfileFunFactsTestIDs","React","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;function j(a){var c=a.entryPoint===b("ProfileFunFactsEntryPoint").COLLECTION;return b("React").createElement(b("XUIButton.react"),{className:"_1c71",disabled:a.backButtonDisabled||a.disabled,image:b("React").createElement(b("Image.react"),{src:a.hasBackgroundStyle?g("533029"):g("513239")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_BACK_BUTTON,labelIsHidden:c,onClick:a.onUndo,size:"large"})}function k(a){var c=a.entryPoint===b("ProfileFunFactsEntryPoint").COLLECTION;return b("React").createElement(b("XUIButton.react"),{className:"_1c71","data-testid":b("ProfileFunFactsTestIDs").SELECTOR_RANDOMIZE,disabled:a.disabled,image:b("React").createElement(b("Image.react"),{src:a.hasBackgroundStyle?g("502101"):g("411715")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_RANDOMIZE_QUESTION_SHORT,labelIsHidden:c,onClick:a.onRandomize,size:"large"})}function l(a){return b("React").createElement(b("XUIButton.react"),{className:"_4ysf","data-testid":b("ProfileFunFactsTestIDs").SELECTOR_SELECT,disabled:a.disabled,label:b("ProfileFunFactsStrings").SINGLE_PROMPT_ANSWER_QUESTION_SHORT,onClick:a.onSelect,size:"large",use:"confirm"})}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=this.props.hasBackgroundStyle;return b("React").createElement(b("FlexLayout.react"),{className:(a?"_1c72":"")+" _2ph_",justify:"all"},b("React").createElement(j,this.props),b("React").createElement(l,this.props),b("React").createElement(k,this.props))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("FunFactSinglePromptSelectorBody.react",["cx","FlexLayout.react","React","TextWithEmoticons.react","XUISpinner.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;function i(a){a=a.prompt;return b("React").createElement("div",{className:a.backgroundStyle?"_3ljc":""},b("React").createElement(b("TextWithEmoticons.react"),{key:"emoji",size:32,text:a.emoji}),b("React").createElement(b("XUIText.react"),{className:"_3gi9 _3-8y",display:"block",size:"header1"},a.title),a.isCrowdsourced?b("React").createElement(b("XUIText.react"),{className:"_68km _3-8w",display:"block"},a.attribution):null)}h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props.prompt;return b("React").createElement(b("FlexLayout.react"),{align:a?"stretch":"center",className:"_3gia",direction:"vertical",justify:"center"},a?b("React").createElement(i,{prompt:a}):b("React").createElement(b("XUISpinner.react"),{size:"large"}))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("FunFactSinglePromptSelectorHeader.react",["ix","cx","FlexLayout.react","Image.react","ProfileFunFactsEntryPoint","ProfileFunFactsStrings","React","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;function j(a){a=a.prompt;if(!a.isQuestionOfTheDay)return null;a=a.backgroundStyle?g("489589"):g("507318");return b("React").createElement(b("FlexLayout.react"),{align:"center",justify:"center"},b("React").createElement(b("Image.react"),{className:"_2d1b",src:a}),b("React").createElement(b("XUIText.react"),{className:"_2d1c _3-8s",weight:"bold"},b("ProfileFunFactsStrings").QUESTION_OF_THE_DAY_LABEL),b("React").createElement(b("Image.react"),{className:"_68g4",src:a}))}function k(a){a=a.prompt.timeRemaining;return!a?null:b("React").createElement(b("FlexLayout.react"),{justify:"center"},b("React").createElement(b("XUIText.react"),{className:"_68g6"},a))}function l(a){var c=a.prompt.socialProof;return!c||a.entryPoint===b("ProfileFunFactsEntryPoint").COLLECTION?null:b("React").createElement(b("FlexLayout.react"),{align:"start",className:"_68g8 _2pin _2pit",direction:"vertical"},c)}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=!!this.props.prompt.backgroundStyle;return b("React").createElement("div",{className:(a?"_2eqj":"")+" _3-8n"},b("React").createElement(j,this.props),b("React").createElement(k,this.props),b("React").createElement(l,this.props))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("XProfileFunFactsSinglePromptFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/single_prompt/fetch/",{cursor:{type:"String"},entry_point:{type:"Enum",defaultValue:"unknown",enumType:1},fetch_amount:{type:"Int"},pinned_prompt_id:{type:"FBID"},random_seed:{type:"Int"}})}),null);
__d("FunFactSinglePromptSelector.react",["ix","cx","AsyncRequest","CurrentUser","FacebookAppIDs","FlexLayout.react","FunFactSinglePromptSelectorActionBar.react","FunFactSinglePromptSelectorBody.react","FunFactSinglePromptSelectorHeader.react","Image.react","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","ProfileFunFactsStrings","ProfileFunFactsTestIDs","Random","React","XProfileFunFactsSinglePromptFetchController","XUIButton.react","asset","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=10;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={cursor:null,isLoading:!0,prompts:[],selectedIndex:-1},this.$1=b("Random").uint32(),this.$2=null,this.$5=function(){var a=this.state.selectedIndex;a<this.state.prompts.length-1?this.setState({selectedIndex:a+1}):this.state.cursor?this.$3():this.setState({selectedIndex:0});this.$4("refresh",this.state.prompts[a])}.bind(this),this.$6=function(){var a=this.state.selectedIndex;if(a<=0)return;this.setState({selectedIndex:a-1});this.$4("undo",this.state.prompts[a])}.bind(this),this.$7=function(){this.props.onSelect(this.state.prompts[this.state.selectedIndex]),new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("exit").setItemType("answer_tab").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint,tap_target:"add_content"}).setAppID(b("FacebookAppIDs").WWW).log()}.bind(this),c}a.prototype.componentDidMount=function(){this.$3(this.props.pinnedPromptID)};a.prototype.componentWillUnmount=function(){this.$2&&this.$2.abandon()};a.prototype.componentDidUpdate=function(a,b){this.state.selectedIndex!==b.selectedIndex&&this.$4("impression",this.state.prompts[this.state.selectedIndex])};a.prototype.$4=function(a,c){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType(a).setItemType("question_prompt").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint,prompt_id:c.id,is_qotd:c.isQuestionOfTheDay?"true":"false"}).setAppID(b("FacebookAppIDs").WWW).log()};a.prototype.$3=function(a){var c=b("XProfileFunFactsSinglePromptFetchController").getURIBuilder().setEnum("entry_point",this.props.entryPoint).setInt("fetch_amount",j).setInt("random_seed",this.$1);a&&c.setFBID("pinned_prompt_id",a.toString());this.state.cursor&&c.setString("cursor",this.state.cursor);this.setState({isLoading:!0});this.$2=new(b("AsyncRequest"))(c.getURI()).setHandler(function(a){a=a.getPayload();var b=this.state.selectedIndex+1,c=this.state.prompts.concat(a.prompts);this.setState({cursor:a.cursor,isLoading:!1,prompts:c,selectedIndex:b})}.bind(this));this.$2.send()};a.prototype.$8=function(){return this.state.isLoading&&this.state.selectedIndex<0?null:this.state.prompts[this.state.selectedIndex].backgroundStyle};a.prototype.$9=function(){if(b("gkx")("AT7Ezqom-Mt75seCS-HDehfATz80MTyCY_y8gQGMS6jO6yqW0_iLkzTdXg0Js0Utzn8xhywgrL8jRnMMYStgTFMl"))return b("React").createElement(b("FunFactSinglePromptSelectorActionBar.react"),{backButtonDisabled:this.state.selectedIndex===0,disabled:this.state.isLoading,entryPoint:this.props.entryPoint,hasBackgroundStyle:!!this.$8(),onRandomize:this.$5,onSelect:this.$7,onUndo:this.$6});var a=this.props.entryPoint===b("ProfileFunFactsEntryPoint").COLLECTION,c=b("React").createElement(b("XUIButton.react"),{"data-testid":b("ProfileFunFactsTestIDs").SELECTOR_RANDOMIZE,disabled:this.state.isLoading,image:b("React").createElement(b("Image.react"),{src:g("411715")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_RANDOMIZE_QUESTION,onClick:this.$5,size:"large"}),d=b("React").createElement(b("XUIButton.react"),{"data-testid":b("ProfileFunFactsTestIDs").SELECTOR_SELECT,disabled:this.state.isLoading,image:b("React").createElement(b("Image.react"),{src:g("382316")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_ANSWER_QUESTION,onClick:this.$7,size:"large",use:"confirm"});return b("React").createElement(b("FlexLayout.react"),{className:"_2ph_",justify:a?"center":"end"},c,d)};a.prototype.render=function(){var a=this.state.isLoading?null:this.state.prompts[this.state.selectedIndex],c=b("React").createElement("div",null);a!==null&&(c=b("React").createElement(b("FunFactSinglePromptSelectorHeader.react"),{entryPoint:this.props.entryPoint,prompt:a}));return b("React").createElement(b("FlexLayout.react"),{align:"stretch",className:"_2nz1",direction:"vertical",justify:"all",style:this.$8()||undefined},c,b("React").createElement(b("FunFactSinglePromptSelectorBody.react"),{prompt:a}),this.$9())};e.exports=a}),null);
__d("ProfileFunFactsSinglePromptTabs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ANSWER:"answer",ASK:"ask"})}),null);
__d("ReactComposerFunFactSinglePromptDialog.react",["ix","cx","CurrentUser","FacebookAppIDs","FunFactAskPromptSelector.react","FunFactSinglePromptSelector.react","Image.react","LayerFadeOnHide","Layout.react","PlainTextEditor.react","ProfileEngagementTypedLogger","ProfileFunFactsAskConfig","ProfileFunFactsSinglePromptTabs","ProfileFunFactsStrings","ProfileFunFactsTestIDs","React","TabBar.react","TabBarItem.react","XUIDialog.react","XUIDialogBody.react","XUIDialogTitle.react","asset","gkx","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("Layout.react").Column,k=b("Layout.react").FillColumn,l=500,m=600;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={selectedTab:this.props.selectedTab},this.$2=function(){this.$4(this.state.selectedTab,"exit"),this.props.onClose()}.bind(this),this.$6=function(a){this.setState({selectedTab:a},function(){a===b("ProfileFunFactsSinglePromptTabs").ASK?(this.$4(b("ProfileFunFactsSinglePromptTabs").ASK,"enter"),this.$4(b("ProfileFunFactsSinglePromptTabs").ANSWER,"exit","switch_tab"),this.$5()):a===b("ProfileFunFactsSinglePromptTabs").ANSWER&&(this.$4(b("ProfileFunFactsSinglePromptTabs").ANSWER,"enter"),this.$4(b("ProfileFunFactsSinglePromptTabs").ASK,"exit","switch_tab"))}.bind(this))}.bind(this),c}a.prototype.render=function(){var a=b("ProfileFunFactsAskConfig").showAskTab;return b("React").createElement(b("XUIDialog.react"),{behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},"data-testid":b("ProfileFunFactsTestIDs").DIALOG,isStrictlyControlled:!0,onHide:this.$2,shown:this.props.showDialog,width:a?m:l},b("React").createElement(b("XUIDialogTitle.react"),{className:"_4xqu"},b("ProfileFunFactsStrings").SINGLE_PROMPT_DIALOG_TITLE),b("React").createElement(b("XUIDialogBody.react"),{useCustomPadding:!0},b("React").createElement(b("Layout.react"),{className:"_4xqv _2ph_"},a?b("React").createElement(j,{className:"_3-91"},this.$3()):null,b("React").createElement(k,{className:"_64pf"},b("React").createElement("div",{className:this.state.selectedTab!==b("ProfileFunFactsSinglePromptTabs").ANSWER?"_1rxh":""},b("React").createElement(b("FunFactSinglePromptSelector.react"),this.props)),b("React").createElement("div",{className:this.state.selectedTab!==b("ProfileFunFactsSinglePromptTabs").ASK?"_1rxh":""},b("React").createElement(b("FunFactAskPromptSelector.react"),babelHelpers["extends"]({},this.props,{inputRef:function(a){return this.$1=a}.bind(this)})))))))};a.prototype.componentDidMount=function(){this.$4(this.state.selectedTab,"enter"),this.state.selectedTab===b("ProfileFunFactsSinglePromptTabs").ASK&&this.$5()};a.prototype.$4=function(a,c,d){var e=new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType(c).setAppID(b("FacebookAppIDs").WWW);a===b("ProfileFunFactsSinglePromptTabs").ANSWER?e.setItemType("answer_tab").setItemSubtype("single_prompt"):e.setItemType("ask_tab").setItemSubtype(null);a={};a.entry_point=this.props.entryPoint;c==="exit"&&(a.tap_target=d||"unknown");e.setEventMetadata(a).log()};a.prototype.$5=function(){b("setImmediate")(function(){this.$1&&this.$1.focus()}.bind(this))};a.prototype.$3=function(){var a=[{icon:g("407305"),key:b("ProfileFunFactsSinglePromptTabs").ANSWER,label:b("ProfileFunFactsStrings").SINGLE_PROMPT_ANSWER_TAB},{icon:g("400375"),key:b("ProfileFunFactsSinglePromptTabs").ASK,label:b("ProfileFunFactsStrings").SINGLE_PROMPT_ASK_TAB}];return b("React").createElement(b("TabBar.react"),{activeTabKey:this.state.selectedTab,className:"_63_w",onTabClick:this.$6,orientation:"vertical"},a.map(function(a){return b("React").createElement(b("TabBarItem.react"),{className:"_63_x",key:a.key},b("React").createElement(b("Image.react"),{className:"_3-90",src:a.icon}),a.label)}))};a.defaultProps={selectedTab:b("ProfileFunFactsSinglePromptTabs").ANSWER};e.exports=a}),null);
__d("XProfileFunFactsSelectorController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/selector/",{entry_point:{type:"Enum",defaultValue:"unknown",enumType:1},pinned_asked_prompt_id:{type:"FBID"},pinned_prompt_id:{type:"FBID"},selected_tab:{type:"Enum",defaultValue:"answer",enumType:1},skip_selector:{type:"Bool",defaultValue:!1}})}),null);
__d("FunFactSelectorDialog.react",["AsyncRequest","React","ReactComposerFunFactSinglePromptDialog.react","XProfileFunFactsSelectorController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={showDialog:!0},this.$1=function(a){this.$2(a.id,!0)}.bind(this),this.$3=function(a){this.$2(a.id,!1)}.bind(this),this.$4=function(){this.setState({showDialog:!1})}.bind(this),b}a.prototype.$2=function(a,c){c=c?"pinned_prompt_id":"pinned_asked_prompt_id";c=b("XProfileFunFactsSelectorController").getURIBuilder().setEnum("entry_point",this.props.entryPoint).setFBID(c,a.toString()).setBool("skip_selector",!0).getURI();new(b("AsyncRequest"))().setURI(c).setFinallyHandler(function(){this.$4()}.bind(this)).send()};a.prototype.render=function(){return b("React").createElement(b("ReactComposerFunFactSinglePromptDialog.react"),{entryPoint:this.props.entryPoint,onClose:this.$4,onSave:this.$3,onSelect:this.$1,pinnedPromptID:this.props.pinnedPromptID,selectedTab:this.props.selectedTab,showDialog:this.state.showDialog})};e.exports=a}),null);
__d("ReactComposerListActions",["ReactComposerListActionType","ReactComposerDispatcher","EditorState","ReactComposerListStore"],(function(a,b,c,d,e,f){__p&&__p();b("ReactComposerListStore");a={addItem:function(a){a={composerID:a,type:b("ReactComposerListActionType").ADD_ITEM};b("ReactComposerDispatcher").dispatch(a)},addItemAtIndex:function(a,c,d){a={composerID:a,type:b("ReactComposerListActionType").ADD_ITEM_AT_INDEX,item:c,index:d};b("ReactComposerDispatcher").dispatch(a)},removeItem:function(a,c){a={composerID:a,type:b("ReactComposerListActionType").REMOVE_ITEM,itemIndex:c};b("ReactComposerDispatcher").dispatch(a)},resetLastAdded:function(a){a={composerID:a,type:b("ReactComposerListActionType").RESET_LAST_ADDED};b("ReactComposerDispatcher").dispatch(a)},resetList:function(a){a={composerID:a,type:b("ReactComposerListActionType").RESET_LIST};b("ReactComposerDispatcher").dispatch(a)},setConfig:function(a,c){a={composerID:a,type:b("ReactComposerListActionType").SET_LIST_CONFIG,config:c};b("ReactComposerDispatcher").dispatch(a)},setListColor:function(a,c){a={composerID:a,type:b("ReactComposerListActionType").SET_LIST_COLOR,value:c};b("ReactComposerDispatcher").dispatch(a)},setListPrompt:function(a,c){a={composerID:a,type:b("ReactComposerListActionType").SET_LIST_PROMPT,value:c};b("ReactComposerDispatcher").dispatch(a)},setListStyle:function(a,c){a={composerID:a,type:b("ReactComposerListActionType").SET_LIST_STYLE,value:c};b("ReactComposerDispatcher").dispatch(a)},updateListItem:function(a,c,d){a={composerID:a,type:b("ReactComposerListActionType").UPDATE_LIST_ITEM,itemIndex:c,newState:d};b("ReactComposerDispatcher").dispatch(a)},updateListTitle:function(a,c){a={composerID:a,type:b("ReactComposerListActionType").UPDATE_LIST_TITLE,newState:c};b("ReactComposerDispatcher").dispatch(a)}};e.exports=a}),null);
__d("ReactComposerFunFactToggleController.react",["Arbiter","ClickableArea.react","React","ReactComposerContextTypes","ReactComposerEvents","ReactComposerFunFactSinglePromptDialog.react","ReactComposerLoggingName","ReactComposerTaggerActions","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(){b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.loggingName,b("ReactComposerTaggerType").FUN_FACT)}.bind(this),this.$3=function(){this.props.showDialog&&b("ReactComposerTaggerActions").deselectCurrentTagger(this.context.composerID,this.props.loggingName)}.bind(this),this.$4=function(a){a={askedPromptID:a.id,entryPoint:this.props.entryPoint,prompt:a};this.$6(a)}.bind(this),this.$5=function(a){a={entryPoint:this.props.entryPoint,prompt:a,promptID:a.id};this.$6(a)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("ClickableArea.react"),{onClick:this.$1},b("React").createElement("span",null,this.props.children,this.$2()))};a.prototype.$2=function(){return!this.props.showDialog?null:b("React").createElement(b("ReactComposerFunFactSinglePromptDialog.react"),{entryPoint:this.props.entryPoint,onClose:this.$3,onSave:this.$4,onSelect:this.$5,showDialog:this.props.showDialog})};a.prototype.$6=function(a){b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,a),b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+this.context.composerID)};a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("ReactComposerFunFactSproutContainer.react",["ReactComposerDisabledSproutItem.react","ComposerEntryPointRef","ReactComposerFunFactToggleController.react","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerStore","ReactComposerTaggerType","CurrentUser","ExtensibleSproutsItemType","FacebookAppIDs","FluxContainer","React","ReactComposerContextTypes","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=d.composerID;return{highlighted:b("ReactComposerTaggerStore").hasData(a,b("ReactComposerTaggerType").FUN_FACT),isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").FUN_FACT),isSelected:b("ReactComposerTaggerStore").getSelectedTagger(a)===b("ReactComposerTaggerType").FUN_FACT}};a.prototype.componentDidMount=function(){this.$1()};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ReactComposerFunFactToggleController.react"),{entryPoint:this.$2(),loggingName:this.props.uiConfig.loggingName,showDialog:this.state.isSelected},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig,highlighted:this.state.highlighted}))};a.prototype.$2=function(){var a=this.props.config.loggingConfig?this.props.config.loggingConfig.ref:null;return a===b("ComposerEntryPointRef").TIMELINE?b("ProfileFunFactsEntryPoint").TIMELINE_COMPOSER:b("ProfileFunFactsEntryPoint").NEWSFEED_COMPOSER};a.prototype.$1=function(){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("impression").setItemType("entry_point").setEventMetadata({entry_point:this.$2()}).setAppID(b("FacebookAppIDs").WWW).log()};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").FUN_FACT]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerListSproutContainer.react",["ReactComposerAttachmentActions","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerDisabledSproutItem.react","ReactComposerContextTypes","ReactComposerListActions","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfig","ReactComposerStore","ReactComposerTaggerStore","ReactComposerTaggerType","ExtensibleSproutsItemType","React","ShimButton.react","FluxContainer","FunnelLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="WWW_LISTS_COMPOSER_FUNNEL";c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(event){this.state.isSelected?(b("ReactComposerAttachmentActions").selectAttachment(this.context.composerID,b("ReactComposerAttachmentType").STATUS,!0),b("ReactComposerListActions").resetList(this.context.composerID),b("FunnelLogger").appendAction(h,"LIST_REMOVED"),b("FunnelLogger").endFunnel(h)):(b("FunnelLogger").startFunnel(h),b("ReactComposerAttachmentActions").selectAttachment(this.context.composerID,b("ReactComposerAttachmentType").LIST,!0,b("ExtensibleSproutsItemType").LIST,b("ReactComposerStore").getSproutSurface(this.context.composerID)),b("FunnelLogger").appendAction(h,"LIST_SPROUT_CLICKED"))}.bind(this),c}a.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=b("ReactComposerAttachmentStore").getSelectedAttachmentID(d.composerID);c=a===b("ReactComposerAttachmentType").LIST;return{isSelected:c,isDisabled:b("ReactComposerTaggerStore").isDisabled(d.composerID,b("ReactComposerTaggerType").LIST)}};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ShimButton.react"),{onClick:this.$1,tabIndex:-1},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig,highlighted:this.state.isSelected}))};a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").LIST]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerPlayWithFriendsSproutContainer.react",["InstantGamesFeedEvent","InstantGamesFeedEventSection","InstantGamesFeedTypedLogger","React","ReactComposerContextTypes","ReactComposerStore","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerType","ExtensibleSproutsItemType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.componentDidMount=function(){var a=b("ReactComposerStore").getTargetType(this.context.composerID);new(b("InstantGamesFeedTypedLogger"))().setEvent(b("InstantGamesFeedEvent").PLAY_WITH_FRIENDS_COMPOSER_SPROUT_SHOWN).setUISurface(b("InstantGamesFeedEventSection").PLAY_WITH_FRIENDS_ATTACHMENT).setGroupID(a=="group"?this.context.targetID:null).setPosterID(a=="feed"?this.context.targetID:null).log()};a.prototype.render=function(){return b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").PLAY_WITH_FRIENDS})};function a(){g.apply(this,arguments)}a.contextTypes=b("ReactComposerContextTypes");a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").PLAY_WITH_FRIENDS]};e.exports=a}),null);
__d("ReactComposerRecommendationsSproutContainer.react",["ReactComposerAttachmentActions","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerTaggerStore","ReactComposerTaggerType","ReactComposerContextTypes","ReactComposerStore","ReactComposerSproutItem.react","ReactComposerDisabledSproutItem.react","ReactComposerSproutsDefaultUIConfig","ExtensibleSproutsItemType","FluxContainer","React","ShimButton.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){this.state.isSelected||b("ReactComposerAttachmentActions").selectAttachment(this.context.composerID,b("ReactComposerAttachmentType").PLACE_LIST,!0,b("ExtensibleSproutsItemType").RECOMMENDATION,b("ReactComposerStore").getSproutSurface(this.context.composerID))}.bind(this),c}a.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=b("ReactComposerAttachmentStore").getSelectedAttachmentID(d.composerID);c=a===b("ReactComposerAttachmentType").PLACE_LIST;return{isSelected:c,isDisabled:b("ReactComposerTaggerStore").isDisabled(d.composerID,b("ReactComposerTaggerType").RECOMMENDATION)}};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ShimButton.react"),{onClick:this.$1,tabIndex:-1},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig,highlighted:this.state.isSelected}))};a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").RECOMMENDATION]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerTagEventSproutContainer.react",["React","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerType","ExtensibleSproutsItemType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").TAG_EVENT})};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").TAG_EVENT]};e.exports=a}),null);