import * as Koa from 'koa';
import getLogger from '../utils/logger';

const logger = getLogger('app');

const logging = () => async (ctx: Koa.Context, next: Function) => {
  try {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
  } catch (error) {
    logger.error(error);
    // ctx.app.emit('error', error);
    ctx.body = { error: error.message || 'server error' };
    ctx.status = error.status || 500;
    // throw error;
  }
};

export default logging;
