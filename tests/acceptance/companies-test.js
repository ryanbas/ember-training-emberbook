import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'emberbook/tests/helpers/start-app';

var application;

module('Acceptance | companies', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /companies', function(assert) {
  visit('/companies');

  andThen(function() {
    assert.equal(currentURL(), '/companies');
  });
});
