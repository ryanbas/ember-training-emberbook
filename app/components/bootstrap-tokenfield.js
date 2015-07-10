import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('input').tokenfield({
      tokens: this.get('tokens')
    });

    this.$('input').on('tokenfield:createdtoken tokenfield:editedtoken tokenfield:removedtoken', event => {
      if (this._settingTokens) { return; }
      this.set('tokens', this.$('input').tokenfield('getTokens').mapBy('value'));
    });
  },

  tokensDidChange: Ember.observer('tokens.@each', function() {
    if (this._state === 'inDOM') {
      this._settingTokens = true;
      this.$('input').tokenfield('setTokens', this.get('tokens'));
      this._settingTokens = false;
    }
  }),

  willDestroyElement() {
    this.$('input').tokenfield('destroy');
  }
});
