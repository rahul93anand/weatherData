exports.handler = async (event) => {
    console.log('Lambda function triggered:', new Date().toISOString());
    
    // Your API logic here
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Lambda function executed successfully.',
            timestamp: new Date().toISOString()
        })
    };
};
