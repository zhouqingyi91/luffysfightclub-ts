const { S3Client } = require("@aws-sdk/client-s3");
const REGION = "us-west-2";
const s3Client = new S3Client({ region: REGION });

exports.s3Client = s3Client;
exports.bucketName = "luffysfightclub";