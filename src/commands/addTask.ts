require('dotenv').config();
import { successResponse, failureResponse } from '../responses';
import SqlService from '../services/sqlService';
import TaskService from '../services/taskService';
import ITask from '../../models/ITask';

module.exports.handler = async (event, context, callback) => {

  const task: ITask = JSON.parse(event.body);

  const sqlService = new SqlService();
  const taskService = new TaskService(sqlService);

  const result = await taskService.addList(task);

  if (!result) {
    return failureResponse;
  }

  return successResponse;
};

