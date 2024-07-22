function authenticate(req, res, next) {
    console.log(req.path)
    if(req.path =! '/'){
        if (!req.session || !req.session.user) {
        const err = new Error('You shall not pass');
        err.statusCode = 401;
        next(err);
    }
    next();
    } else next()

}

module.exports = authenticate;