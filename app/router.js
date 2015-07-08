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
    this.route('list', { path: ':folderId' });
    this.route('compose');
  });
});

export default Router;
