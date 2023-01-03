function increaseSalary(salary: number): number {
  let increasedSalary = salary * 1.1; //no need to define increasedSalary to number--> infered as number
  return increasedSalary;
}
