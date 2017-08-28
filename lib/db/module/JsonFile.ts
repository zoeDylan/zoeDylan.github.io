import * as fs from 'fs';
import * as path from 'path';

const dir = path.join(__dirname, '..', 'files/');
class JsonFile {
    private name: string;
    private path: string;
    constructor(name) {
        this.path = dir + name + '.json';
        !fs.existsSync(this.path) && fs.writeFileSync(this.path, '{}');
        this.name = name;
    }
    get data(): object {
        return JSON.parse(String(fs.readFileSync(this.path)));
    }
    set data(data: object) {
        fs.writeFileSync(this.path, JSON.stringify(data));
    }
}

//模块导出
export { JsonFile };