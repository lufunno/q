const fs = require("fs");

class Visitor {
  constructor(fullName, age, date, time, comments, assistedBy) {
    this.fullName = fullName;
    this.age = age;
    this.dateOfVisit = date;
    this.timeOfVisit = time;
    this.comments = comments;
    this.assistedBy = assistedBy;
  }
  save() {
    const name = test(this.fullName);
    fs.writeFile(
      test(name),
      JSON.stringify(this, "\n", 4),
      (err) => {
        if (err) {
          throw Error("file was not saved");
        }
      }
    );
    console.log("file is saved");
  }
}

function load(name) {
  function asyncFunc(callback) {
    setTimeout(function () {
      const fullName = test(name);
      const fetchData = fs.readFileSync(test(fullName));
      const data = JSON.parse(fetchData);
      console.log(data);
      callback();
    }, 1000);
  }
  asyncFunc(function () {
    return;
  });
}

function test(string, visitor){
  if(visitor === null){
   return string.toLowerCase().split(" ").join("_");
  }
  return visitor = `visitor_${string}.json`;

}

var alice = new Visitor(
  "Alice Cooper",
  36,
  "2020-08-12",
  "11:55",
  "excellent service",
  "trevor philips"
);
alice.save();
load("Alice Cooper");

var bob = new Visitor(
  "Bob Marley",
  46,
  "2020-08-22",
  "12:55",
  "excellent service",
  "trevor philips"
);
bob.save();
load("Bob Marley");
module.exports = { Visitor, load };
