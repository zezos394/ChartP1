const Chart = require('../models/Chart');
const { mongooseToObject } = require('../../util/mongoose');
class ChartController {
    // [get]/charts/:slug
    show(req, res, next) {
        Chart.findOne({ slug: req.params.slug })
            .then((chart) =>
                res.render('charts/show', {
                    chart: mongooseToObject(chart),
                }),
            )

            .catch(next);
    }
    test(req,res){
        res.render('charts/test')
    }
    line(req,res){
        res.render('charts/line')
    }
    bar(req,res){
        res.render('charts/bar')
    }
    pie(req,res){
        res.render('charts/pie')
    }
}
module.exports = new ChartController();
