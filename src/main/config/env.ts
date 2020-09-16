import UserDB from './../../../password';

export default {
    mongoUrl: process.env.MONGO_URL || `mongodb+srv://${UserDB.user}:${UserDB.password}@cluster0.xavng.azure.mongodb.net/dictionary?retryWrites=true&w=majority`,
    port: process.env.PORT || 3033,
    jwtSecret: process.env.JWT_SECRET || 'lala#2jdsf'
}