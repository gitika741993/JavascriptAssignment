var myArray = [5,10,15,20,25];

for (var i = 0;i<myArray.length;i++)
{
    console.log(myArray[i]);
}

var x = 0;
while(x < myArray.length)
{
    console.log("while loop" +myArray[x]);
     x++;
}

var t =0;

do{
   
    console.log("do while loop:" +myArray[t]);
    t++;

}while( t < myArray.length)


function HelloWorld() {
     return "Hello World";
  }

 console.log(HelloWorld());

 function addition(a,b)
 {
     return a+b;
 }

 console.log(addition(1,2));

 function addition(a,b)
 {
     return a+b;
 }

 console.log(addition(1,"Hello"));


//Runtime Error
     try
     { // code that may throw an error 
         c = 10/0;
         console.log(c);
         d("Welcome guest!");
     }
    catch(error)
     { 
        console.log("This is runtime error catched in catch block");
        console.log(error);
        // code to be executed if an error occurs } finally{ // code to be executed regardless of an error occurs or not 
     }

     finally
     {
        console.log("Entered finally block");

     }


//Logical Error
try
{ // code that may throw an error 
    x==1;
    if(x<0)
    {
        return x;
    }

    else
    {
        throw "error in try block!! Go to catch";
    }
}
catch(error)
{ 
   console.log("This is Logical error catched in catch block");
   console.log(error);
   // code to be executed if an error occurs } finally{ // code to be executed regardless of an error occurs or not 
}

finally
{
   console.log("Entered finally block");

}