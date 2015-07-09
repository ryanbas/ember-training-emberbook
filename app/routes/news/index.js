import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    var parentRoutesModel = this.modelFor('news');
    var articleId = parentRoutesModel.articles[0].articleId;
    this.replaceWith('news.article', articleId);
  }
});
