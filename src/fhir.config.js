const Client = require("fhir-kit-client");

const fhirClient = new Client({
    baseUrl: "http://hapi.fhir.org/baseR4",
});

// Get SMART URLs for OAuth
fhirClient.smartAuthMetadata().then((response) => {
    console.log({ smartAuthMetadata: response });
});

module.exports.fhir = fhirClient;