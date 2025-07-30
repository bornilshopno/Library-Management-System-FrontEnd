import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://assignment-bay-theta.vercel.app/api/'
});

const useAxiosPublic=()=>{
    return axiosPublic
}

export default useAxiosPublic