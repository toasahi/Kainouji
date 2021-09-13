import { useCallback, useState } from 'react';
import AWS from 'aws-sdk';
import S3n from 'aws-sdk/clients/s3';

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_S3_BUCKET;

const config = {
  bucketName: S3_BUCKET,
  dirName: process.env.REACT_APP_S3_DIRECTORY /* optional */,
  region: REGION,
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
};

AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const s3 = new S3n({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: REGION,
})

export const useUploadImage = () => {
  const [progress, setProgress] = useState(0);
  const uploadImage = useCallback((file: File) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET!,
      Key: file.name,
      ContentType: file.type,
    };
    
    const uploadParams = {
      Body: file,
      Bucket: S3_BUCKET!,
      Key: file.name,
      ContentType: file.type,
    }

    return s3.upload(uploadParams).promise()
    // myBucket
    //   .putObject(params)
    //   .on('httpUploadProgress', (evt) => {
    //     setProgress(Math.round((evt.loaded / evt.total) * 100));
    //   })
    //   .send((err) => {
    //     if (err) console.log(err);
    //   });
  }, []);

  return { uploadImage, progress };
};
