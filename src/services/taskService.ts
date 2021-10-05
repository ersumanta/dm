import ITask from '../../models/ITask';

export default class TaskService {

    private sqlService: ISqlService;

    constructor(_sqlService: ISqlService) {
        this.sqlService = _sqlService;
    }

    async addTask(task: ITask) {
        const sql: string = `insert into tasks (title, updatedAt)
        select '${task.title}', '${new Date().toISOString()}'`;

        try {
            await this.sqlService.execute(sql);
            return true;
        } catch (ex) {
            // Log exception
            return false;
        }
    }

    async addList(list: IList) {
        const sql: string = `insert into lists (title, updatedAt)
        select '${list.title}', '${new Date().toISOString()}'`;

        try {
            await this.sqlService.execute(sql);
            return true;
        } catch (ex) {
            // Log exception
            return false;
        }
    }

    async tagTaskToList(taskList: ITaskList) {
        const sql: string = `insert into taskList (listId, taskId)
        select ${taskList.listId}, ${taskList.taskId}`;

        try {
            await this.sqlService.execute(sql);
            return true;
        } catch (ex) {
            // Log exception
            return false;
        }
    }
}