import Ember from 'ember';

export default Ember.Component.extend({
  loggedin: false,
  listingDetails: false,
  actions: {
    signin: function() {
      this.set('loggedin', true);
      if(this.loggedin) {
        this.transitionTo('admin');
      }
    },
    signout: function() {
      this.set('loggedin', false);
    },
    listingDetails: function() {

      if (model.id) {
        alert("hi");
        this.set('listingDetails', true);
      }
    }
  }
});
