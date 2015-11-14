
/*!
 * index.js - Bonds of Smiley 4.5 - In my Live（トップページスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author : Loxis
 * --------------------
 */

(function() {
  (function($) {
    var initBackgroundPosition, parseBackgroundPosition, setBackgroundPosition, usesTween;
    parseBackgroundPosition = function(value) {
      var bgPos, decodePos, presets;
      bgPos = (value || "").split(RegExp(" "));
      presets = {
        center: "50%",
        left: "0%",
        right: "100%",
        top: "0%",
        bottom: "100%"
      };
      decodePos = function(index) {
        var pos;
        pos = (presets[bgPos[index]] || bgPos[index] || "50%").match(/^([+-]=)?([+-]?\d+(\.\d*)?)(.*)$/);
        return bgPos[index] = [pos[1], parseFloat(pos[2]), pos[4] || "px"];
      };
      if (bgPos.length === 1 && $.inArray(bgPos[0], ["top", "bottom"]) > -1) {
        bgPos[1] = bgPos[0];
        bgPos[0] = "50%";
      }
      decodePos(0);
      decodePos(1);
      return bgPos;
    };
    setBackgroundPosition = function(tween) {
      if (!tween.set) {
        initBackgroundPosition(tween);
      }
      return $(tween.elem).css("background-position", ((tween.pos * (tween.end[0][1] - tween.start[0][1]) + tween.start[0][1]) + tween.end[0][2]) + " " + ((tween.pos * (tween.end[1][1] - tween.start[1][1]) + tween.start[1][1]) + tween.end[1][2]));
    };
    initBackgroundPosition = function(tween) {
      var i;
      tween.start = parseBackgroundPosition($(tween.elem).css("backgroundPosition"));
      tween.end = parseBackgroundPosition(tween.end);
      i = 0;
      while (i < tween.end.length) {
        if (tween.end[i][0]) {
          tween.end[i][1] = tween.start[i][1] + (tween.end[i][0] === "-=" ? -1 : +1) * tween.end[i][1];
        }
        i++;
      }
      return tween.set = true;
    };
    usesTween = !!$.Tween;
    if (usesTween) {
      return $.Tween.propHooks["backgroundPosition"] = {
        get: function(tween) {
          return parseBackgroundPosition($(tween.elem).css(tween.prop));
        },
        set: setBackgroundPosition
      };
    } else {
      return $.fx.step["backgroundPosition"] = setBackgroundPosition;
    }
  })(jQuery);

  (function($) {
    if (browserType[1] === "ie8" || browserType[1] === "ie7") {
      $(".liveDate img").attr('src', './assets/pc/images/common/blank.gif');
      return $('.loader .inner').velocity({
        opacity: 1
      }, {
        duration: 800
      }).delay(1000).velocity({
        opacity: 0
      }, {
        duration: 800,
        display: "none",
        complete: function(elements) {
          $('.loader').velocity({
            opacity: 0
          }, {
            duration: 4500,
            display: "none"
          });
          return $('#section-contents img').velocity({
            top: 0
          }, {
            easing: 'swing',
            duration: 5000,
            complete: function(elements) {
              if (browserType[1] === "ie8") {
                $("#section-footer").velocity({
                  bottom: 0
                }, {
                  duration: 800,
                  delay: 1000
                });
                $("#section-header").velocity({
                  top: 0
                }, {
                  duration: 800,
                  delay: 1000
                });
                $(".liveDate").velocity({
                  opacity: 1
                }, {
                  duration: 1000,
                  delay: 2300
                });
              } else {
                $("#section-footer").velocity({
                  bottom: 0
                }, {
                  duration: 800,
                  delay: 1000
                });
                $("#section-header").velocity({
                  top: 0
                }, {
                  duration: 800,
                  delay: 1000,
                  complete: function(elements) {
                    return $(".liveDate").velocity({
                      opacity: 1
                    }, {
                      duration: 1000,
                      delay: 2300
                    });
                  }
                });
              }
              return $('#section-contents img').css('cssText', 'height:auto;left:0;position:static!important;top:0!important;visibility:visible;width:100%;');
            }
          });
        }
      });
    } else {
      return $('.loader .inner').velocity({
        opacity: 1
      }, {
        duration: 800
      }).velocity({
        opacity: 1
      }, {
        loop: 3
      }).velocity({
        opacity: 0
      }, {
        duration: 800,
        display: "none",
        begin: function(elements) {
          $('.loader').velocity({
            opacity: 0
          }, {
            duration: 4500,
            display: "none"
          });
          return $('#section-contents').animate({
            backgroundPosition: '50% 0%'
          }, {
            easing: 'swing',
            duration: 5000,
            complete: function(elements) {
              $("#section-footer").velocity({
                bottom: 0
              }, {
                duration: 800,
                delay: 1000
              });
              $("#section-header").velocity({
                top: 0
              }, {
                duration: 800,
                delay: 1000
              });
              return $(".liveDate").velocity({
                opacity: 1
              }, {
                duration: 1000,
                delay: 2300
              });
            }
          });
        }
      });
    }
  })(jQuery);

}).call(this);

