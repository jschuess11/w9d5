const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
jwt.verify(token, "secret message", (err, decodedToken) => {
    if (err) {
        console.login(err, message);
        res.redirect('/login');
    }
    else {
        console.log(decodedToken);
        next();
    }
    });
    }
};
else {
    res.redirect('/login')
};
module.exports = { requireAuth }