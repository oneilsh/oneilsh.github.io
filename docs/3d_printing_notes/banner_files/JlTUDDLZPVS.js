if (self.CavalryLogger) { CavalryLogger.start_js(["TJscQ"]); }

__d("RequestsJewel",["RequestsJewelController"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){"use strict";var d=b("RequestsJewelController").create(a.getFlyout(),function(){return a.isOpen()},c.inbox_folder);a.subscribe("marked-seen",function(){return d.markSeen()});a.subscribe("closed",function(){return d.closeHandler()});a.subscribe("opened",function(){return d.openHandler()})}e.exports=a}),null);