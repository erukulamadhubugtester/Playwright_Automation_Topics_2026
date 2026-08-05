const { test } = require('@playwright/test');
const { connectDB } = require('../dbConnection');
const Table = require('cli-table3');

//============================================================
// CHANGE ONLY THIS VALUE
//============================================================

// const tableName = 'acl';
// const tableName = 'asset';
// const tableName = 'asset_id_type_mapping';
// const tableName = 'asset_model';
// const tableName = 'asset_type';
// const tableName = 'audit_event';
// const tableName = 'category';
// const tableName = 'comment';
// const tableName = 'custom_task_def';
// const tableName = 'custom_task_def_config';
// const tableName = 'data_connector';
// const tableName = 'dc_asset';
// const tableName = 'dc_audit_event';
// const tableName = 'dc_comment';
// const tableName = 'dc_locations';
// const tableName = 'dc_routing_rule';
// const tableName = 'dc_source';
// const tableName = 'dc_storage';
// const tableName = 'debug_log';
// const tableName = 'error_codes';
// const tableName = 'export_job';
// const tableName = 'file';
// const tableName = 'file_version';
// const tableName = 'group';
// const tableName = 'job';
// const tableName = 'job_def';
// const tableName = 'lims_sample';
// const tableName = 'monitor';
// const tableName = 'notification';
// const tableName = 'other_sample';
// const tableName = 'picture';
// const tableName = 'process_scheduler';
// const tableName = 'role';
// const tableName = 'site';
// const tableName = 'task';
// const tableName = 'task_def';
// const tableName = 'task_result';
// const tableName = 'tenant_config';
// const tableName = 'user';
// const tableName = 'user_auth_token';
// const tableName = 'user_group';
// const tableName = 'user_interface_config';
// const tableName = 'user_notification';
// const tableName = 'user_preference';
const tableName = 'worklist';
// const tableName = 'worklist_samples';

//============================================================

function trim(value, maxLength = 25) {

    if (value === null || value === undefined)
        return '';

    if (typeof value === 'object')
        value = JSON.stringify(value);

    value = String(value);

    return value.length > maxLength
        ? value.substring(0, maxLength - 3) + '...'
        : value;
}

test(`Print ${tableName} Table Data`, async () => {

    const client = await connectDB();

    try {

        // Verify Connected Database
        const db = await client.query(`
            SELECT current_database() AS database_name;
        `);

        console.log(`\nConnected Database : ${db.rows[0].database_name}`);

        // Check Table Exists
        const tableCheck = await client.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema='public'
            AND table_name=$1;
        `, [tableName]);

        if (tableCheck.rowCount === 0) {

            console.log(`❌ Table '${tableName}' not found.`);
            return;

        }

        // Check if ID column exists
        const idCheck = await client.query(`
            SELECT column_name
            FROM information_schema.columns
            WHERE table_schema='public'
            AND table_name=$1
            AND column_name='id';
        `, [tableName]);

        let sql;

        // Large Table Handling
        if (tableName === 'audit_event') {

            sql = `
                SELECT *
                FROM "${tableName}"
                ORDER BY id DESC
                LIMIT 100;
            `;

            console.log("\nShowing Latest 100 Records...\n");

        }
        // Other tables having ID column
        else if (idCheck.rowCount > 0) {

            sql = `
                SELECT *
                FROM "${tableName}"
                ORDER BY id;
            `;

        }
        // Tables without ID column
        else {

            sql = `
                SELECT *
                FROM "${tableName}";
            `;

        }

        const result = await client.query(sql);

        if (result.rows.length === 0) {

            console.log(`⚠ Table '${tableName}' contains no records.`);
            return;

        }

        const headers = Object.keys(result.rows[0]);

        const table = new Table({
            head: headers,
            wordWrap: false,
            style: {
                head: ['green'],
                compact: true
            }
        });

        result.rows.forEach(row => {

            table.push(
                headers.map(column => trim(row[column], 25))
            );

        });

        console.log("==============================================================");
        console.log(`TABLE : ${tableName.toUpperCase()}`);
        console.log("==============================================================\n");

        console.log(table.toString());

        console.log(`\nTotal Records Displayed : ${result.rowCount}`);

        // Show total count for audit_event
        if (tableName === 'audit_event') {

            const count = await client.query(`
                SELECT COUNT(*) AS total
                FROM "${tableName}";
            `);

            console.log(`Total Records in Database : ${count.rows[0].total}`);

        }

    } catch (error) {

        console.error(error);

    } finally {

        await client.end();
        console.log("\n✅ Database Connection Closed");

    }

});