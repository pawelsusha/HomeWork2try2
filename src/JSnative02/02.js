let students = [
    {
        name: "Bob",   //['bob']
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",    //[bob 'alex']
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick", //['Nick']
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
Bob/*
//["Bob", "alex", ....]

const getNames = (array) => {
    const result = new Array()//просто создается новый массив [] хотя можно и ковычками-это просто по капотом функция Аррау
    result.fill(1)
    const getName = obj => obj.name
    for (let i = 0; i < array.length; i++) {
        const temp = getName(array[i])
        result[i] = temp;
    }
    //....
    return result
}
const stNames = getNames(students)
console.log(stNames === students)


const addCScores = (array) => {
    const result = new Array()
    const addScoresForStudent = (obj) => {
        const result = new Array()
        const addScoresForStudent = (obj) => {
        for (let i = 0; i < array.length; i++) {
            const temp = addScoresForStudent(array[i])
            result[i] = temp;
            const copy = {...obj}  //new Object ()
            copy.scores = obj.scores + 10  //новоую обьекту пересапишем скоре
            return copy
        }
        //,,,,
        return result
    }
}

function selfMadeMap(func){
    const result = []
    for (let i = 0; i < this.length; i++) {
        const temp = func(this[i])
        result[i] = temp;
    }
    return result
}
console.log(selfMadeMape(studens, getNames))
console.log(students.map(getNames))
console.log(selfMadeMape(studens, addCScoresStudents)

const selfMadeFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}
console.log(students, st => st.scores >= 100)
console.log(students.filter(st => st.scores >= 100))*/

const selfMadeFind = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result
            array[i]
        }
    }
    console.log(selfMadeFind(students, st => st.name === "Alex")
    console.log(students.find(st => st.name === "Alex"))


    Array.prototype.hi = function(){
    alert("hi!")
     }
const arr = [];
    arr.hi()


    array.prototype.selfMadeMap = selfMadeMap


    arr.selfMadeMap()









