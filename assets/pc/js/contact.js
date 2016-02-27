
/*!
 * contact.js - Bonds of Smiley 4.5 - In my Live（お問い合わせスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.1
 * @author : Loxis
 * --------------------
 */

(function() {
  (function($) {
    var content;
    content = '';
    return $.ajax({
      type: "GET",
      url: "https://docs.google.com/forms/d/1oZsalZgEbx3VHvh4BhZfzHst_3RoSD46vumS9RSfVY4/viewform",
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
          $('form').attr('target', 'contactForm');
          $(".required-message").each(function() {
            var txt;
            txt = $(this).text();
            return $(this).text(txt.replace(/This is a required question/g, "この質問は必須です"));
          });
          return $("#ss-submit").each(function() {
            var txt;
            txt = $(this).val();
            $(this).val(txt.replace(/Submit/g, "この内容で送信する"));
            $('input').eq(0).attr('placeholder', 'お名前を入力して下さい');
            $('input').eq(1).attr('placeholder', 'メールアドレスを入力して下さい');
            $('input').eq(2).attr('placeholder', 'URLを入力して下さい');
            return $('textarea').attr('placeholder', '内容を入力して下さい');
          });
        });
      },
      error: function() {
        return alert("問題がありました。");
      }
    });
  })(jQuery);

}).call(this);

