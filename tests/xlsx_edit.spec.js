// const ExcelJS = require('exceljs');

// async function updateExcel() {
//     try {
//         // Create workbook
//         const workbook = new ExcelJS.Workbook();

//         // Read Excel file
//         await workbook.xlsx.readFile("C:/Users/Madhu Erukula/Downloads/demo2.xlsx");

//         console.log("Excel opened successfully.");

//         // Get first worksheet
//         const worksheet = workbook.getWorksheet(1);

//         // Get cell A1
//         const cell = worksheet.getCell("B2");

//         // Print old value
//         console.log("Cell Address :", cell.address);
//         console.log("Old Value    :", cell.value);

//         // Update value
//         cell.value = "Sara";

//         // Print new value
//         console.log("New Value    :", cell.value);

//         // Save changes
//         await workbook.xlsx.writeFile("C:/Users/Madhu Erukula/Downloads/demo2_updated.xlsx");

//         console.log("Excel file updated successfully.");

//     } catch (err) {
//         console.error(err);
//     }
// }

// updateExcel();





// 2 

const ExcelJS = require('exceljs');

async function updateExcel() {
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile("C:/Users/Madhu Erukula/Downloads/demo2.xlsx");

    const sheet = workbook.getWorksheet(1);

    sheet.getCell("B2").value = "sree";

    // Make sure this file is NOT open in Excel
    await workbook.xlsx.writeFile("C:/Users/Madhu Erukula/Downloads/demo2_updated.xlsx");

    console.log("Excel updated successfully.");
}

updateExcel().catch(console.error);