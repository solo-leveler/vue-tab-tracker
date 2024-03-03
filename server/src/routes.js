module.export = (app) => {
    app.get('/status', (req, res) => {
        res.send({
          message: 'Hello World!'
        })
    })
}