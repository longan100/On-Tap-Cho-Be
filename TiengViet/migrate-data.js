const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'data/questions.json');
const jsPath = path.join(__dirname, 'data/questions.js');

if (fs.existsSync(jsonPath)) {
    const data = fs.readFileSync(jsonPath, 'utf8');
    fs.writeFileSync(jsPath, 'const questionsData = ' + data + ';', 'utf8');
    // We can also let the json file stay, but deleting is cleaner
    fs.unlinkSync(jsonPath);
    console.log("Converted questions.json to questions.js");
}
