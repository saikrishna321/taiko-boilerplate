var mocha = require('mocha');
var Base = mocha.reporters.Base;
import eventEmitter from '../eventBus';

module.exports = MochaListener;
function MochaListener(runner) {
  var self = this;
  Base.call(this, runner);

  var tests = [],
    failures = [],
    passes = [];

  runner.on('test end', function (test) {
    tests.push(test);
    eventEmitter.emit('testEnd');
    eventEmitter.removeAllListeners()
  });

  runner.on('pass', function (test) {
    passes.push(test);
  });

  runner.on('fail', function (test, done) {
    console.log('Inside Failure');
    eventEmitter.emit('myEvent', { test, done });
    failures.push(test);
    console.log('Inside Failure-1', done);
  });

  runner.on('end', function () {
    var obj = {
      stats: self.stats,
      tests: tests.map(clean),
      failures: failures.map(clean),
      passes: passes.map(clean),
    };
    var jsonOutput = JSON.stringify(obj, null, 2);
    process.stdout.write(jsonOutput);
  });
}

function clean(test) {
  return {
    title: test.title,
    fullTitle: test.fullTitle(),
    duration: test.duration,
  };
}
