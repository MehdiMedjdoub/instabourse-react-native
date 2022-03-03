import axios from 'axios';
import { YAHOO_FINANCE_API_URL, YAHOO_FINANCE_API_KEY } from '@env'

export default {

    getQuote: async function () {
        
        return await axios.get(`${YAHOO_FINANCE_API_URL}/v6/finance/quote?region=FR&lang=fr&symbols=AAPL%2CMSFT%2CLVMUY%2COR.PA%2CTTE%2CAXAHY%2CBNPQF`, {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${YAHOO_FINANCE_API_KEY}`
            }
        })
        .then(response => response.data)
    },
    getSpark: async function () {
        return await axios.get(`${YAHOO_FINANCE_API_URL}/v8/finance/spark?interval=1d&range=1mo&symbols=AAPL%2CMSFT%2CLVMUY%2COR.PA%2CTTE%2CAXAHY%2CBNPQF`, {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${YAHOO_FINANCE_API_KEY}`
            }
        })
        .then(response => response.data)
    }
}