import Ember from 'ember';

export function truncateText(params, hash = {}) {
  var text = params[0];
  var max = hash.max || 50;
  return text.substr(0, max);
}

export default Ember.HTMLBars.makeBoundHelper(truncateText);
