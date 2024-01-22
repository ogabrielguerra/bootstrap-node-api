class ToyController{

    constructor(MongoDocument){
        this.MongoDocument = MongoDocument;
        this.ObjectID = require('mongodb').ObjectID;
    }

    list(req, res){

        this.MongoDocument.find({}).then(function (data, err){
            res.send(data);
        }).catch(function (err) {
            res.send(err);
        });
    }

    detail(req, res){
        
        const id = req.params.id.trim();
        
        this.MongoDocument.findById({
            _id : this.ObjectID(id),            
        }).then(function (data, err){
            res.send(data);
        }).catch(function (err) {
            res.send(err);
        });
        
    }

    add(req, res){
        
        let name = req.body.name;
        let color = req.body.color;
        
        this.MongoDocument.create({
            name : name,
            color : color
        }).then(function (err){
            res.sendStatus(200)
        }).catch(function (err) {
            res.send(err);
        });
    
    }
    
    update(req, res){
        
        let id = req.body.id.trim();
        let name = req.body.name;
        let color = req.body.color;

        this.MongoDocument.updateOne(
            {_id : this.ObjectID(id)},
            {$set: {name : name, color : color}},
        ).then(function (){
            res.sendStatus(204)
        }).catch(function (err) {
            res.send(err);
        });
    
    }

    delete(req, res){

        let id = req.body.id.trim();

        this.MongoDocument.deleteOne(
            {_id : this.ObjectID(id)}
        ).then(function (){
            res.sendStatus(204)
        }).catch(function (err) {
            res.send(err);
        });
    }
}

module.exports = ToyController;