var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

let sortedByName = students.sort(function (a, b) {
    if (a.name == b.name) {
 // if name is the same, sort by age ((first))
      return a.age < b.age
      }
      else {
  // sort by name first:
        return a.name > b.name
    }
} ) ;





console.log(students);