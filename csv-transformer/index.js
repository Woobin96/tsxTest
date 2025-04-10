// csv-transformer/index.js
const fs = require('fs');

function transform({ src }) {
  const csvData = JSON.stringify(src);
  return {
    code: `module.exports = ${csvData};`,
  };
}

module.exports.transform = transform;
