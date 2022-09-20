// const Course = require('../models/Course');
const Chart = require('../models/Chart');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {
        Chart.find({})
            .then((charts) => {
                res.render('home', {
                    charts: mutipleMongooseToObject(charts),
                });
            })
            .catch(next);
    }

    // [get]/search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
