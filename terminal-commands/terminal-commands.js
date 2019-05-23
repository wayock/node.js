const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

  console.log(filesToString);
   });
};

module.exports.touch = (fileName) => {
  fs.writeFile(fileName, "", err => {
  console.log(`${fileName} was created.`)
});
};

module.exports.mkdir = (directoryName) => {
  fs.mkdir(`./${directoryName}`, err => {
  console.log(`./${directoryName} was created.`);
});
};
