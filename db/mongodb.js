const mongoose = require('mongoose');

let databaseconnection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://Shotlin0912:Shotlin0912@shotlin.jpiyx.mongodb.net/shotlin-db`)
        .then(() => { console.log("Database connected") })
        .catch((err) => 
        { console.log(err) });
    } catch (err) {
        console.log(err);
    }
};


module.exports = databaseconnection;