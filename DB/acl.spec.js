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

test('Print ACL table data', async () => {

    const client = await connectDB();

    try {

        const result = await client.query(`
            SELECT *
            FROM acl
            ORDER BY id;
        `);

        if (result.rows.length === 0) {
            console.log("No Records Found");
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
                Object.values(row).map(value => trim(value, 18))
            );

        });

        console.log(table.toString());
        console.log(`\nTotal Records : ${result.rowCount}`);

    } finally {
        await client.end();
        console.log("\n✅ Database Connection Closed");
    }

});