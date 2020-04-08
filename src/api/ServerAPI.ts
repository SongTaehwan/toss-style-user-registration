import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.API_ENDPOINT,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
