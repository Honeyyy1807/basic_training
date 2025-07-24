import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}


function getTimestamp() {
  const time = new Date();
  return time.toISOString().replace(/[:.]/g, '-'); 
}


async function fetchAndSaveEmployees() {
  try {
    const response = await fetch('https://dummyjson.com/users'); 
    const data = await response.json();

    const timestamp = getTimestamp();
    const filePath = path.join(outputDir, `employees-${timestamp}.json`);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Data saved to ${filePath}`);
  } catch (error) {
    console.error('Error fetching employee data:', error.message);
  }
}

fetchAndSaveEmployees();
