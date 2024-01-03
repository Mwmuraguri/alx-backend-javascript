export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.values(report.allEmployees);

  return {
    next: function () {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        if (currentEmployeeIndex < currentDepartment.length) {
          const result = { value: currentDepartment[currentEmployeeIndex], done: false };
          currentEmployeeIndex++;
          return result;
        } else {
          currentEmployeeIndex = 0;
          currentDepartmentIndex++;
          return this.next();
        }
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
}
