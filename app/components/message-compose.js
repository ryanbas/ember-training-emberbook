import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    send() {
      var message = this.getProperties('recipient', 'body');
    }
  }
});
