import config from '../config'

const API_Service = {

  getUsers(page) {
    return fetch(`${config.USER_ENDPOINT}/?page=${page}&results=50&seed=abc`, {
      method: "GET",
    }).then(res => 
      (!res.ok ?
         console.log('something went wrong') :
          res.json()));
  }
}

export default API_Service;