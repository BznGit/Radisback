const api = require('../api/api');
const { apiAskingIntervalHours } = require('../config')
const mongoose = require('mongoose');
const BTC = require('../db/models/btc');

function setExchangeformApi() {
    try { 
        async function apiAsking(){
            
            const rate = await api.getExchange();
            const diff = await api.getDiffBtc();

            const btc = new BTC({
                _id: new mongoose.Types.ObjectId(),
                ask: rate.ask,
                last24_price: rate.last24_price,
                last_price: rate.last_price,
                update_stamp: rate.update_stamp,
                value_last_24h: rate.value_last_24h
            })
            btc.save()
        }
        apiAsking()
        //setInterval(apiAsking, apiAskingIntervalHours*3600)
    } catch(err) {
        return Promise.reject('user not found');
    }
}

function getChart() {
    try { 
      const data = BTC.find({})
      return data
    } catch(err) {
        return Promise.reject('chart not found');
    }
}

module.exports = {
    setExchangeformApi,
    getChart
};