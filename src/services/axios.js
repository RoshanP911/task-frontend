// Axios interceptor
import axios from "axios";
import toast from "react-hot-toast";


const instance = axios.create({
  baseURL: "http://localhost:3000/", 
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token'); 
    if (accessToken) {
      config.headers['Authorization']=`Bearer ${accessToken}`
    }
    return config; 
  },
  (error) => {
    return Promise.reject(error);
  }

)

// Response interceptor 
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('An error occurred:', error);


    if (error.response.status === 403) {
      toast.error(error.response.data.message);
      localStorage.removeItem('token')
      window.location.href = '/login';
    }
    else{
      toast.error(error.response.data.message);
    }

    return Promise.reject(error);
  }
);





 export default instance;