const Employee = require("../lib/Employee");

describe("testing Employee class", () => {
  test("should test for Employee class with valid data", () => {
    const name = "Jerry";
    const id = "1234";
    const email = "jerry@example.com";
    const data = {
      name,
      id,
      email,
    };
    const employee = new Employee(name, id, email);
    expect(employee).toEqual(data);
  });

  test("should check if name is not provided", () => {
    const id = "1234";
    const email = "jerry@example.com";
    const employee = new Employee(undefined, id, email);
    expect(employee.name).toBe(undefined);
  });

  test("should check if email is not provided", () => {
    const name = "Jerry";
    const id = "1234";
    const employee = new Employee(name, id);
    expect(employee.email).toBe(undefined);
  });

  test("should check if id is not provided", () => {
    const name = "Jerry";
    const email = "jerry@example.com";
    const employee = new Employee(name, undefined, email);
    expect(employee.id).toBe(undefined);
  });
});
