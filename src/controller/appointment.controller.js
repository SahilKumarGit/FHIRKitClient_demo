const { default: trimAll } = require("get-trim-all");
const { fhir } = require("../fhir.config");
const { FhirSuccessErrorHandler, exceptionHandler } = require("../util/erroeHandlers.util");

const create = async (req, res) => {
    try {

        if (Object.keys(req.body) < 1) return res.status(400).send(exceptionHandler(
            false,
            400,
            [{ message: 'post body (key-values) must be required!', code: 'bad request' }],
            {}
        ));

        const body = trimAll(req.body || {})
        const newAppointment = {
            ...body,
            resourceType: 'Appointment',
        }


        const data = await fhir.create({
            resourceType: 'Appointment',
            body: newAppointment,
        }).then(FhirSuccessErrorHandler).catch(FhirSuccessErrorHandler)

        res.status(data.code).send(data)
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

module.exports = { create }