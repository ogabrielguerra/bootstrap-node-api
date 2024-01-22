class DbManager{

    constructor(mongoose) {
        this.Schema = mongoose.Schema;
        // const dburl = 'mongodb://localhost:27017/toys';
        const dburl = 'mongodb://db:27017/toys';
        
        try {
            mongoose.connect(dburl);
        } catch (error) {
            handleError(error);
        }

        return mongoose;
    }

    handleError(error){
        console.log('Connection error: ', error);
    }
}

module.exports = DbManager;
