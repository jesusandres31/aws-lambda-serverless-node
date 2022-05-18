const dynamodb = require('./lib/aws');

const getTask = async (event) => {
  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({
      TableName: 'TaskTable',
      Key: { id },
    })
    .promise();

  const task = result.Item;

  return {
    status: 200,
    body: task,
  };
};

module.exports = {
  getTask,
};
