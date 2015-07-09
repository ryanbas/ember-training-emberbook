import Ember from 'ember';

var escape = Ember.Handlebars.Utils.escapeExpression;

export function bsIcon([iconName]) {
  iconName = escape(iconName);
  return `<span class="glyphicon glyphicon-${iconName}" aria-hidden="true"></span>`.htmlSafe();
}

export default Ember.HTMLBars.makeBoundHelper(bsIcon);
