const axios = require('axios');

const oengusApi = 'https://sandbox.oengus.io/api';

/**
 * Get request from Oengus API
 * 
 * @param {string} endpoint Endpoint on Oengus API
 * @param {object} queryParameters Query parameters on request
 * @returns {Promise<axios.AxiosResponse>} Promise from Oengus API
 */
module.exports = get = async (endpoint, queryParameters) => {
    return axios.get(`${oengusApi}/${endpoint}`, {
        params: queryParameters
    });
};