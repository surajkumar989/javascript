const accountId = 4545454  //(const variable)
var accountPassword = 12345678  //( var variable)
let accountName = "Girish"   // (let variable)
accountCity = "Indore"    // (automatic variable)
let accounntState;
let country=null;
// accountId=434343 (we can't change the value of const variables..)
accountPassword=3434
accountName= "Raj"
accountCity="Amritsar"   // (we can change the other variable values..)

/*
prefer not to use var 
because of issue in block scope and function scope


*/
console.table([accountId,accountPassword,accountName,accountCity,accounntState,country])

