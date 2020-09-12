export default {
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-express-api',
    port: process.env.PORT || 3033,
    jwtSecret: process.env.JWT_SECRET || 'lala#2jdsf'
}