import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('connections', { path: '/connections' });
  this.route('companies');
  this.route('messages', function() {
    this.route('compose');
    this.route('folder', { path: ':folderId' }, function() {
      this.route('index', { path: '/' });
      this.route('message', { path: ':messageId' });
    });
  });
  this.route('news', function() {
    this.route('article', { path: ':articleId' });
  });
});

export default Router;
