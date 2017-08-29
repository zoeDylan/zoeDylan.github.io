import * as Koa from 'koa';
import * as open from 'open';
import * as Router from 'koa-router';
import * as send from 'koa-send';
import * as sendfile from 'koa-sendfile';
import * as Static from 'koa-static';
import * as body from 'koa-body';
import * as path from 'path';
import { Md } from '../md';

const
    router = new Router(),
    koa = new Koa(),
    md = new Md();

router.get('/list', (ctx, next) => {
    ctx.body = md.list();
});
router.post('/create', async (ctx, next) => {
    await md.create(ctx.request.body.title || '')
        .then((v) => {
            ctx.body = v;
        })
        .catch(e => {
            ctx.body = e;
        });
})
router.post('/remove', (ctx, next) => {
    md.remove(ctx.request.body.id);
    ctx.body = true;
});
router.post('/edit', (ctx, next) => {
    ctx.body = md.getFile(ctx.request.body.id);
});
router.post('/updateCont', (ctx, next) => {
    md.setFile(ctx.request.body.id, ctx.request.body.cont);
    ctx.body = true;
})
router.post('/updateTitle', (ctx, next) => {
    const
        id = ctx.request.body.id,
        title = ctx.request.body.title;
    ctx.body = md.setTitle(id, title);
});
koa
    .use(body({}))
    .use(router.routes())
    .use(router.allowedMethods())
    .use(Static(__dirname + '/view'))
    .use(Static(path.join(__dirname ,'../../')));

export class Admin {
    constructor(port) {
        koa.listen(port, (e) => {
            console.log(`Admin is run. port:${port}`);
            // open('http://localhost:' + port);
        });
    }
}