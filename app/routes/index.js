import Ember from 'ember';

// Redirect from index to posts
export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('posts');
  }
});
