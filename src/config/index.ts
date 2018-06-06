import dev from './env/development';
import prod from './env/production';
import routes from './routes';

const config: { [key: string]: string | any } = process.env.NODE_ENV === 'production' ? prod : dev;
config.routes = routes;

export default config;
