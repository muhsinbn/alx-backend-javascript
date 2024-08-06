export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];

  // Flatten the employees into a single array
  for (const department of Object.values(allEmployees)) {
    employees.push(...department);
  }

  // Return an iterator
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employees.length) {
            const result = { value: employees[index], done: false };
            index += 1;
            return result;
          }
          return { done: true };
        },
      };
    },
  };
}
