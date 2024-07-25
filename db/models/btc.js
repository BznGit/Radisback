const mongoose = require('mongoose');

const btcShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ask: {
        type: String,
    },
    bind: {
        type: String,
    },
    last24_price: {
        type: String,
    },
    last_price:{
        type: String,
    },
    update_stamp:{
        type: String,
    },
    value_last_24h:{
        type: String,
    },
});

const btc = mongoose.model('BTC', btcShema);

module.exports = btc;
