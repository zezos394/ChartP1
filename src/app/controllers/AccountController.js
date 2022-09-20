const Account = require('../models/Account');
const { mongooseToObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken')
class AccountController {
    register(req, res, next){
       var username =  req.body.username
       var password =  req.body.password
       Account.findOne({
           username: username
       })
       .then(data =>{
           if(data){
               res.render('message/regmessage')
           } else{
                Account.create({
                   username: username,
                   password: password
               })
               .then(data => {
                   res.json('Created successfully')
               })
           }
       }).catch(err =>{
          res.status(500).json('Created failed')  //HTTP response status codes
       })
    }

    
     login(req,res,next){
        var username =  req.body.username
        var password =  req.body.password

        Account.findOne({
            username: username,
            password: password
        })
        .then(data => {
             if(data){
                 res.json('Login successfully')
             }else{
                 res.render('message/logmessage')
             }
        })
        .catch(err =>{
            res.status(500).json('Erorr!!')
        })
     }

    showAccounts(req,res,next){
        Account.find({})
        .then(data =>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json('Error!!!')
        })
    }

    deleteAccount(req,res,next){
        var id = req.params.id
        Account.deleteOne({
            _id: id
        })
        .then(data=>{
            res.json('Delete account successfully!')
        })
        .catch(err=>{
            res.status(500).json('Error!!!')
        })
    }
    changePassword(req,res,next){
        var id = req.params.id
        var newPassword = req.body.newPassword
        Account.findByIdAndUpdate(id, {
            password: newPassword
        })
        .then(data =>{
            res.json('Password changed successfully')
        })
        .catch(err=>{
            res.status(500).json('Error!!!')
        })
    }
    // showPrivate(req,res,next){
    //     try{
    //         var token = req.params.token
    //         var ketqua = jwt.verify(token, 'mk')
    //         if (ketqua){
    //             next()
    //         }
    //     } catch (error){
    //         res.json('You need to login first')
    //     }
    // }showPrivate(req,res,next){
    //     res.json('welcome')
    // }
}

module.exports = new AccountController();
