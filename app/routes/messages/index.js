import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('messages.folder', 'inbox');
  }
});
