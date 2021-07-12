const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    test = 'This is a test - Travel'
    res.render('travel', {title: pageTitle});
};

module.exports = {travel}
