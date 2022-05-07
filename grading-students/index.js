function gradingStudents(grades) {
  // Write your code here
  let result = [];
  for (let grade of grades) {
    if (grade < 38) {
      grade = grade;
    } else if ((grade + 2) % 5 == 0) {
      grade += 2;
    } else if ((grade + 1) % 5 == 0) {
      grade += 1;
    }
    result.push(grade);
  }
  return result;
}
