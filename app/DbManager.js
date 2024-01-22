class DbManager{

    constructor(mongoose) {

        this.mongoose = mongoose;
        this.Schema = this.mongoose.Schema;
        this.dburl = 'mongodb://localhost:27017/toys';

        this.mongoose.connect(this.dburl,{ useNewUrlParser: true }, (err)=>{
            console.log('Db connected. Go ahead.! ', err)
        }).catch(function(err){
            console.log(err)
        })

        return this.mongoose;
    }
}

module.exports = DbManager;