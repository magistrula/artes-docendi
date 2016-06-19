const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.redirect('/sententiae.html');
});

router.get('/images/:dir', (req, res) => {
  fs.readdir(`app/images/${req.params.dir}`, (err, files) => {
    const filePaths = files.map(fileName => `images/${req.params.dir}/${fileName}`);
    res.send(filePaths);
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
