const fs = require('fs');
const pdf = require('pdf-parse');

async function readPDF() {
    try {
        const dataBuffer = fs.readFileSync("C:/Users/Madhu Erukula/Downloads/demopdf.pdf");

        const data = await pdf(dataBuffer);

        console.log("Pages:", data.numpages);
        console.log(data.text);
    } catch (err) {
        console.error(err);
    }
}

readPDF();