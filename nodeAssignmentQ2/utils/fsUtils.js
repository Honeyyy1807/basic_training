const fs=require('fs');

function readFile(filePAth, encoding='utf-8'){
    try{
        const data = fs.readFileSync(filePAth, encoding);
        return data;
    }catch(err){
        console.error(`Error reading file at ${filePAth}:`, err);
        return null;
    }
}

function writeFile(filePath, content){
    try{
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`File written successfully at ${filePath}`);
    }catch{
        console.error(`Error writing file at ${filePath}`);
    }
}

function fileExists(filePath){
    try{
        return fs.existsSync(filePath);
    }catch(err){
        console.error(`Error checking if file exists at ${filePath}:`, err);
        return false;
    }
}   


function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    return 'Directory created.';
  }
  return 'Directory already exists.';
}

function listFiles(dirPath) {
  try {
    return fs.readdirSync(dirPath);
  } catch (err) {
    return `Error listing files: ${err.message}`;
  }
}

module.exports = {
    readFile,
    writeFile,     
    fileExists,
    createDirectory,
    listFiles
};