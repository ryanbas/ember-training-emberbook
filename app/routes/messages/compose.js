import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      recipients: ['erik bryn', 'ryan bas'],
      body: null
    };
  }
});
