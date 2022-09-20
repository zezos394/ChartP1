const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class MeController{
    // [get]/me/stored/courses
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => res.render('me/stored-courses',{
                courses: mutipleMongooseToObject(courses)
            })) //dan vao file stored-courses.hbs
            .catch(next)
    }
    
}
module.exports = new MeController;
