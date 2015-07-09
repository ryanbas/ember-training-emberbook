import Ember from 'ember';

export default Ember.Component.extend({
  iconClass: Ember.computed('name', function() {
    return `glyphicon-${this.attrs.name}`;
  })
});
