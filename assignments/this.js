/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window Binding - If not otherwise specified, "this" refers to the window
* 2.Implicit-Binding - Using "this" within an object to refer to the object
* 3. New Binding - Renaming something after the fact to give "this" something to refer to
* 4.Explicit Binding - Using inheritance to define "this" as something specific from a parent prototype.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this.getName);

// Principle 2

function Person(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName,
}

// Principle 3

let me = new Person("Maxwell", "Webb");

// Principle 4

function Employee(firstName, lastName) {
  Person.call(this, firstName, lastName), //.call is how this is bound
  this.salary = "$12/hr"
}
