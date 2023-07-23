'use strict';

const AWS = require('aws-sdk');
const s3 = AWS.S3();

export const handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('This a local application!'),
    };
    return response;
};
