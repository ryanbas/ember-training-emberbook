import Ember from 'ember';

export default Ember.Component.extend({
  flash: Ember.inject.service(),

  didInsertElement() {
    this.get('flash').hide();
  }
});
