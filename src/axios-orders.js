import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://daria-ch-app.firebaseio.com/'
});

export default axiosOrders;