import * as fs from 'fs';
import * as path from 'path';
import { Db } from '../db';
const
    mdList = new Db('mdList'),
    dir = path.join(__dirname, 'files/');

interface mdDB {
    id: string,
    title: string
}

export class Md {

    private get(id): object {
        return mdList.get(id);
    }
    list(id?: string): Object {
        return mdList.get(id);
    }
    remove(id: string) {
        if (id) {
            let data = mdList.get(id);
            if (data) {
                mdList.remove(id);
                fs.unlinkSync(dir + id + '.md');
            }
        }


    }
    getFile(id): string {
        return fs.existsSync(dir + id + '.md') ? String(fs.readFileSync(dir + id + '.md')) : '';
    }
    setFile(id, cont) {
        let now = this.get(id);
        if (now) {
            let path = dir + id + '.md';
            fs.writeFile(path, cont, (err) => {
                if (!err) {
                    mdList.update(id, now);
                } else {
                    console.log('lib/md/index.ts => set():file save error：' + path, err);
                }
            });
        }
    }
    setTitle(id, title) {
        return mdList.update(id, {
            title: title
        });
    }
    create(title) {
        return new Promise((res, rej) => {
            const
                id = new Date().getTime() + '',
                path = dir + id + '.md';
            fs.writeFile(path, '', (err) => {
                if (!err) {
                    let data: mdDB = {
                        id: id,
                        title: title
                    };
                    res(mdList.add(id, data));
                } else {
                    console.log('lib/md/index.ts => create():file save error：' + path, err);
                    rej({});
                }
            });
        });
    }
}