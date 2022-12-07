//cconst axios = require('axios')
const axios = require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });