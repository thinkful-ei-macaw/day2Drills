/* eslint-disable indent*/
'use strict';


// ******FIRST SET OF DRILLS********


/*
In this drill, you need to write code for the createMyObject function so that it returns an object with the following key value pairs:

foo => 'bar'
answerToUniverse => 42
olly olly => 'oxen free'
sayHello => a function that returns the string 'hello'
*/

function createMyObject() {

}



/*
Modify the updateObject function (which takes a single argument (obj)) so that it adds the following key/value pairs to obj and returns it:

foo => 'foo'
bar => 'bar'
bizz => 'bizz'
bang => 'bang'
*/

let obj = {};
function updateObject(obj) {
obj.foo = 'foo';
obj.bar = "bar";
obj.bizz = "bizz";
obj.bang = "bang";
return obj;
}
console.log(updateObject(obj));







/*
Modify personMaker.fullName to be a function that uses self-reference (via this) in order to return the firstName and lastName properties separated by a space.

So, for instance, if firstName was 'Jane' and lastName was 'Doe', fullName() should return 'Jane Doe'.
*/

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: null,
    };
    return person;
  }
// test code included in original, don't need to edit
/*
  (function testPersonMaker() {
    var person = personMaker();
    if (typeof person !== 'object') {
      console.error('ERROR: `personMaker` must return an object');
      return false;
    }
    if (typeof person.fullName !== 'function') {
      console.error('ERROR: `fullName` must be a method');
      return false;
    }
    if (person.fullName() !== 'Paul Jones') {
      console.error(
        'ERROR: The value for `fullName` should be "Paul Jones" but was ' +
          person.fullName()
      );
      return false;
    }
    person.firstName = 'Lisa';
    person.lastName = 'Simpson';
    if (person.fullName() !== 'Lisa Simpson') {
      console.error(
        '`personMaker` is not using self reference correctly. ' +
          'When firstName set to "Lisa" and lastName set to "Simpson", ' +
          'should return "Lisa Simpson" but returned ' +
          person.fullName()
      );
    }
    console.log('SUCCESS: `updateObject` works correctly!');
  })();
*/




/*  Modify the keyDeleter function so that it deletes keys for foo and 
  bar for any object passed in and then returns the modified object.
  */

 const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
  }


  //test code included in original, don't need to edit

  
  (function testKeyDeleter() {
    var obj = keyDeleter({
      foo: 'foo',
      bar: 'bar',
      bizz: 'bizz',
      bang: 'bang',
    });
  
    if (typeof obj !== 'object') {
      console.error('ERROR: `keyDeleter` must be return an object');
      return false;
    }
    ['foo', 'bar'].forEach(function(key) {
      if (key in obj) {
        console.error('`keyDeleter` did not delete the key for ' + key);
        return false;
      }
    });
    ['bizz', 'bang'].forEach(function(key) {
      if (!(key in obj && obj[key] === key)) {
        console.error('`keyDeleter` is deleting keys other than `foo` and `bar`');
        return false;
      }
    });
    console.log('SUCCESS: `keyDeleter` works correctly!');
  })();
  


  // ***** SECOND SET OF DRILLS*******


/*
  write a function called makeStudentReport that takes a single argument, data. 
  data is an array of objects. Each object in the array represents a student and their letter 
  grade for a course — for example, {name: 'Johnny Robot', grade: 'C'}.

makeStudentReport should return an array of strings. For each item in data, return a string that 
looks like this: '[name]: [grade]'. The name and grade values on the student object should be 
substituted in.

*/

function makeStudentReport(data){

}



  //test code included in original, don't need to edit
/*
function testIt() {
    const testData = [
      { name: 'Jane Doe', grade: 'A' },
      { name: 'John Dough', grade: 'B' },
      { name: 'Jill Do', grade: 'A' },
    ];
  
    const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];
  
    const results = makeStudentsReport(testData);
  
    if (!(results && results instanceof Array)) {
      console.error('FAILURE: `makeStudentsReport` must return an array');
      return;
    }
    if (results.length !== testData.length) {
      console.error(
        'FAILURE: test data had length of ' +
          testData.length +
          ' but `makeStudentsReport` returned array of length ' +
          results.length
      );
      return;
    }
    for (let i = 0; i < expectations.length; i++) {
      let expect = expectations[i];
      if (
        !results.find(function(item) {
          return item === expect;
        })
      ) {
        console.error(
          'FAILURE: `makeStudentsReport` is not ' + 'producing expected strings'
        );
        return;
      }
    }
    console.log('SUCCESS: `makeStudentsReport` is working');
  }
  
  testIt();
*/  




