//commonJS
//const read = require("readline-sync")

//module
//import read from "readline-sync"

import http from "http"
import { route } from "../src/routes/routes.js"

const PORT = 3000
const server = http.createServer(route)


server.listen(PORT, () => {
    console.log(`server runing in http://localhost:${PORT}`);
})