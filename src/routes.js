const express = require('express');
const { fhir } = require('./fhir.config');
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


_router.get('/patient/:id', async (req, res) => {
    try {

        const id = req.params.id || 4 // demo pid = 4
        const data = await fhir.read({
            resourceType: 'Patient',
            id,
        })

        res.status(200).send({ status: true, data })
    } catch (_) {
        console.log(_);
        res.status(500).send({ status: !true, message: _ })
    }
})

//404
_router.all('/**', (req, res) => {
    res.status(404).send({ status: !true, message: 'API not found!' })
})

module.exports.router = _router