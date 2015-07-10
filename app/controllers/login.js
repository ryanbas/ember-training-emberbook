import Ember from 'ember';

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),
  auth: Ember.inject.service(),

  actions: {
    signIn() {
      var authService = this.get('auth');
      this.set('errorMessage', null);

      var email = this.get('email');
      var password = this.get('password');
      authService.login(email, password).then(() => {
        // do something?
      }, message => {
        debugger;
        this.set('errorMessage', message);
      });
    }
  }
});
