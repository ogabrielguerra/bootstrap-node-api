class Db{

    constructor() {

        this.mongoose = require('mongoose')
        this.Schema = this.mongoose.Schema;
        this.dburl = 'mongodb://node13_db_1:27017/puppies';

        this.mongoose.connect(this.dburl,{ useNewUrlParser: true }, (err)=>{
            console.log('Db connected. Go ahead!')
        }).catch(function(err){
            console.log(err)
        })
    }

    getMongooseInstance(){
        return this.mongoose;
    }

}

module.exports = Db;