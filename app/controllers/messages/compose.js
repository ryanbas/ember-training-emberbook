import Ember from 'ember';

export default Ember.Controller.extend({
  body: "a default value",

  actions: {
    send() {
      this.set('body', 'you sent me!');
    }
  }
});
