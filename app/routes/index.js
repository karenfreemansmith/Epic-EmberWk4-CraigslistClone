import Ember from 'ember';
  var categories = ["community", "personals", "discussion forums", "housing", "for sale", "service", "jobs", "gigs", "resumes"];
export default Ember.Route.extend({
  model() {
    return categories;
  }
});
