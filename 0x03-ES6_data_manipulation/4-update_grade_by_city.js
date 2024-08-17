
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Filter the students by city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Update the grades for the students in the city
  return studentsInCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}

