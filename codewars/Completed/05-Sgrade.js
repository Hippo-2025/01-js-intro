function finalGrade (exam, projects) 
{
  let grade = 0;
  if (exam > 90 || projects > 10) {
    grade = 100;
  } else if (exam >75 && projects >= 5) {
     grade = 90;
  }  else   if (exam > 50 && projects >= 2) {
      grade = 75
  }
  return grade;
}

console.log(finalGrade(100,12));
console.log(finalGrade(80, 5));
console.log(finalGrade(50, 12));

