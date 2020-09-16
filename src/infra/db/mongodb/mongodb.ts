import mongoose, { Connection } from 'mongoose';
import env from '../../../main/config/env';

export class MongoDB {
    private static db: Connection = mongoose.connection;
    
    public static async connect(): Promise<void> {
        try {
            mongoose.connect(env.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
            this.db.once('open', () => console.log.bind(console, `MongoDB is running at ${env.port}`))
        } catch (error) {
            this.db.on('error', console.error.bind(console, `MongoDB connection error: ${error}`));
        }
    }
}