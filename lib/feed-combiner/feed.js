var FeedParser = require('feedparser'),
    events = require('events'),
    request = require('request');

function Feed(url) {
  this.req = request(url);
  this.feedparser = new FeedParser();

  events.EventEmitter.call(this);
}

Feed.prototype.__proto__ = events.EventEmitter.prototype;

Feed.prototype.parse = function () {
  // body...
};
