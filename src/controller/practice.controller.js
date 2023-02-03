const { fhir } = require("../fhir.config");
const { FhirSuccessErrorHandler } = require("../util/erroeHandlers.util");

const read = async (req, res) => {
    try {
        const search = req.query || { "telecom": "padula@email.chop.edu" } //<- as a demo pass the query .../patient/search?gender=male

        const data = await fhir.search({ resourceType: 'Practitioner', searchParams: search}).then(FhirSuccessErrorHandler).catch(FhirSuccessErrorHandler);
        console.log(data)
        return res.status(data.code).send(data)

    } catch (_) {
        console.log(_);
        return res.status(500).send(exceptionHandler(
            false,
            500,
            [{ message: _.message, code: 'catchError' }],
            {}
        ))
    }
}

module.exports = { read }