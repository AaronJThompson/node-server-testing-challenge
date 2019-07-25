
exports.up = function(knex) {
    return knex.schema.createTable('sleeps', tbl => {
        tbl.increments();
        tbl.datetime('start_time');
        tbl.datetime('stop_time');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sleeps');
};
