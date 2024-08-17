
export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) {
    return 0;
  }
  return studentList.reduce((sum, student) => sum + student.id, 0);
}

