let students = [
    {id: 21, name:'omar sunny'},
    {id: 31, name:'mannaaa'},
    {id: 41, name:'moyouri'},
    {id: 71, name:'deepjol'},

]

let nmaes = students.map(x => x.name);
let id = students.map(s => s.id);
console.log(nmaes, id);
let bigger = students.filter(s => s.id>40);
console.log(bigger);

