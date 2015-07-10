import Ember from 'ember';

export default Ember.Service.extend({
  routing: Ember.inject.service('-routing'),

  checkAuth(priorTransition) {
    this.set('priorTransition', priorTransition);
    return this.isLoggedIn();
  },

  isLoggedIn() {
    return !!this.get('user.token');
  },

  login(email, password) {
    return Ember.$.ajax("/api/v1/auth", {
      type: 'POST',
      data: JSON.stringify({email, password})
    }).then(json => {
      this.set('user', json);
      var priorTransition = this.get('priorTransition');
      if (priorTransition) {
        priorTransition.retry();
        this.set('priorTransition', null);
      } else {
        this.get('routing').transitionTo('index');
      }
    }, xhr => {
      return xhr.responseJSON.message;
    });
  }
});
