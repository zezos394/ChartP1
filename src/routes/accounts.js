const express = require('express')
const router = express.Router()

const accountController = require('../app/controllers/AccountController')

router.post('/register', accountController.register)
router.post('/login', accountController.login)
router.get('/', accountController.showAccounts)
router.delete('/:id', accountController.deleteAccount)
router.put('/:id', accountController.changePassword)
//router.get('/private/:token', accountController.showPrivate)



module.exports = router