import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-buttons', 'Integration | Component | admin buttons', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-buttons}}
      template block text
    {{/admin-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
