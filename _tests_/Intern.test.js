const Intern = require("../lib/Intern");

describe("testing Intern class", () => {
  test("should test for Intern class", () => {
    const name = "Jerry";
    const id = "1234";
    const email = "jerry@example.com";
    const school = "Public School";
    const data = {
      name,
      id,
      email,
      school,
    };
    const intern = new Intern(name, id, email, school);
    expect(intern).toEqual(data);
  });

  test("should check if name is not provided", () => {
    const id = "1234";
    const email = "jerry@example.com";
    const school = "Public School";
    const intern = new Intern(undefined, id, email, school);
    expect(intern.name).toBe(undefined);
  });

  test("should check if id is not provided", () => {
    const name = "Jerry";
    const email = "jerry@example.com";
    const school = "Public School";
    const intern = new Intern(name, undefined, email, school);
    expect(intern.id).toBe(undefined);
  });

  test("should check if email is not provided", () => {
    const name = "Jerry";
    const id = "1234";
    const school = "Public School";
    const intern = new Intern(name, id, undefined, school);
    expect(intern.email).toBe(undefined);
  });

  test("should check if school is not provided", () => {
    const name = "Jerry";
    const id = "1234";
    const email = "jerry@example.com";

    const intern = new Intern(name, id, email);
    expect(intern.school).toBe(undefined);
  });
});
