
Literals are values in Javascript (JS). They represent a fixed value. Examples of literals are...

**[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**: Has 2 types of literal values, true or false. 
  * ex. boolean b = true

**[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**: List of zero or more expressions, each represent an array element within [] 
  * ex. var x = [24, "string", car]

**[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**: Characters in quotation marks 
  * ex. "I am awesome", "there were 2 of them", "21"

**Integer**: Can be expressed in decimal (base 10), octal (base 8), hexadecimal (base 16), or binary (base 2) ex. 0, 117 and -345 (decimal, base 10) 015, 0001 and -077 (octal, base 8) 0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16) 11100100110001 (binary, base 2)

**[Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)**: An empty value, no value is present 
  * ex. > var x = null; x "null"

**Special constants:

**[Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)**: A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments. 
  * ex.var x; if (typeof x === 'undefined') { // these statements execute }

**[NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)**: Not a number, checks to see if something isn't a number. 
  * ex.NaN === NaN; // false Number.NaN === NaN; // false isNaN(NaN); // true isNaN(Number.NaN); // true
```
    function valueIsNaN(v) { return v !== v; }
    valueIsNaN(1);          // false
    valueIsNaN(NaN);        // true
    valueIsNaN(Number.NaN); // true
```
**[Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)**: property of the global object, i.e. it is a variable in global scope. 
  * ex. Number.Positive_Infinity- may be used to determine an error that shows a finite # in case of success Number.Negative_Infinity- same as positive but with the negative

**Assignment operator**: Assigns value to left operand based on right operand. 
  * ex. (x = y) = (x=y) (x+=y) = (x= x+y).....addition assignment, (x=y) = (x= xy).....multiplication assignment

**Remainder**: Gives the remaining ammount after dividing var1 by var2. 
  * ex. var1 % var2 12 % 5 = 2 (5 goes into 12 2 times (2*5 =10 so 12-10=2) and leaving 2 left over) 24 % 4 = 0 (4 goes into 24 6 times evenly leaving no remainder so the answer is 0) 

**Increment (++)**: adds a to the operand by one (in increments)
  (++x): will add to the operand by x instead of 1
  
**Decrement (--)**: subtracts from the operand by one
  (--x): will subtract from the operand by x instead of 1
  
**Unary negation**: takes a # and puts a negative in front of it
  * ex. x = 3.....y = -x, x = -3
  
**Unary plus**: attempts to convert the operand to a #.
  * ex. +3     // 3
  +"3"   // 3
  +true  // 1
  +false // 0
  +null  // 0
  
**[Typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)**: returns a string indicating the type of unevaluated operand

**[Variable statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)**: used to declare a variable, normally giving it some sort of value.
  * ex. var x = 3
  
**[Objects literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**: list of zero or more pairs of property names and associated values of an object, enclosed in curly braces. You can think of object literals kind of like a phone book. Keeping various information for 1 object.
  * ex. var Sales = "Toyota";
```
    function CarTypes(name) {
     if (name == "Honda") {
        return name;
      } else {
       return "Sorry, we don't sell " + name + ".";
     }
    }
```
```
    var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

    console.log(car.myCar);   // Saturn
    console.log(car.getCar);  // Honda
    console.log(car.special); // Toyota
```
**Addition**: gives the sum of 2 or more numbers.
  * ex. var x = 5
      var y = 3
      console.log (x+y) // yeilds 8
  
**Subtraction**: takes a number and reduces it by the amount of a 2nd number.
  * ex. var x = 5
      var y = 1
      console.log(x-y) //yeilds 4
      
**Division**: Takes a number and divides it by the second number
  * ex. var x=9
      var y=3
      console.log(x/y) // yeilds 3
      
**Multiplication**: multiply 2 or more numbers together.
  * ex. var x=5
      var y=3
      console.log(x*y) //yeilds 15

**[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**: Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs. It's a snipet of code that's that can be called upon later.
  * ex.
  function x (/* parameters go here */) {
    //function body
    }

**[array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)**: Returns a shallow portion of an array into a ner array.
*   ex. array.slice(begin,end)
*   begin: zero based index, if begin is omitted, slice begins at 0; as a negative it it offsets the end of an array, so (-2) will extract the last to things in array.
*   end: zero based index that tells where the slice ends, it goes up to (not including the ending point)

**[string.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)**: function that turns a string into a number.
  * ex. "example".length // yeilds 7

**[array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)**: turns the array into a number based on the amount of elements in it
  * ex.
    var x = [34, "hi", orange]
    x.length = 3

**[array.prototype.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)**: joins all methds of an array into a string
  * ex. 
```
    var a = ['Wind', 'Rain', 'Fire'];
    var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
    var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
    var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
    var myVar4 = a.join('');    // assigns 'WindRainFire' to myVar4
```

**Range ()**: Returns a newly created Range object whose start and end is the global Document object.
  * ex
```
    range = new Range();
    endNode = document.getElementsByTagName("p").item(3);
    endOffset = document.getElementsByTagName("p").item(3).childNodes.length;
    range.setEnd(endNode,endOffset);
```

**[array.prototype.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)**: removes the last element out of an array
  * ex.
```
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

    var popped = myFish.pop();

    console.log(myFish); // ['angel', 'clown', 'mandarin' ] 

    console.log(popped); // 'sturgeon'
```

**[array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)**: adds an element at the end of an array
  * ex.
```
    var sports = ['soccer', 'baseball'];
    var total = sports.push('football', 'swimming');

    console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
    console.log(total);  // 4
```
**[array.prototype.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)**: removes the first element in an array
  * ex.
```
    var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

    console.log('myFish before: ' + myFish);

    var shifted = myFish.shift();

    console.log('myFish after: ' + myFish);
    console.log('Removed this element: ' + shifted);
```
This example displays:
```
    myFish before: angel,clown,mandarin,surgeon
    myFish after: clown,mandarin,surgeon
    Removed this element: angel
```
**[array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)**: changes the content of an array by removing existing elements and/or adding new elements.
  * ex
```
    var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

    // removes 0 elements from index 2, and inserts 'drum'
    var removed = myFish.splice(2, 0, 'drum');
    // myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
    // removed is [], no elements removed

    // removes 1 element from index 3
    removed = myFish.splice(3, 1);
    // myFish is ['angel', 'clown', 'drum', 'mandarin']
    // removed is ['surgeon']

    // removes 1 element from index 2, and inserts 'trumpet'
    removed = myFish.splice(2, 1, 'trumpet');
    // myFish is ['angel', 'clown', 'trumpet', 'surgeon']
    // removed is ['drum']

    // removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
    removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
    // myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
    // removed is ['angel', 'clown']

    // removes 2 elements from index 3
    removed = myFish.splice(3, Number.MAX_VALUE);
    // myFish is ['parrot', 'anemone', 'blue']
    // removed is ['trumpet', 'surgeon']
```

**[If statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)**: executes a statement if a specified condition is met. if the condition is false, another statement can be executed.
**[Else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)**: used when there's multiple if statements
 *ex.
```
if (x > 5) {

} else if (x > 50) {

} else {

}
```

**[Switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)**: A switch evaluates an expression, it then matches the expresion with a case value and executes the given statement.
 *ex.
```
switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  case value2:
    //Statements executed the result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN
    [break;]
  default:
    //Statements executed when none of the values match the value of the expression
    [break;]
}
```

**[Block staetment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) {}**: Groups 0 or more statements together.
 *ex.
 ```
 {
  statement_1;
  statement_2;
  ...
  statement_n;
}
var x = 1;
{
  var x = 2;
}
console.log(x); // logs 2
```

**[For statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)**: Or called a for loop, reates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop.
 *ex.
```
for ([initialization]; [condition]; [final-expression])
   statement
   
for (var i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
```
**[While statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)**: creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
 *ex.
```
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```
**[Do....While statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)**: A while loop that will at least produce 1 statement.
 *ex.
```
var i = 0;
do {
   i += 1;
   console.log(i);
} while (i < 5);
```

**[Try...Catch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)**: marks a block of statements to try, and specifies a response, should an exception be thrown.
 *ex.
```
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

**[Throw statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)**: throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
 *ex.
```
function UserException(message) {
   this.message = message;
   this.name = "UserException";
}
function getMonthName(mo) {
   mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException("InvalidMonthNo");
   }
}

try {
   // statements to try
   var myMonth = 15; // 15 is out of bound to raise the exception
   monthName = getMonthName(myMonth);
} catch (e) {
   monthName = "unknown";
   logMyErrors(e.message, e.name); // pass exception object to err handler
}
```
