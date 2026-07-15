const ExcelJS = require('exceljs');

async function readExcel() {
    try {
        const workbook = new ExcelJS.Workbook();

        await workbook.xlsx.readFile("C:/Users/Madhu Erukula/Downloads/demo2.xlsx");

        console.log('Excel opened successfully');

        const worksheet = workbook.getWorksheet(1); // First sheet

        worksheet.eachRow((row, rowNumber) => {
            console.log(`Row ${rowNumber}:`, row.values);
        });

    } catch (err) {
        console.error(err);
    }
}

readExcel();