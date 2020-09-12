import { MongoDB } from './../infra/db/mongodb/mongodb';
import env from './config/env';

MongoDB
    .connect()
    .then(async () => {
        const app = (await import('./config/app')).default;
        app.listen(env.port, () => {
            console.log('........................................................................................................');
            console.log('\t \t \t Your application is running in development mode.');
            console.log('........................................................................................................');
        })
    });