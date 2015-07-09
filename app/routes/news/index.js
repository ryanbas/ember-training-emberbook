import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    var parentRoutesModel = this.modelFor('news');
    var permLink = parentRoutesModel.articles[0].permLink;
    this.replaceWith('news.article', permLink);
  }
});
