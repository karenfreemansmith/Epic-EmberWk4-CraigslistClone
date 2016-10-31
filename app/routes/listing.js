import Ember from 'ember';
  var categories = ["community", "personals", "discussion forums", "housing", "for sale", "service", "jobs", "gigs", "resumes"];
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id)
  
  }
});
