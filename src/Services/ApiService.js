import config from '../config'

const API_Service = {

  getUsers(page, nat) {
    let params = !nat ? `page=${page}` : `nat=${nat}&page=${page}`
    return fetch(`${config.USER_ENDPOINT}/?${params}&results=50&seed=abc`, {
      method: "GET",
    }).then(res => 
      (!res.ok ?
         console.log('something went wrong') :
          res.json()));
  },


}

export default API_Service;