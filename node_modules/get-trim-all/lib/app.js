"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function trimAll(value) {
    if (!value)
        return value;
    if (Array.isArray(value))
        return value.map(function (each) { return trimAll(each); });
    if (typeof value == 'object') {
        var _obj = {};
        for (var key in value) {
            _obj[key] = trimAll(value[key]);
        }
        return _obj;
    }
    if (typeof value == 'string')
        return value.trim();
    return value;
}
// all dine!
exports.default = trimAll;
