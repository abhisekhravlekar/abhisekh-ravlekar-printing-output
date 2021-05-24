// Task-1 Printing Output

/* Task 1

Declare three variables, a and b and c.

If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):
*/

// Declare variable a, b & c.
let a = 3;
let b = 5;
let c;

//Assign it with value

let output = 'let a = 3\nlet b = 5\nlet c\n-----------';

    output = output + '\na + b = ' + (a + b);
    output = output + '\na - b = ' + ( a - b);
    output = output + '\na * b = ' + ( a * b);
    output = output + '\na / b = ' + ( a / b);
    output = output + '\na % b = ' + ( a % b);
    output = output + '\na += b = ' + ( a += b);
    output = output + '\na -= b = ' + ( a -= b);
    output = output + '\na *= b = ' + ( a *= b);
    output = output + '\na /= b = ' + ( a /= b);
    output = output + '\na %= b = ' + ( a %= b);
    output = output + '\na /= b = ' + ( a /= b);
    output = output + '\na == b: ' + ( a == b);
    output = output + '\na != b: ' + ( a != b);
    output = output + '\na > b: ' + ( a > b);
    output = output + '\na < b: ' + ( a < b);
    output = output + '\n!a && !c: ' + ( !a && !c);
    output = output + '\n!a || !c: ' + ( !a || !c);



alert(output);

// End of Task-1 Printing Output



// Task-2 Printing Output

/* Task 2 (Print experiment using console.log() )

Declare the variable first_name and assign it with the value of your first name;
Declare the variable last_name and assign it with the value of your last name;
Declare the variable email and assign it with the value of your email;
Declare the variable output;

Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
Assign output with gotten expression;

Print the output in JavaScript console.*/

//Declare variable first_name and assign it with value "Abhisekh".

let first_name = ' Abhisekh ';
// Declare variable last_name and assign it with value "Ravlekar".

let last_name= ' Ravlekar ';

// Declare variable email and assign it with ravl001@algonquinlive.com.
let email= ' ravl001@algonquinlive.com ';

// Concatenate first_name, last_name, year and string literals needed 
// to form the sentence:
console.log('My name is:' +  first_name + last_name);
console.log('You can contact me at:' +  email);

//Print the output in JavaScript console.




/* Task 2 (Print experiment using alert() )*/

//Declare variable first_name and assign it with value "Abhisekh".
let f_name = ' Abhisekh ';

// Declare variable last_name and assign it with value "Ravlekar".
let l_name= ' Ravlekar ';

// Declare variable email and assign it with ravl001@algonquinlive.com.
let email_id = ' ravl001@algonquinlive.com ';

let person = 'Contact Information\n-----------';

// Concatenate first_name, last_name, year and string literals needed 
// to form the sentence:
    person = person + '\nMy name is: ' + (f_name + l_name);
    person = person + '\nYou can contact me at: ' + (email_id);

alert(person);

/* End of Task 2 (Print experiment using alert() )*/











