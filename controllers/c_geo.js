const model = require('../models/m_geo');
exports.get = async (request, response) => {
    try {
        const getJ = await model.getJ();
        response.status(200).send(getJ).end();
    } catch (error) {
        console.log(error);
    }
}