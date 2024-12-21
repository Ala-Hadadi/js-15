// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

function printPersons(array) {
  const div = document.createElement('div');
  array.forEach(person => {
    const newElement = document.createElement('p');
    newElement.textContent = `name: ${person.name}, Age: ${person.age}`;
    div.appendChild(newElement);
  });
  document.body.appendChild(div);
}

printPersons(persons);
