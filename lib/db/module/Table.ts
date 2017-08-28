import { JsonFile } from './JsonFile';

//模块导出
export class Table {
    private jf: JsonFile
    constructor(name: string) {
        this.jf = new JsonFile(name);
    }
    add(id, cont: object, isUpdate?: boolean): Object {
        let nowDate = this.jf.data;
        nowDate[id] = (<any>Object).assign(nowDate[id] || {}, cont, {
            _insert: isUpdate ? nowDate[id]._insert : new Date().getTime(),
            _update: new Date().getTime()
        });
        this.jf.data = nowDate;
        return nowDate[id];
    }
    remove(id) {
        let nowDate = this.jf.data;
        if (nowDate[id]) {
            delete nowDate[id];
        }
        this.jf.data = nowDate;
    }
    get(id?: string): Object {
        return id ? this.jf.data[id] : this.jf.data;
    }
    update(id, cont) {
       return this.add(id, cont, true);
    }
}

