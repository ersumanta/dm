const pg = require('pg');

export default class SqlService implements ISqlService {
    async execute(sql: string): Promise<boolean> {
        // Executes SQL String to Postgress SQL
        // Below lines are commented out intentionally to run the application without SQL setup

        // var client = new pg.Client(process.env.CONNECTION_STRING);
        // await client.connect();
        // await client.query(sql);
        // await client.end();

        return true;
    }
}