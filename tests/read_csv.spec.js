const ExcelJS = require('exceljs');

async function readCSV() {
    try {
        const workbook = new ExcelJS.Workbook();

        const worksheet = await workbook.csv.readFile(
            "C:/Users/Madhu Erukula/Downloads/Demo.csv"
        );

        worksheet.eachRow((row, rowNumber) => {
            console.log(`Row ${rowNumber}:`, row.values);
        });

    } catch (err) {
        console.error(err);
    }
}

readCSV();