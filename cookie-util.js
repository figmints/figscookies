// Definies the cookie object
// Set     - Define the key, Define what value that key is equal to, Define number of days from today it will expire
// Get     - Gets key by name
// Delete  - Removes user's cookie
// Enabled - Checks if cookie is enabled

window.Cookie = (function (window, document, undefined) {
    var cookie = {
        get: function(val) {
            var i,x,y,
                ARRcookies = document.cookie.split(";");

            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == val) {
                    return unescape(y);
                };
            };
        },
        set: function(name, val, days) {
            var date = new Date();
            date.setDate(date.getDate() + days);
            var c_value = val + "; expires=" + date.toUTCString();
            document.cookie = name + "=" + c_value;
        }, 
        delete: function(name) {
            document.cookie = name + '=;expires=Thu, 05 Oct 1990 00:00:01 GMT;';
        },
        enabled: function () {
            var cookieEnabled = (navigator.cookieEnabled) ? true : false;

            if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) { 
                document.cookie="testcookie";
                cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
            };

            return (cookieEnabled);
        }
    };
    return cookie;
})(window, document);
