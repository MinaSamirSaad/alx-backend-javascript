/**
 * Retrieves students in a given location.
 * @param {String} city - The location.
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
