Email = "gitika@gmail.com";
Email2 = "test";
Emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
console.log(Emailpattern.test(Email2));


Numbers = "1234567";
Number2=  "1234abc";
NumberPattern = /^-?\d+$/;
console.log(NumberPattern.test(Numbers));

Phonenumber= "+15853042382";
Phonenumber2= "+91- 398493859385";
PhonePattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
console.log(PhonePattern.test(Phonenumber2));

Filepath= "C:\\Users\\gitika\\Downloads";
InvalidFilePath= "C:\\Users\\gitika\\Downloads****";
FilePathPattern = /^([a-zA-Z]:)?(\\[^<>:"/\\|?*]+)+\\?$/;
console.log(FilePathPattern.test(InvalidFilePath));


const htmlString = '<div id="example">Hello, <b>world</b>!</div>';
PatternHtmltags= /<[^>]+>/g;
const htmlTags = htmlString.match(PatternHtmltags);
console.log(htmlTags);  // Output: [ '<div id="example">', '<b>', '</b>', '</div>' ]
console.log(PatternHtmltags.test(htmlString));