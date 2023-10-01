const human={
    name: 'John',
    age: '20',
    position: 'Developer',
    phone: '1234567890'
}

// const name = human.name;
// const age = human.age;

//Easy way
const {name,age} = human;

//Create copy of object
const anotherhuman ={...human}

anotherhuman.name = "Sachin";
console.log(human.name);
console.log(anotherhuman.name);