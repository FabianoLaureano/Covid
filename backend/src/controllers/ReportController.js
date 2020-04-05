const axios = require('axios');

module.exports = {
    async show(request, response) {
        const apiResponseConfirmed = await axios.get('https://api.covid19api.com/country/brazil/status/confirmed');
        const apiResponseRecovered = await axios.get('https://api.covid19api.com/country/brazil/status/recovered');
        const apiResponseDeaths = await axios.get('https://api.covid19api.com/country/brazil/status/deaths');
        
        const confirmedCases = apiResponseConfirmed.data[apiResponseConfirmed.data.length - 1].Cases;
        const recoveredCases = apiResponseRecovered.data[apiResponseRecovered.data.length - 1].Cases;
        const deaths = apiResponseDeaths.data[apiResponseDeaths.data.length - 1].Cases;

        //const apiResponse = await axios.get('https://www.bing.com/covid/data');

        const cases = {
            //"confirmed" : apiResponse.data.totalConfirmed,
            //"recovered" : apiResponse.data.totalRecovered,
            //"deaths" : apiResponse.data.totalDeaths,
            //"recoveredRate": ((apiResponse.data.totalRecovered / apiResponse.data.totalConfirmed) * 100).toFixed(2),
            //"deathRate": ((apiResponse.data.totalDeaths / apiResponse.data.totalConfirmed) * 100).toFixed(2),
            "confirmedBr" : confirmedCases,
            "recoveredBr" : recoveredCases,
            "deathsBr" : deaths,
            "recoveredRateBr": ((recoveredCases / confirmedCases) * 100).toFixed(2),
            "deathRateBr": ((deaths / confirmedCases) * 100).toFixed(2)
        }

        return response.json(cases);
    }
};