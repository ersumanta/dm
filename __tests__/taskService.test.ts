// Testing services instead API. 
// This will give oppurtunity to mock actual SQL Calls and test the logic.
// Ran out of time for Testing API.
// Testing only positive scenarios. Need to Test exceptions as well.

import TaskService from '../src/services/taskService';
import mockSqlService from '../src/services/mockSqlService';

let taskService;

beforeEach(() => {
    let sqlService = new mockSqlService();
    taskService = new TaskService(sqlService);
});

test("Given a Task is added Then Task is Created", async () => {
    let task = { title: 'T1' };
    let result = await taskService.addTask(task);

    expect(result).toEqual(true);
});

test("Given a List is added Then List is Created", async () => {
    let list = { title: 'T1' };
    let result = await taskService.addList(list);

    expect(result).toEqual(true);
});

test("Given a TaskList is added Then TaskList is Created", async () => {
    let taskList = { taskId: 1, listId: 2 };
    let result = await taskService.tagTaskToList(taskList);

    expect(result).toEqual(true);
});