
   var x = 4;

     function done(){
            console.log("done");
     }
    
     function error(){
        console.error("error");
     }
    
      var abc =new Promise((resolve,reject)=>{
        if(x>1)
        {
         resolve();
        }
        else{
         reject();
    }}
     );
     
     abc.then(done).catch(error);



     
// returns a promise

let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValue
    .then(function successValue(a) {
      console.log(a);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });
 
 