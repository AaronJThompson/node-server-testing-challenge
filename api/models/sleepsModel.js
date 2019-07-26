const db = require('../../data/dbConfig');

async function insert(sleep) {
    const [id] = await db('sleeps').insert(sleep);
    return db('sleeps').where({ id }).first();
}

async function update(fields, id) {
    await db('sleeps').where({ id }).update(fields);
    return db('sleeps').where({ id }).first();
}

async function remove(id) {
    const sleep = await findById(id);
    await db('sleeps').where({ id }).del();
    return sleep;
}

function find() {
    return db('sleeps');
}

function findById(id) {
    return db('sleeps').where({ id }).first();
}

module.exports = {
    insert,
    update,
    remove,
    find,
    findById
}