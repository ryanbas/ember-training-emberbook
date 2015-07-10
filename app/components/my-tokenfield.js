import Ember from 'ember';

export default Ember.Component.extend({
  tokens: null,

  didReceiveAttrs({oldAttrs, newAttrs}) {
    this.set('tokens', newAttrs.tokens.slice());
  },

  keyUp(event) {
    let value = event.target.value;
    if (value === "" && event.keyCode === 8) {
      this.tokens.popObject();
      this.attrs.tokensChanged(this.tokens);
    }
  },

  actions: {
    add(token) {
      var tokens = this.tokens;
      tokens.pushObject(token);
      this.set('newToken', null);
      this.attrs.tokensChanged(tokens);
    },

    remove(token) {
      var tokens = this.tokens;
      tokens.removeObject(token);
      this.attrs.tokensChanged(tokens);
    }
  }
});
