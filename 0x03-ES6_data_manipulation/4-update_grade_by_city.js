/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const studentGrade = newGrades.find((g) => g.studentId === student.id);
        if (studentGrade) {
          return { ...student, grade: studentGrade.grade };
        }
        return { ...student, grade: 'N/A' };
      });
  }
  return [];
}
