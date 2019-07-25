const db = require('../../data/dbConfig');
const SleepsModel = require('./sleepsModel');

beforeEach(async () => {
    await db('sleeps').truncate();
});

describe("Testing sleep table CRUD methods", async () => {
    test("Can get all sleeps", async () => {
        const sleeps = await SleepsModel.find();
        expect(sleeps).toBeInstanceOf(Array);
        expect(sleeps).toHaveLength(0);
    });

    test("Can add sleep", async () => {
        const sleep = await SleepsModel.insert(
            {
                start_time: new Date().toISOString()
            });
        const sleeps = await SleepsModel.find();
        expect(sleeps).toHaveLength(1);
    });
});