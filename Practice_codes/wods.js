const XLSX = require("xlsx");

// Excel file path
const inputFile = "C:/Users/Madhu Erukula/Downloads/Worklist.xlsx";

// Read Excel file
const workbook = XLSX.readFile(inputFile);

// Get first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert Excel to array
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Words to ignore
const stopWords = new Set([
  "the", "is", "a", "an", "and", "or", "to", "of",
  "in", "on", "for", "with", "from", "by",
  "click", "verify", "select", "button",
  "open", "page", "using", "then", "from",
  "into", "after", "check"
]);

// Extract main words
function getMainWords(text) {
  if (!text) return "";

  const words = text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/);

  const count = {};

  words.forEach(word => {
    if (
      word.length > 3 &&
      !stopWords.has(word)
    ) {
      count[word] = (count[word] || 0) + 1;
    }
  });

  return Object.entries(count)
    .sort((a, b) => b[1] - a[1]) // highest count first
    .slice(0, 10)                 // top 10 words
    .map(item => item[0])
    .join(", ");
}


// Process each Excel row
data.forEach((row, index) => {

  // Combine text from A to G columns
  const fullText = row.slice(0, 7).join(" ");

  // Write keywords into H column
  row[7] = getMainWords(fullText);

});


// Create new worksheet
const newSheet = XLSX.utils.aoa_to_sheet(data);

// Create new workbook
const newWorkbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(
  newWorkbook,
  newSheet,
  sheetName
);


// Save output file
XLSX.writeFile(
  newWorkbook,
  "output_with_keywords.xlsx"
);

console.log("Completed! Main words added to Column H.");