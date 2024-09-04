//Creating String using literal notation
let string = "  Hii Harshal  ";
console.log(string);


//Creating String using new keyword
let newString = new String("Hii Harshal");
console.log(newString);
/* 
1.Primitive vs Object: string is a primitive string, while newString is an object.
2.Comparison: Primitive strings are compared by value, while String objects are compared by reference.
3.Use Case: It's generally recommended to use string literals unless you specifically need a String object for some reason.
*/


//Finding length of string
let stringLength = string.length;
console.log(stringLength);

//Accessing individual characters using bracket notation
let individualCharacter = string[5];
console.log(individualCharacter);

//Accessing individual characters using charAt() method
let individual = string.charAt(6);
console.log(individual);
/*
1.Return Value for Out-of-Bounds Index:
__Bracket Notation__: Returns undefined if the index is out of bounds.
__charAt()__: Returns an empty string "" if the index is out of bounds.

2.Usage:
__Bracket Notation__: More concise and resembles array-like access.
__charAt()__: Slightly more verbose, but always returns a string.

3.Compatibility:
__Bracket Notation__: Supported in modern JavaScript (ECMAScript 5 and later).
__charAt()__: Supported in all versions of JavaScript, including older ones. 
*/


//Concatenation using + operator
let string_1 = "String";
let string_2 = "Concatenation"; //If string_2 variable is number it will automatically convert number to string.
let concatenatedString = string_1 + " " + string_2;
console.log(concatenatedString);


//Concatenation using concat() method
let String_1 = "String";
let String_2 = "Concatenation";
let concatenation = String_1.concat(" ",String_2);
console.log(concatenation);
/*
1.Type Conversion:
__+ Operator__: Converts non-string operands to strings automatically.
__concat() Method__: Does not automatically convert non-string arguments; they must be explicitly converted to strings.

2.Number of Operands:
__+ Operator__: Typically used with two operands, but can be chained to concatenate more.
__concat() Method__: Can accept multiple arguments at once and concatenate them in one call.

3.Performance:
__+ Operator__: Generally faster and more commonly used in practice.
__concat() Method__: Slightly slower but offers a method-based approach which some developers prefer for readability.

4.Readability and Use Case:
__+ Operator__: More concise, often preferred for simple concatenation.
__concat() Method__: Can be clearer when concatenating multiple strings or when working with a chain of string operations.
*/


//Converting string to lower case
let lowerCase = string.toLowerCase();
console.log(lowerCase);


//Converting string to upper case
let upperCase = string.toUpperCase();
console.log(upperCase);


//To extract substring of a string using substring() method
/*Syntax:-
string.substring(startIndex,endIndex)
*/
let subString = string.substring(0,5);
console.log(subString);//It will extract the string from 0 index number to index number - 1 that is 4th index position


//To extract substring of a string using splice() method
/*Syntax:-
string.slice(startIndex,endIndex)
*/
let sliceSubString = string.slice(0,5);
console.log(sliceSubString);//It will extract the string from 0 index number to index number - 1 that is 4th index position


//To extract substring of a string using substr() method
let subStr = string.substr(0,5);
console.log(subStr);//It will extract the string from 0 index number to index number - 1 that is 4th index position.
//This feature is depreaceated.
/*
Handling negative values
1.In substring() Negative values for startIndex or endIndex are treated as 0. Essentially, any negative index is converted to 0.
2.In slice() Negative values for startIndex or endIndex count from the end of the string. For example, -1 refers to the last character, -2 to the second last, and so on.

Swapping arguments
1.In substring() If startIndex is greater than endIndex, substring() swaps the two arguments so that it always extracts characters from the lower index to the higher index.
2.In slice() If startIndex is greater than endIndex, slice() does not swap the arguments; instead, it returns an empty string.
*/


//Finding position of substring using indexOf()
let subStringPosition = string.indexOf("Harshal",3);//First occurence of Harshal starting from index 3 but gives the index number from starting position index.
console.log(subStringPosition);


//Finding position of substring using lastIndexOf()
let lastIndexPosition = string.lastIndexOf("l",10); //last occurence of l before index 10 but gives the index number from starting position index.
console.log(lastIndexPosition);// -1 is returned if substring is not found
/*Syntax
string.indexOf("string",indexNumber)
indexOf():
Searches for the first occurrence of a specified substring within a string.
Starts searching from the beginning of the string (left to right).

lastIndexOf():
Searches for the last occurrence of a specified substring within a string.
Starts searching from the end of the string (right to left).
*/


//Replacing Sub String using replace() method
let replacedSubString = string.replace("Harshal", "World");
console.log(replacedSubString); //Here first occurence of Harshal will be converted into world


//Replacing Sub String using replaceAll() method
let replacedString = string.replaceAll("i","e");
console.log(replacedString); //Here all the occurences of i will be converted to e

/*Syntax
console.log(string.replace(oldWord,newWord));
*/


//Splitting String
let splittedString = string.split(" ");//Split a string into an array using 
console.log(splittedString);


//Trimming String
let trimmedString = string.trim();
console.log(trimmedString); //Removes overall whitespaces

let startedTrimmedString = string.trimStart();
console.log(startedTrimmedString); //Removes whitespaces from beginning

let endTrimmedString = string.trimEnd();
console.log(endTrimmedString); //Removes whitespaces from end


//Template literals
let a = "Harshal";
let templateLiterals = `This is ${a}`; //$ sign and variable inside curly braces.
console.log(templateLiterals);//Use backticks ` for multi-line strings or to include variables within a string.


//To check specific content of string using includes
let checkContent = string.includes("Harshal");
console.log(checkContent);//It returns boolean value


//To check if string starts with given value 
let checkedContent = string.startsWith("Harshal");
console.log(checkedContent);//It returns boolean value


//To check if string ends with given value
let checkingContent = string.endsWith("Harshal");
console.log(checkingContent);//It returns boolean value


//Comparing strings using === operator
let compareStrings = string === newString;
console.log(compareStrings);//It will return boolean value


//Compare strings using localeCompare
let comparedString = string.localeCompare(newString);
console.log(comparedString);//It will return 0 if both strings are equal and 1 if both strings are not equal
