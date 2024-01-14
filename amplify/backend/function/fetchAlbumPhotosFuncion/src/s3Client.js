const { S3Client } = require("@aws-sdk/client-s3");
const REGION = "ap-east-1";
const s3Client = new S3Client({ region: REGION });

exports.s3Client = s3Client;
exports.bucketName = "luffysfightclub-hongkong";