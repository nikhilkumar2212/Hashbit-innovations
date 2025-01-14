let studentsMarks = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
}

let studentsAverage = {};

for (let student in studentsMarks) {
    let totalMarks = Object.values(studentsMarks[student]).reduce((acc, mark) => acc + mark, 0);
    let average = totalMarks / Object.keys(studentsMarks[student]).length;
    studentsAverage[student] = { average: average };
}

console.log("Students average: ", studentsAverage);
console.log("");