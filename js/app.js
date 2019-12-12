console.log ('/// Random employees ///');
const firstName = ['Anthony', 'James', 'Aidan', 'Jackson', 'David', 'Mason', 'Logan', 'Alexander', 'Charles', 
'Bryan', 'Angel', 'Tyler', 'Isaac', 'John', 'Nathaniel', 'Samuel', 'Austin', 'Luis', 'Benjamin', 'Gabriel', 
'Carlos', 'Robert', 'Julian', 'Lucas', 'Brandon', 'Diego', 'Jose', 'Nicholas', 'Timothy', 'Kevin', 'Jonathan',
'Barbara', 'Julia', 'Anastasia', 'Kate', 'Maria', 'Ann', 'Bridget', 'Victoria', 'Angelina', 'Amanda', 'Christina'];

const lastName = ['Abramson', 'Gilson', 'Goodman', 'Hawkins', 'Gill', 'Gilbert', 'Fraser', 'Foster', 'Ford', 
'Fitzgerald', 'Adams', 'Fisher', 'Faber', 'Elmers', 'Eddington', 'Newton', 'Bach', 'Beethowen', 'Donaldson', 'Trump', 
'Obama', 'Putin', 'Creighton', 'Bond', 'Willis', 'Travolta', 'Tarantino', 'Roberts', 'Franklin', 'Karrey', 'Archibald'];

const getRandomFullName = () => `${firstName[Math.floor(Math.random() * firstName.length)]} ${lastName[Math.floor(Math.random() * lastName.length)]}`;

const getRandomSalary = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getArrayOfRandomObjects = (lenght) => {
    let employeesArray = []; 
        for (let i = 0; i < lenght; i++) {
            let x = getRandomFullName();
            let y = getRandomSalary(1000, 5000);
            employeesArray.push({fullname: x, salary: y});
    } 
    return employeesArray;   
};

const sortArrayToSalary = (key = 'asc') => {
    let arr = getArrayOfRandomObjects(10)
        if (key == 'asc') {
        arr.sort((a, b) => {return a.salary - b.salary});
        console.log (arr);
    } else if (key == 'desc'){
        arr.sort((a, b) => {return b.salary - a.salary});
        console.log (arr);
    }
};




const print = () => {
    let x = getArrayOfRandomObjects(12);
    let temp;
    let res;
    for (let i = 0; i < x.length; i++) {
        temp = x[i];
        res = temp.join();
    }
    console.log(res);
    return res;
}

print();


//.join('')


