function FeedCombiner(config) {
  this.configuration = config;
}

FeedCombiner.prototype.cli = function () {
  var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.setPrompt('feed-combiner> ');
  rl.prompt();
};

module.exports = FeedCombiner;
