const { test } = require('@playwright/test');
const { connectDB } = require('../dbConnection');
const Table = require('cli-table3');

function trim(value, maxLength) {
    if (value === null || value === undefined) return '';
    value = String(value);
    return value.length > maxLength
        ? value.substring(0, maxLength - 3) + '...'
        : value;
}

test('Print Asset table data', async () => {

    const client = await connectDB();

    try {

        const result = await client.query(`
            SELECT *
            FROM asset_id_type_mapping
            ORDER BY id
            ;
        `);

        if (result.rows.length === 0) {
            console.log("No Records Found in Asset table.");
            return;
        }

        const headers = Object.keys(result.rows[0]);

        const table = new Table({
            head: headers,
            wordWrap: false,
            style: {
                head: ['cyan'],
                compact: true
            }
        });

        result.rows.forEach(row => {
            table.push(
                Object.values(row).map(value => trim(value, 25))
            );
        });

        console.log("\n========== ASSET TABLE ==========\n");
        console.log(table.toString());
        console.log(`\nTotal Records : ${result.rowCount}`);

    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
        console.log("\n✅ Database Connection Closed");
    }

});