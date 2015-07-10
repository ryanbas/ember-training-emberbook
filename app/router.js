import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticated', {path: '/'}, function() {
    this.route('connections', { resetNamespace: true });
    this.route('companies', { resetNamespace: true });
    this.route('messages', { resetNamespace: true }, function() {
      this.route('compose');
      this.route('folder', { path: ':folderId' }, function() {
        this.route('index', { path: '/' });
        this.route('message', { path: ':messageId' });
      });
    });
    this.route('news', { resetNamespace: true }, function() {
      this.route('article', { path: ':permLink' });
    });
  });
  this.route('login');

});

export default Router;
