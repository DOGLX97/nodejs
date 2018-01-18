exports.index = function (req, res) {
    res.render('adminIndex', {user: req.session.loginUser});
};
exports.newBlog = function (req, res) {
    res.render('newBlog',  {user: req.session.loginUser});
};