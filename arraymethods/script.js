// Challenge 1

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        phne: '111-111-111',
        age: '39',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        phne: '121-211-112',
        age: '29',
    },
    {
        firstName: 'Sam',
        lastName: 'Smith',
        email: 'samsmith@gmail.com',
        phne: '113-131-311',
        age: '30',
    },
    {
        firstName: 'Debby',
        lastName: 'Ryan',
        email: 'debbyryan@gmail.com',
        phne: '151-511-115',
        age: '19',
    },
    {
        firstName: 'Greg',
        lastName: 'Adams',
        email: 'gregadams@gmail.com',
        phne: '611-116-161',
        age: '22',
    },
];

const youngPeople = people.filter((person) => person.age < 25).map((person) => {
      return{
      name: person.firstName + '  ' + person.lastName,
     email: person.email,
    }
 });

console.log(youngPeople);

// Challenge 2

const numbers = [5, 32, -15, 43, -2, 8, -10, -22, 10 ];

const positiveSum = numbers
                .filter((number) => number > 0)
                .reduce((acc, cur) => acc + cur, 0);
console.log(positiveSum);

// Challenge 3

const words = ['first', 'second', 'third', 'fourth', 'fifth'];

const capWords = words.map((letter) => {
    return(
        letter[0].toUpperCase() + letter.substring(1)
    )
});

console.log(capWords);
