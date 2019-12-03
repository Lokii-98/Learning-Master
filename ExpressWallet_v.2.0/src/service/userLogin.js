const userDB = require('../model/userlogin');

const userService = {}

userService.login = (userName, password)=>{
    return userDB.checkUser(userName).then((user)=>{
        if (user === null){
            let err = new Error (" Enter registered User Name! If not registered, please click signup")
            err.status = 404;
            throw err   
        }
        else {
            return userDB.getPassword(userName).then((password)=>{
                if(password != password){
                    let err = new Error("Incorrect password");
                    err.status = 406;
                    throw err
                }
                else{
                    return user;
                }
            })
        } 
    })
}

userService.checkUserName=(users)=>{
    return userDB.checkUserName(users).then(data=>{
        if(data === null){
            let err1 = new Error("You are already registered! please check your userName");
             err1.status=404;
            throw err1;
            
         }
          else{
                return data;
            }        
    })
}


module.exports = userService