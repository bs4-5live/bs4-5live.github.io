
/*!
 * common.js - Bonds of Smiley 4.5 - In my Live（共通ページスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.1
 * @author : Loxis
 * --------------------
 */

(function() {
  (function($) {
    var SHARE_TXT, SHARE_VIA, SITE_URL, facebook, twitter;
    if (browserType[1] === "ie8" || browserType[1] === "ie7") {
      $('#section-contents').css({
        backgroundSize: 'cover'
      });
    }
    $LAB.script(PC_JS_DIR + 'lib/jquery.wHover.js').wait(function() {
      $('.wHover').wHover();
      return $('.oHover').on({
        mouseenter: function() {
          return $(this).stop().fadeTo('fast', .6);
        },
        mouseleave: function() {
          return $(this).stop().fadeTo('fast', 1);
        }
      });
    });
    SITE_URL = "http://bs4-5live.tk/";
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
    twitter(".tw", SITE_URL, SHARE_TXT);
    return facebook(".fb", SITE_URL);
  })(jQuery);

}).call(this);

