import axios, { AxiosInstance } from 'axios';
import { getAccessToken } from '@/shared/authBlock/auth';

let Token = null;

if (typeof document !== 'undefined') {
    Token = getAccessToken();
}

const BASE_URL = 'https://market.inverse-team.store/api';

export const instanceLogged: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 7000,
    headers: { Authorization: `Token ${Token}` },
});

export const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 7000,
});
