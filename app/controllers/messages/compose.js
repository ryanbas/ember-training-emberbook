import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    send() {
      this.set('body', 'you sent me!');
    }
  }
});
