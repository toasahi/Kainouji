import { useCallback, useState } from 'react';
import AWS from 'aws-sdk';

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_S3_REGION;

AWS.config.update({
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

export const useUploadImage = () => {
  const [progress, setProgress] = useState(0);
  const [finishUpload, setFinishUpload] = useState(false);
  const uploadImage = useCallback((file: File) => {
    setFinishUpload(true);
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET!,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
        if (progress === 100) {
          setFinishUpload(false);
        }
      })
      .send((err) => {
        if (err) console.log(err);
      });
  }, []);

  return { uploadImage, finishUpload };
};
