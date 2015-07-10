import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  beforeModel(transition) {
    if (!this.get('auth').checkAuth(transition)) {
      this.transitionTo('login');
    }
  }
});
