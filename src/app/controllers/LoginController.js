class LoginController{
    //[get]/login
    login(req, res){
        res.render('login/login')
    }
    
}
module.exports = new LoginController;