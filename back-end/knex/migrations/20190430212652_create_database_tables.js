exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('pers', function(table) {
        table.increments('pers_sec').primary();
        table.string('pers_nom');
        table.string('pers_cor_ele');
        table.string('pers_cla');
    })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('pers'),
    ]);
  };