class Routes{

    constructor(configs){

        const app = configs.app;
        const ToyController = configs.toyController;
        
        configs.app.get('/', (req, res) => {
            res.send('API HOME');
        });

        app.get('/toys', (req, res) => {
            // res.send('LIST');
            ToyController.list(req, res);
        });

        app.get('/toy/:id', (req, res) => {
            ToyController.detail(req, res);
        });

        app.post('/toy/add', (req, res) => {
            ToyController.add(req, res)
        });

        app.put('/toy/update', (req, res) => {
            ToyController.update(req, res)
        });

        app.post('/toy/delete', (req, res) => {
            ToyController.delete(req, res)
        });
    }
}

module.exports = Routes
