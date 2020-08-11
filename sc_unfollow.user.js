// ==UserScript==
// @name         sc_unfollow
// @namespace    https://github.com/teuncm
// @author       Teun M.
// @version      1.1
// @match        https://soundcloud.com/*/following
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

/* Number of deletions. N = -1 will delete everything. */
var N = -1;
/* Time interval in milliseconds between each delete. */
var interval = 100;

var $ = window.jQuery;
$(window).on("load", function() {
    console.log("Running userscript.");
    performAction();
});

function performAction() {
    var button = $("button[title='Unfollow']").first();

    if(null != button) {
        if(N-- != 0) {
            button.click();
        } else {
            return;
        }
    }

    setTimeout(performAction, interval);
};