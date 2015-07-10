import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('input').tokenfield();

    this.$('input').on('tokenfield:createdtoken tokenfield:editedtoken tokenfield:removedtoken', event => {
      if (this._settingTokens) { return; }
      let tokens = this.$('input').tokenfield('getTokens').mapBy('value');
      this.attrs.tokensChanged(tokens);
    });
  },

  didRender() {
    this._settingTokens = true;
    this.$('input').tokenfield('setTokens', this.attrs.tokens);
    this._settingTokens = false;
  },

  willDestroyElement() {
    this.$('input').tokenfield('destroy');
  }
});
