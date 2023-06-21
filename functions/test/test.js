exports.handler = async (event, context, callback) => {
    console.log("event: ", event)
    return {
        statusCode: 200,
        body: JSON.stringify({message:'test'})
    }
}
