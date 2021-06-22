const axios = require('axios');
exports.getJ = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',      
            url: 'https://mocki.io/v1/8e889d1f-77cc-4838-9caf-97d3a421b95c',
            timeout: 10000
        })
        .then((response) => {
            const features = response.data.features;
            if (features.length > 0) {
                for (let i = 0; i < features.length; i++) {
                    coordinates = features[i].geometry.coordinates[0];
                    geometry_locs = [];
                    for (let j = 0; j < coordinates.length; j++) {
                        
                        const longLat = coordinates[j];
                        const lat = longLat[1].toString()
                        const long = longLat[0].toString()
                        const latLong = lat+','+long
                        geometry_locs.push(latLong)
                    }
                    features[i].geometry_locs = {geometry_locs};
                }
                resolve(response.data)
            }
        })
        .catch((error) => {
            if (error.code === 'ECONNABORTED') {
                console.log(error.message);
                reject(error.message);
            } else {
                if (error.response) {
                    if(error.response.data) {
                        console.log(error.response.data);
                        reject(error.response.data);
                    } else {
                        console.log(error.response.statusText);
                        reject(error.response.statusText);
                    }
                } else if (error.request) {
                    console.log(error.request);
                    reject(error.request);
                } else {
                    console.log(error.message);
                    reject(error.message);
                }
            }
        })
    }
)}