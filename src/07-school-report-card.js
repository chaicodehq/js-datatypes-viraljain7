/**
 * 📝 School Report Card Generator
 *
 * Sharma ji ke bete ka report card generate karna hai! Student ka naam aur
 * subjects ke marks milenge, tujhe pura analysis karke report card banana hai.
 *
//  * Rules:
//  *   - student object: { name: "Rahul", marks: { maths: 85, science: 92, ... } }
//  *   - Calculate using Object.values() and array methods:
//  *     - totalMarks: sum of all marks (use reduce)
//  *     - percentage: (totalMarks / (numSubjects * 100)) * 100,
//  *       rounded to 2 decimal places using parseFloat(val.toFixed(2))
//  *     - grade based on percentage:
//  *       "A+" (>= 90), "A" (>= 80), "B" (>= 70), "C" (>= 60), "D" (>= 40), "F" (< 40)
//  *     - highestSubject: subject name with highest marks (use Object.entries)
//  *     - lowestSubject: subject name with lowest marks
//  *     - passedSubjects: array of subject names where marks >= 40 (use filter)
//  *     - failedSubjects: array of subject names where marks < 40
//  *     - subjectCount: total number of subjects (Object.keys().length)
//  *   - Hint: Use Object.keys(), Object.values(), Object.entries(),
//  *     reduce(), filter(), map(), Math.max(), Math.min(), toFixed()
 *
 * Validation:
 *   - Agar student object nahi hai ya null hai, return null
 *   - Agar student.name string nahi hai ya empty hai, return null
 *   - Agar student.marks object nahi hai ya empty hai (no keys), return null
 *   - Agar koi mark valid number nahi hai (not between 0 and 100 inclusive),
 *     return null
 *
 * @param {{ name: string, marks: Object<string, number> }} student
 * @returns {{ name: string, totalMarks: number, percentage: number, grade: string, highestSubject: string, lowestSubject: string, passedSubjects: string[], failedSubjects: string[], subjectCount: number } | null}
 *
 * @example
 *   generateReportCard({ name: "Rahul", marks: { maths: 85, science: 92, english: 78 } })
 *   // => { name: "Rahul", totalMarks: 255, percentage: 85, grade: "A",
 *   //      highestSubject: "science", lowestSubject: "english",
 *   //      passedSubjects: ["maths", "science", "english"], failedSubjects: [],
 *   //      subjectCount: 3 }
 *
 *   generateReportCard({ name: "Priya", marks: { maths: 35, science: 28 } })
 *   // => { name: "Priya", totalMarks: 63, percentage: 31.5, grade: "F", ... }
 */
export function generateReportCard(student) {
  // Your code here
  // console.log(student)

  if (!student || typeof student !== "object") return null;

  const { name, marks } = student;

  if (!name || name === "") return null;
  if (!marks || typeof marks !== "object" || Object.keys(marks).length === 0)
    return null;

  const subjects = Object.keys(marks);

  // 4. Validate each mark (0–100 only)
  for (let subject of subjects) {
    const score = marks[subject];
    if (typeof score !== "number" || score < 0 || score > 100) {
      return null;
    }
  }


  let totalMarks = parseInt(
    Object.values(marks).reduce((ac, el) => el + ac, 0),
  );
  let subjectCount = Object.values(marks).length;
  let percentage = +(totalMarks / subjectCount).toFixed(2);
  let grade = gradeCalculator(percentage);

  let highestSubject=minAndMaxSub(marks)[1];
  let lowestSubject=minAndMaxSub(marks)[0];

let passedSubjects = Object.keys(marks).filter(
  (subject) => marks[subject] >= 40
);

let failedSubjects = Object.keys(marks).filter(
  (subject) => marks[subject] < 40
);

  return {
    name,
    totalMarks,
    percentage,
    grade,
    highestSubject,
    lowestSubject,
    passedSubjects,
    failedSubjects,
    subjectCount,
  };
}
function gradeCalculator(percentage) {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else if (percentage >= 40) {
    return "D";
  } else {
    return "F";
  }
}

function minAndMaxSub(marks) {
  let minSubject = null;
let maxSubject = null;
let min = Infinity;
let max = -Infinity;

for (const subject in marks) {
  const score = marks[subject];

  if (score < min) {
    min = score;
    minSubject = subject;
  }

  if (score > max) {
    max = score;
    maxSubject = subject;
  }
}

return [minSubject,maxSubject,min.max]
}