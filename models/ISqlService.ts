interface ISqlService {
    execute(sql: string): Promise<boolean>
}