import Ember from 'ember';

export default Ember.Service.extend({
  message: null,

  show(message) {
    this.set('message', message);
  },

  hide() {
    Ember.run.later(() => {
      this.set('message', null);
    }, 5000);
  }
});
