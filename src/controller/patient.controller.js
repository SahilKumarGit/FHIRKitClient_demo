const { default: trimAll } = require("get-trim-all")
const { fhir } = require("../fhir.config")
const { FhirSuccessErrorHandler, exceptionHandler } = require("../util/erroeHandlers.util")

const readById = async (req, res) => {
    try {

        const id = req.params.id
        const data = await fhir.read({
            resourceType: 'Patient',
            id,
        }).then(FhirSuccessErrorHandler).catch(FhirSuccessErrorHandler)
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

const create = async (req, res) => {
    try {

        if (Object.keys(req.body) < 1) return res.status(400).send(exceptionHandler(
            false,
            400,
            [{ message: 'post body (key-values) must be required!', code: 'bad request' }],
            {}
        ));

        const body = trimAll(req.body || {})
        const newPatient = {
            ...body,
            resourceType: 'Patient',
        }


        const data = await fhir.create({
            resourceType: 'Patient',
            body: newPatient,
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

const update = async (req, res) => {
    try {

        if (Object.keys(req.body) < 1) return res.status(400).send(exceptionHandler(
            false,
            400,
            [{ message: 'post body (key-values) must be required!', code: 'bad request' }],
            {}
        ));

        const id = req.params.id;

        const body = trimAll(req.body || {})
        const update = {
            ...body,
            id: id,
            resourceType: 'Patient',
        }


        const data = await fhir.update({
            resourceType: 'Patient',
            id: id,
            body: update,
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

module.exports = { readById, create, update }