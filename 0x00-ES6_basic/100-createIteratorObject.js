export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).reduce((acc, cur) => {
    acc.push(...cur);
    return acc;
  }, []);
}
