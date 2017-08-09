function injectStyles(rule) {
  var div = $("<div />", {
    html: '&shy;<style>' + rule + '</style>'
  }).appendTo("body");
}

var KEY = 'lastId:' + location.pathname;
var PERMALINK_KEY = 'permalink:' + location.pathname;

var lastId = localStorage.getItem(KEY)
var permalink = localStorage.getItem(PERMALINK_KEY)
window.setTimeout(function() {
    console.log('looking for:', KEY, lastId, $('#stream-item-tweet-' + lastId ).length, '#stream-item-tweet-' + lastId, 'https://twitter.com/' + permalink);

    if (lastId) {
        var rules = [
            'li#stream-item-tweet-' + lastId,
            'li#stream-item-tweet-' + lastId + '~ li',
        ];

        var hover = rules.map(function(rule) { return rule + ':hover'; })
        injectStyles(rules.join(', ') + ' { opacity: 0.5; transition: 0.2s; } ' + hover.join(', ') + ' { opacity: 1; }')
    }
}, 500);

var last = jQuery('.stream-items li.stream-item:first-child')
localStorage.setItem(KEY, last.data('item-id'))
localStorage.setItem(PERMALINK_KEY, last.children().first().data('permalink-path'))
