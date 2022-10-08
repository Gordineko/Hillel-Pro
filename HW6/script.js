const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

const calculateStudentAverageMark = (student) =>
  student.marks.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  ) / student.marks.length;

console.log(calculateStudentAverageMark(students[2]));

function calculateGroupAverageMark(students) {
  const marks = students.map((student) => student.marks).flat();
  return (
    marks.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    ) / marks.length
  );
}

console.log(calculateGroupAverageMark(students));
function calculateStudentAverageMark(students) {
  let sum = students.marks[0];
  for (let i = 1; i < students.marks.length; i++) {
    sum += students.marks[i];
  }
  return sum / students.marks.length;
}
const a = calculateStudentAverageMark(students[0]);
console.log(a);

// function  calculateStudentAverageMark(students) {
//   let allSum = [];

//   for (let i = 0; i < students.length; i++) {
//     allSum.push(students[i].marks);
//   }
//   let sum = 0;
//   allSum = allSum.flat();
//   for (let i = 0; i < allSum.length; i++) {
//     sum += allSum[i];
//   }
//   return sum / allSum.length;
// }
// const push = calculateGroupAverageMark(students);
// console.log(push);
