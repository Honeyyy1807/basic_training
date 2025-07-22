const path=require('path');

function joinPaths(...args) {
    return path.join(...args);
}

function getAbsolutePath(relativePath) {
    return path.resolve(relativePath);
}

function getFileName(filePath) {
    return path.basename(filePath);
}   

function getDirectoryName(filePath) {
    return path.dirname(filePath);
}   

module.exports={
    joinPaths,
    getAbsolutePath,
    getFileName,
    getDirectoryName        

}