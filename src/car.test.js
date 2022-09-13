const Car = require("./car");

describe("validate a car certificate", () => {
  it("accept a pending car registration with uploaded cert", () => {
    const car = new Car("123456789");
    car.uploadCertificate();
    car.accepted();
    expect(car.getStatus()).toEqual("ACCEPTED");
  });

  it("throw an error when ther is no uploaded cert", () => {
    const car = new Car("123456789");
    try {
      car.accepted();
      throw new Error();
    } catch (error) {
      expect(error.message).toEqual("Please upload a valid certificate.");
    }
    expect(car.getStatus()).toEqual("PENDING");
  });

  it("not accept a pending car registration with uploaded cert", () => {
    const car = new Car("123456789");
    car.uploadCertificate();
    car.notAccepted();
    expect(car.getStatus()).toEqual("NOT_ACCEPTED");
  });
});
