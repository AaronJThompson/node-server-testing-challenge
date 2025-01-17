const db = require('../../data/dbConfig');
const SleepsModel = require('./sleepsModel');

beforeEach(async () => {
    await db('sleeps').truncate();
});

test("Can get all sleeps", async () => {
    const sleeps = await SleepsModel.find();
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
test('Returns new sleep on insert', async () => {
    const dt = new Date().toISOString();
    const sleep = await SleepsModel.insert(
        {
            start_time: dt
        });
    expect(sleep.start_time).toEqual(dt);
});