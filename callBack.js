var allUserData = [];

// this is the callback function
function logStuff(userData){
    if(typeof userData === "string"){
        console.log(userData);
    }else if(typeof userData === "object"){
        console.log(userData);
            for(var item in userData){
                console.log(item + ":" + userData[item]);
            }
    }
}

var newObject = {name : "Nikki" , Desig : "Software Engineer"};
// if u want to iterate inside the object with the key and property then all you need to do is

for( var item in newObject){
    console.log(item + " : " + newObject[item])
}

//we are passing argument as a function
function getInput(options,callback){
  //  allUserData.push(options);
    callback(options);
}

//function is actually an object so we can use for callback
getInput({name : "Rich",speciality : "JavaScript"},logStuff);

