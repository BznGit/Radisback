function authenticate(req, res, next) {
    console.log(req.path)
    if(req.path === '/') next(); else{
            if (!req.session || !req.session.user) {
        const err = new Error('You shall not pass');
        err.statusCode = 401;
        next(err);
    }
    next();
    }

}

module.exports = authenticate;