/* globals markdown */
import Ember from 'ember';

export default Ember.Component.extend({
  preview: Ember.computed('text', function() {
    var text = this.get('text') || '';
    return markdown.toHTML(text).htmlSafe();
  })
});
