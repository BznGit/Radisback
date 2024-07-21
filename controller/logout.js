async function logout(req, res) {
    try {
        if(req.session.user){
            req.session.destroy(()=>{});
            res.send('log out')
            res.status(204);  
        } else {
            req.sent('you not login')
            res.status(204);
        }

    } catch(err) {
        console.error(err);
        res.status(401).json(err);
    }
}

module.exports = {
    logout
};