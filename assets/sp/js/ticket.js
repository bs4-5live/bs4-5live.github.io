
/*!
 * ticket.js - Bonds of Smiley 4.5 - In my Live（チケット予約スクリプト）
 * 動作環境： iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome
 * --------------------
 * @version: 1.0
 * @author : Loxis
 * --------------------
 */

(function() {
  (function($) {
    var content;
    content = '';
    return $.ajax({
      type: "GET",
      url: "https://docs.google.com/forms/d/1mNiAzkoSrWmHNZ6iQAhU_pMTs1ROMPFRT2btynLA2r4/viewform",
      success: function(data) {
        content = $(data.responseText).find(".ss-form").html();
        $("#contactForm").append(content);
        $('#formLoader').velocity({
          opacity: 0
        }, {
          duration: 300,
          display: 'none'
        });
        return $LAB.script(PC_JS_DIR + 'lib/gform.js').wait(function() {
          $('form').attr('target', 'ticketForm');
          $(".required-message").each(function() {
            var txt;
            txt = $(this).text();
            return $(this).text(txt.replace(/This is a required question/g, "この質問は必須です"));
          });
          return $("#ss-submit").each(function() {
            var txt;
            txt = $(this).val();
            $(this).val(txt.replace(/Submit/g, "この内容で予約する"));
            $('input').eq(0).attr('placeholder', 'お名前を入力して下さい');
            $('input').eq(1).attr('placeholder', 'メールアドレスを入力して下さい');
            $('input').eq(2).attr('placeholder', '取り置き目的の出演者を入力して下さい');
            return $('textarea').eq(0).attr('placeholder', '内容を入力して下さい');
          });
        });
      },
      error: function() {
        return alert("問題がありました。");
      }
    });
  })(jQuery);

}).call(this);

