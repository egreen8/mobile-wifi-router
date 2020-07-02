import axios from 'axios'

//const TAPI_HOST = 'http://192.168.88.121/tapi/'
const TAPI_HOST = 'http://localhost:8000/tapi/'
const BASE_AUTH_USER = 'user'
const BASE_AUTH_PASSWORD='password'


// TODO: add base auth by default for all API calls
// maybe just explicitly Authorizaition header
// check--> axios.defaults.headers.common['Authorization'] = store.getState().auth.user.token;

const getSystemInfo  = params => {
        return axios.get(TAPI_HOST+'systeminfo',{}, {
            auth:{
               username: BASE_AUTH_USER,
               password: BASE_AUTH_PASSWORD
            }
        })
        .then(response=>response.data)
        .catch(error=>{
           throw error
        })
    }
    
export default getSystemInfo