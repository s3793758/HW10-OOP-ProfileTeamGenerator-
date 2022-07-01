const Manager = require("../lib/Manager");

describe("testing Manager class", () => {
  test("should test for Manager class", () => {
    const name = "Jerry";
    const id = "1234";
    const email = "jerry@example.com";
    const officeNumber = "A-101";
    const data = {
      name,
      id,
      email,
      officeNumber,
    };
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager).toEqual(data);
  });

  test("should check if name is not provided", () => {
    const id = "1234";
    const email = "jerry@example.com";
    const officeNumber = "A-101";
    const manager = new Manager(undefined, id, email, officeNumber);
    expect(manager.name).toBe(undefined);
  });

  test("should check if id is not provided", () => {
    const name = "Jerry";
    const email = "jerry@example.com";
    const officeNumber = "A-101";
    const manager = new Manager(name, undefined, email, officeNumber);
    expect(manager.id).toBe(undefined);
  });

  test("should check if email is not provided", () => {
    const name = "Jerry";
    const id = "1234";
    const officeNumber = "A-101";
    const manager = new Manager(name, id, undefined, officeNumber);
    expect(manager.email).toBe(undefined);
  });

  test("should check if officeNumber is not provided", () => {
    const name = "Jerry";
    const id = "1234";
    const email = "jerry@example.com";

    const manager = new Manager(name, id, email);
    expect(manager.officeNumber).toBe(undefined);
  });
});
