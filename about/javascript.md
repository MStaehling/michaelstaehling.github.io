Literals are values in Javascript (JS). They represent a fixed value. Examples of literals are...

Booleans: Has 2 types of literal values, true or false. ex. boolean b = true

Array: List of zero or more expressions, each represent an array element within [] ex. var x = [24, "string", car]

String: Characters in quotation marks ex. "I am awesome", "there were 2 of them", "21"

Integer: Can be expressed in decimal (base 10), octal (base 8), hexadecimal (base 16), or binary (base 2) ex. 0, 117 and -345 (decimal, base 10) 015, 0001 and -077 (octal, base 8) 0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16) 11100100110001 (binary, base 2)

Null: An empty value, no value is present ex. > var x = null; x "null"

Special constants:

Undefined: A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments. ex.var x; if (typeof x === 'undefined') { // these statements execute }

NaN: Not a number, checks to see if something isn't a number. ex.NaN === NaN; // false Number.NaN === NaN; // false isNaN(NaN); // true isNaN(Number.NaN); // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
Infinity: property of the global object, i.e. it is a variable in global scope. ex. Number.Positive_Infinity- may be used to determine an error that shows a finite # in case of success Number.Negative_Infinity- same as positive but with the negative

Assignment operator: Assigns value to left operand based on right operand. ex. (x = y) = (x=y) (x+=y) = (x= x+y).....addition assignment, (x=y) = (x= xy).....multiplication assignment

Remainder: Gives the remaining ammount after dividing var1 by var2. ex. var1 % var2 12 % 5 = 2 (5 goes into 12 2 times (2*5 =10 so 12-10=2) and leaving 2 left over) 24 % 4 = 0 (4 goes into 24 6 times evenly leaving no remainder so the answer is 0) 

Increment (++): adds a to the operand by one (in increments)
  (++x): will add to the operand by x instead of 1
  
Decrement (--): subtracts from the operand by one
  (--x): will subtract from the operand by x instead of 1
  
Unary negation: takes a # and puts a negative in front of it
  ex. x = 3.....y = -x, x = -3
  
Unary plus: attempts to convert the operand to a #.
  ex. +3     // 3
  +"3"   // 3
  +true  // 1
  +false // 0
  +null  // 0
  
Typeof: returns a string indicating the type of unevaluated operand


Explain litral types: Boolean, numbers, null, string explain built in constants: undifined, NaN, infinity
