import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'emberbook/tests/helpers/start-app';

var application;
var CONNECTIONS = [
  {
    "name": "Joff Redfern",
    "pictureUrl": "https://media.licdn.com/media/p/6/005/05f/2e3/06919f5.jpg",
    "title": "VP Product for Flagship Apps / Platforms at LinkedIn",
    "pictureLogo": "person",
    "connectionsId": "2849241"
  },
  {
    "name": "Florina Xhabija Grosskurth",
    "pictureUrl": "https://media.licdn.com/media/p/4/005/097/1e7/2ea21fa.jpg",
    "title": "Director of People Operations",
    "pictureLogo": "person",
    "connectionsId": "4917159"
  }
];

var server;

module('Acceptance | connections', {
  beforeEach: function() {
    application = startApp();

    server = new Pretender(function() {
      this.get('/api/v1/connections', function(){
        var json = {
          connections: CONNECTIONS
        };

        return [200, {}, JSON.stringify(json)];
      });
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('visiting /connections', function(assert) {
  visit('/connections');

  andThen(function() {
    var title = find('h1');
    assert.equal(title.text(), 'Connections');

    var connections = find('.list-item');
    assert.equal(connections.length, CONNECTIONS.length);

    assert.equal(currentURL(), '/connections');
  });
});

test('visiting connections via the nav', function(assert) {
  visit('/');

  click('nav a:contains(Connections)');
  // clickNavLink('Connections');

  andThen(function() {
    var title = find('h1');
    assert.equal(title.text(), 'Connections');

    var connections = find('.list-item');
    assert.equal(connections.length, CONNECTIONS.length);

    assert.equal(currentURL(), '/connections');
  });

});










