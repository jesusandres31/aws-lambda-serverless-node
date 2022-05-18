const dynamodb = require('./lib/aws');

const getTasks = async (event) => {
  const result = await dynamodb.scan({ TableName: 'TaskTable' }).promise();

  const tasks = result.Items;

  return {
    status: 200,
    body: {
      tasks,
    },
  };
};

module.exports = {
  getTasks,
};
