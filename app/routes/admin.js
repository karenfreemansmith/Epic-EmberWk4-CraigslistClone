import Ember from 'ember';
var editing=false;

export default Ember.Route.extend({
  model(params) {
    if(params=="add") {
      editing: true;
    } else {
      return this.store.findRecord('listing', params.listing_id);
    }
  }
});
