const distLocation = '../dist/';
const outputLocation = '../angular-element.js';
const mainFiles = ['main.js', 'polyfills.js', 'runtime.js'];

(function _() {
  require('fs').readdir(distLocation, async function name(_, filenames) {
    await require('concat')(
      addDirectoryLocation([...mainFiles, ...getOtherFileNames(filenames)]),
      outputLocation
    );
  });
})();

function addDirectoryLocation(filenames) {
  return filenames.map((f) => distLocation + f);
}

function getOtherFileNames(filenames) {
  return filenames.filter((name) => hasJsExtension(name) && !isAMainFile(name));
}

function isAMainFile(fileName) {
  return !!mainFiles.find((f) => f === fileName);
}

function hasJsExtension(fileName) {
  return /.js$/.test(fileName);
}
