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
    const h3 = createHTMLNode ('h3', [], 'Массив случайных сотрудников');
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [h3])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const header = createHTMLNode ('header', [], [container]);
    document.getElementById('app').appendChild(header);
}

const getFooter = () => {
    const span = createHTMLNode ('span', [], `&#169 dmitrijpedan.github.io, ${new Date ().getFullYear()}`);
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [span])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const footer = createHTMLNode ('footer', [], [container]);
    document.getElementById('app').appendChild(footer);
}

const getSelectSection = () => {
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [
        createHTMLNode ('label', [{name: 'for', value:['inputStuff']}], 'Количество сотрудников:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['inputStuff']}, {name: 'placeholder', value:['от 1 до 500']}], null),
        createHTMLNode ('label', [{name: 'for', value:['minSalary']}], 'Зарплата от:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['minSalary']}, {name: 'placeholder', value:['от 1000 $']}], null),
        createHTMLNode ('label', [{name: 'for', value:['maxSalary']}], 'Зарплата до:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['maxSalary']}, {name: 'placeholder', value:['до 10 000 $']}], null),
        createHTMLNode ('label', [{name: 'for', value:['inputSort']}], 'Сортировка по зарплате:'),
        createHTMLNode ('select', [{name: 'class', value:['form-control']}, {name: 'id', value:['inputSort']}], [
            createHTMLNode ('option', [{name: 'value', value:['0']}], 'Не сортировать'),
            createHTMLNode ('option', [{name: 'value', value:['1']}], 'По возрастанию'),
            createHTMLNode ('option', [{name: 'value', value:['2']}], 'По убыванию'),
        ]),
        createHTMLNode ('button', [{name: 'id', value:['toTable']}, {name: 'type', value:['submit']}, {name: 'class', value:['btn', 'btn-info']}, {name: 'style', value:['margin: 20px;']}], 'В таблицу'),
        createHTMLNode ('button', [{name: 'id', value:['clearPage']}, {name: 'type', value:['submit']}, {name: 'class', value:['btn', 'btn-danger']}, {name: 'style', value:['margin: 20px;']}], 'Очистить'),
        
    ]);
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const section = createHTMLNode ('section', [], [container]);
    document.getElementById('app').appendChild(section);
}

const getTableSection = () => {
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}, {name: 'id', value:['output']}], null);
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const section = createHTMLNode ('section', [], [container]);
    document.getElementById('app').appendChild(section);
}

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
            let name = getRandomFullName();
            let sal = getRandomSalary(min, max);
            employeesArray.push({fullname: name, salary: sal});
    } 
    return employeesArray;   
};

const getAmountStaff = () => {
    let result = 0;
    let count = document.getElementById('inputStuff').value;
    count = +count && +count > 0 && +count <= 1000 ? result = Number(count) : alert('Проверьте количество сотрудников');
    return result;
}

const getMinSalary = () => {
    let result = 0;
    let min = document.getElementById('minSalary').value;
    min = +min && +min >= 100 && +min < 50000 ? result = Number(min) : alert('Проверьте Min зарплату');
    return result; 
}

const getMaxSalary = () => {
    let result = 0;
    let min = document.getElementById('minSalary').value;
    let max = document.getElementById('maxSalary').value;
    max = +max && +max > 100 && +max <= 10000 && max > min ? result = Number(max) : alert('Проверьте Max зарплату');
    return result;
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

const outputDataToTable = (arr) => {
    const columns = ['Номер', 'Полное имя', 'Зарплата'];
    const outTheadTr = createHTMLNode ('tr', [], null);
    columns.map(el => outTheadTr.appendChild(createHTMLNode ('th', [{name: 'scope', value: ['col']}], el)));
    const outThead = createHTMLNode ('thead', [], null);
    outThead.appendChild(outTheadTr);
    const outTbody = createHTMLNode ('tbody', [], null);
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
    let count = getAmountStaff();
    let min = getMinSalary();
    let max = getMaxSalary();
    if (count > 0 && min > 0 && max > 0) {
        let sortedAray = sortArrayToSalary(getArrayOfRandomObjects(count, min, max))
    outputDataToTable(sortedAray) 
    }
    return
}
 
const clearData = () => window.location.reload();

getHeader()
getSelectSection()
getTableSection()
getFooter()

toTable.onclick = renderOutput;
clearPage.onclick = clearData;











