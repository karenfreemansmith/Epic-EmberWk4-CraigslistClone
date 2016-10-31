import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  email: DS.attr(),
  title: DS.attr(),
  body: DS.attr()
});
