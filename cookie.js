function set_cookie(b,g,i,f,h,j,e,a){var d=b+"="+escape(g);if(i){var c=new Date(i,f,h);d+="; expires="+c.toGMTString()}if(j){d+="; path="+escape(j)}if(e){d+="; domain="+escape(e)}if(a){d+="; secure"}document.cookie=d}function get_cookie(b){var a=document.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");if(a){return(unescape(a[2]))}else{return null}}$(document).ready(function(){var b=get_cookie("site_cookie");var a=$(".cookie-info");if(b==null||b=="OK! 404"){set_cookie("site_cookie_auto","OK! 404");a.removeClass("desktopel");$(".cookie-info > .close img").click(function(){a.addClass("desktopel");set_cookie("site_cookie","OK! 501")});$(".cookie-info > .accept a:nth-child(1)").click(function(){a.addClass("desktopel");set_cookie("site_cookie","OK! 200")})}else{if(b=="OK! 200"||b=="OK! 501"){}}});
