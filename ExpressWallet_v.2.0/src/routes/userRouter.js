const express = require('express');
const router = express.Router();
// const setupUser = require("../model/setupUser")
const userservice = require('../service/userlogin');
const User=require("../model/beanClasses/users")
// const usesubscribe = require("../service/usesubscribe")
// const email = require("../model/beanClasses/email")
 

//routing for Login - EXPECTS NAME AND PASSWORD!!
router.post('/login', function (req, res, next) {
  
    let userName = req.body.userName;
    let password = req.body.password;
    console.log(userName, password, "1");
    
    userservice.login(parseInt(userName), password).then(function (userDetails) {
        res.json(userDetails);
    }).catch(err => next(err));
})

module.exports = router;
