const successResponse = {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
};

const failureResponse = {
    statusCode: 500,
    body: JSON.stringify({ success: false }),
};

export { successResponse, failureResponse };