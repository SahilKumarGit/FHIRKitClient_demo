## Documentation  

#### User


options
```
    const options = {
      baseUrl: 'http://fhir.com',
      customHeaders: {
        'x-some-header': 'value'
      },
      requestOptions: {
        cert: certFileContent,
        key: keyFileContent,
        ca: caFileContent
      },
      bearerToken: 'eyJhbGci...dQssw5c',
      requestSigner: (url, requestOptions) => {
         const signed = aws4.sign({
           path: requestOptions.path,
           service: 'healthlake',
           region: 'us-west-2'
           method: requestOptions.method
         });
         Object.keys(signed.headers).forEach((key) => {
           requestOptions.headers.set(key, signed[key]);
         });
       }
    };
    };
```