require('dotenv').config();
import { successResponse, failureResponse } from '../responses';
import SqlService from '../services/sqlService';
import TaskService from '../services/taskService';

module.exports.handler = async (event, context, callback) => {

  const taskList: ITaskList = JSON.parse(event.body);

  const sqlService = new SqlService();
  const taskService = new TaskService(sqlService);

  const result = await taskService.tagTaskToList(taskList);

  if (!result) {
    return failureResponse;
  }

  return successResponse;
};

