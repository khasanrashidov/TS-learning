function defaultLastName(): string {
  return "Smith";
}

function getName(firstName: string, lastName: string = defaultLastName()) {
  return firstName + " " + lastName;
}

let name1 = getName("Tom");
console.log(name1); // Tom Smith
