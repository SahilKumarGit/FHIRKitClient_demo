const { fhir } = require("../fhir.config");
const { FhirSuccessErrorHandler, exceptionHandler } = require("../util/erroeHandlers.util");


const create = async (req, res) => {
    try {

        if ((req?.files || []).length == 0) return res.status(400).send(exceptionHandler(
            false,
            400,
            [{ message: 'No files selected for upload!', code: 'bad request' }],
            {}
        ));

        const { buffer, mimetype, size } = req.files[0]

        if(mimetype !== 'application/pdf') return res.status(400).send(exceptionHandler(
            false,
            400,
            [{ message: 'Uploaded file type must be a PDF (applicatopn/pdf)!', code: 'bad request' }],
            {}
        ));



        const newPatient = {
            "resourceType": "DocumentReference",
            "status": "current",
            "docStatus": "final",
            "type": {
                "coding": [
                    {
                        "system": "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                        "code": "2820507",
                        "display": "Admission Note Physician",
                        "userSelected": true
                    }
                ],
                "text": "Admission Note Physician"
            },
            "subject": {
                "reference": "Patient/591411"
            },
            "author": [
                {
                    "reference": "Practitioner/1853"
                }
            ],
            "authenticator": {
                "reference": "Practitioner/1853"
            },
            "content": [
                {
                    "attachment": {
                        "contentType": mimetype.concat(";charset=utf-8"),
                        "data": buffer.toString('base64'),
                        "title": "Height Weight Allergy Rule",
                        "creation": new Date().toISOString()
                    }
                }
            ],
            "context": {
                "encounter": [
                    {
                        "reference": "Encounter/147"
                    }
                ],
                "period": {
                    "start": new Date().toISOString(),
                    "end": new Date().toISOString()
                }
            }
        }

        const data = await fhir.create({
            resourceType: 'DocumentReference',
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

module.exports = { create }