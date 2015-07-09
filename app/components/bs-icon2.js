import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '', // our hack

  // tagName: 'span',
  // classNames: ['glyphicon'],
  // classNameBindings: ['iconClass'],
  // attributeBindings: ['aria-hidden'],
  // 'aria-hidden': 'true',

  // init() {
  //   this._super(...arguments);
  //   this.iconClass =
  // },

  iconClass: Ember.computed('name', function() {
    return `glyphicon-${this.get('name')}`;
  })
});
