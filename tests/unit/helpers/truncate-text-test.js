import { truncateText } from '../../../helpers/truncate-text';
import { module, test } from 'qunit';

module('Unit | Helper | truncate text');

// Replace this with your real tests.
test('it works with max', function(assert) {
  var text = "0123456789";
  var result = truncateText([text], {max: 5});
  assert.equal(result, "01234");
});

test('it works without max', function(assert) {
  var text = "x".repeat(100);
  var result = truncateText([text]);
  assert.equal(result, "x".repeat(50));
});








