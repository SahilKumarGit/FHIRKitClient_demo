module.exports.FhirSuccessErrorHandler = (data) => {
    console.log(data)
    if (data?.response?.status && ![200, 201].includes(data.response.status)) {
        return this.exceptionHandler(
            false,
            data.response.status,
            (data.response?.data?.issue || []).map(each => ({ message: each.diagnostics, code: each.code })),
            {}
        );
    }
    return this.exceptionHandler(true, 200, [], data);
}

module.exports.exceptionHandler = (status, code, errors, data) => {
    return {
        status: status || false,
        code: code || 500,
        errors: errors || [],
        data: data || {}
    }
}