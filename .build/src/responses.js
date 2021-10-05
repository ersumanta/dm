"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failureResponse = exports.successResponse = void 0;
var successResponse = {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
};
exports.successResponse = successResponse;
var failureResponse = {
    statusCode: 500,
    body: JSON.stringify({ success: false }),
};
exports.failureResponse = failureResponse;
//# sourceMappingURL=responses.js.map