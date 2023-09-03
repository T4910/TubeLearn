import axios from "axios";

const useAxios = ({token,base_url})=>{
    // authentication token and base url are passed in as props
    return axios.create({
        url:base_url,
        headers:{
        Authorization:`Bearer ${token}`
    }
})
}