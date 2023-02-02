const express = require('express');
const patient = require('./controller/patient.controller');
const appointment = require('./controller/appointment.controller');
const { fhir } = require('./fhir.config');
const { FhirSuccessErrorHandler } = require('./util/erroeHandlers.util');
const _router = express.Router();

_router.get('/patient/search', async (req, res) => {
    try {

        const search = req.query || { gender: 'male' } //<- as a demo pass the query .../patient/search?gender=male

        const data = await fhir.search({ resourceType: 'Patient', searchParams: search })

        res.status(200).send({ status: true, data })
    } catch (_) {
        console.log(_);
        res.status(500).send({ status: !true, message: _ })
    }
})


_router.get('/patient/:id', patient.readById)
_router.post('/patient', patient.create)
_router.put('/patient/:id', patient.update)


_router.post('/appointment', appointment.create)

//404
_router.all('/**', (req, res) => {
    res.status(404).send({ status: !true, message: 'API not found!' })
})

module.exports.router = _router