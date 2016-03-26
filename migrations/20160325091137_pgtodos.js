
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function (table) {
    table.increments();
    table.string('name');
    table.boolean('completed').defaultTo('false').notNullable();
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  
};
