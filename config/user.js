// FIREFOX CONFIG FILE, SET BY ANSIBLE

// startup
user_pref("browser.startup.homepage", "about:blank");

// shutdown
user_pref("privacy.clearOnShutdown.cache", true);	
user_pref("privacy.clearOnShutdown.cookies", true);	
user_pref("privacy.clearOnShutdown.downloads", true);	
user_pref("privacy.clearOnShutdown.formdata", true);	
user_pref("privacy.clearOnShutdown.history", true);	
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

user_pref("privacy.clearsitedata.cache.enabled", true);

// tracking
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.trackingprotection.enabled", true);

// credit cards
user_pref("extensions.formautofill.creditCards.enabled", false);

// other
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.contentblocking.category", "strict");
user_pref("dom.security.https_only_mode", true);