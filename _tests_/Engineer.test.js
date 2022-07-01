const Engineer = require("../lib/Engineer");

describe("testing Engineer class", () => {
  test("should test for Engineer class", () => {
    const name = "Jerry";
    const id = "1234";
    const email = "jerry@example.com";
    const github = "jerry@github.com";
    const data = {
      name,
      id,
      email,
      github,
    };
    const engineer = new Engineer(name, id, email, github);
    expect(engineer).toEqual(data);
  });

  test("should check if name is not provided", () => {
    const id = "1234";
    const email = "jerry@example.com";
    const github = "jerry@github.com";
    const engineer = new Engineer(undefined, id, email, github);
    expect(engineer.name).toBe(undefined);
  });

  test("should check if id is not provided", () => {
    const name = "Jerry";
    const id = "1234";
    const email = "jerry@example.com";
    const github = "jerry@github.com";
    const engineer = new Engineer(name, undefined, email, github);
    expect(engineer.id).toBe(undefined);
  });

  test("should check if email is not provided", () => {
    const name = "Jerry";
    const id = "1234";
    const github = "jerry@github.com";
    const engineer = new Engineer(name, id, undefined, github);
    expect(engineer.email).toBe(undefined);
  });

  test("should check if github username is not provided", () => {
    const name = "Jerry";
    const id = "1234";
    const email = "jerry@example.com";

    const engineer = new Engineer(name, id, email);
    expect(engineer.gitub).toBe(undefined);
  });
});
