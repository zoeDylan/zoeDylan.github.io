import { Table } from './module/Table';


class Db extends Table {
    constructor(name: string) {
        super(name);
    }
}

export { Db };