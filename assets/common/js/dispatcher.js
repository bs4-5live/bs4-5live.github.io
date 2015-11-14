
/*!
 * dispatcher.js - Bonds of Smiley 4.5 - In my Live（コアスクリプト）
 * 動作環境： Windows / Macintosh / iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author : Loxis
 * --------------------
 */

(function() {
  $LAB.script(COMMON_JS_DIR + 'lib/jquery-1.10.2.min.js').wait(function() {
    var SOURCE_DIR, pathname;
    $LAB.script(COMMON_JS_DIR + 'lib/velocity.min.js');
    if ($('.mobile').length) {
      SOURCE_DIR = SP_JS_DIR;
    } else {
      SOURCE_DIR = PC_JS_DIR;
    }
    pathname = location.pathname;
    $.route = function() {
      $.each(arguments, function(index) {
        var func, path;
        path = this['path'];
        func = this['func'];
        path && func && pathname.match(path) && pathname.match('/')(!$(function() {
          $LAB.script(SOURCE_DIR + 'common.js').wait(function() {
            return func.apply(this);
          });
        }));
        path && func && pathname.match('/') && $(function() {
          $LAB.script(SOURCE_DIR + 'common.js').wait(function() {
            return $LAB.script(SOURCE_DIR + 'index.js');
          });
        });
      });
    };
    return $.route({
      path: /^(?=.*\/promise\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'promise.js');
      }
    }, {
      path: /^(?=.*\/member\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'member.js');
      }
    }, {
      path: /^(?=.*\/ticket\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'ticket.js');
      }
    }, {
      path: /^(?=.*\/access\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'access.js');
      }
    }, {
      path: /^(?=.*\/contact\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'contact.js');
      }
    });
  });

}).call(this);

