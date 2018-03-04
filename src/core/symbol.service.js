import axios from 'axios';

let apiEndpoint = 'https://api.iextrading.com/1.0';

export const symbolService = {

    get apiEndpoint() {
        return apiEndpoint;
    },
    set apiEndpoint(url) {
        apiEndpoint = url;
    },

    async getStockPrice(symbol) {
        const result = await axios.get(`${apiEndpoint}/stock/${symbol}/price`);
        return result.data;
    },

    async getCompanyInfo(symbol) {
        const result = await axios.get(`${apiEndpoint}/stock/${symbol}/company`);
        return result.data;
    },

};

