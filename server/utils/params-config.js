const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    const imageParams = {
      Bucket: 'user-images-667e8182-38ea-4753-a315-649ebb8e9b72',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
    };
    return imageParams;
};

module.exports = params;