const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
});

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
      callback(null, '');
    },
});

// image is the key!
const upload = multer({ storage }).single('image');

router.post('/image-upload', upload, (req, res) => {
    // set up params config
    // set up S3 service call
  });