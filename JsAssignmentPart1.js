let x = 5;
let y = 7;
z = x +y;
console.log ('printing sum of 2 numbers: '+z);

x1 = BigInt(122843492384034803n);
let x2 = BigInt(287382749384093850385n);
z = x1 * x2;
console.log('printing bigint multiplication: '+z);


 var a = 'This is my';
 var b = "bed";
 c = a.concat(" "+b);
 console.log(c);
 console.log(typeof(a));


let x3 = false;
console.log(typeof(x3))


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.splice(0,2,2,"kiwi");
console.log(citrus);


let str = ["str1","str2", "str3", "str4","str5"];
for (var i = 0; i< str.length; i++)
{
    console.log(str[i]);

}


 a = 5
 b = 10

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(a/b);
console.log(a%b);
console.log(b%a);
a++;
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);


s = 30;
t = "20";

u = 50;
v = 30;

if(u==v)
{
  console.log("Print triple equals");

}
else if(s==t)
{
   console.log("print inside doble equals is true");

}
else if(u>v)
{
  console.log("inside greater than");

}
else if(s!=t)
{

   console.log("not equals operator");
}
else if(u>v)
{
  console.log("inside greater than");

}
else if(u<v)
{
  console.log("inside Lesser than");

}
else if(s>=t)
{
  console.log("inside greater than equal to");
}
else if(s<=t)
{
  console.log("inside lesser than equal to");
}
else if(s==t && s>t)
{
  console.log("inside and operator");
}
else if(s==t || s>t)
{
  console.log("inside or operator");
}
else if(!(s==t))
{
  console.log("inside not operator");
}


 a = "4";
switch (a)
 { 
  case 1:
   console.log("case 1 executed");
  break;
   case 2:
    console.log("case 2 executed"); 
   break; 
   case 3:
    console.log("case 3 executed"); 
   break;
   case "4":
    console.log("case 4 string executed");
   break;
   case 4:
    console.log("case 4 int executed");
   break;
   default:
    console.log("default case executed");
   }









 function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius;
  console.log(value(33,32,34,35));

var txt = "";
var person = {fname:"John", lname:"Doe", age:25
};

person.fname;
console.log(person.fname);

for (x in person) {
  txt += person[x] + " "; //working
  txt += person.x + " "; // here it tried to resolve "x" not dynamic value of "x" i.e fname/lname
  console.log(txt);
}

