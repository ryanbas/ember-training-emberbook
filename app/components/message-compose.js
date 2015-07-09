import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  flash: Ember.inject.service(),

  actions: {
    send() {
      var message = this.getProperties('recipient', 'body');
      Ember.$.ajax("/api/v1/messages", {
        type: 'POST',
        data: JSON.stringify(message)
      }).then(json => { // function(json) {
        this.get('flash').show("Your message was sent successfully!");
        this.get('routing').transitionTo('messages');
      });
    }
  }
});
