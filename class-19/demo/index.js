const AWS = require('aws-sdk');
AWS.config.update({
  region:'us-east-1',
  apiVersion: '',
  accessKeyId: '',
  secretAccessKey: ''
});


exports.handler = async function(event, context) {
  
const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-east-1:440756876912:ammand17';

const payload = {
  Message: 'Hello from John',
  TopicArn: topic,
};

return sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);
};
