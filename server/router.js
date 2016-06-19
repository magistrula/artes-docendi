const fs = require('fs');
const router = require('express').Router();

router.get('/slideshow_images', (req, res) => {
  fs.readdir('app/images/slideshow/', function (err, files) {
    response.send(files);
  });
});

router.get('/sententiae_images', (req, res) => {
  fs.readdir('app/images/sententiae/', (err, folderNames) => {
    const fileHash = {};

    folderNames.forEach((folderName, folderIndex, folders) => {
      fs.readdir(`app/images/sententiae/${folderName}`, (err, fileNames) => {
        fileHash[folderName] = fileNames
          .filter(fileName => /\.png$/.test(fileName))
          .map(fileName => `images/sententiae/${folderName}/${fileName}`);

        if (Object.keys(fileHash).length === folders.length) {
          res.send(fileHash);
        }
      });
    });
  });
});

module.exports = router;
