import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'emberbook/tests/helpers/start-app';

var application;

module('Acceptance | news', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /news', function(assert) {
  visit('/news');

  andThen(function() {
    assert.equal(currentRouteName(), 'news.article');
  });
});
