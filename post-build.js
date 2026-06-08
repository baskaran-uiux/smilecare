const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, search, replace) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = content.split(search).join(replace);
    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

function traverseDirectory(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

const outDir = path.join(__dirname, 'out');
const oldDir = path.join(outDir, '_next');
const newDir = path.join(outDir, 'next');

if (fs.existsSync(oldDir)) {
  fs.renameSync(oldDir, newDir);
  console.log('Renamed _next to next successfully.');
} else {
  console.log('_next directory not found or already renamed.');
}

if (fs.existsSync(outDir)) {
  traverseDirectory(outDir, (filePath) => {
    const ext = path.extname(filePath);
    if (['.html', '.js', '.css', '.json', '.txt'].includes(ext)) {
      replaceInFile(filePath, '/_next/', '/next/');
      replaceInFile(filePath, '_next/', 'next/');
    }
  });
  console.log('Replaced all occurrences of _next with next in output files.');
} else {
  console.error('out directory does not exist.');
}
