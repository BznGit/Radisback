const exchangeService = require('../service/btc');

async function getChart(req, res) {
    try {
        const chart = await exchangeService.getChart();
        res.status(200);
        res.json(chart)   
    } catch(err) {
        console.error(err);
        res.status(401).json(err);
    }
}

module.exports = {
    getChart
};