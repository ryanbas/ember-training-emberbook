import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var folder = this.modelFor('messages.folder');
    var message = folder.messages.findBy('threadId', params.messageId);
    return message;
  }
});
