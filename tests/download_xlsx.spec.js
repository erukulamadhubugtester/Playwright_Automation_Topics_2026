import { test, expect } from '@playwright/test';
const ExcelJS = require('exceljs');

const filePath = "C:/Users/Madhu Erukula/Downloads/file_example_XLSX_50.xlsx";

test('Download XLSX file', async ({ page }) => {

    await page.goto('https://file-examples.com/index.php/sample-documents-download/sample-xls-download/');
    await page.waitForTimeout(3000);
    const downloadPromise = page.waitForEvent('download');

    await page.locator("//tr[td[text()='7 kB']]//a").click();
    await page.waitForTimeout(3000);

    const download = await downloadPromise;

    await download.saveAs(filePath);

    console.log("Downloaded File:", download.suggestedFilename());

    expect(download.suggestedFilename()).toBe("file_example_XLSX_50.xlsx");
    await page.waitForTimeout(3000);
});

test('Read downloaded XLSX file', async () => {

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.getWorksheet(1);

    sheet.eachRow((row, rowNumber) => {
        console.log(`Row ${rowNumber}:`, row.values);
    });
});