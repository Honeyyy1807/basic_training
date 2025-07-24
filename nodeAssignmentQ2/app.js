const fileUtils=require('./utils/fsUtils');
const pathUtils=require('./utils/pathUtils');
const dir=pathUtils.joinPaths(__dirname, 'data');
const file=pathUtils.joinPaths(dir, 'example.txt');

console.log(fileUtils.createDirectory(dir));
console.log(fileUtils.writeFile(file, "Hii, I am Honey"))
console.log(fileUtils.readFile(file));
console.log("File Exists?"+ fileUtils.fileExists(file));
console.log("All the files in the directory are "+ fileUtils.listFiles(dir));


console.log(pathUtils.getAbsolutePath(file));
console.log(pathUtils.getFileName(file));
console.log(pathUtils.getDirectoryName(file));
console.log(pathUtils.joinPaths('nodeAssignmentQ2', 'utils', 'fsUtils.js'))