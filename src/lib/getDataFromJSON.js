const axios = require('axios');

exports.getDataFromJSON =  function(url, myFunc){
    // get data from JSON
    axios.get(url)
      .then(res => {
          myFunc(res.data)
      });
}
