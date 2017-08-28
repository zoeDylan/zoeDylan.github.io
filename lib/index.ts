import { Admin } from './admin';


class Lib {
    port: any;
    constructor(port) {
        this.port = port;
        new Admin(port);
    }
}

export { Lib };