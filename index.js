const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
const { db } = require('./db.js')

async function main() {
    await db.sync()
}

main();

module.exports = {
    Band,
    Musician,
    Song
};
