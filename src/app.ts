function main(){
  const express = require('express')
  const app = express()
  const port = 5000

  const appRoutes = require('./routes/appRoutes')
  appRoutes.addRoutes(app)

  app.listen(port, () => {
      console.log("listening on port = " + port)
  })

  app.use(express.json)    
}

main();


