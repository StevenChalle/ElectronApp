const fs = require('fs')
const dotenv = require('dotenv')
const env = dotenv.config().parsed

let envFile = ''
for (const entry of Object.entries(env))
    envFile += `process.env.${entry[0]} = "${entry[1]}";\n`

fs.writeFileSync('./src/electron/env.js', envFile)