/*
write a function called enrollInSummerSchool that takes a single argument, students. students 
is an array of objects, with each object representing a student — for example, 
{name: 'Tim', status: 'Current student', course: 'Biology'}.

enrollInSummerSchool should return an array of objects. For each object from the original array, 
it should return the original name and course, but should update the status to In Summer school.
So, given this input:

[
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

...the function should produce the following output:

[
  {
    name: 'Tim',
    status: 'In Summer school',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'In Summer school',
    course: 'Mathematics'
  },
];
 */

const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    return students.map(student => ({ 
      name: student.name,
      status: "In Summer School",
      course: student.course,
      }))
    };
    

   //test code included in original, don't need to edit

   
   function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology',
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics',
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science',
    },
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return;
  }
  var result = testData.every(function(student) {
    var match = results.find(function(_student) {
      return (
        _student.name === student.name &&
        _student.course === student.course &&
        _student.status.toLowerCase() === 'in summer school'
      );
    });
    return match !== undefined;
  });
  if (!result) {
    console.error(
      'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school": ' +
        JSON.stringify(results)
    );
  } else {
    console.info('SUCCESS: `enrollSummerSchool` is working');
  }
}

testIt();



/*
writing a function called findById. This function takes 2 arguments, 
items and idNum. items is an array of objects. idNum is the id we're trying to 
find in items. The function should look for an item with the id idNum in the array items. 
If found, it should return that item.
*/

const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
  
  function findById(items, idNum) {

}

   //test code included in original, don't need to edit

   /*
   function testIt() {
  const testData = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bizz' },
    { id: 3, bang: 'boo' },
  ];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return;
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' + result.id
    );
    return;
  }
  if (result.bang !== 'boo') {
    console.error(
      'Expected all key/value pairs from target object to be returned'
    );
    return;
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();
*/



/*
writing a function called validateKeys. This function takes 2 arguments, object and expectedKeys.
 object is (you guessed it!) an object that we want to validate keys for. expectedKeys is an array
  of keys that we expect to find on the object.

validateKeys should return true if object has all of the keys from expectedKeys, 
and no additional keys. It should return false if one or more of the expectedKeys 
is missing from the object, or if the object contains extra keys not in expectedKeys.

*/

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
    
  
  }

     //test code included in original, don't need to edit
/*
     function testIt() {
        const objectA = {
          id: 2,
          name: 'Jane Doe',
          age: 34,
          city: 'Chicago',
        };
      
        const objectB = {
          id: 3,
          age: 33,
          city: 'Peoria',
        };
      
        const objectC = {
          id: 9,
          name: 'Billy Bear',
          age: 62,
          city: 'Milwaukee',
          status: 'paused',
        };
      
        const objectD = {
          foo: 2,
          bar: 'Jane Doe',
          bizz: 34,
          bang: 'Chicago',
        };
      
        const expectedKeys = ['id', 'name', 'age', 'city'];
      
        if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
          console.error('FAILURE: validateKeys should return a boolean value');
          return;
        }
      
        if (!validateKeys(objectA, expectedKeys)) {
          console.error(
            `FAILURE: running validateKeys with the following object and keys
            should return true but returned false:
            Object: ${JSON.stringify(objectA)}
            Expected keys: ${expectedKeys}`
          );
          return;
        }
      
        if (validateKeys(objectB, expectedKeys)) {
          console.error(
            `FAILURE: running validateKeys with the following object and keys
            should return false but returned true:
            Object: ${JSON.stringify(objectB)}
            Expected keys: ${expectedKeys}`
          );
          return;
        }
      
        if (validateKeys(objectC, expectedKeys)) {
          console.error(
            `FAILURE: running validateKeys with the following object and keys
            should return false but returned true:
            Object: ${JSON.stringify(objectC)}
            Expected keys: ${expectedKeys}`
          );
          return;
        }
      
        if (validateKeys(objectD, expectedKeys)) {
          console.error(
            `FAILURE: running validateKeys with the following object and keys
            should return false but returned true:
            Object: ${JSON.stringify(objectD)}
            Expected keys: ${expectedKeys}`
          );
          return;
        }
      
        console.log('SUCCESS: validateKeys is working');
      }
      
      testIt();
*/      