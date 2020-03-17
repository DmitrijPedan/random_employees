const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(el => {element.setAttribute(el.name, el.value.join(' '))});
    inner ? (Array.isArray(inner) ? inner.map(el => element.appendChild(el)) : element.innerHTML=inner) : null;
    return element;
};

const getHeader = () => {
    const h3 = createHTMLNode ('h3', [], 'Массив случайных сотрудников');
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [h3])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const header = createHTMLNode ('header', [], [container]);
    document.getElementById('app').appendChild(header);
};

const getFooter = () => {
    const span = createHTMLNode ('span', [], `&#169 dmitrijpedan.github.io, ${new Date ().getFullYear()}`);
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [span])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const footer = createHTMLNode ('footer', [], [container]);
    document.getElementById('app').appendChild(footer);
};

const getSelectSection = () => {
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [
        createHTMLNode ('label', [{name: 'for', value:['inputStuff']}], 'Количество сотрудников:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['inputStuff']}, {name: 'placeholder', value:['от 1 до 500']}, {name: 'min', value:['1']}, {name: 'max', value:['500']}], null),
        createHTMLNode ('label', [{name: 'for', value:['minSalary']}], 'Зарплата от:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['minSalary']}, {name: 'placeholder', value:['от 1000 $']}, {name: 'min', value:['1000']}, {name: 'max', value:['9999']}], null),
        createHTMLNode ('label', [{name: 'for', value:['maxSalary']}], 'Зарплата до:'),
        createHTMLNode ('input', [{name: 'type', value:['number']}, {name: 'class', value:['form-control']}, {name: 'id', value:['maxSalary']}, {name: 'placeholder', value:['до 10 000 $']}, {name: 'min', value:['1001']}, {name: 'max', value:['10000']}], null),
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
};

const getTableSection = () => {
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}, {name: 'id', value:['output']}], null);
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const section = createHTMLNode ('section', [], [container]);
    document.getElementById('app').appendChild(section);
};

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
    return [...new Array(lenght)].map(el => el = {fullname:getRandomFullName(), salary:getRandomSalary(min, max)}) 
};

const getAmountStaff = () => {
    let count = document.getElementById('inputStuff').value;
    return (count == +count && +count > 0 && +count <= 500) ? Number(count) : alert('Проверьте количество сотрудников');
};

const getMinSalary = () => {
    let min = document.getElementById('minSalary').value;
    return (min == +min && +min >= 100 && +min < 50000) ? Number(min) : alert('Проверьте Min зарплату');
};

const getMaxSalary = () => {
    let min = document.getElementById('minSalary').value;
    let max = document.getElementById('maxSalary').value;
    return (max == +max && +max > 100 && +max <= 10000 && max > min) ? Number(max) : alert('Проверьте Max зарплату');
};

const sortArrayToSalary = (obj) => {
    switch (Number(document.getElementById('inputSort').value)) {
        case 1:
            obj.sort((a, b) => {return a.salary - b.salary});
            break;
        case 2:
            obj.sort((a, b) => {return b.salary - a.salary});
            break;
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
};

const renderOutput = () => {
    const count = getAmountStaff();
    const min = getMinSalary();
    const max = getMaxSalary();
    (count  && min  && max ) && outputDataToTable(sortArrayToSalary(getArrayOfRandomObjects(count, min, max)));
}

getHeader();
getSelectSection();
getTableSection();
getFooter();

document.getElementById('toTable').onclick = renderOutput;
document.getElementById('clearPage').onclick = () => window.location.reload();











