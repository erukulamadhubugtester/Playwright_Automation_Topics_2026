// const XLSX = require('xlsx');

// const workbook = XLSX.readFile('C:/Users/Madhu Erukula/Downloads/audit_page-20260729T065758.csv');
// const sheet = workbook.Sheets[workbook.SheetNames[0]];

// const data = XLSX.utils.sheet_to_json(sheet);

// console.log(data.slice(0, 5));



const XLSX = require('xlsx');

const workbook = XLSX.readFile(
  'C:/Users/Madhu Erukula/Downloads/audit_page-20260729T065758.csv'
);

const sheet = workbook.Sheets[workbook.SheetNames[0]];

// Read all rows
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// Skip first row (Total count)
// Second row contains actual headers
const data = rows.slice(2);

// Get unique events from first column
const uniqueEvents = [...new Set(
  data
    .map(row => row[0]?.trim())
    .filter(Boolean)
)];

console.log("Unique Events:");
uniqueEvents.forEach(event => console.log(event));