
import axios from 'axios'
import qs from 'qs'

export const user = {  
    userf(){ 
        axios.post('/navbar', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}