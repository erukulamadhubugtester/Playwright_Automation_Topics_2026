const { test } = require('@playwright/test');
const { connectDB } = require('../dbConnection');

let client;

test.beforeEach(async () => {
    client = await connectDB();
});

test.afterEach(async () => {
    await client.end();
    console.log("✅ Database Connection Closed");
});

test('Print ASTLS tables', async () => {

    const result = await client.query(`
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema='public'
          AND table_type='BASE TABLE'
        ORDER BY table_name;
    `);

    console.log("\n========== ASTLS TABLES ==========");

    result.rows.forEach((row, index) => {
        console.log(`${index + 1}. ${row.table_name}`);
    });

    console.log(`\nTotal Tables : ${result.rows.length}`);
});


test('Print ASTLS table headers', async () => {

    const tables = await client.query(`
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema='public'
          AND table_type='BASE TABLE'
        ORDER BY table_name;
    `);

    for (const table of tables.rows) {

        console.log(`\n==============================`);
        console.log(`Table : ${table.table_name}`);
        console.log(`==============================`);

        const columns = await client.query(`
            SELECT
                column_name,
                data_type
            FROM information_schema.columns
            WHERE table_schema='public'
              AND table_name=$1
            ORDER BY ordinal_position;
        `, [table.table_name]);

        console.table(columns.rows);
    }
});


test('Print worklist records', async () => {

});


test('Print user records', async () => {

   
});