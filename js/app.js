const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(attr => {element.setAttribute(attr.name, attr.value.join(' '))});
    inner
        ?
            Array.isArray(inner) ? inner.map(el => element.appendChild(el)):
                element.innerHTML=inner
                :null;
    return element;
}

const getHeader = () => {
    let h3 = createHTMLNode ('h3', [], 'Массив случайных сотрудников');
    let col = createHTMLNode ('div', [{name: 'class', value:['col']}], [h3])
    let row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    let container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    let header = createHTMLNode ('header', [], [container]);
    document.getElementById('app').appendChild(header);
}

const getFooter = () => {
    let span = createHTMLNode ('span', [], `&#169 dmitrijpedan.github.io, ${new Date ().getFullYear()}`);
    let col = createHTMLNode ('div', [{name: 'class', value:['col']}], [span])
    let row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    let container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    let footer = createHTMLNode ('footer', [], [container]);
    document.getElementById('app').appendChild(footer);
}

const getSelectSection = () => {
    let col = createHTMLNode ('div', [{name: 'class', value:['col']}], [
        createHTMLNode ('label', [{name: 'for', value:['inputStuff']}], 'Количество сотрудников:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['inputStuff']}, {name: 'placeholder', value:['от 1 до 500']}], null),
        createHTMLNode ('label', [{name: 'for', value:['minSalary']}], 'Зарплата от:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['minSalary']}, {name: 'placeholder', value:['от 100 $']}], null),
        createHTMLNode ('label', [{name: 'for', value:['maxSalary']}], 'Зарплата до:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['maxSalary']}, {name: 'placeholder', value:['до 50 000 $']}], null),
        createHTMLNode ('label', [{name: 'for', value:['inputSort']}], 'Сортировка по зарплате:'),
        createHTMLNode ('select', [{name: 'class', value:['form-control']}, {name: 'id', value:['inputSort']}], [
            createHTMLNode ('option', [{name: 'value', value:['0']}], 'Не сортировать'),
            createHTMLNode ('option', [{name: 'value', value:['1']}], 'По возрастанию'),
            createHTMLNode ('option', [{name: 'value', value:['2']}], 'По убыванию'),
        ]),
        createHTMLNode ('button', [{name: 'id', value:['toTable']}, {name: 'type', value:['submit']}, {name: 'class', value:['btn', 'btn-info']}, {name: 'style', value:['margin: 20px;']}], 'В таблицу'),
        
    ]);
    let row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    let container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    let section = createHTMLNode ('section', [], [container]);
    document.getElementById('app').appendChild(section);
}

const getTableSection = () => {
    let col = createHTMLNode ('div', [{name: 'class', value:['col']}, {name: 'id', value:['output']}], null);
    let row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    let container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    let section = createHTMLNode ('section', [], [container]);
    document.getElementById('app').appendChild(section);
}

getHeader()
getSelectSection()
getTableSection()
getFooter()

const firstName = ['Anthony', 'James', 'Aidan', 'Jackson', 'David', 'Mason', 'Logan', 'Alexander', 'Charles', 
'Bryan', 'Angel', 'Tyler', 'Isaac', 'John', 'Nathaniel', 'Samuel', 'Austin', 'Luis', 'Benjamin', 'Gabriel', 
'Carlos', 'Robert', 'Julian', 'Lucas', 'Brandon', 'Diego', 'Jose', 'Nicholas', 'Timothy', 'Kevin', 'Jonathan',
'Barbara', 'Julia', 'Anastasia', 'Kate', 'Maria', 'Ann', 'Bridget', 'Victoria', 'Angelina', 'Amanda', 'Christina'];

const lastName = ['Abramson', 'Gilson', 'Goodman', 'Hawkins', 'Gill', 'Gilbert', 'Fraser', 'Foster', 'Ford', 
'Fitzgerald', 'Adams', 'Fisher', 'Faber', 'Elmers', 'Eddington', 'Newton', 'Bach', 'Beethowen', 'Donaldson', 'Trump', 
'Obama', 'Putin', 'Creighton', 'Bond', 'Willis', 'Travolta', 'Tarantino', 'Roberts', 'Franklin', 'Karrey', 'Archibald'];

const getRandomFullName = () => `${firstName[Math.floor(Math.random() * firstName.length)]} ${lastName[Math.floor(Math.random() * lastName.length)]}`;

const getRandomSalary = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getArrayOfRandomObjects = (lenght, min, max) => {
    let employeesArray = []; 
        for (let i = 0; i < lenght; i++) {
            let x = getRandomFullName();
            let y = getRandomSalary(min, max);
            employeesArray.push({fullname: x, salary: y});
    } 
    return employeesArray;   
};

const getAmountStaff = () => {
    let count = document.getElementById('inputStuff').value;
    count = +count && +count > 0 && +count <= 500 ? count : alert('Проверьте количество сотрудников');
    console.log('getAmountStaff:', Number(count))
    return Number(count)
}

const getMinSalary = () => {
    let min = document.getElementById('minSalary').value;
    min = +min && +min >= 100 && +min < 50000 ? min : alert('Проверьте Min зарплату');
    console.log('get Min Salary:', Number(min))
    return Number(min);
}

const getMaxSalary = () => {
    let max = document.getElementById('maxSalary').value;
    max = +max && +max > 100 && +max <= 50000 ? max : alert('Проверьте Max зарплату');
    console.log('get Max Salary:', Number(max))
    return Number(max);
}

const sortArrayToSalary = (obj) => {
    let key = Number(document.getElementById('inputSort').value);
    if (key == 1) {
        obj.sort((a, b) => {return a.salary - b.salary});
    } else if (key == 2){
        obj.sort((a, b) => {return b.salary - a.salary});
    } 
    return obj;
};



function outputDataToTable (arr) {
const columns = ['Номер', 'Полное имя', 'Зарплата'];
const outTheadTr = createHTMLNode ('tr', [], null);
columns.map(el => outTheadTr.appendChild(createHTMLNode ('th', [{name: 'scope', value: ['col']}], el)));
const outThead = createHTMLNode ('thead', [], null);
outThead.appendChild(outTheadTr);
const outTbody = createHTMLNode ('tbody', [], null); //tbody tr td
arr.map((el, ind) => {
  const outTbodyTr = createHTMLNode('tr',[],null);
  outTbodyTr.appendChild(createHTMLNode('td', [], ind+1))
  Object.keys(el).map(elName => outTbodyTr.appendChild(createHTMLNode('td', [], el[elName])))
  outTbody.appendChild(outTbodyTr);
})
const outTable = createHTMLNode ('table', [{name: 'class', value: ['table']}, {name: 'id', value: ['output-table']}], null); // table
outTable.appendChild(outThead);
outTable.appendChild(outTbody);
document.getElementById ('output-table') ? document.getElementById ('output-table').remove() : null;
document.getElementById('output').appendChild(outTable);
}



const renderOutput = () => {
    let sortedAray = sortArrayToSalary(getArrayOfRandomObjects(getAmountStaff(), getMinSalary(), getMaxSalary()))
    console.log('outputDataToTable2:', sortedAray)
    outputDataToTable(sortedAray)
}


toTable.onclick = renderOutput;











