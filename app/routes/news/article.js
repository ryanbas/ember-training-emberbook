import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var parentRoutesData = this.modelFor('news');
    var article = parentRoutesData.articles.findBy('permLink', params.permLink);
    var articleId = article.articleId;
    return Ember.$.getJSON(`/api/v1/articles/${articleId}`);
  }
});
