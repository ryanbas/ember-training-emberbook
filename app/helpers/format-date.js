import Ember from 'ember';

export function formatDate([dateString]) {
  return moment(dateString).fromNow();
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
