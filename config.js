module.exports = {
    port: process.env.PORT || 3000,
    /* db: process.env.MONGODB || 'mongodb://localhost:27017/shop', */
    db: process.env.MONGODB || 'mongodb+srv://sergio:123@cluster0.fq3ekhh.mongodb.net/?retryWrites=true&w=majority',
    SECRET_TOKEN: 'miclavedetokens'
}