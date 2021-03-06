import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  // NOTE: Because comment/new is a *subroute* of post,
  // renderTemplate is needed to display post/comment/new.hbs
  renderTemplate() {
    this.render('post.comment.new', { into: 'application' });
  },
  actions: {
    save() {
      const post = this.modelFor('post');
      const newComment = this.get('store').createRecord('comment', this.currentModel);
      newComment.set('post', post);
      newComment.save().then(() => {
        this.transitionTo('post', post);
      });
    },
    cancel() {
      this.transitionTo('post', this.modelFor('post'));
    }
  }
});
