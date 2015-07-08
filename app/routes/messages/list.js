import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON(`/api/v1/messages/${params.folderId}`)
  },

  afterModel(model) {
    debugger;
  }
});
