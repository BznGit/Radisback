const cors = require("cors");

const whitelist = new Set(["https://example1.com", "https://example2.com", "undefined"]);
const corsOptions = {
  optionsSuccessStatus: 200,

  origin: function(origin, callback) {
    if (origin === undefined) origin = "undefined"
    console.log('origin1', origin)
    if (whitelist.has(origin)) {  
      console.log('origin12', origin)
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  
};

module.exports = cors(corsOptions);
