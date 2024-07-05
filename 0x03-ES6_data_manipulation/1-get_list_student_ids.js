/**
 * Retrieves ids from a list of students.
 * @returns
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
