export default class MockSqlService implements ISqlService {
    async execute(sql: string): Promise<boolean> {
        return true;
    }
}