import axios from 'axios';

export default function getDataFromJSON(url, myFunc){
    // get data from JSON
    axios.get(url)
      .then(res => {
          myFunc(res.data)
      });
}
