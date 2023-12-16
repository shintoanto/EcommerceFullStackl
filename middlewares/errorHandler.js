// not found.
const notFound = (req, res, next) => {
    const error = new Error('Not found 404 exception ');
    res.status(404);
    next(error);

}

//  Error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err?.message,
        staack: err?.staack,
    })

};

module.exports = { notFound, errorHandler };

