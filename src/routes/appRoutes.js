function addRoutes(app){
    //weather
    const weatherRouter = require('./weather/weatherRouter')
    app.use('/weather', weatherRouter)
}

module.exports = { addRoutes }