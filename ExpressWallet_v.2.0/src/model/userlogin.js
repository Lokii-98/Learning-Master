const userDetails = require('./beanClasses/users');
const connection = require("../utilities/connection")
 
const usersDB = {}
 
 	
usersDB.generateUserId=()=>{
   
      return connection.getUserCollection().then((collection)=>{
          return collection.distinct("userId").then(ids=>{
            let list=[];
            let max=0;
              for(let i=0;i<ids.length;i++){
              let number=ids[i].substring(1,5);
              let num=Number(number)
              list.push(num)
            }
            for(let i=0;i<list.length;i++){
                if(list[i]>max){
                    max=list[i];
                }
            }
            let umax="U"+(max+1);
            // console.log(umax)
            return umax
              })
      })
}

usersDB.checkUser = (userName) => {
    return connection.getUserCollection().then((collection) => {
        return collection.findOne({ "userName": userName }).then((customerContact) => {
            if (customerContact) {
                return new userDetails(customerContact);
            }
            else return null;
        })
    })
}

usersDB.checkUserName = (userName)=>{
  return connection.getUserCollection().then((collection)=>{
    console.log(collection);
    
    return collection.findOne({"userName" : userName.userName}).then((userName)=>{
      if (userName === null ){
        return usersDB.generateUserId().then(id=>{
          users.userId = id;

        return collection.insertMany(userName).then(data=>{
          console.log(data);
          
          return data
        })
        })
      }
      else 
        return null;
    })
  })
}

usersDB.getPassword = (userName) => {
    return connection.getUserCollection().then((collection) => {
        return collection.find({ "userName": userName }, { _id: 0, password: 1 }).then((password) => {
            if (password.length != 0){
              console.log('====================================');
              console.log(password);
              console.log('====================================');
                return password[0].password;}
            else{
                return null;}
        })
    })
}


users = {
    userName : "Lokiii98",
    password : "lokii@98"
}
usersDB.checkUserName(users.userName);


module.exports = usersDB;

