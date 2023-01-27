const express = require('express');
const { router } = require('./routes')
const port = process.env.PORT || 3011;



async function server() {
  try {
    const app = express();
    app.use(express.json())
    app.use('/', router)
    app.listen(port, (err) => {
      if (err) throw Error(err);

      console.log("Server is connected with", port)
    })
  } catch (_) {
    console.log("Server error:", _)
  }


}

server();