
/*!
 * common.js - Bonds of Smiley 4.5 - In my Live（共通ページスクリプト）
 * 動作環境： iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome
 * --------------------
 * @version: 1.0
 * @author : Loxis
 * --------------------
 */

(function() {
  (function($) {
    var SHARE_TXT, SHARE_VIA, SITE_URL, facebook, flgman, line, twitter;
    flgman = false;
    $("#gBtn .menu").on("touchend", function() {
      if (flgman === false) {
        flgman = true;
        $("#gNav").stop().velocity({
          top: "67px"
        });
      } else {
        flgman = false;
        $("#gNav").stop().velocity({
          top: "-183px"
        });
      }
      return $(this).children("span").toggleClass("open");
    });
    SITE_URL = "http://bs4-5live.tk/sp/";
    SHARE_TXT = "1年6ヶ月ぶりに復活！新看板シンガーのワンマンからお客様の笑顔を繋ぐ「Bonds of Smiley 4.5」 | 2016年2月28日 四谷 Live inn MAGIC より 11:45 OPEN / 12:15 START";
    SHARE_VIA = "BondsOfSmiley";
    twitter = function(i_target, i_url, i_text, i_via) {
      return $(i_target).on("click", function() {
        var url;
        url = "http://twitter.com/share?url=";
        url += encodeURIComponent(i_url);
        url += "&text=" + encodeURIComponent(i_text);
        window.open(url, "share", ["width=550", "height=450", "location=yes", "resizable=yes", "toolbar=no", "menubar=no", "scrollbars=no", "status=no"].join(","));
        return false;
      });
    };
    facebook = function(i_target, i_url) {
      return $(i_target).on("click", function() {
        var url;
        url = "http://www.facebook.com/share.php?u=";
        url += encodeURIComponent(i_url);
        window.open(url, "share", ["width=550", "height=450", "location=yes", "resizable=yes", "toolbar=no", "menubar=no", "scrollbars=no", "status=no"].join(","));
        return false;
      });
    };
    line = function(i_target, i_text) {
      return $(i_target).on("click", function() {
        var url;
        url = "http://line.me/R/msg/text/?";
        url += encodeURIComponent(i_text);
        window.open(url, "share", ["width=550", "height=450", "location=yes", "resizable=yes", "toolbar=no", "menubar=no", "scrollbars=no", "status=no"].join(","));
        return false;
      });
    };
    twitter(".tw", SITE_URL, SHARE_TXT);
    facebook(".fb", SITE_URL);
    return line(".line", SHARE_TXT + ' ' + SITE_URL);
  })(jQuery);

}).call(this);

