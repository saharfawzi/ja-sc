let user={
    name:"Ahmed",
    age: 30,
    address: {
        lebanan:"Beirut",
        Iraq :{
            one :"Baghdad",
            tow:"Basrah",
            three:"Dhi Qar"
        },
    checkaAu:function(){
        if (user.address.Iraq === user.address.Iraq)
        {
            if (user.address.Iraq.one===user.address.one)
            return user.address.Iraq.one;
            else 
            return user.address.Iraq.two;
        }
        else 
        return user.address.Iraq.three;
       
    }
   }
};
console.log(user.name)
console.log(user.age)
console.log(user.address.lebanan)
console.log(user.address.Iraq["one"])
console.log(user.address.Iraq["two"])
console.log(user.address.Iraq["three"])
console.log(user.address.checkaAu())


