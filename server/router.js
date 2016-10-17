const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.redirect('/sententiae');
});

router.get('/nomina_images', (req, res) => {
  fs.readdir('app/nomina/images/', (err, files) => {
    const filePaths = files.map(fileName => `/nomina/images/${fileName}`);
    res.send(filePaths);
  });
});

router.get('/slideshow_images', (req, res) => {
  fs.readdir('app/slideshow/images/', (err, files) => {
    const filePaths = files.map(fileName => `/slideshow/images/${fileName}`);
    res.send(filePaths);
  });
});

router.get('/sententiae_images', (req, res) => {
  fs.readdir('app/sententiae/images/', (err, folderNames) => {
    const fileHash = {};

    folderNames.forEach((folderName, folderIndex, folders) => {
      fs.readdir(`app/sententiae/images/${folderName}`, (err, fileNames) => {
        fileHash[folderName] = fileNames
          .filter(fileName => /\.(png|jpg|gif|svg)$/.test(fileName))
          .map(fileName => `/sententiae/images/${folderName}/${fileName}`);

        if (Object.keys(fileHash).length === folders.length) {
          res.send(fileHash);
        }
      });
    });
  });
});

module.exports = router;
