if (self.CavalryLogger) { CavalryLogger.start_js(["TZjaF"]); }

__d("ComposerCitySharer",["Arbiter","ArbiterMixin","AsyncRequest","CSS","DOM","Event","Parent","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g,h={};c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this),this.root=a}a.prototype.init=function(a,c,d,e,f){"use strict";this.cityLink=a,this.closeButton=c,this.input=d,this.disableShareInput=e,this._options=f,this.cityName=b("DOM").find(this.cityLink,".cityName"),this.data={},b("Event").listen(this.closeButton,"click",function(){this.clearCity(),this.disableShareInput.value="true"}.bind(this)),h[this.root]=this,this.inform("init",null,b("Arbiter").BEHAVIOR_PERSISTENT)};a.prototype.changeCity=function(a,b,c){"use strict";this.setCityId(a,b,c),this.toggleLocationSharing(a,b,c,!1)};a.prototype.setCityId=function(a,c,d){"use strict";__p&&__p();if(c){this.data={city_name:a,city_page_id:c,city_id:d};this.input.value=c;d=a.lastIndexOf(",");d!=-1&&(a=a.substring(0,d));c=a;b("DOM").setContent(this.cityName,c);b("CSS").addClass(this.root,"ComposerCitySharerCitySelected");b("CSS").conditionShow(this.closeButton,!this._placeSelected);this.inform("change",this.data,b("Arbiter").BEHAVIOR_PERSISTENT)}};a.prototype.toggleLocationSharing=function(a,c,d,e){"use strict";c&&new(b("AsyncRequest"))().setURI("/ajax/places/toggle_location_sharing").setData({city_id:d,city_page_id:c,city_name:a,is_default:e,session_id:this._options.session_id}).send()};a.prototype.setDefaultCity=function(a,b,c){"use strict";this._defaultCityData=[a,b,c]};a.prototype.useDefaultCity=function(){"use strict";if(this._defaultCityData){var a=this._defaultCityData[0],b=this._defaultCityData[1],c=this._defaultCityData[2];this.setCityId(a,b,c);this.toggleLocationSharing(a,b,c,!0)}};a.prototype.addPlace=function(a){"use strict";a.city_id?this.changeCity(a.city_name,a.city_page_id,a.city_id):this.clearCity(),this._placeSelected=!0,b("CSS").addClass(this.cityLink,"placeIconSelected"),b("CSS").hide(this.closeButton)};a.prototype.clearPlace=function(a){"use strict";this._placeSelected=!1,b("CSS").removeClass(this.cityLink,"placeIconSelected"),b("CSS").conditionShow(this.closeButton,this.getValue())};a.prototype.clearCity=function(){"use strict";this.data={},this.input.value="",b("DOM").setContent(this.cityName,""),b("CSS").removeClass(this.root,"ComposerCitySharerCitySelected"),b("CSS").hide(this.closeButton),this.inform("change",null,b("Arbiter").BEHAVIOR_PERSISTENT)};a.prototype.getIcon=function(){"use strict";return this.root};a.prototype.getValue=function(){"use strict";return this.input.value};a.getInstance=function(a){"use strict";a=b("Parent").byClass(a,"ComposerCitySharer");return a&&h[a]};e.exports=a}),null);
__d("ContextualBlindSingleton",["ContextualBlind"],(function(a,b,c,d,e,f){e.exports=new(b("ContextualBlind"))()}),null);
__d("TourAutoPilot",["ContextualBlindSingleton","DOMScroll","Tour"],(function(a,b,c,d,e,f){__p&&__p();var g,h;g=babelHelpers.inherits(a,b("Tour"));h=g&&g.prototype;a.prototype.registerStep=function(a,b){"use strict";a.subscribe("tour-dialog-show",this.handleShowDialog.bind(this,a,b)),h.registerStep.call(this,a,b)};a.prototype.handleLeavePage=function(){"use strict";this.openDialog&&this.openDialog.destroy(),this.hideContextualBlind(),h.handleLeavePage.call(this)};a.prototype.handleShowDialog=function(a,c){"use strict";c=a.getContext();this.showContextualBlind(c,!0);b("DOMScroll").scrollTo(c,!0,!0,0)};a.prototype.handleTourStop=function(){"use strict";this.hideContextualBlind(!0),h.handleTourStop.call(this)};a.prototype.showContextualBlind=function(a,c){"use strict";this.blindShowing?b("ContextualBlindSingleton").show(a,0,0,0,0,c,this.opacity):b("ContextualBlindSingleton").fadeIn(a,0,0,0,0,c,this.opacity),this.blindShowing=!0};a.prototype.hideContextualBlind=function(a){"use strict";a?b("ContextualBlindSingleton").fadeOut():b("ContextualBlindSingleton").hide(),this.blindShowing=!1};function a(){"use strict";g.apply(this,arguments)}Object.assign(a.prototype,{blindShowing:!1,opacity:null});f.TourAutoPilot=a}),null);
__d("ComposerTour",["Arbiter","AsyncRequest","ComposerCitySharer","CSS","DOM","Parent","Tour","URI","$","TourAutoPilot"],(function(a,b,c,d,e,f){__p&&__p();var g,h;a=b("TourAutoPilot").TourAutoPilot;g=babelHelpers.inherits(i,a);h=g&&g.prototype;i.prototype.handleShowDialog=function(a,c){"use strict";var d=b("Parent").byClass(b("$")("composerTourStart"),"uiComposer");c!="start"&&(h.handleShowDialog.call(this,a,c),this.showContextualBlind(d))};i.prototype.showContextualBlind=function(a){"use strict";b("CSS").addClass(document.body,"composerTourInProgress"),h.showContextualBlind.call(this,a)};i.prototype.hideContextualBlind=function(a){"use strict";h.hideContextualBlind.call(this,a),b("CSS").removeClass(document.body,"composerTourInProgress")};i.openComposer=function(){"use strict";var a=b("Parent").byClass(b("$")("composerTourStart"),"uiComposerAttachment"),c=b("Parent").byTag(a,"form");c.action=a.getAttribute("data-endpoint");c.xhpc.value=a.id;c.xhpc.click()};i.closeOnComposerReset=function(){"use strict";b("Arbiter").subscribe("composer/reset",function(){b("Tour").getInstance().setTourStop()})};i.sendLocationOption=function(a,c){"use strict";c=new(b("URI"))(c).addQueryData({use_location:a});new(b("AsyncRequest"))(c.toString()).send()};i.addCity=function(){"use strict";var a=b("Parent").byClass(b("$")("composerTourLocation"),"uiComposer");a=b("ComposerCitySharer").getInstance(b("DOM").scry(a,"span.ComposerCitySharer")[0]);a&&a.useDefaultCity()};i.clearCity=function(){"use strict";var a=b("Parent").byClass(b("$")("composerTourLocation"),"uiComposer");a=b("ComposerCitySharer").getInstance(b("DOM").scry(a,"span.ComposerCitySharer")[0]);a&&a.clearCity()};i.hideStartDialog=function(){"use strict";var a=b("Tour").getInstance().steps.start;a&&a.hide()};i.enableAutoPilot=function(){"use strict";new i().init()};function i(){"use strict";g.apply(this,arguments)}e.exports=i}),null);