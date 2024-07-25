const axios = require('axios');

async function getExchange(){
    let data = null;
    try{
      await axios.get('https://stats.cryptonex.org/get_rate_list' ,{agent:false}).then(res => {
        data = res.data.rates.find(item => item.alias === "BTC/USDT")
      })
    }catch(err){
      console.log('Api getExchange reguest error!');
    }
    return data;  
};

async function getDiffBtc(){
  let obj = null;
  try{
    await axios.get('http://136.243.156.190/general'  ,{agent:false}).then(res => {
      obj = res.data;
    })
  }catch(err){
    console.log('Api OneNode reguest error!');
  }
  return obj;  
};

module.exports = {
    getExchange,
    getDiffBtc
};