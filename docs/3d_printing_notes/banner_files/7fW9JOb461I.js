if (self.CavalryLogger) { CavalryLogger.start_js(["nEPBk"]); }

__d("ArticleContextTriggerLoggerBootloader",["Bootloader"],(function(a,b,c,d,e,f){"use strict";function a(a){b("Bootloader").loadModules(["ArticleContextTriggerGlimpseAnimator","ArticleContextTriggerLoggerManager"],function(b,c){b.initAnim(a),c.initLogger(a)},"ArticleContextTriggerLoggerBootloader")}e.exports={bootload:a}}),null);
__d("BreakingNewsCarousel",["csx","cx","BaseUnitCarousel","BrowseClientEventLogger","CSS","DataAttributeUtils","DOMQuery"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("BaseUnitCarousel"));i=c&&c.prototype;function a(a){i.constructor.call(this,a)}a.prototype.updateLargePager=function(){b("CSS").removeClass(this.carousel,"_vxr"),this.$BreakingNewsCarousel1(!0),this.$BreakingNewsCarousel1(!1),b("CSS").conditionClass(this.carousel,"_vxs",this.canSlideLeft()&&this.canSlideRight())};a.prototype.hidePagerButton=function(){b("CSS").addClass(this.carousel,"_vxr"),b("CSS").addClass(this.carousel,"_vxt"),b("CSS").addClass(this.carousel,"_vxu")};a.prototype.$BreakingNewsCarousel1=function(a){var c=a?"_vxt":"_vxu";(a?this.canSlideRight():this.canSlideLeft())?b("CSS").removeClass(this.carousel,c):b("CSS").hasClass(this.carousel,c)||b("CSS").addClass(this.carousel,c)};a.prototype.logImpressions=function(){Array.from(this.grid.children).slice(this.visibleIndex,this.visibleIndex+this.visibleCount).forEach(function(a,b){this.client_viewed||(this.client_viewed=[]);if(this.client_viewed.indexOf(b+this.visibleIndex)===-1)this.client_viewed.push(b+this.visibleIndex);else return;this.$BreakingNewsCarousel2(b+this.visibleIndex,a)}.bind(this))};a.prototype.$BreakingNewsCarousel2=function(a,c){a=b("DOMQuery").scry(c,"._401d");if(a.length>0){c=b("DataAttributeUtils").getDataAttribute(a[0],"data-xt");a=JSON.parse(c.substring(3));var event="client_view";b("BrowseClientEventLogger").logData(event,a.session_id,a.vertical,a)}};e.exports=a}),null);
__d("BreakingNewsContextSummary",["LitestandEllipsis"],(function(a,b,c,d,e,f){"use strict";a={truncate:function(a){b("LitestandEllipsis").add(a.summaryNode,a.truncateHeight)}};e.exports=a}),null);