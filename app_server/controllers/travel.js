const fs = require ('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

// Get travel view
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {travel};
