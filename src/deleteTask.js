const dynamodb = require('./lib/aws');

const deleteTask = async (event) => {
  const { id } = event.pathParameters;

  await dynamodb
    .delete({
      TableName: 'TaskTable',
      Key: {
        id,
      },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: 'Deleted Task',
    },
  };
};

module.exports = {
  deleteTask,
};
