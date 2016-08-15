System.register(['@angular/platform-browser-dynamic', './nsw-fires-alerts.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, nsw_fires_alerts_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (nsw_fires_alerts_module_1_1) {
                nsw_fires_alerts_module_1 = nsw_fires_alerts_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(nsw_fires_alerts_module_1.NSWFiresAlertsModule);
        }
    }
});
